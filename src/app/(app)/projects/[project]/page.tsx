'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { Board } from '@/components/kanban/Board'
import { EmptyState } from '@/components/ui/EmptyState'
import { Dialog } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { AlertCircle, Plus } from 'lucide-react'

export default function ProjectBoardPage() {
  const params = useParams()
  const router = useRouter()
  const project = params.project as string
  const { setSelectedProject, selectedProject } = useBentoStore()
  const [error, setError] = useState<string | null>(null)
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false)
  const [newTicketTitle, setNewTicketTitle] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [boardRefreshKey, setBoardRefreshKey] = useState(0)

  async function handleCreateTicket() {
    if (!newTicketTitle.trim()) return
    setIsCreating(true)
    setError(null)

    try {
      const res = await fetch('/api/kanban/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project,
          title: newTicketTitle.trim(),
          phase: 'backlog',
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create ticket')
      }

      setIsTicketDialogOpen(false)
      setNewTicketTitle('')
      // Refresh the board by incrementing the refresh key
      setBoardRefreshKey(prev => prev + 1)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create ticket')
    } finally {
      setIsCreating(false)
    }
  }

  useEffect(() => {
    setSelectedProject(project)
    return () => setSelectedProject(null)
  }, [project, setSelectedProject])

  if (error) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title={project} description="Project board" />
        <EmptyState
          title="Error loading project"
          description={error}
        />
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-full">
      <PageHeader
        title={project}
        description="Kanban board for this project"
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              icon={<Plus size={14} />}
              onClick={() => setIsTicketDialogOpen(true)}
            >
              New Ticket
            </Button>
          </div>
        }
      />

      <Board project={project} refreshKey={boardRefreshKey} />

      {/* New Ticket Dialog */}
      <Dialog
        isOpen={isTicketDialogOpen}
        onClose={() => setIsTicketDialogOpen(false)}
        title="New Ticket"
        description="Create a new ticket for this project"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Ticket Title
            </label>
            <input
              type="text"
              value={newTicketTitle}
              onChange={(e) => setNewTicketTitle(e.target.value)}
              placeholder="e.g., Fix memory leaks in SSE"
              className="input-glass w-full px-3 py-2 text-[14px]"
              autoFocus
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsTicketDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleCreateTicket}
              loading={isCreating}
              disabled={!newTicketTitle.trim() || isCreating}
            >
              Create Ticket
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
