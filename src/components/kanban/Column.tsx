'use client'

import { useDroppable } from '@dnd-kit/core'
import type { KanbanPhase, KanbanTicket } from '@/lib/types'
import { TicketCard } from './TicketCard'
import { GripVertical } from 'lucide-react'

interface ColumnProps {
  phase: KanbanPhase
  config: { label: string; color: string; className: string }
  tickets: KanbanTicket[]
}

export function Column({ phase, config, tickets }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: phase,
    data: { phase },
  })

  const isBlocked = phase === 'blocked'
  const isDone = phase === 'cancelled'

  return (
    <div className="flex flex-col min-w-[290px] max-w-[330px] h-full">
      {/* Column Header */}
      <div className="flex items-center gap-2.5 mb-4 px-1 flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: config.color }}
        />
        <h2 className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
          {config.label}
        </h2>
        <span
          className="ml-auto text-[12px] font-semibold px-2 py-0.5 rounded-md"
          style={{
            backgroundColor: `${config.color}18`,
            color: config.color,
          }}
        >
          {tickets.length}
        </span>
      </div>

      {/* Drop Zone */}
      <div
        ref={setNodeRef}
        className="flex flex-col gap-2.5 flex-1 min-h-0 rounded-2xl p-2.5 transition-colors overflow-y-auto"
        style={{
          backgroundColor: isOver
            ? `${config.color}20`
            : isBlocked
            ? 'rgba(239, 68, 68, 0.05)'
            : `${config.color}08`,
          border: isBlocked
            ? '2px dashed rgba(239, 68, 68, 0.3)'
            : isOver
            ? `2px dashed ${config.color}`
            : '2px solid transparent',
        }}
      >
        {tickets.length === 0 ? (
          <div
            className="flex-1 flex items-center justify-center text-[13px] py-8 rounded-xl"
            style={{
              color: 'var(--text-muted)',
              border: isBlocked ? '2px dashed rgba(239, 68, 68, 0.2)' : undefined,
            }}
          >
            {isBlocked
              ? 'Drop here to block'
              : isDone
              ? 'Completed tickets'
              : 'Nothing here'}
          </div>
        ) : (
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  )
}
