'use client'

import { Suspense, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { StatusPill } from '@/components/ui/StatusPill'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { Avatar } from '@/components/ui/Avatar'
import { PriorityBadge } from '@/components/ui/PriorityBadge'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { formatRelativeTime, DEFAULT_PROJECTS, cn } from '@/lib/utils'
import type { Item, ItemStatus } from '@/lib/types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const STATUS_FILTERS: { label: string; value: ItemStatus | 'all' }[] = [
  { label: 'All',       value: 'all' },
  { label: 'In review', value: 'in_review' },
  { label: 'Proposed',  value: 'proposed' },
  { label: 'Approved',  value: 'approved' },
  { label: 'Rejected',  value: 'rejected' },
]

function DraftCard({ item }: { item: Item }) {
  return (
    <Link href={`/items/${item.id}`} className="block">
      <div className="glass-card p-5 cursor-pointer">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <StatusPill status={item.status} size="sm" />
              <PriorityBadge priority={item.priority} showLabel />
            </div>
            <h3 className="text-[16px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </h3>
          </div>
          <Avatar author={item.created_by} size="sm" />
        </div>

        {item.description && (
          <p className="text-[14px] line-clamp-2 leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
        )}

        <div className="flex items-center gap-2 flex-wrap">
          <ProjectTag slug={item.project} size="sm" />
          {item.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[12px] px-2 py-0.5 rounded-md"
              style={{ color: 'var(--text-muted)', background: 'var(--tag-bg)', border: '1px solid var(--tag-border)' }}>
              {tag}
            </span>
          ))}
          <span className="text-[12px] ml-auto" style={{ color: 'var(--text-muted)' }}>
            {formatRelativeTime(item.updated_at)}
          </span>
        </div>
      </div>
    </Link>
  )
}

function DraftsContent() {
  const { items } = useBentoStore()
  const searchParams = useSearchParams()
  const projectFilter = searchParams.get('project')
  const [statusFilter, setStatusFilter] = useState<ItemStatus | 'all'>('all')

  const drafts = items
    .filter((i) => i.type === 'draft')
    .filter((i) => !projectFilter || i.project === projectFilter)
    .filter((i) => statusFilter === 'all' || i.status === statusFilter)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  const project = projectFilter ? DEFAULT_PROJECTS.find((p) => p.slug === projectFilter) : null

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={project ? `${project.name} — Drafts` : 'Drafts'}
        description="Content created by Bento for your review"
      />

      <div className="flex gap-1 mb-6" style={{ borderBottom: '1px solid var(--divider)' }}>
        {STATUS_FILTERS.map((f) => {
          const count =
            f.value === 'all'
              ? items.filter((i) => i.type === 'draft' && (!projectFilter || i.project === projectFilter)).length
              : items.filter((i) => i.type === 'draft' && i.status === f.value && (!projectFilter || i.project === projectFilter)).length
          const isActive = statusFilter === f.value

          return (
            <button
              key={f.value}
              onClick={() => setStatusFilter(f.value)}
              className="flex items-center gap-2 px-1 py-2.5 mr-4 text-[14px] font-medium transition-all relative"
              style={{ color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)' }}
            >
              {f.label}
              {count > 0 && <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>({count})</span>}
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />}
            </button>
          )
        })}
      </div>

      {drafts.length === 0 ? (
        <EmptyState title="No drafts yet" description="Bento will create drafts here when there's content ready for your review." />
      ) : (
        <div className="grid gap-3 stagger-children">
          {drafts.map((draft) => <DraftCard key={draft.id} item={draft} />)}
        </div>
      )}
    </div>
  )
}

export default function DraftsPage() {
  return (
    <Suspense fallback={<div className="text-[14px] p-8" style={{ color: 'var(--text-muted)' }}>Loading...</div>}>
      <DraftsContent />
    </Suspense>
  )
}
