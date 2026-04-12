import type { Priority } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PriorityBadgeProps {
  priority: Priority
  showLabel?: boolean
  className?: string
}

const PRIORITY_CONFIG: Record<Priority, { label: string; color: string }> = {
  normal: { label: 'Normal', color: 'var(--text-muted)' },
  high:   { label: 'High',   color: 'var(--warning)'    },
  urgent: { label: 'Urgent', color: 'var(--danger)'     },
}

export function PriorityBadge({ priority, showLabel = false, className }: PriorityBadgeProps) {
  if (priority === 'normal') return null

  const config = PRIORITY_CONFIG[priority]

  return (
    <span className={cn('inline-flex items-center gap-1.5', className)} style={{ color: config.color }}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: config.color }} />
      {showLabel && (
        <span className="text-[12px] font-medium">{config.label}</span>
      )}
    </span>
  )
}
