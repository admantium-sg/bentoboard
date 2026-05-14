'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import Link from 'next/link'

export default function TasksPage() {
  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Tasks"
        description="Tasks are now managed in Projects via the kanban board"
      />
      <EmptyState
        title="Tasks are managed in Projects"
        description="Use the Projects section to manage all your tasks using the kanban board interface."
        action={
          <Link
            href="/projects"
            className="mt-4 px-4 py-2 rounded-lg text-[14px] font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-text)' }}
          >
            Go to Projects
          </Link>
        }
      />
    </div>
  )
}
