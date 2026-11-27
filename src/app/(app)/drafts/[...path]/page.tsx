'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useBentoStore } from '@/lib/store'

import { Button } from '@/components/ui/Button'
import { ErrorPopup, useErrorPopup } from '@/components/ui/ErrorPopup'
import { ChevronLeft, Check, RotateCcw } from 'lucide-react'
import type { LeaveEntry } from '@/lib/leave-tracker'

export default function DocEditorPage() {
  const params = useParams()
  const router = useRouter()
  const path = Array.isArray(params.path) ? params.path.join('/') : params.path
  const [content, setContent] = useState('')
  const [originalContent, setOriginalContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')
  const upsertDoc = useBentoStore((s) => s.upsertDoc)
  const { error, showError, dismissError } = useErrorPopup()
  const [expectedHash, setExpectedHash] = useState<string | null>(null)
  const [leaveStatus, setLeaveStatus] = useState<LeaveEntry['status'] | null>(null)

  useEffect(() => {
    if (!path) return
    const docPath = path
    const controller = new AbortController()

    async function fetchDoc() {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/docs/${docPath}`, { signal: controller.signal })
        if (!res.ok) throw new Error('Failed to fetch doc')
        const data = await res.json()
        if (controller.signal.aborted) return
        const loaded = data.content || ''
        setContent(loaded)
        setOriginalContent(loaded)
        setExpectedHash(data.hash ?? null)
        setTitle(data.title || docPath.split('/').pop() || 'Untitled')
      } catch (fetchError) {
        if (!controller.signal.aborted) {
          console.error('Failed to fetch doc:', fetchError)
          showError('Failed to load document')
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    fetchDoc()
    return () => controller.abort()
  }, [path, showError])

  useEffect(() => {
    if (!path) return
    const docPath = path
    const controller = new AbortController()

    async function fetchLeaveStatus() {
      try {
        const res = await fetch(`/api/leave-tracker/entries?path=${encodeURIComponent(docPath)}`, { signal: controller.signal })
        if (!res.ok) return
        const data = await res.json()
        if (!controller.signal.aborted) {
          setLeaveStatus(data.entry?.status ?? null)
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error('Failed to fetch leave status:', err)
        }
      }
    }
    fetchLeaveStatus()
    return () => controller.abort()
  }, [path])

  async function handleMarkDone() {
    if (!path) return
    try {
      const res = await fetch('/api/leave-tracker/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'done', path }),
      })
      if (!res.ok) throw new Error('Failed to mark done')
      setLeaveStatus('done')
    } catch (err) {
      console.error('Failed to mark done:', err)
    }
  }

  // Determine base path and category from the doc path
  const pathSegments = path ? path.split('/') : []
  const baseCategory = pathSegments[0] || 'drafts'
  const backLabel = baseCategory.charAt(0).toUpperCase() + baseCategory.slice(1)

  function handleBack() {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/workspace')
    }
  }

  async function handleSave() {
    if (!path) return
    setIsSaving(true)
    try {
      const res = await fetch(`/api/docs/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, expectedHash }),
      })

      if (res.status === 409) {
        const data = await res.json().catch(() => ({}))
        showError(data.message || 'Document changed since you started editing')
        return
      }
      if (!res.ok) throw new Error('Failed to save')

      const data = await res.json().catch(() => ({}))
      setExpectedHash(data.hash ?? null)
      setOriginalContent(content)
      upsertDoc({
        path,
        title,
        content,
        category: baseCategory,
        project: pathSegments.length > 1 ? pathSegments[1] : 'general',
        modifiedAt: new Date().toISOString(),
      })
      setIsEditing(false)
    } catch (saveError) {
      showError(saveError instanceof Error ? saveError.message : 'Failed to save')
    } finally {
      setIsSaving(false)
    }
  }

  function handleCancel() {
    setContent(originalContent)
    setIsEditing(false)
  }

  const hasChanges = content !== originalContent

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading document...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="glass-card-flat px-3 py-2 flex items-center gap-2 text-[14px] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span>Back{backLabel ? ` to ${backLabel}` : ''}</span>
        </button>

        <div className="flex items-center gap-2">
          {leaveStatus === 'done' ? (
            <span className="text-[13px] px-3 py-1.5 rounded-lg flex items-center gap-1.5" style={{ background: 'var(--glass-bg-flat)', color: 'var(--success)' }}>
              <Check size={13} /> Done
            </span>
          ) : (
            <Button variant="ghost" size="sm" icon={<Check size={14} />} onClick={handleMarkDone}>
              Mark Done
            </Button>
          )}
          {isEditing ? (
            <>
              <Button variant="ghost" size="sm" icon={<RotateCcw size={14} />} onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={isSaving ? undefined : <Check size={14} />}
                onClick={handleSave}
                disabled={isSaving || !hasChanges}
              >
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </div>
      </div>

      {/* Path */}
      <div className="mb-4">
        <p className="text-[12px] font-mono" style={{ color: 'var(--text-muted)' }}>
          {path}
        </p>
      </div>

      {/* Content */}
      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="input-glass w-full min-h-[500px] font-mono text-[13px] leading-relaxed p-4"
            placeholder="Enter markdown content..."
          />
          <div
            className="glass-card p-4 text-[13px]"
            style={{ color: 'var(--text-muted)' }}
          >
            Tip: Use markdown syntax for formatting.
          </div>
        </div>
      ) : (
        <div className="glass-card p-6">
          <div className="prose-bentoboard">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      )}
      <ErrorPopup error={error} onDismiss={dismissError} />
    </div>
  )
}
