'use client'

import { useDraggable } from '@dnd-kit/core'
import Link from 'next/link'
import type { KanbanTicket } from '@/lib/types'
import { GripVertical } from 'lucide-react'

interface TicketCardProps {
  ticket: KanbanTicket
}

export function TicketCard({ ticket }: TicketCardProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: ticket.id,
    data: ticket,
  })

  const isBlocked = ticket.phase === 'blocked'
  const isCancelled = ticket.phase === 'cancelled'
  const hasSymbol = ticket.symbol && ['⏳', '❌'].includes(ticket.symbol)

  // Calculate task completion
  const totalTasks = ticket.tasks?.length || 0
  const completedTasks = ticket.tasks?.filter((t) => t.checked).length || 0
  const completionPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  // Calculate acceptance criteria completion
  const totalAC = ticket.acceptanceCriteria?.length || 0
  const completedAC = ticket.acceptanceCriteria?.filter((ac) => ac.startsWith('[x]') || ac.startsWith('[X]')).length || 0
  const acCompletionPercent = totalAC > 0 ? (completedAC / totalAC) * 100 : 0

  // Get current phase from history if available
  const currentPhase = ticket.phaseHistory?.[ticket.phaseHistory.length - 1]?.phase || ticket.phase

  return (
    <div
      ref={setNodeRef}
      className="glass-card p-4 flex gap-2 transition-all"
      style={{
        opacity: isDragging ? 0.5 : 1,
        borderLeft: isBlocked
          ? '3px solid var(--danger)'
          : isCancelled
          ? '3px solid var(--text-muted)'
          : undefined,
      }}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="flex items-start pt-0.5 cursor-grab active:cursor-grabbing text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        title="Drag to move"
      >
        <GripVertical size={16} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Link href={`/projects/${ticket.project}/ticket/${ticket.id}`} className="block">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[11px] font-mono font-semibold"
                style={{ color: 'var(--text-muted)' }}
              >
                {ticket.id}
              </span>
              {hasSymbol && (
                <span
                  className="text-[14px]"
                  title={ticket.symbol === '⏳' ? 'Blocked' : 'Error'}
                >
                  {ticket.symbol}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-[14px] font-semibold leading-snug flex-1 mb-2"
            style={{
              color: 'var(--text-primary)',
              textDecoration: isCancelled ? 'line-through' : undefined,
              opacity: isCancelled ? 0.6 : 1,
            }}
          >
            {ticket.title}
          </h3>

          {/* Description */}
          {ticket.description && (
            <p
              className="text-[13px] line-clamp-4 leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)', opacity: isCancelled ? 0.6 : 1 }}
            >
              {ticket.description}
            </p>
          )}

          {/* Tasks List */}
          {totalTasks > 0 && (
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                  Tasks
                </span>
                <span
                  className="text-[11px] font-medium"
                  style={{
                    color:
                      completionPercent === 100
                        ? 'var(--success)'
                        : completionPercent >= 50
                        ? 'var(--warning)'
                        : 'var(--text-muted)',
                  }}
                >
                  {completedTasks}/{totalTasks}
                </span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'var(--progress-track)' }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${completionPercent}%`,
                    background:
                      completionPercent === 100
                        ? 'var(--success)'
                        : completionPercent >= 50
                        ? 'var(--warning)'
                        : 'var(--accent)',
                  }}
                />
              </div>
              <div className="space-y-1">
                {ticket.tasks.slice(0, 5).map((task, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: task.checked ? 'var(--success)' : 'var(--text-muted)' }}>
                      {task.checked ? '✓' : '○'}
                    </span>
                    <span className={task.checked ? 'line-through' : ''}>{task.text}</span>
                  </div>
                ))}
                {totalTasks > 5 && (
                  <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    +{totalTasks - 5} more tasks
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Acceptance Criteria */}
          {totalAC > 0 && (
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
                  Acceptance Criteria
                </span>
                <span
                  className="text-[11px] font-medium"
                  style={{
                    color:
                      acCompletionPercent === 100
                        ? 'var(--success)'
                        : acCompletionPercent >= 50
                        ? 'var(--warning)'
                        : 'var(--text-muted)',
                  }}
                >
                  {completedAC}/{totalAC}
                </span>
              </div>
              <div className="h-1 rounded-full overflow-hidden mb-2" style={{ background: 'var(--progress-track)' }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${acCompletionPercent}%`,
                    background:
                      acCompletionPercent === 100
                        ? 'var(--success)'
                        : acCompletionPercent >= 50
                        ? 'var(--warning)'
                        : 'var(--accent)',
                  }}
                />
              </div>
              <div className="space-y-1">
                {ticket.acceptanceCriteria.slice(0, 3).map((ac, idx) => {
                  const isChecked = ac.startsWith('[x]') || ac.startsWith('[X]')
                  const text = ac.replace(/^-\s*\[[ xX]\]\s*/, '').trim()
                  return (
                    <div key={idx} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: isChecked ? 'var(--success)' : 'var(--text-muted)' }}>
                        {isChecked ? '✓' : '○'}
                      </span>
                      <span className={isChecked ? 'line-through' : ''}>{text}</span>
                    </div>
                  )
                })}
                {totalAC > 3 && (
                  <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    +{totalAC - 3} more criteria
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Questions */}
          {ticket.questions && ticket.questions.length > 0 && (
            <div className="mb-3">
              <span className="text-[11px] font-medium mb-1 block" style={{ color: 'var(--text-muted)' }}>
                Questions ({ticket.questions.length})
              </span>
              <div className="space-y-1">
                {ticket.questions.slice(0, 3).map((q, idx) => (
                  <div key={idx} className="text-[12px] flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <span>?</span>
                    <span>{q}</span>
                  </div>
                ))}
                {ticket.questions.length > 3 && (
                  <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    +{ticket.questions.length - 3} more questions
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Phase History */}
          {ticket.phaseHistory && ticket.phaseHistory.length > 0 && (
            <div className="mb-3">
              <span className="text-[11px] font-medium mb-1 block" style={{ color: 'var(--text-muted)' }}>
                Phase History
              </span>
              <div className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                {ticket.phaseHistory.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="font-medium">{h.phase}</span>
                    <span>→</span>
                    <span>{h.date}</span>
                    {h.notes && <span className="text-[10px] opacity-70">({h.notes})</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-2 flex-wrap">
            {ticket.priority && ticket.priority !== 'normal' && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                style={{
                  background:
                    ticket.priority === 'urgent'
                      ? 'var(--danger)'
                      : 'var(--warning)',
                  color: 'white',
                }}
              >
                {ticket.priority.toUpperCase()}
              </span>
            )}
            <span className="text-[12px] ml-auto" style={{ color: 'var(--text-muted)' }}>
              {new Date(ticket.modifiedAt).toLocaleDateString()}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
