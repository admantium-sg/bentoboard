'use client'


import { EmptyState } from '@/components/ui/EmptyState'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function NotificationDetailPage() {
  return (
    <div className="animate-fade-in">
      <Link
        href="/inbox"
        className="inline-flex items-center gap-1.5 text-[14px] mb-6 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ChevronLeft size={14} strokeWidth={2} /> Back to Inbox
      </Link>

      <EmptyState
        title="Notification not found"
        description="Notifications are now handled via file watching and the recent changes panel."
      />
    </div>
  )
}
