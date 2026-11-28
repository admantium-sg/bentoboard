'use client'

import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'

export function DataProvider({ children }: { children: React.ReactNode }) {
  const setProjects = useBentoStore((s) => s.setProjects)
  const setAgentStatus = useBentoStore((s) => s.setAgentStatus)
  const setLastPollTime = useBentoStore((s) => s.setLastPollTime)
  const [workspace, setWorkspace] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadWorkspace() {
      try {
        const res = await fetch('/api/fs/browse?path=', { signal: controller.signal })
        if (!res.ok) return
        const data = await res.json()
        if (!controller.signal.aborted) {
          setWorkspace(data.basePath || '')
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('[DataProvider] Failed to load workspace:', error)
        }
      }
    }

    loadWorkspace()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!workspace) return

    let active = new AbortController()

    async function refreshData() {
      active.abort()
      const controller = new AbortController()
      active = controller

      try {
        const [projectsRes, statusRes] = await Promise.all([
          fetch('/api/kanban/projects', { signal: controller.signal }),
          fetch('/api/status', { signal: controller.signal }),
        ])
        if (controller.signal.aborted) return

        if (projectsRes.ok) {
          const data = await projectsRes.json()
          if (controller.signal.aborted) return
          setProjects(data.projects || [])
        }

        if (statusRes.ok) {
          const data = await statusRes.json()
          if (controller.signal.aborted) return
          setAgentStatus(data.statuses || [])
        }

        setLastPollTime(new Date().toISOString())
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('[DataProvider] Failed to refresh data:', error)
        }
      }
    }

    refreshData()
    const intervalId = setInterval(refreshData, 30000)

    return () => {
      clearInterval(intervalId)
      active.abort()
    }
  }, [workspace, setProjects, setAgentStatus, setLastPollTime])

  return <>{children}</>
}
