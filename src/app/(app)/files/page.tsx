'use client'

import { useState, useCallback } from 'react'
import { useBentoStore } from '@/lib/store'
import { Avatar } from '@/components/ui/Avatar'
import { ProjectTag } from '@/components/ui/ProjectTag'
import { EmptyState } from '@/components/ui/EmptyState'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { formatRelativeTime, getFileTypeKey, DEFAULT_PROJECTS } from '@/lib/utils'
import type { Item } from '@/lib/types'
import Link from 'next/link'
import { Image, FileText, Table, Globe, Package, Paperclip, Upload, ArrowUpFromLine } from 'lucide-react'

function FileTypeIcon({ fileType }: { fileType?: string | null }) {
  const key = getFileTypeKey(fileType)
  const props = { size: 22, strokeWidth: 1.5, style: { color: 'var(--text-muted)' } }
  switch (key) {
    case 'image':       return <Image    {...props} />
    case 'pdf':         return <FileText {...props} />
    case 'spreadsheet': return <Table    {...props} />
    case 'text':        return <FileText {...props} />
    case 'web':         return <Globe    {...props} />
    case 'archive':     return <Package  {...props} />
    default:            return <Paperclip {...props} />
  }
}

function FileCard({ item }: { item: Item }) {
  return (
    <Link href={`/items/${item.id}`} className="block">
      <div className="glass-card p-5 cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border)' }}>
            <FileTypeIcon fileType={item.file_type} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold truncate mb-1" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </h3>
            {item.description && (
              <p className="text-[13px] line-clamp-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            )}
            <div className="flex items-center gap-2">
              <ProjectTag slug={item.project} size="sm" />
              <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                {formatRelativeTime(item.created_at)}
              </span>
            </div>
          </div>

          <Avatar author={item.created_by} size="sm" />
        </div>
      </div>
    </Link>
  )
}

export default function FilesPage() {
  const { items } = useBentoStore()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const files = items
    .filter((i) => i.type === 'file')
    .filter((i) => !selectedProject || i.project === selectedProject)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  const projectsWithFiles = DEFAULT_PROJECTS.filter((p) =>
    items.some((i) => i.type === 'file' && i.project === p.slug)
  )

  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true) }, [])
  const handleDragLeave = useCallback(() => setIsDragging(false), [])
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false)
    const dropped = Array.from(e.dataTransfer.files)
    if (dropped.length > 0) alert(`Upload via Supabase Storage not yet connected.\nFiles: ${dropped.map(f => f.name).join(', ')}`)
  }, [])

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Files"
        description="Shared file library organized by project"
        actions={
          <Button variant="secondary" size="sm" icon={<ArrowUpFromLine size={14} strokeWidth={2} />}>
            Upload
          </Button>
        }
      />

      <div className="flex gap-6">
        {/* Left: project filter */}
        <div className="w-44 flex-shrink-0 hidden lg:block">
          <div className="glass-card-flat p-3 rounded-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full text-left px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-150"
              style={{
                background: !selectedProject ? 'var(--nav-item-active)' : 'transparent',
                color: !selectedProject ? 'var(--nav-item-active-text)' : 'var(--text-secondary)',
              }}
            >
              All files
              <span className="ml-1.5 text-[12px]" style={{ color: 'var(--text-muted)' }}>
                ({items.filter((i) => i.type === 'file').length})
              </span>
            </button>

            {projectsWithFiles.length > 0 && (
              <div className="mt-1 space-y-0.5">
                {projectsWithFiles.map((p) => {
                  const count = items.filter((i) => i.type === 'file' && i.project === p.slug).length
                  const isActive = selectedProject === p.slug
                  return (
                    <button key={p.slug} onClick={() => setSelectedProject(p.slug)}
                      className="w-full text-left px-3 py-2 rounded-xl text-[13px] transition-all duration-150 flex items-center gap-2"
                      style={{
                        background: isActive ? 'var(--nav-item-active)' : 'transparent',
                        color: isActive ? 'var(--nav-item-active-text)' : 'var(--text-secondary)',
                        fontWeight: isActive ? 500 : 400,
                      }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                      <span className="truncate flex-1">{p.name}</span>
                      <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{count}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right: file grid */}
        <div className="flex-1 min-w-0">
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
              Drop files here, or{' '}
              <button className="font-medium transition-colors" style={{ color: 'var(--accent-text)' }}>browse</button>
            </p>
            <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>Markdown, HTML, images, CSV, PDF</p>
          </div>

          {files.length === 0 ? (
            <EmptyState title="No files yet" description="Drop files above to upload, or Bento will add files when it generates reports." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger-children">
              {files.map((file) => <FileCard key={file.id} item={file} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
