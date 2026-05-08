'use client'

import { useMemo, useState, useEffect } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { formatRelativeTime } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight, FolderOpen, Layers, Activity } from 'lucide-react'

export default function ProjectsPage() {
  const { projects, agentStatus, selectedProject, setSelectedProject } = useBentoStore()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/kanban/projects')
        if (!res.ok) throw new Error('Failed to fetch projects')
        const data = await res.json()
        const projectList = data.projects || []
        const enriched = await Promise.all(projectList.map(async (p: Record<string, unknown>) => {
          // Fetch stats for each project
          const statsRes = await fetch(`/api/kanban/stats?project=${p.slug}`)
          const statsData = statsRes.ok ? await statsRes.json() : null
          return {
            ...p,
            ticketCounts: statsData?.byPhase || {},
            totalTickets: statsData?.total || 0,
            hasActiveSession: false, // TODO: Fetch from sessions API
          }
        }))
        useBentoStore.getState().setProjects(enriched)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const totalTickets = useMemo(() => {
    return projects.reduce((sum, p) => sum + (p.totalTickets || 0), 0)
  }, [projects])

  const activeProjects = projects.filter(p => p.ticketCounts && Object.values(p.ticketCounts || {}).some(count => count > 0))

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Projects" description="Kanban boards for your work" />
        <div className="glass-card p-12 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)]"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading projects...</p>
        </div>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Projects" description="Kanban boards for your work" />
        <div className="glass-card p-12 text-center">
          <FolderOpen size={48} className="mx-auto mb-4" style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No projects found</h3>
          <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
            Projects are managed by AI agents in the shared-workspace directory.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Projects"
        description={`${totalTickets} tickets across ${projects.length} projects`}
        actions={
          <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{activeProjects.length}</span>
            {' active'}
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const ticketCount = project.totalTickets || 0
          const inProgress = (project.ticketCounts?.['in-progress'] || 0)
          const blocked = (project.ticketCounts?.['blocked'] || 0)
          const done = (project.ticketCounts?.['done'] || 0)

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={() => setSelectedProject(project.slug)}
              className="group"
            >
              <div
                className={`
                  glass-card p-5 transition-all duration-200
                  ${selectedProject === project.slug ? 'border-2 border-[var(--accent)]' : 'border border-[var(--border)]'}
                `}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    >
                      <span className="text-lg">📋</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                        {project.name}
                      </h3>
                      <p className="text-[12px] font-mono truncate" style={{ color: 'var(--text-muted)' }}>
                        {project.slug}
                      </p>
                    </div>
                  </div>
                  {project.hasActiveSession && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'var(--success)', border: '1px solid var(--success)' }}>
                      <Activity size={14} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                  <span>{ticketCount} tickets</span>
                  <span>•</span>
                  {inProgress > 0 && (
                    <span className="flex items-center gap-1" style={{ color: 'var(--warning)' }}>
                      <span>{inProgress} in progress</span>
                    </span>
                  )}
                  {blocked > 0 && (
                    <span className="flex items-center gap-1" style={{ color: 'var(--danger)' }}>
                      <span>{blocked} blocked</span>
                    </span>
                  )}
                  {done > 0 && (
                    <span style={{ color: 'var(--success)' }}>
                      {done} done
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid var(--divider)' }}>
                  <div className="flex flex-wrap gap-2">
                    {project.ticketCounts && Object.entries(project.ticketCounts).map(([phase, count]) => {
                      const isHigh = count > 10
                      return (
                        <span
                          key={phase}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium"
                          style={{
                            background: isHigh ? 'var(--accent-muted)' : 'transparent',
                            color: isHigh ? 'var(--accent-text)' : 'var(--text-muted)',
                          }}
                        >
                          {count} {phase}
                        </span>
                      )
                    })}
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-muted)' }} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
