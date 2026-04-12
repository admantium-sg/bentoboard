'use client'

import { use } from 'react'
import { useBentoStore } from '@/lib/store'
import { NOTIFICATION_CONFIG, formatFullDate } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Star, CheckCheck, Lightbulb, CheckCircle, AlertTriangle, ChevronLeft } from 'lucide-react'
import type { NotificationType } from '@/lib/types'
import Link from 'next/link'

function NotificationIcon({ type }: { type: NotificationType }) {
  const props = { size: 24, strokeWidth: 1.75 }
  switch (type) {
    case 'vip_email':       return <Star          {...props} />
    case 'approval_needed': return <CheckCheck    {...props} />
    case 'idea_proposed':   return <Lightbulb     {...props} />
    case 'task_complete':   return <CheckCircle   {...props} />
    case 'alert':           return <AlertTriangle {...props} />
  }
}

export default function NotificationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { notifications, markNotificationRead } = useBentoStore()

  const notification = notifications.find((n) => n.id === id)

  if (!notification) {
    return (
      <div className="animate-fade-in">
        <EmptyState
          title="Notification not found"
          description="This notification may have been deleted or doesn't exist."
          action={
            <Button variant="secondary" size="sm">
              <Link href="/inbox">Back to Inbox</Link>
            </Button>
          }
        />
      </div>
    )
  }

  const config = NOTIFICATION_CONFIG[notification.type]

  // Mark as read when opened
  if (!notification.read) {
    markNotificationRead(notification.id)
  }

  return (
    <div className="animate-fade-in">
      <Link
        href="/inbox"
        className="inline-flex items-center gap-1.5 text-[14px] mb-6 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ChevronLeft size={14} strokeWidth={2} /> Back to Inbox
      </Link>

      <div className="glass-card p-6 mb-4">
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: config.color + '18', color: config.color }}
          >
            <NotificationIcon type={notification.type} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
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
              <span className="text-[13px] ml-auto" style={{ color: 'var(--text-muted)' }}>
                {formatFullDate(notification.created_at)}
              </span>
            </div>

            <h1 className="text-[22px] font-semibold tracking-tight leading-snug" style={{ color: 'var(--text-primary)' }}>
              {notification.title}
            </h1>
          </div>
        </div>

        {notification.body && (
          <div
            className="text-[15px] leading-relaxed whitespace-pre-wrap rounded-xl p-4"
            style={{
              color: 'var(--text-secondary)',
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {notification.body}
          </div>
        )}

        {notification.action_item_id && (
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
            <Link href={`/items/${notification.action_item_id}`}>
              <Button variant="primary" size="sm">View linked item →</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
