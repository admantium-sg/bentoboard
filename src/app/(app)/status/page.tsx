'use client'

import { useEffect, useState, useMemo } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { Activity } from 'lucide-react'

export default function StatusPage() {
  const { agentStatus, setAgentStatus } = useBentoStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStatus() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/status')
        if (!res.ok) throw new Error('Failed to fetch status')
        const data = await res.json()
        setAgentStatus(data.statuses || [])
      } catch (error) {
        console.error('Failed to fetch status:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatus()
  }, [setAgentStatus])

  const activeAgents = useMemo(() => {
    return agentStatus.filter((s) => s.state !== 'idle' && s.state !== 'completed')
  }, [agentStatus])

  const getStatusColor = (state: string) => {
    switch (state) {
      case 'active':
      case 'working':
      case 'transitioning':
        return 'var(--success)'
      case 'blocked':
        return 'var(--danger)'
      case 'error':
        return 'var(--danger)'
      default:
        return 'var(--warning)'
    }
  }

  const getStatusLabel = (state: string) => {
    switch (state) {
      case 'active':
      case 'working':
        return 'Active'
      case 'transitioning':
        return 'Transitioning'
      case 'blocked':
        return 'Blocked'
      case 'error':
        return 'Error'
      case 'idle':
        return 'Idle'
      case 'completed':
        return 'Completed'
      default:
        return state
    }
  }

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Status" description="Agent activity monitoring" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading status...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Status"
        description="Agent activity monitoring"
        actions={
          <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              {activeAgents.length}
            </span>
            {' active agents'}
          </div>
        }
      />

      {agentStatus.length === 0 ? (
        <EmptyState
          title="No agents"
          description="Agent statuses from the status/ directory will appear here."
        />
      ) : (
        <div className="space-y-4">
          {agentStatus.map((agent) => {
            const isActive = !['idle', 'completed'].includes(agent.state)

            return (
              <div
                key={agent.agent}
                className="glass-card p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{
                        background: getStatusColor(agent.state),
                        animation: isActive ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : undefined,
                      }}
                    />
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {agent.agent}
                      </h3>
                      {agent.currentTask && (
                        <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
                          {agent.currentTask}
                        </p>
                      )}
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-medium px-2 py-1 rounded-md"
                    style={{
                      background: `${getStatusColor(agent.state)}20`,
                      color: getStatusColor(agent.state),
                    }}
                  >
                    {getStatusLabel(agent.state)}
                  </span>
                </div>

                {agent.progress && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>Progress</span>
                      <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                        {agent.progress}
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--progress-track)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(100, parseInt(agent.progress.replace('%', '') || '0'))}%`,
                          background: getStatusColor(agent.state),
                        }}
                      />
                    </div>
                  </div>
                )}

                {agent.blockers && agent.blockers.length > 0 && (
                  <div>
                    <span className="text-[12px] font-medium block mb-2" style={{ color: 'var(--danger)' }}>
                      Blockers
                    </span>
                    <div className="space-y-1">
                      {agent.blockers.map((blocker, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                          style={{ background: 'rgba(239, 68, 68, 0.10)' }}
                        >
                          <Activity size={14} strokeWidth={1.5} style={{ color: 'var(--danger)' }} />
                          <span className="text-[13px]" style={{ color: 'var(--text-primary)' }}>
                            {blocker}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--divider)' }}>
                  <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    Updated: {new Date(agent.updatedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
