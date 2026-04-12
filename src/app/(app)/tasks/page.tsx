'use client'

import { useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { StatusPill } from '@/components/ui/StatusPill'
import { Avatar } from '@/components/ui/Avatar'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { PriorityBadge } from '@/components/ui/PriorityBadge'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { formatRelativeTime } from '@/lib/utils'
import type { Item, ItemStatus } from '@/lib/types'
import Link from 'next/link'
import { format } from 'date-fns'

const STATUS_TABS: { label: string; value: ItemStatus | 'all' }[] = [
  { label: 'All',      value: 'all' },
  { label: 'Active',   value: 'in_review' },
  { label: 'Proposed', value: 'proposed' },
  { label: 'Done',     value: 'done' },
]

function TaskRow({ item }: { item: Item }) {
  const isDone = item.status === 'done'

  return (
    <Link href={`/items/${item.id}`} className="block group">
      <div className="glass-card px-5 py-4 cursor-pointer flex items-center gap-4" style={{ opacity: isDone ? 0.55 : 1 }}>
        <div
          className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150"
          style={{
            borderColor: isDone ? 'var(--success)' : 'var(--border-subtle)',
            backgroundColor: isDone ? 'var(--success)' : 'transparent',
          }}
        >
          {isDone && <span className="text-white text-[10px] font-bold">✓</span>}
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-[15px] font-medium block truncate"
            style={{
              textDecoration: isDone ? 'line-through' : 'none',
              color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
            }}>
            {item.title}
          </span>
          {item.description && (
            <span className="text-[13px] truncate block mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {item.description}
            </span>
          )}
        </div>

        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <ProjectTag slug={item.project} size="sm" />
          <PriorityBadge priority={item.priority} showLabel />
          <StatusPill status={item.status} size="sm" />
          {item.due_date && (
            <span className="text-[12px] font-medium"
              style={{ color: new Date(item.due_date) < new Date() ? 'var(--danger)' : 'var(--text-muted)' }}>
              {format(new Date(item.due_date), 'MMM d')}
            </span>
          )}
          <Avatar author={item.created_by} size="sm" />
        </div>

        <span className="text-[12px] flex-shrink-0 hidden md:block" style={{ color: 'var(--text-muted)' }}>
          {formatRelativeTime(item.updated_at)}
        </span>
      </div>
    </Link>
  )
}

export default function TasksPage() {
  const { items } = useBentoStore()
  const [statusFilter, setStatusFilter] = useState<ItemStatus | 'all'>('all')

  const tasks = items
    .filter((i) => i.type === 'task')
    .filter((i) => {
      if (statusFilter === 'all') return true
      if (statusFilter === 'in_review') return i.status === 'in_review' || i.status === 'approved'
      return i.status === statusFilter
    })
    .sort((a, b) => {
      if (a.status === 'done' && b.status !== 'done') return 1
      if (b.status === 'done' && a.status !== 'done') return -1
      if (a.due_date && b.due_date) return new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
      if (a.due_date) return -1
      if (b.due_date) return 1
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    })

  const totalTasks = items.filter((i) => i.type === 'task').length
  const doneTasks  = items.filter((i) => i.type === 'task' && i.status === 'done').length

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Tasks"
        description="Work items between you and Bento"
        actions={
          totalTasks > 0 ? (
            <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{doneTasks}</span>
              <span> / {totalTasks} done</span>
            </div>
          ) : undefined
        }
      />

      {totalTasks > 0 && (
        <div className="mb-6 h-1 rounded-full overflow-hidden" style={{ background: 'var(--progress-track)' }}>
          <div className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(doneTasks / totalTasks) * 100}%`, background: 'var(--success)' }} />
        </div>
      )}

      <div className="flex gap-1 mb-6" style={{ borderBottom: '1px solid var(--divider)' }}>
        {STATUS_TABS.map((f) => {
          const count =
            f.value === 'all'
              ? items.filter((i) => i.type === 'task').length
              : f.value === 'in_review'
              ? items.filter((i) => i.type === 'task' && (i.status === 'in_review' || i.status === 'approved')).length
              : items.filter((i) => i.type === 'task' && i.status === f.value).length
          const isActive = statusFilter === f.value

          return (
            <button key={f.value} onClick={() => setStatusFilter(f.value)}
              className="flex items-center gap-2 px-1 py-2.5 mr-4 text-[14px] font-medium transition-all relative"
              style={{ color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)' }}>
              {f.label}
              {count > 0 && <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>({count})</span>}
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />}
            </button>
          )
        })}
      </div>

      {tasks.length === 0 ? (
        <EmptyState title="No tasks" description="Tasks assigned by you or created by Bento will appear here." />
      ) : (
        <div className="space-y-2.5 stagger-children">
          {tasks.map((task) => <TaskRow key={task.id} item={task} />)}
        </div>
      )}
    </div>
  )
}
