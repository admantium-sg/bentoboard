'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'

export default function OutreachPage() {
  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Outreach"
        description="Creator outreach tracking"
      />
      <EmptyState
        title="Outreach feature has been deprecated"
        description="Outreach tracking was part of the Supabase-based system and is no longer available in the file-system architecture."
      />
    </div>
  )
}
