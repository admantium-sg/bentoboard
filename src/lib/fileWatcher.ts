import { getWorkspacePath } from '@/lib/workspace'
import 'server-only'
/**
 * File watcher utility for monitoring file changes in the workspace
 * Uses polling with mtime comparison as a fallback for chokidar
 */

import { useBentoStore } from './store'

interface ChangedFile {
  path: string
  type: 'add' | 'change' | 'delete'
  modifiedAt: string
}

interface WatcherConfig {
  pollInterval?: number
  gracePeriod?: number
  workspace: string
}

class FileWatcher {
  private pollInterval: number = 5000 // 5 seconds
  private gracePeriod: number = 5000 // 5 seconds for rapid changes
  private workspace: string
  private lastCheckTime: string
  private intervalId: NodeJS.Timeout | null = null
  private pendingChanges: Map<string, number> = new Map() // path -> timestamp
  private callbacks: Set<(changes: ChangedFile[]) => void> = new Set()
  private fileCache: Map<string, { mtime: number; hash: string }> = new Map()

  constructor(config: WatcherConfig) {
    this.workspace = config.workspace
    this.pollInterval = config.pollInterval || 5000
    this.gracePeriod = config.gracePeriod || 5000
    this.lastCheckTime = new Date().toISOString()
  }

  /**
   * Start watching for file changes
   */
  start(callback: (changes: ChangedFile[]) => void): () => void {
    this.callbacks.add(callback)

    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.poll(), this.pollInterval)
      console.log('[FileWatcher] Started polling with interval:', this.pollInterval)
    }

    // Return cleanup function
    return () => {
      this.callbacks.delete(callback)
      if (this.callbacks.size === 0 && this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
        console.log('[FileWatcher] Stopped polling')
      }
    }
  }

  /**
   * Stop watching for file changes
   */
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
      console.log('[FileWatcher] Stopped')
    }
    this.callbacks.clear()
    this.pendingChanges.clear()
    this.fileCache.clear()
  }

  /**
   * Check for file changes via API
   */
  private async poll(): Promise<void> {
    try {
      const since = this.lastCheckTime
      const res = await fetch(`/api/fs/watch?since=${encodeURIComponent(since)}`)

      if (!res.ok) {
        console.error('[FileWatcher] Poll failed:', res.status)
        return
      }

      const data = await res.json()
      const changedPaths: string[] = data.changed || []

      if (changedPaths.length === 0) {
        return
      }

      // Filter out changes within grace period
      const now = Date.now()
      const validChanges: ChangedFile[] = []

      for (const path of changedPaths) {
        const pendingTime = this.pendingChanges.get(path)

        if (pendingTime && now - pendingTime < this.gracePeriod) {
          // Skip this change, but don't clear pending
          console.log('[FileWatcher] Skipping change within grace period:', path)
          continue
        }

        // Clear pending and record valid change
        this.pendingChanges.delete(path)
        validChanges.push({
          path,
          type: 'change',
          modifiedAt: new Date().toISOString(),
        })
      }

      if (validChanges.length > 0) {
        console.log('[FileWatcher] Detected changes:', validChanges.length)
        this.callbacks.forEach((cb) => cb(validChanges))
      }

      this.lastCheckTime = new Date().toISOString()
    } catch (error) {
      console.error('[FileWatcher] Poll error:', error)
    }
  }

  /**
   * Manually trigger a check for changes
   */
  async checkNow(): Promise<ChangedFile[]> {
    this.lastCheckTime = new Date(0).toISOString() // Force check all
    await this.poll()
    this.lastCheckTime = new Date().toISOString()
    return []
  }

  /**
   * Record a pending change (for debouncing rapid changes)
   */
  recordPendingChange(path: string): void {
    this.pendingChanges.set(path, Date.now())
  }

  /**
   * Get current state
   */
  getLastCheckTime(): string {
    return this.lastCheckTime
  }
}

// Singleton instance
let watcherInstance: FileWatcher | null = null

/**
 * Get or create the file watcher instance
 */
export function getFileWatcher(workspace?: string): FileWatcher {
  if (!watcherInstance) {
    const ws = workspace || getWorkspacePath()
    watcherInstance = new FileWatcher({
      workspace: ws,
      pollInterval: 5000,
      gracePeriod: 5000,
    })
  }
  return watcherInstance
}

/**
 * Hook to use file watcher in components
 */
export function useFileWatcher(callback: (changes: ChangedFile[]) => void): {
  startWatching: () => void
  stopWatching: () => void
} {
  let cleanup: (() => void) | null = null

  return {
    startWatching: () => {
      if (cleanup) cleanup()
      cleanup = getFileWatcher().start(callback)
    },
    stopWatching: () => {
      if (cleanup) {
        cleanup()
        cleanup = null
      }
    },
  }
}

export type { ChangedFile }
