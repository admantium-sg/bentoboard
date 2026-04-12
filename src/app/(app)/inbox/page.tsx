'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useBentoStore } from '@/lib/store'
import { NOTIFICATION_CONFIG, formatRelativeTime, cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import type { Notification, NotificationType } from '@/lib/types'
import Link from 'next/link'
import { Star, CheckCheck, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react'

const FILTER_TABS: { label: string; value: string; types?: NotificationType[] }[] = [
  { label: 'All',       value: 'all' },
  { label: 'VIP',       value: 'vip',       types: ['vip_email'] },
  { label: 'Approvals', value: 'approvals', types: ['approval_needed'] },
  { label: 'Alerts',    value: 'alerts',    types: ['alert'] },
]

const PRIORITY_ORDER = { urgent: 0, high: 1, normal: 2 }

function NotificationIcon({ type }: { type: NotificationType }) {
  const props = { size: 16, strokeWidth: 1.75 }
  switch (type) {
    case 'vip_email':       return <Star          {...props} />
    case 'approval_needed': return <CheckCheck    {...props} />
    case 'idea_proposed':   return <Lightbulb     {...props} />
    case 'task_complete':   return <CheckCircle   {...props} />
    case 'alert':           return <AlertTriangle {...props} />
  }
}

function NotificationCard({ notification, onRead }: { notification: Notification; onRead: (id: string) => void }) {
  const config = NOTIFICATION_CONFIG[notification.type]
  const isUnread = !notification.read
  const router = useRouter()

  function handleClick() {
    onRead(notification.id)
    if (notification.action_item_id) {
      router.push(`/items/${notification.action_item_id}`)
    }
  }

  return (
    <div
      className="glass-card p-5 cursor-pointer relative"
      style={isUnread ? { boxShadow: `var(--shadow-card), 0 0 0 1px var(--accent-muted)` } : undefined}
      onClick={handleClick}
    >
      {isUnread && (
        <span className="absolute top-5 right-5 w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
      )}

      <div className="flex gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: config.color + '18', color: config.color }}
        >
          <NotificationIcon type={notification.type} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[12px] font-semibold" style={{ color: config.color }}>
              {config.label}
            </span>
            {notification.priority === 'urgent' && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                style={{ color: 'var(--danger)', background: 'var(--pill-rejected-bg)', border: '1px solid var(--pill-rejected-bd)' }}>
                Urgent
              </span>
            )}
            {notification.priority === 'high' && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                style={{ color: 'var(--warning)', background: 'var(--pill-review-bg)', border: '1px solid var(--pill-review-bd)' }}>
                High
              </span>
            )}
            <span className="text-[12px] ml-auto flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
              {formatRelativeTime(notification.created_at)}
            </span>
          </div>

          <h3 className="text-[15px] leading-snug mb-1.5"
            style={{ color: 'var(--text-primary)', fontWeight: isUnread ? 600 : 500 }}>
            {notification.title}
          </h3>

          {notification.body && (
            <p className="text-[14px] line-clamp-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {notification.body}
            </p>
          )}

          {notification.action_item_id && (
            <Link
              href={`/items/${notification.action_item_id}`}
              className="mt-2.5 text-[13px] font-medium inline-flex items-center gap-1 transition-colors"
              style={{ color: 'var(--accent-text)' }}
              onClick={(e) => e.stopPropagation()}
            >
              View item →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function InboxPage() {
  const { notifications, markNotificationRead, markAllRead, unreadCount } = useBentoStore()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = notifications
    .filter((n) => {
      const tab = FILTER_TABS.find((t) => t.value === activeFilter)
      if (!tab?.types) return true
      return tab.types.includes(n.type)
    })
    .sort((a, b) => {
      if (a.read !== b.read) return a.read ? 1 : -1
      if (PRIORITY_ORDER[a.priority] !== PRIORITY_ORDER[b.priority])
        return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Inbox"
        description="Everything that needs your attention"
        actions={
          unreadCount > 0 ? (
            <Button variant="ghost" size="sm" onClick={markAllRead}>Mark all read</Button>
          ) : undefined
        }
      />

      {/* Tabs — plain underline style, not a segmented pill box */}
      <div className="flex gap-1 mb-6" style={{ borderBottom: '1px solid var(--divider)' }}>
        {FILTER_TABS.map((tab) => {
          const count =
            tab.value === 'all'
              ? notifications.filter((n) => !n.read).length
              : notifications.filter((n) => !n.read && tab.types?.includes(n.type)).length
          const isActive = activeFilter === tab.value

          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className="flex items-center gap-2 px-1 py-2.5 mr-4 text-[14px] font-medium transition-all duration-150 relative"
              style={{ color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)' }}
            >
              {tab.label}
              {count > 0 && (
                <span className="min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-bold text-white px-1"
                  style={{ background: 'var(--accent)' }}>
                  {count}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />
              )}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="All caught up" description="No notifications in this category." />
      ) : (
        <div className="space-y-3">
          {filtered.map((n) => (
            <NotificationCard key={n.id} notification={n} onRead={markNotificationRead} />
          ))}
        </div>
      )}
    </div>
  )
}
