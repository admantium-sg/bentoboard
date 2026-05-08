'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, Check, RotateCcw } from 'lucide-react'

export default function DocEditorPage() {
  const params = useParams()
  const path = Array.isArray(params.path) ? params.path.join('/') : params.path
  const [content, setContent] = useState('')
  const [originalContent, setOriginalContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')
  const { upsertDoc } = useBentoStore()

  useEffect(() => {
    async function fetchDoc() {
      if (!path) return
      setIsLoading(true)
      try {
        const res = await fetch(`/api/docs/${path}`)
        if (!res.ok) throw new Error('Failed to fetch doc')
        const data = await res.json()
        setContent(data.content || '')
        setOriginalContent(data.content || '')
        setTitle(data.title || path.split('/').pop() || 'Untitled')
      } catch (error) {
        console.error('Failed to fetch doc:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDoc()
  }, [path])

  // Determine base path and category from the doc path
  const pathSegments = path ? path.split('/') : []
  const baseCategory = pathSegments[0] || 'drafts'
  const backHref = baseCategory === 'research' ? '/research' : baseCategory === 'inbox' ? '/inbox' : '/drafts'
  const backLabel = baseCategory.charAt(0).toUpperCase() + baseCategory.slice(1)

  async function handleSave() {
    if (!path) return
    setIsSaving(true)
    try {
      const res = await fetch(`/api/docs/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      if (!res.ok) {
        throw new Error('Failed to save')
      }

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
    } catch (error) {
      console.error('Failed to save:', error)
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
        <Link
          href={backHref}
          className="glass-card-flat px-3 py-2 flex items-center gap-2 text-[14px] hover:opacity-80 transition-opacity"
        >
          <ChevronLeft size={16} />
          <span>Back to {backLabel}</span>
        </Link>

        <div className="flex items-center gap-2">
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
    </div>
  )
}
