'use client'

import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { formatRelativeTime } from '@/lib/utils'
import { Dialog } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { Plus, FileText } from 'lucide-react'
import Link from 'next/link'

interface InboxDoc {
  path: string
  title: string
  content: string
  modifiedAt: string
}

export default function InboxPage() {
  const { docs, setDocs } = useBentoStore()
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newFileTitle, setNewFileTitle] = useState('')
  const [newFileContent, setNewFileContent] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchInboxDocs() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/docs/list?category=inbox')
        if (!res.ok) throw new Error('Failed to fetch inbox docs')
        const data = await res.json()
        setDocs(data.docs || [])
      } catch (err) {
        console.error('Failed to fetch inbox docs:', err)
        setError('Failed to load inbox')
      } finally {
        setIsLoading(false)
      }
    }

    fetchInboxDocs()
  }, [setDocs])

  async function handleCreateFile() {
    if (!newFileTitle.trim()) return
    setIsCreating(true)
    setError(null)

    try {
      const filename = newFileTitle.trim().replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').toLowerCase()
      const docPath = `inbox/${filename}.md`
      const content = newFileContent || `# ${newFileTitle}\n\n`
      const fullContent = content.startsWith('# ') ? content : `# ${newFileTitle}\n\n${content}`

      const res = await fetch(`/api/docs/${docPath}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: fullContent }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create file')
      }

      // Refresh docs list
      const listRes = await fetch('/api/docs/list?category=inbox')
      if (listRes.ok) {
        const data = await listRes.json()
        setDocs(data.docs || [])
      }

      setIsDialogOpen(false)
      setNewFileTitle('')
      setNewFileContent('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create file')
    } finally {
      setIsCreating(false)
    }
  }

  // Filter to only inbox category
  const inboxDocs = docs.filter((doc) => doc.category === 'inbox')

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Inbox" description="Quick capture and inbox zero" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading inbox...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Inbox"
        description="Quick capture and inbox zero"
        actions={
          <Button
            variant="primary"
            size="sm"
            icon={<Plus size={14} />}
            onClick={() => setIsDialogOpen(true)}
          >
            New File
          </Button>
        }
      />

      {error && (
        <div className="mb-4 p-3 rounded-lg text-[13px]" style={{ background: 'var(--danger)', color: 'white' }}>
          {error}
        </div>
      )}

      {inboxDocs.length === 0 ? (
        <EmptyState
          title="Inbox is empty"
          description="Capture ideas, tasks, and notes here. Click 'New File' to add your first item."
        />
      ) : (
        <div className="space-y-3">
          {inboxDocs.map((doc) => (
            <Link
              key={doc.path}
              href={`/drafts/${doc.path}`}
              className="glass-card p-4 cursor-pointer hover:opacity-80 transition-opacity block"
            >
              <div className="flex items-start gap-3">
                <FileText size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium mb-1 truncate" style={{ color: 'var(--text-primary)' }}>
                    {doc.title}
                  </h3>
                  {doc.content && (
                    <p className="text-[13px] line-clamp-2 mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {doc.content.replace(/^#.*\n/, '').slice(0, 150)}...
                    </p>
                  )}
                  <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                    {formatRelativeTime(doc.modifiedAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="New Inbox Item"
        description="Create a new markdown file in your inbox"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Title
            </label>
            <input
              type="text"
              value={newFileTitle}
              onChange={(e) => setNewFileTitle(e.target.value)}
              placeholder="My new item"
              className="input-glass w-full px-3 py-2 text-[14px]"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Content (optional)
            </label>
            <textarea
              value={newFileContent}
              onChange={(e) => setNewFileContent(e.target.value)}
              placeholder="Start writing..."
              className="input-glass w-full min-h-[150px] px-3 py-2 text-[13px] font-mono"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleCreateFile}
              loading={isCreating}
              disabled={!newFileTitle.trim() || isCreating}
            >
              Create
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}