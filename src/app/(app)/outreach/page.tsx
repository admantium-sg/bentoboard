'use client'

import { useState, useMemo } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { format } from 'date-fns'
import type { OutreachCreator, OutreachStatus } from '@/lib/types'

// ── Status config ──────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<OutreachStatus, { label: string; bg: string; color: string }> = {
  sent:            { label: 'Sent',            bg: 'rgba(99,102,241,0.15)',  color: '#818CF8' },
  follow_up:       { label: 'Follow Up',       bg: 'rgba(245,158,11,0.15)', color: '#FCD34D' },
  in_conversation: { label: 'In Conversation', bg: 'rgba(16,185,129,0.15)', color: '#34D399' },
  closed:          { label: 'Closed',          bg: 'rgba(107,114,128,0.15)',color: '#9CA3AF' },
  no_response:     { label: 'No Response',     bg: 'rgba(239,68,68,0.15)',  color: '#F87171' },
}

const STATUS_TABS: { label: string; value: OutreachStatus | 'all' }[] = [
  { label: 'All',            value: 'all' },
  { label: 'Sent',           value: 'sent' },
  { label: 'Follow Up',      value: 'follow_up' },
  { label: 'In Conversation',value: 'in_conversation' },
  { label: 'No Response',    value: 'no_response' },
  { label: 'Closed',         value: 'closed' },
]

// ── Status pill ────────────────────────────────────────────────────────────────

function OutreachStatusPill({ status }: { status: OutreachStatus | null }) {
  if (!status) return <span style={{ color: 'var(--text-muted)' }} className="text-[12px]">—</span>
  const cfg = STATUS_CONFIG[status]
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  )
}

// ── Sort types ─────────────────────────────────────────────────────────────────

type SortKey = 'name' | 'niche' | 'replied' | 'created_at' | 'outreach_status'
type SortDir = 'asc' | 'desc'

function SortArrow({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span
      className="ml-1 inline-block text-[10px] transition-opacity"
      style={{ opacity: active ? 1 : 0.3, color: 'var(--accent)' }}
    >
      {dir === 'asc' ? '↑' : '↓'}
    </span>
  )
}

// ── Expanded detail row ────────────────────────────────────────────────────────

function ExpandedDetail({ creator }: { creator: OutreachCreator }) {
  const location = [creator.city, creator.state, creator.country].filter(Boolean).join(', ')

  return (
    <div
      className="px-5 pb-4 pt-1 animate-fade-in"
      style={{ borderTop: '1px solid var(--divider)' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-3">
        {/* Reply summary — prominent when replied */}
        {creator.replied && creator.reply_summary && (
          <div className="sm:col-span-2 rounded-xl px-4 py-3" style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(52,211,153,0.25)' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#34D399' }}>Reply received</span>
              {creator.reply_date && (
                <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  · {format(new Date(creator.reply_date), 'MMM d, yyyy')}
                </span>
              )}
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {creator.reply_summary}
            </p>
          </div>
        )}

        {/* Headline */}
        {creator.headline && (
          <div className="sm:col-span-2">
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Headline</span>
            <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{creator.headline}</span>
          </div>
        )}

        {/* Email */}
        {creator.email && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</span>
            <a href={`mailto:${creator.email}`} className="text-[13px] hover:underline" style={{ color: 'var(--accent-text)' }}>
              {creator.email}
            </a>
          </div>
        )}

        {/* Location */}
        {location && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Location</span>
            <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{location}</span>
          </div>
        )}

        {/* LinkedIn */}
        {creator.linkedin_url && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>LinkedIn</span>
            <a
              href={creator.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] hover:underline truncate block"
              style={{ color: 'var(--accent-text)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {creator.linkedin_url.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '')}
            </a>
          </div>
        )}

        {/* Twitter */}
        {creator.twitter_url && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Twitter / X</span>
            <a
              href={creator.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] hover:underline truncate block"
              style={{ color: 'var(--accent-text)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {creator.twitter_url.replace(/^https?:\/\/(www\.)?twitter\.com\//, '@').replace(/^https?:\/\/(www\.)?x\.com\//, '@').replace(/\/$/, '')}
            </a>
          </div>
        )}

        {/* Followers */}
        {creator.followers != null && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Followers</span>
            <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{creator.followers.toLocaleString()}</span>
          </div>
        )}

        {/* Title */}
        {creator.title && (
          <div>
            <span className="text-[11px] font-medium uppercase tracking-wider block mb-0.5" style={{ color: 'var(--text-muted)' }}>Title</span>
            <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{creator.title}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Creator row ────────────────────────────────────────────────────────────────

function CreatorRow({
  creator,
  expanded,
  onToggle,
}: {
  creator: OutreachCreator
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="glass-card overflow-hidden transition-all duration-200"
      style={{ cursor: 'pointer' }}
      onClick={onToggle}
    >
      <div className="px-5 py-3.5 flex items-center gap-4">
        {/* Chevron */}
        <span
          className="text-[12px] flex-shrink-0 transition-transform duration-200"
          style={{ color: 'var(--text-muted)', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>

        {/* Name + org */}
        <div className="flex-1 min-w-0">
          <span className="text-[14px] font-medium block truncate" style={{ color: 'var(--text-primary)' }}>
            {creator.name ?? '—'}
          </span>
          {creator.organization && (
            <span className="text-[12px] truncate block mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {creator.organization}
            </span>
          )}
        </div>

        {/* Niche */}
        <div className="hidden sm:block w-32 flex-shrink-0">
          {creator.niche ? (
            <span className="text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
              {creator.niche}
            </span>
          ) : (
            <span style={{ color: 'var(--text-muted)' }} className="text-[12px]">—</span>
          )}
        </div>

        {/* Status pill */}
        <div className="hidden sm:flex flex-shrink-0 w-36 justify-start">
          <OutreachStatusPill status={creator.outreach_status} />
        </div>

        {/* Replied indicator */}
        <div className="flex-shrink-0 w-10 flex justify-center">
          {creator.replied ? (
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
              style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}
              title="Replied"
            >
              ✓
            </span>
          ) : (
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px]"
              style={{ background: 'rgba(107,114,128,0.10)', color: 'var(--text-muted)' }}
              title="No reply"
            >
              ✗
            </span>
          )}
        </div>
      </div>

      {expanded && <ExpandedDetail creator={creator} />}
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function OutreachPage() {
  const { outreach } = useBentoStore()

  const [statusFilter, setStatusFilter] = useState<OutreachStatus | 'all'>('all')
  const [nicheFilter, setNicheFilter] = useState<string>('all')
  const [repliedFilter, setRepliedFilter] = useState<'all' | 'yes' | 'no'>('all')
  const [sortKey, setSortKey] = useState<SortKey>('created_at')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // Unique niches for dropdown
  const niches = useMemo(() => {
    const set = new Set<string>()
    outreach.forEach((c) => { if (c.niche) set.add(c.niche) })
    return Array.from(set).sort()
  }, [outreach])

  // Filter + sort
  const filtered = useMemo(() => {
    let result = outreach

    if (statusFilter !== 'all') {
      result = result.filter((c) => c.outreach_status === statusFilter)
    }
    if (nicheFilter !== 'all') {
      result = result.filter((c) => c.niche === nicheFilter)
    }
    if (repliedFilter === 'yes') {
      result = result.filter((c) => c.replied === true)
    } else if (repliedFilter === 'no') {
      result = result.filter((c) => !c.replied)
    }

    result = [...result].sort((a, b) => {
      let cmp = 0
      if (sortKey === 'name') {
        cmp = (a.name ?? '').localeCompare(b.name ?? '')
      } else if (sortKey === 'niche') {
        cmp = (a.niche ?? '').localeCompare(b.niche ?? '')
      } else if (sortKey === 'replied') {
        cmp = (a.replied ? 1 : 0) - (b.replied ? 1 : 0)
      } else if (sortKey === 'outreach_status') {
        cmp = (a.outreach_status ?? '').localeCompare(b.outreach_status ?? '')
      } else {
        // created_at
        cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      }
      return sortDir === 'asc' ? cmp : -cmp
    })

    return result
  }, [outreach, statusFilter, nicheFilter, repliedFilter, sortKey, sortDir])

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const repliedCount = outreach.filter((c) => c.replied).length

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Outreach"
        description="Creator pipeline — tracked live by Bento"
        actions={
          <div className="flex items-center gap-3">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{repliedCount}</span>
              <span> / {outreach.length} replied</span>
            </span>
          </div>
        }
      />

      {/* Status tabs */}
      <div className="flex gap-1 mb-5 overflow-x-auto" style={{ borderBottom: '1px solid var(--divider)' }}>
        {STATUS_TABS.map((tab) => {
          const count = tab.value === 'all'
            ? outreach.length
            : outreach.filter((c) => c.outreach_status === tab.value).length
          const isActive = statusFilter === tab.value

          return (
            <button
              key={tab.value}
              onClick={() => setStatusFilter(tab.value)}
              className="flex items-center gap-1.5 px-1 py-2.5 mr-4 text-[13px] font-medium transition-all relative whitespace-nowrap flex-shrink-0"
              style={{ color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)' }}
            >
              {tab.label}
              {count > 0 && (
                <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>({count})</span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'var(--accent)' }} />
              )}
            </button>
          )
        })}
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Niche dropdown */}
        <select
          value={nicheFilter}
          onChange={(e) => setNicheFilter(e.target.value)}
          className="text-[13px] px-3 py-1.5 rounded-lg border transition-colors"
          style={{
            background: 'var(--glass-bg)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
            backdropFilter: 'var(--glass-blur)',
          }}
        >
          <option value="all">All niches</option>
          {niches.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>

        {/* Replied toggle */}
        <div
          className="flex rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--border-subtle)' }}
        >
          {(['all', 'yes', 'no'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setRepliedFilter(v)}
              className="px-3 py-1.5 text-[13px] font-medium transition-colors"
              style={{
                background: repliedFilter === v ? 'var(--nav-item-active)' : 'transparent',
                color: repliedFilter === v ? 'var(--nav-item-active-text)' : 'var(--text-secondary)',
              }}
            >
              {v === 'all' ? 'All' : v === 'yes' ? '✓ Replied' : '✗ No reply'}
            </button>
          ))}
        </div>

        {/* Result count */}
        <span className="text-[12px] ml-auto" style={{ color: 'var(--text-muted)' }}>
          {filtered.length} creator{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Column headers / sort controls */}
      <div
        className="hidden sm:flex items-center gap-4 px-5 py-2 mb-2 rounded-lg text-[11px] font-semibold uppercase tracking-wider select-none"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="w-4 flex-shrink-0" />
        <button className="flex-1 min-w-0 text-left flex items-center hover:opacity-80" onClick={() => toggleSort('name')}>
          Name
          <SortArrow active={sortKey === 'name'} dir={sortDir} />
        </button>
        <button className="w-32 flex-shrink-0 text-left flex items-center hover:opacity-80" onClick={() => toggleSort('niche')}>
          Niche
          <SortArrow active={sortKey === 'niche'} dir={sortDir} />
        </button>
        <button className="w-36 flex-shrink-0 text-left flex items-center hover:opacity-80" onClick={() => toggleSort('outreach_status')}>
          Status
          <SortArrow active={sortKey === 'outreach_status'} dir={sortDir} />
        </button>
        <button className="w-10 flex-shrink-0 text-center flex items-center justify-center hover:opacity-80" onClick={() => toggleSort('replied')}>
          Rep.
          <SortArrow active={sortKey === 'replied'} dir={sortDir} />
        </button>
      </div>

      {/* Rows */}
      {filtered.length === 0 ? (
        <EmptyState title="No creators" description="Adjust filters or check back when Bento adds outreach entries." />
      ) : (
        <div className="space-y-2">
          {filtered.map((creator) => (
            <CreatorRow
              key={creator.id}
              creator={creator}
              expanded={expandedId === creator.id}
              onToggle={() => setExpandedId(expandedId === creator.id ? null : creator.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
