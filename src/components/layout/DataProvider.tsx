'use client'

import { useEffect } from 'react'
import { useBentoStore } from '@/lib/store'
import { getFileWatcher } from '@/lib/fileWatcher'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { setProjects, setAgentStatus, setLastPollTime, addRecentChange } = useBentoStore()

  useEffect(() => {
    let cleanup: (() => void) | null = null

    async function init() {
      console.log('[DataProvider] Initializing with workspace:', DEFAULT_WORKSPACE)

      // Initial data load
      try {
        // Load projects
        const projectsRes = await fetch('/api/kanban/projects')
        if (projectsRes.ok) {
          const data = await projectsRes.json()
          setProjects(data.projects || [])
        }

        // Load agent statuses
        const statusRes = await fetch('/api/status')
        if (statusRes.ok) {
          const data = await statusRes.json()
          setAgentStatus(data.statuses || [])
        }
      } catch (error) {
        console.error('[DataProvider] Failed to load initial data:', error)
      }

      // Start file watcher
      const watcher = getFileWatcher(DEFAULT_WORKSPACE)
      cleanup = watcher.start((changes) => {
        console.log('[DataProvider] File changes detected:', changes.length)

        for (const change of changes) {
          addRecentChange({
            path: change.path,
            type: change.type,
            timestamp: change.modifiedAt,
          })
        }

        // Refresh data on changes
        refreshData()
      })

      setLastPollTime(new Date().toISOString())

      console.log('[DataProvider] Initialization complete')
    }

    async function refreshData() {
      try {
        // Refresh projects
        const projectsRes = await fetch('/api/kanban/projects')
        if (projectsRes.ok) {
          const data = await projectsRes.json()
          setProjects(data.projects || [])
        }

        // Refresh agent statuses
        const statusRes = await fetch('/api/status')
        if (statusRes.ok) {
          const data = await statusRes.json()
          setAgentStatus(data.statuses || [])
        }

        setLastPollTime(new Date().toISOString())
      } catch (error) {
        console.error('[DataProvider] Failed to refresh data:', error)
      }
    }

    init()

    // Cleanup on unmount
    return () => {
      if (cleanup) {
        cleanup()
      }
      getFileWatcher().stop()
    }
  }, [setProjects, setAgentStatus, setLastPollTime, addRecentChange])

  return <>{children}</>
}
