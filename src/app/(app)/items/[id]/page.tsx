'use client'

import { useState, useEffect, use } from 'react'
import { useBentoStore } from '@/lib/store'
import { StatusPill } from '@/components/ui/StatusPill'
import { Avatar } from '@/components/ui/Avatar'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { PriorityBadge } from '@/components/ui/PriorityBadge'
import { Button } from '@/components/ui/Button'
import { CommentThread } from '@/components/ui/CommentThread'
import { EmptyState } from '@/components/ui/EmptyState'
import { formatFullDate, TYPE_CONFIG } from '@/lib/utils'
import type { Item, ItemStatus, Comment } from '@/lib/types'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  FileText, Lightbulb, FolderOpen, CheckSquare,
  Image, Table, Globe, Package, Paperclip,
  ArrowDownToLine, Check, ChevronLeft,
} from 'lucide-react'

function TypeIcon({ type }: { type: string }) {
  const props = { size: 18, strokeWidth: 1.75 }
  switch (type) {
    case 'draft': return <FileText    {...props} />
    case 'idea':  return <Lightbulb   {...props} />
    case 'file':  return <FolderOpen  {...props} />
    case 'task':  return <CheckSquare {...props} />
    default:      return <FileText    {...props} />
  }
}

function FilePreviewIcon({ fileType }: { fileType?: string | null }) {
  const props = { size: 48, strokeWidth: 1, style: { color: 'var(--text-muted)', opacity: 0.5 } }
  if (fileType?.includes('image')) return <Image    {...props} />
  if (fileType?.includes('pdf'))   return <FileText {...props} />
  if (fileType?.includes('csv'))   return <Table    {...props} />
  if (fileType?.includes('html'))  return <Globe    {...props} />
  if (fileType?.includes('zip'))   return <Package  {...props} />
  return <Paperclip {...props} />
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  async function handleCopy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Button variant="ghost" size="sm" icon={copied ? <Check size={12} strokeWidth={2.5} /> : undefined} onClick={handleCopy}>
      {copied ? 'Copied' : label}
    </Button>
  )
}

function RemoteHtmlPreview({ url, title }: { url: string; title: string }) {
  const [html, setHtml] = useState<string | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setHtml(null)
    setError(false)
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed')
        return r.text()
      })
      .then(setHtml)
      .catch(() => setError(true))
  }, [url])

  if (error) {
    return (
      <div className="glass-card-flat rounded-2xl p-8 text-center text-[14px]" style={{ color: 'var(--text-muted)' }}>
        Could not load preview.{' '}
        <a href={url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-text)' }}>Open in new tab</a>
      </div>
    )
  }

  if (!html) {
    return (
      <div className="glass-card-flat rounded-2xl p-8 text-center text-[14px]" style={{ color: 'var(--text-muted)' }}>
        Loading preview…
      </div>
    )
  }

  return (
    <div className="glass-card-flat rounded-2xl overflow-hidden">
      <iframe
        srcDoc={html}
        className="w-full border-0"
        style={{ minHeight: 600 }}
        title={title}
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  )
}

function ContentPreview({ item }: { item: Item }) {
  // 1. file_path → fetch HTML and render via srcDoc iframe
  if (item.file_path) {
    return <RemoteHtmlPreview url={item.file_path} title={item.title} />
  }

  // 2. content_html → render as HTML
  if (item.content_html) {
    return (
      <div className="glass-card-flat rounded-2xl p-6 overflow-auto">
        <div
          className="prose-bentoboard"
          dangerouslySetInnerHTML={{ __html: item.content_html }}
        />
      </div>
    )
  }

  // 3. content_markdown → render with react-markdown
  if (item.content_markdown) {
    return (
      <div className="glass-card-flat rounded-2xl p-6 overflow-auto">
        <div className="prose-bentoboard">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content_markdown}</ReactMarkdown>
        </div>
      </div>
    )
  }

  // 4. description fallback
  if (item.description) {
    return (
      <div className="glass-card-flat rounded-2xl p-6">
        <p className="text-[14px] leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
          {item.description}
        </p>
      </div>
    )
  }

  return (
    <div className="glass-card-flat rounded-2xl p-8 flex items-center justify-center text-[13px]" style={{ color: 'var(--text-muted)' }}>
      No content
    </div>
  )
}

function ActivityLog({ item }: { item: Item }) {
  return (
    <div className="mt-8" style={{ borderTop: '1px solid var(--divider)', paddingTop: '1.5rem' }}>
      <h3 className="text-[14px] font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
        Activity
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text-muted)' }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
          <span>Created by <strong style={{ color: 'var(--text-secondary)' }} className="capitalize">{item.created_by}</strong></span>
          <span>·</span>
          <span>{formatFullDate(item.created_at)}</span>
        </div>
        {item.updated_at !== item.created_at && (
          <div className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text-muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--border-subtle)' }} />
            <span>Last updated · {formatFullDate(item.updated_at)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function RejectCommentBox({ onSubmit }: { onSubmit: (content: string) => Promise<void> }) {
  const [value, setValue] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    setSubmitting(true)
    await onSubmit(value.trim())
    setValue('')
    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        id="reject-comment-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. The tone is too casual for this audience — please revise..."
        className="input-glass flex-1 text-[14px]"
        disabled={submitting}
        autoFocus
      />
      <Button type="submit" variant="danger" size="sm" loading={submitting} disabled={!value.trim()}>
        Send
      </Button>
    </form>
  )
}

export default function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { items, comments, setComments, addComment, upsertItem } = useBentoStore()
  const [updatingStatus, setUpdatingStatus] = useState<ItemStatus | null>(null)
  const [rejectPending, setRejectPending] = useState(false)

  const item = items.find((i) => i.id === id)
  const itemComments = comments[id] || []

  // Load comments once per item
  useEffect(() => {
    if (!item || comments[id]) return
    async function loadComments() {
      try {
        const { getSupabase } = await import('@/lib/supabase')
        const client = getSupabase()
        const { data } = await client
          .from('comments')
          .select('*')
          .eq('item_id', id)
          .order('created_at', { ascending: true })
        if (data) setComments(id, data)
      } catch (e) { console.error(e) }
    }
    loadComments()
  }, [id, item]) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleStatusChange(newStatus: ItemStatus) {
    if (!item) return
    setUpdatingStatus(newStatus)
    try {
      const { getSupabase } = await import('@/lib/supabase')
      const client = getSupabase()
      const { data } = await client
        .from('items')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()
      if (data) upsertItem(data as Item)
      // After rejecting, scroll to comment box so Brian can explain why
      if (newStatus === 'rejected') {
        setRejectPending(true)
        setTimeout(() => {
          document.getElementById('reject-comment-input')?.focus()
        }, 100)
      }
    } catch (e) { console.error(e) } finally { setUpdatingStatus(null) }
  }

  async function handleAddComment(content: string) {
    try {
      const { getSupabase } = await import('@/lib/supabase')
      const client = getSupabase()
      const { data } = await client
        .from('comments')
        .insert({ item_id: id, author: 'brian', content })
        .select()
        .single()
      if (data) addComment(data)
    } catch (e) { console.error(e) }
    setRejectPending(false)
  }

  if (!item) {
    return (
      <div className="animate-fade-in">
        <EmptyState
          title="Item not found"
          description="This item may have been deleted or doesn't exist."
          action={<Button variant="secondary" size="sm"><Link href="/inbox">Back to Inbox</Link></Button>}
        />
      </div>
    )
  }

  const typeConfig = TYPE_CONFIG[item.type]
  const isMarkdown = !!item.content_markdown && !item.file_path

  return (
    <div className="animate-fade-in">
      <Link
        href={`/${item.type === 'draft' ? 'drafts' : item.type === 'idea' ? 'ideas' : item.type === 'file' ? 'files' : 'tasks'}`}
        className="inline-flex items-center gap-1.5 text-[14px] mb-6 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ChevronLeft size={14} strokeWidth={2} /> Back
      </Link>

      <div className="glass-card p-5 mb-4">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: typeConfig.color + '18', color: typeConfig.color }}
          >
            <TypeIcon type={item.type} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <StatusPill status={item.status} />
              <PriorityBadge priority={item.priority} showLabel />
              <ProjectTag slug={item.project} />
            </div>
            <h1 className="text-[22px] font-semibold tracking-tight leading-snug" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <Avatar author={item.created_by} size="sm" />
              <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
                by <span className="capitalize" style={{ color: 'var(--text-secondary)' }}>{item.created_by}</span>
              </span>
              <span style={{ color: 'var(--text-muted)' }}>·</span>
              <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{formatFullDate(item.created_at)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap pt-3" style={{ borderTop: '1px solid var(--divider)' }}>
          {item.status !== 'approved' && (
            <Button variant="success" size="sm" icon={<Check size={12} strokeWidth={2.5} />}
              loading={updatingStatus === 'approved'} onClick={() => handleStatusChange('approved')}>
              Approve
            </Button>
          )}
          {item.status !== 'rejected' && item.status !== 'approved' && (
            <Button variant="danger" size="sm"
              loading={updatingStatus === 'rejected'} onClick={() => handleStatusChange('rejected')}>
              Reject
            </Button>
          )}
          {item.status === 'proposed' && (
            <Button variant="secondary" size="sm"
              loading={updatingStatus === 'in_review'} onClick={() => handleStatusChange('in_review')}>
              Start Review
            </Button>
          )}
          {item.status !== 'done' && item.type === 'task' && (
            <Button variant="success" size="sm" icon={<Check size={12} strokeWidth={2.5} />}
              loading={updatingStatus === 'done'} onClick={() => handleStatusChange('done')}>
              Mark Done
            </Button>
          )}
          {item.status === 'approved' && (
            <Button variant="ghost" size="sm" onClick={() => handleStatusChange('proposed')}>Reopen</Button>
          )}
          <div className="flex-1" />
          {isMarkdown && <CopyButton text={item.content_markdown!} label="Copy Markdown" />}
          {isMarkdown && item.content_html && <CopyButton text={item.content_html} label="Copy HTML" />}
          {item.file_path && (
            <Button variant="secondary" size="sm" icon={<ArrowDownToLine size={13} strokeWidth={2} />}>Download</Button>
          )}
        </div>
      </div>

      {/* Reject prompt — appears after rejecting so Brian leaves a reason for Bento */}
      {rejectPending && (
        <div className="glass-card p-4 mb-4 animate-fade-in" style={{ border: '1px solid var(--pill-rejected-bd)' }}>
          <p className="text-[14px] font-medium mb-3" style={{ color: 'var(--pill-rejected-fg)' }}>
            Leave a note for Bento explaining why — it'll use this to revise.
          </p>
          <RejectCommentBox onSubmit={handleAddComment} />
        </div>
      )}

      {item.type === 'draft' && isMarkdown ? (
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
          <div><ContentPreview item={item} /></div>
          <div className="glass-card p-5">
            <CommentThread comments={itemComments} onAddComment={handleAddComment} />
            <ActivityLog item={item} />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <ContentPreview item={item} />
          <div className="glass-card p-5">
            <CommentThread comments={itemComments} onAddComment={handleAddComment} />
            <ActivityLog item={item} />
          </div>
        </div>
      )}
    </div>
  )
}
