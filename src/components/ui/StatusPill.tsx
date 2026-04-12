import type { ItemStatus } from '@/lib/types'
import { cn } from '@/lib/utils'

interface StatusPillProps {
  status: ItemStatus
  size?: 'sm' | 'md'
  className?: string
}

const STATUS_LABELS: Record<ItemStatus, string> = {
  proposed:  'Proposed',
  in_review: 'In review',
  approved:  'Approved',
  rejected:  'Rejected',
  done:      'Done',
}

const STATUS_VARS: Record<ItemStatus, { bg: string; fg: string; bd: string }> = {
  proposed:  { bg: 'var(--pill-proposed-bg)', fg: 'var(--pill-proposed-fg)', bd: 'var(--pill-proposed-bd)' },
  in_review: { bg: 'var(--pill-review-bg)',   fg: 'var(--pill-review-fg)',   bd: 'var(--pill-review-bd)'   },
  approved:  { bg: 'var(--pill-approved-bg)', fg: 'var(--pill-approved-fg)', bd: 'var(--pill-approved-bd)' },
  rejected:  { bg: 'var(--pill-rejected-bg)', fg: 'var(--pill-rejected-fg)', bd: 'var(--pill-rejected-bd)' },
  done:      { bg: 'var(--pill-done-bg)',      fg: 'var(--pill-done-fg)',      bd: 'var(--pill-done-bd)'      },
}

export function StatusPill({ status, size = 'md', className }: StatusPillProps) {
  const v = STATUS_VARS[status]

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-lg whitespace-nowrap',
        size === 'sm' ? 'text-[12px] px-2 py-0.5' : 'text-[13px] px-2.5 py-1',
        className
      )}
      style={{ background: v.bg, color: v.fg, border: `1px solid ${v.bd}` }}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}
