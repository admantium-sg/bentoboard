'use client'

import { useMemo, Suspense, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { Avatar } from '@/components/ui/Avatar'
import { PriorityBadge } from '@/components/ui/PriorityBadge'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { formatRelativeTime, DEFAULT_PROJECTS } from '@/lib/utils'
import type { Item, ItemStatus } from '@/lib/types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, useDraggable, useDroppable, closestCenter } from '@dnd-kit/core'
import { GripVertical, Trash2 } from 'lucide-react'

const COLUMNS: { status: ItemStatus; label: string; color: string }[] = [
  { status: 'proposed',  label: 'Proposed',    color: '#3B82F6' },
  { status: 'approved',  label: 'Approved',    color: '#10B981' },
  { status: 'in_review', label: 'In progress', color: '#F59E0B' },
  { status: 'done',      label: 'Done',        color: '#94A3B8' },
]

const REJECTED_COLUMN: { status: ItemStatus; label: string; color: string } = {
  status: 'rejected',
  label: 'Rejected',
  color: '#EF4444',
}

interface DraggableIdeaCardProps {
  item: Item
}

function DraggableIdeaCard({ item }: DraggableIdeaCardProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: item,
  })

  return (
    <div ref={setNodeRef} className="glass-card p-4 flex gap-2" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="flex-1">
        <Link href={`/items/${item.id}`} className="block">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[14px] font-semibold leading-snug flex-1" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </h3>
            <Avatar author={item.created_by} size="sm" />
          </div>

          {item.description && (
            <p className="text-[13px] line-clamp-2 leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              {item.description}
            </p>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            <ProjectTag slug={item.project} size="sm" />
            <PriorityBadge priority={item.priority} />
            <span className="text-[12px] ml-auto" style={{ color: 'var(--text-muted)' }}>
              {formatRelativeTime(item.updated_at)}
            </span>
          </div>
        </Link>
      </div>
      <div
        {...attributes}
        {...listeners}
        className="flex items-start pt-1 cursor-grab active:cursor-grabbing text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        title="Drag to move"
      >
        <GripVertical size={16} />
      </div>
    </div>
  )
}

function DroppableColumn({ status, label, color, items, isRejected }: (typeof COLUMNS)[0] & { items: Item[]; isRejected?: boolean }) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
    data: { status },
  })

  return (
    <div className="flex flex-col min-w-[290px] max-w-[330px] flex-1">
      <div className="flex items-center gap-2.5 mb-4 px-1">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <h2 className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>{label}</h2>
        <span className="ml-auto text-[12px] font-semibold px-2 py-0.5 rounded-md"
          style={{ backgroundColor: color + '18', color }}>
          {items.length}
        </span>
      </div>

      <div
        ref={setNodeRef}
        className="flex flex-col gap-2.5 flex-1 min-h-[200px] rounded-2xl p-2.5 transition-colors"
        style={{
          backgroundColor: isOver ? color + '20' : color + '08',
        }}
      >
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[13px] py-8" style={{ color: 'var(--text-muted)' }}>
            {isRejected ? 'Drop here to reject' : 'Nothing here'}
          </div>
        ) : (
          items.map((item) => <DraggableIdeaCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}

function RejectedDropZone({ items }: { items: Item[] }) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'rejected',
    data: { status: 'rejected' },
  })

  return (
    <div className="flex flex-col min-w-[290px] max-w-[330px] flex-1">
      <div className="flex items-center gap-2.5 mb-4 px-1">
        <Trash2 size={14} className="text-red-500" />
        <h2 className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>Rejected</h2>
        <span className="ml-auto text-[12px] font-semibold px-2 py-0.5 rounded-md bg-red-500/18" style={{ color: '#EF4444' }}>
          {items.length}
        </span>
      </div>

      <div
        ref={setNodeRef}
        className="flex flex-col gap-2.5 flex-1 min-h-[200px] rounded-2xl p-2.5 transition-colors border-2 border-dashed"
        style={{
          backgroundColor: isOver ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0.05)',
          borderColor: isOver ? '#EF4444' : 'rgba(239, 68, 68, 0.2)',
        }}
      >
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[13px] py-8" style={{ color: 'var(--text-muted)' }}>
            Drop here to reject
          </div>
        ) : (
          items.map((item) => <DraggableIdeaCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}

function IdeasContent() {
  const { items, upsertItem } = useBentoStore()
  const searchParams = useSearchParams()
  const projectFilter = searchParams.get('project')
  const [activeItem, setActiveItem] = useState<Item | null>(null)

  const ideas = useMemo(
    () => items
      .filter((i) => i.type === 'idea')
      .filter((i) => !projectFilter || i.project === projectFilter)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()),
    [items, projectFilter]
  )

  const byStatus = useMemo(() => {
    const map: Record<ItemStatus, Item[]> = { proposed: [], approved: [], in_review: [], done: [], rejected: [] }
    for (const idea of ideas) {
      if (idea.status in map) map[idea.status].push(idea)
    }
    return map
  }, [ideas])

  const project = projectFilter ? DEFAULT_PROJECTS.find((p) => p.slug === projectFilter) : null

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveItem(null)

    if (!over) return

    const item = active.data.current as Item
    const newStatus = over.data.current?.status as ItemStatus

    if (!item || !newStatus || item.status === newStatus) return

    const { getSupabase } = await import('@/lib/supabase')
    const client = getSupabase()
    const { data } = await client
      .from('items')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', item.id)
      .select()
      .single()

    if (data) {
      upsertItem(data as Item)
    }
  }

  function handleDragStart(event: DragStartEvent) {
    const item = event.active.data.current as Item
    setActiveItem(item)
  }

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={project ? `${project.name} — Ideas` : 'Ideas'}
        description="Kanban board for ideas between you and Bento"
      />

      {ideas.length === 0 ? (
        <EmptyState title="No ideas yet" description="Ideas proposed by you or Bento will appear here." />
      ) : (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-5 min-w-max">
              {COLUMNS.map((col) => (
                <DroppableColumn key={col.status} {...col} items={byStatus[col.status] || []} />
              ))}
              <RejectedDropZone items={byStatus.rejected || []} />
            </div>
          </div>
          <DragOverlay>
            {activeItem ? (
              <div className="glass-card p-4 cursor-grabbing opacity-90" style={{ transform: 'rotate(3deg)' }}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-[14px] font-semibold leading-snug flex-1" style={{ color: 'var(--text-primary)' }}>
                    {activeItem.title}
                  </h3>
                  <Avatar author={activeItem.created_by} size="sm" />
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  )
}

export default function IdeasPage() {
  return (
    <Suspense fallback={<div className="text-[14px] p-8" style={{ color: 'var(--text-muted)' }}>Loading...</div>}>
      <IdeasContent />
    </Suspense>
  )
}
