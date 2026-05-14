'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import Link from 'next/link'

export default function IdeasPage() {
  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Ideas"
        description="Ideas and brainstorming have moved to the Projects section"
      />
      <EmptyState
        title="Ideas are now managed in Projects"
        description="Use the Projects section to manage all your kanban boards, ideas, and tasks."
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
