'use client'

import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { formatRelativeTime } from '@/lib/utils'
import Link from 'next/link'
import { FileText, Search } from 'lucide-react'

interface Doc {
  path: string
  title: string
  content: string
  category: string
  project: string
  modifiedAt: string
}

export default function DraftsPage() {
  const { docs, setDocs } = useBentoStore()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchDocs() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/docs/list')
        if (!res.ok) throw new Error('Failed to fetch docs')
        const data = await res.json()
        setDocs(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch docs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDocs()
  }, [setDocs])

  // Filter to only drafts category, then by search query
  const filteredDocs = docs.filter((doc) =>
    doc.category === 'drafts' &&
    (searchQuery
      ? doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content?.toLowerCase().includes(searchQuery.toLowerCase())
      : true)
  )

  // Group docs by category
  const docGroups = filteredDocs.reduce((acc, doc) => {
    const category = doc.category || 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(doc)
    return acc
  }, {} as Record<string, Doc[]>)

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Drafts" description="All markdown documents from shared-workspace" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading documents...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Drafts"
        description={`${docs.length} documents from shared-workspace`}
        actions={
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search docs..."
              className="input-glass pl-10 pr-4 py-2 text-[14px] w-64"
            />
          </div>
        }
      />

      {docs.length === 0 ? (
        <EmptyState
          title="No documents yet"
          description="Markdown files from brainstorming/, research/, and other folders will appear here."
        />
      ) : (
        <div className="space-y-6">
          {Object.entries(docGroups).map(([category, categoryDocs]) => (
            <div key={category}>
              <h2 className="text-[18px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {categoryDocs.map((doc) => (
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
                        <p className="text-[12px] font-mono truncate mb-2" style={{ color: 'var(--text-muted)' }}>
                          {doc.path}
                        </p>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[11px] px-2 py-0.5 rounded-md"
                            style={{
                              background: 'var(--tag-bg)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {doc.project}
                          </span>
                          <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                            {formatRelativeTime(doc.modifiedAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
