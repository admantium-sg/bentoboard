'use client'

import { useState, useCallback } from 'react'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { Upload } from 'lucide-react'

export default function FilesPage() {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true) }, [])
  const handleDragLeave = useCallback(() => setIsDragging(false), [])
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false)
    const dropped = Array.from(e.dataTransfer.files)
    if (dropped.length > 0) alert(`Files: ${dropped.map(f => f.name).join(', ')}`)
  }, [])

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Files"
        description="File management using shared workspace"
        actions={
          <Button variant="secondary" size="sm" icon={<Upload size={14} strokeWidth={2} />}>
            Upload
          </Button>
        }
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-2xl px-6 py-8 text-center mb-5 transition-all duration-200 flex flex-col items-center gap-2"
        style={{
          borderColor: isDragging ? 'var(--accent)' : 'var(--border-subtle)',
          background: isDragging ? 'var(--accent-muted)' : 'transparent',
        }}
      >
        <Upload size={22} strokeWidth={1.5} style={{ color: 'var(--text-muted)' }} />
        <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
          Drop files here to upload
        </p>
      </div>

      <EmptyState
        title="No files"
        description="Files from the shared workspace appear here. Use the Drafts section to edit markdown documents."
      />
    </div>
  )
}
