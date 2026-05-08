'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { EmptyState } from '@/components/ui/EmptyState'
import Link from 'next/link'

export default function ItemDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <EmptyState
        title="Item not found"
        description="This item may have been migrated to the new file system. Please use the Projects section."
      />
      <div className="mt-4">
        <Link href="/projects" className="text-[var(--accent-text)] hover:underline">
          ← Go to Projects
        </Link>
      </div>
    </div>
  )
}
