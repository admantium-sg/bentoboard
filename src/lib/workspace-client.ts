/**
 * Client-side workspace path utilities
 */

'use client'

import { useState, useEffect } from 'react'

const ENV_VAR = 'NEXT_PUBLIC_BENTOBOARD_WORKSPACE_FOLDER'

/**
 * Get workspace path from environment variable (client-side)
 */
export function getClientWorkspacePath(): string {
  if (typeof window !== 'undefined') {
    return process.env[ENV_VAR] || localStorage.getItem('workspacePath') || ''
  }
  return process.env[ENV_VAR] || ''
}

/**
 * Check if workspace path is configured
 */
export function hasWorkspacePath(): boolean {
  return getClientWorkspacePath().length > 0
}

/**
 * Hook to get workspace path on client side
 */
export function useClientWorkspace(): string {
  const [workspace, setWorkspace] = useState<string>('')

  useEffect(() => {
    // Listen for workspace path changes
    const stored = localStorage.getItem('workspacePath')
    if (stored) {
      setTimeout(() => setWorkspace(stored), 0)
    } else {
      const envPath = process.env[ENV_VAR]
      if (envPath) {
        setTimeout(() => setWorkspace(envPath), 0)
      }
    }

    // Listen for storage events (in case workspace changes in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'workspacePath') {
        setWorkspace(e.newValue || '')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return workspace
}