'use client'

import type { KanbanPhase } from '@/lib/types'

interface PhaseHeaderProps {
  phase: KanbanPhase
  config: { label: string; color: string }
  ticketCount: number
  isCollapsed?: boolean
  onToggle?: () => void
}

export function PhaseHeader({ phase, config, ticketCount, isCollapsed, onToggle }: PhaseHeaderProps) {
  return (
    <div className="flex items-center gap-2.5 mb-4 px-1">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: config.color }}
      />
      <h2 className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {config.label}
      </h2>
      <span
        className="ml-auto text-[12px] font-semibold px-2 py-0.5 rounded-md"
        style={{
          backgroundColor: `${config.color}18`,
          color: config.color,
        }}
      >
        {ticketCount}
      </span>
      {onToggle && (
        <button
          onClick={onToggle}
          className="ml-1 text-[12px] px-1.5 py-0.5 rounded hover:bg-[var(--nav-item-hover)] transition-colors"
          style={{ color: 'var(--text-muted)' }}
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '▶' : '▼'}
        </button>
      )}
    </div>
  )
}
