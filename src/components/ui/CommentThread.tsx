'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { Button } from './Button'
import { formatRelativeTime, cn } from '@/lib/utils'
import type { Comment } from '@/lib/types'

interface CommentThreadProps {
  comments: Comment[]
  onAddComment?: (content: string) => Promise<void>
  onResolve?: (id: string) => Promise<void>
  className?: string
}

export function CommentThread({ comments, onAddComment, onResolve, className }: CommentThreadProps) {
  const [input, setInput] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showResolved, setShowResolved] = useState(false)

  const filtered = showResolved ? comments : comments.filter((c) => !c.resolved)
  const resolvedCount = comments.filter((c) => c.resolved).length

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || !onAddComment) return
    setSubmitting(true)
    try { await onAddComment(input.trim()); setInput('') }
    finally { setSubmitting(false) }
  }

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
          Comments
          {comments.length > 0 && (
            <span className="ml-1.5 text-[14px] font-normal" style={{ color: 'var(--text-muted)' }}>
              ({comments.length})
            </span>
          )}
        </h3>
        {resolvedCount > 0 && (
          <button onClick={() => setShowResolved(!showResolved)}
            className="text-[13px] font-medium transition-colors"
            style={{ color: 'var(--accent-text)' }}>
            {showResolved ? 'Hide resolved' : `${resolvedCount} resolved`}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[14px] text-center py-8" style={{ color: 'var(--text-muted)' }}>No comments yet.</p>
      ) : (
        <div className="space-y-5">
          {filtered.map((comment) => (
            <div key={comment.id} className="flex gap-3 group" style={{ opacity: comment.resolved ? 0.45 : 1 }}>
              <Avatar author={comment.author} size="sm" />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-[14px] font-semibold capitalize" style={{ color: 'var(--text-primary)' }}>
                    {comment.author}
                  </span>
                  <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                    {formatRelativeTime(comment.created_at)}
                  </span>
                  {comment.resolved && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                      style={{ color: 'var(--pill-approved-fg)', background: 'var(--pill-approved-bg)', border: '1px solid var(--pill-approved-bd)' }}>
                      Resolved
                    </span>
                  )}
                </div>
                <div className="text-[14px] leading-relaxed whitespace-pre-wrap break-words" style={{ color: 'var(--text-secondary)' }}>
                  {comment.content}
                </div>
                {!comment.resolved && onResolve && (
                  <button onClick={() => onResolve(comment.id)}
                    className="mt-2 text-[12px] opacity-0 group-hover:opacity-100 transition-all"
                    style={{ color: 'var(--text-muted)' }}>
                    Mark resolved
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {onAddComment && (
        <form onSubmit={handleSubmit} className="flex gap-2 pt-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a comment..."
            className="input-glass flex-1 text-[14px]"
            disabled={submitting}
          />
          <Button type="submit" variant="primary" size="sm" loading={submitting} disabled={!input.trim()}>
            Send
          </Button>
        </form>
      )}
    </div>
  )
}
