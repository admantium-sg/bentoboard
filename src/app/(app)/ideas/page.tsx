'use client'

import { useMemo } from 'react'
import { useBentoStore } from '@/lib/store'
import { Avatar } from '@/components/ui/Avatar'
import { PriorityBadge } from '@/components/ui/PriorityBadge'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { formatRelativeTime } from '@/lib/utils'
import type { Item, ItemStatus } from '@/lib/types'
import Link from 'next/link'

const COLUMNS: { status: ItemStatus; label: string; color: string }[] = [
  { status: 'proposed',  label: 'Proposed',    color: '#3B82F6' },
  { status: 'approved',  label: 'Approved',    color: '#10B981' },
  { status: 'in_review', label: 'In progress', color: '#F59E0B' },
  { status: 'done',      label: 'Done',        color: '#94A3B8' },
]

function IdeaCard({ item }: { item: Item }) {
  return (
    <Link href={`/items/${item.id}`} className="block">
      <div className="glass-card p-4 cursor-pointer">
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
      </div>
    </Link>
  )
}

function KanbanColumn({ status, label, color, items }: (typeof COLUMNS)[0] & { items: Item[] }) {
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

      <div className="flex flex-col gap-2.5 flex-1 min-h-[200px] rounded-2xl p-2.5"
        style={{ backgroundColor: color + '08' }}>
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[13px] py-8" style={{ color: 'var(--text-muted)' }}>
            Nothing here
          </div>
        ) : (
          items.map((item) => <IdeaCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}

export default function IdeasPage() {
  const { items } = useBentoStore()
  const ideas = useMemo(() => items.filter((i) => i.type === 'idea'), [items])

  const byStatus = useMemo(() => {
    const map: Record<ItemStatus, Item[]> = { proposed: [], approved: [], in_review: [], done: [], rejected: [] }
    for (const idea of ideas) {
      if (idea.status in map) map[idea.status].push(idea)
    }
    return map
  }, [ideas])

  return (
    <div className="animate-fade-in">
      <PageHeader title="Ideas" description="Kanban board for ideas between you and Bento" />

      {ideas.length === 0 ? (
        <EmptyState title="No ideas yet" description="Ideas proposed by you or Bento will appear here." />
      ) : (
        <div className="overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex gap-5 min-w-max">
            {COLUMNS.map((col) => (
              <KanbanColumn key={col.status} {...col} items={byStatus[col.status] || []} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
