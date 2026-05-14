'use client'

import { useEffect } from 'react'
import { useBentoStore } from '@/lib/store'
import { useClientWorkspace } from '@/lib/workspace-client'

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { setProjects, setAgentStatus, setLastPollTime, addRecentChange } = useBentoStore()
  const workspace = useClientWorkspace()

  useEffect(() => {
    if (!workspace) return

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

    // Initial data load
    refreshData()

    // Set up polling interval
    const intervalId = setInterval(refreshData, 30000) // Poll every 30 seconds

    return () => clearInterval(intervalId)
  }, [workspace, setProjects, setAgentStatus, setLastPollTime, addRecentChange])

  return <>{children}</>
}