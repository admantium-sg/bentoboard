'use client'

import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import type { KanbanTicket, KanbanPhase } from '@/lib/types'
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, closestCenter } from '@dnd-kit/core'
import { Column } from './Column'
import { TicketCard } from './TicketCard'

const PHASES: KanbanPhase[] = [
  'backlog',
  'to-do',
  'in-progress',
  'in-review',
  'pull-request',
  'blocked',
  'cancelled',
  'done',
]

const PHASE_CONFIG: Record<KanbanPhase, { label: string; color: string; className: string }> = {
  backlog: { label: 'Backlog', color: '#60A5FA', className: 'bg-blue-500' },
  'to-do': { label: 'To Do', color: '#A78BFA', className: 'bg-purple-500' },
  'in-progress': { label: 'In Progress', color: '#F59E0B', className: 'bg-amber-500' },
  'in-review': { label: 'In Review', color: '#EC4899', className: 'bg-pink-500' },
  'pull-request': { label: 'Pull Request', color: '#8B5CF6', className: 'bg-violet-500' },
  blocked: { label: 'Blocked', color: '#EF4444', className: 'bg-red-500' },
  cancelled: { label: 'Cancelled', color: '#6B7280', className: 'bg-gray-500' },
  done: { label: 'Done', color: '#10B981', className: 'bg-emerald-500' },
}

interface BoardProps {
  project: string
  refreshKey?: number
}

export function Board({ project, refreshKey = 0 }: BoardProps) {
  const { tickets, setTickets, upsertTicket, moveTicketPhase } = useBentoStore()
  const [activeTicket, setActiveTicket] = useState<KanbanTicket | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchTickets() {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/kanban/tickets?project=${project}`)
        if (!res.ok) throw new Error('Failed to fetch tickets')
        const data = await res.json()
        const ticketMap: Record<string, KanbanTicket> = {}
        ;(data.tickets || []).forEach((t: KanbanTicket) => {
          ticketMap[t.id] = t
        })
        setTickets(ticketMap)
      } catch (error) {
        console.error('Failed to fetch tickets:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTickets()
  }, [project, setTickets, refreshKey])

  // Group tickets by phase
  const ticketsByPhase = PHASES.reduce((acc, phase) => {
    acc[phase] = Object.values(tickets).filter((t) => t.project === project && t.phase === phase)
    return acc
  }, {} as Record<KanbanPhase, KanbanTicket[]>)

  function handleDragStart(event: DragStartEvent) {
    const ticket = event.active.data.current as KanbanTicket
    setActiveTicket(ticket)
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveTicket(null)

    if (!over) return

    const ticket = active.data.current as KanbanTicket
    const newPhase = over.data.current?.phase as KanbanPhase

    if (!ticket || !newPhase || ticket.phase === newPhase) return

    // Update phase
    try {
      await moveTicketPhase(ticket.id, newPhase)

      // Also update via API
      const res = await fetch(`/api/kanban/ticket/${ticket.id}/phase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phase: newPhase }),
      })

      if (!res.ok) {
        console.error('Failed to update ticket phase via API')
      }
    } catch (error) {
      console.error('Failed to move ticket:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)]" />
      </div>
    )
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="overflow-x-auto -mx-4 px-4 pb-4" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="flex gap-5 min-w-max h-full">
          {PHASES.map((phase) => (
            <Column
              key={phase}
              phase={phase}
              config={PHASE_CONFIG[phase]}
              tickets={ticketsByPhase[phase] || []}
            />
          ))}
        </div>
      </div>

      <DragOverlay>
        {activeTicket ? (
          <div
            className="glass-card p-4 opacity-90 cursor-grabbing"
            style={{ transform: 'rotate(3deg)', minWidth: 280 }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-[14px] font-semibold leading-snug flex-1" style={{ color: 'var(--text-primary)' }}>
                {activeTicket.title}
              </h3>
              <span className="text-[12px] font-mono" style={{ color: 'var(--text-muted)' }}>
                {activeTicket.id}
              </span>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
