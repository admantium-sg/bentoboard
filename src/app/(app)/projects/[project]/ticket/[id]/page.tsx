'use client'

import { useEffect, useState, use } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { serializeTicketToMarkdown, addPhaseHistoryEntry } from '@/lib/serializers/ticketSerializer'
import type { KanbanTicket, KanbanPhase } from '@/lib/types'
import { ChevronLeft, Check, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function TicketDetailPage() {
  const params = useParams()
  const router = useRouter()
  const project = params.project as string
  const ticketId = params.id as string
  const { tickets, upsertTicket, setEditingContent, editingContent } = useBentoStore()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [markdownContent, setMarkdownContent] = useState('')

  const ticket = tickets[ticketId]

  useEffect(() => {
    if (ticket) {
      setMarkdownContent(serializeTicketToMarkdown(ticket))
    }
  }, [ticket])

  if (!ticket) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href={`/projects/${project}`}
            className="glass-card-flat px-3 py-2 flex items-center gap-2 text-[14px] hover:opacity-80 transition-opacity"
          >
            <ChevronLeft size={16} />
            <span>Back to Board</span>
          </Link>
        </div>
        <div className="glass-card p-12 text-center">
          <p style={{ color: 'var(--text-muted)' }}>Loading ticket...</p>
        </div>
      </div>
    )
  }

  async function handleSave() {
    setIsSaving(true)
    try {
      // Send update to API
      const res = await fetch(`/api/kanban/ticket/${ticketId}/content`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: markdownContent }),
      })

      if (!res.ok) {
        throw new Error('Failed to save')
      }

      // Update local store
      // TODO: Parse the updated content back to ticket object
      upsertTicket({ ...ticket, modifiedAt: new Date().toISOString() })
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to save:', error)
    } finally {
      setIsSaving(false)
    }
  }

  async function handlePhaseChange(newPhase: KanbanPhase) {
    try {
      const res = await fetch(`/api/kanban/ticket/${ticketId}/phase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phase: newPhase }),
      })

      if (!res.ok) {
        throw new Error('Failed to update phase')
      }

      const updatedTicket = addPhaseHistoryEntry(ticket, newPhase)
      upsertTicket(updatedTicket)
    } catch (error) {
      console.error('Failed to update phase:', error)
    }
  }

  function handleCancel() {
    setMarkdownContent(serializeTicketToMarkdown(ticket))
    setIsEditing(false)
  }

  const taskCount = ticket.tasks?.length || 0
  const completedCount = ticket.tasks?.filter((t) => t.checked).length || 0
  const allTasksComplete = taskCount === 0 || completedCount === taskCount

  return (
    <div className="animate-fade-in max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href={`/projects/${project}`}
          className="glass-card-flat px-3 py-2 flex items-center gap-2 text-[14px] hover:opacity-80 transition-opacity"
        >
          <ChevronLeft size={16} />
          <span>Back to Board</span>
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
                disabled={isSaving}
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

      {/* Phase Badges */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="px-3 py-1 rounded-full text-[12px] font-semibold"
          style={{
            background: 'var(--accent-muted)',
            color: 'var(--accent-text)',
          }}
        >
          {ticket.id}
        </span>
        <span
          className="px-3 py-1 rounded-full text-[12px] font-semibold"
          style={{
            background: 'var(--tag-bg)',
            color: 'var(--text-secondary)',
          }}
        >
          {ticket.phase}
        </span>
        {ticket.symbol && (
          <span className="text-[18px]">{ticket.symbol}</span>
        )}
        {taskCount > 0 && (
          <span
            className="px-3 py-1 rounded-full text-[12px] font-medium"
            style={{
              background: allTasksComplete ? 'var(--success)' : 'var(--warning)',
              color: 'white',
            }}
          >
            {completedCount}/{taskCount} tasks
          </span>
        )}
      </div>

      {/* Content */}
      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            className="input-glass w-full min-h-[500px] font-mono text-[13px] leading-relaxed p-4"
            placeholder="Enter markdown content..."
          />
          <div
            className="glass-card p-4 text-[13px]"
            style={{ color: 'var(--text-muted)' }}
          >
            Tip: Use markdown syntax for formatting. Tasks use - [x] / - [ ] syntax.
          </div>
        </div>
      ) : (
        <div className="glass-card p-6">
          <div className="prose-bentoboard">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Phase History */}
      {ticket.phaseHistory && ticket.phaseHistory.length > 0 && (
        <div className="mt-6">
          <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Phase History
          </h3>
          <div className="glass-card p-4">
            <table className="w-full text-[13px]">
              <thead>
                <tr style={{ color: 'var(--text-muted)' }}>
                  <th className="text-left font-medium pb-2">Phase</th>
                  <th className="text-left font-medium pb-2">Date</th>
                  <th className="text-left font-medium pb-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ticket.phaseHistory.map((entry, index) => (
                  <tr key={index} style={{ color: 'var(--text-secondary)' }}>
                    <td className="py-2">{entry.phase}</td>
                    <td className="py-2 font-mono">{entry.date}</td>
                    <td className="py-2">{entry.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
