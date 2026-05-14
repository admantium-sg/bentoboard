'use client'

import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { Dialog } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { formatRelativeTime } from '@/lib/utils'
import { FileText, Search, FolderOpen, ChevronRight, ChevronDown, Plus, FolderPlus, FilePlus } from 'lucide-react'
import Link from 'next/link'

interface ResearchProject {
  name: string
  slug: string
  docCount: number
  lastUpdated: string
  docs: {
    path: string
    title: string
    content: string
    modifiedAt: string
  }[]
}

export default function ResearchPage() {
  const { docs, setDocs } = useBentoStore()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())
  const [isFolderDialogOpen, setIsFolderDialogOpen] = useState(false)
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const [newFileContent, setNewFileContent] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    async function fetchDocs() {
      setIsLoading(true)
      try {
        const res = await fetch('/api/docs/list?category=research')
        if (!res.ok) throw new Error('Failed to fetch research docs')
        const data = await res.json()
        setDocs(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch research docs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDocs()
  }, [setDocs])

  // Filter docs by search query
  const filteredDocs = docs.filter((doc) =>
    doc.category === 'research' &&
    (searchQuery
      ? doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.content?.toLowerCase().includes(searchQuery.toLowerCase())
      : true)
  )

  // Group by project (second path segment)
  const projectGroups = filteredDocs.reduce((acc, doc) => {
    const pathParts = doc.path.split('/')
    // path format: research/{project}/{subpath}/file.md
    const projectSlug = pathParts.length > 1 ? pathParts[1] : 'general'
    const projectName = projectSlug.replace(/-/g, ' ')

    if (!acc[projectSlug]) {
      acc[projectSlug] = {
        name: projectName,
        slug: projectSlug,
        docCount: 0,
        lastUpdated: '',
        docs: [],
      }
    }
    acc[projectSlug].docs.push(doc)
    acc[projectSlug].docCount++
    if (new Date(doc.modifiedAt) > new Date(acc[projectSlug].lastUpdated)) {
      acc[projectSlug].lastUpdated = doc.modifiedAt
    }
    return acc
  }, {} as Record<string, ResearchProject>)

  const projects = Object.values(projectGroups).sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  )

  function toggleProject(slug: string) {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug)
    } else {
      newExpanded.add(slug)
    }
    setExpandedProjects(newExpanded)
  }

  async function handleCreateFolder() {
    if (!newFolderName.trim()) return
    setIsCreating(true)

    try {
      const folderPath = `research/${newFolderName.trim().replace(/[^a-zA-Z0-9-_]/g, '')}`
      const res = await fetch('/api/fs/mkdir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: folderPath }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create folder')
      }

      setIsFolderDialogOpen(false)
      setNewFolderName('')
      // Refresh docs
      const docsRes = await fetch('/api/docs/list?category=research')
      if (docsRes.ok) {
        const data = await docsRes.json()
        setDocs(data.docs || [])
      }
    } catch (err) {
      console.error('Failed to create folder:', err)
    } finally {
      setIsCreating(false)
    }
  }

  async function handleCreateFile() {
    if (!newFileName.trim()) return
    setIsCreating(true)

    try {
      const fileName = newFileName.trim().replace(/[^a-zA-Z0-9-_]/g, '')
      const filePath = `research/${fileName}.md`
      const content = newFileContent || `# ${fileName}\n\n`
      const fullContent = content.startsWith('# ') ? content : `# ${fileName}\n\n${content}`

      const res = await fetch('/api/fs/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: filePath, content: fullContent }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to create file')
      }

      setIsFileDialogOpen(false)
      setNewFileName('')
      setNewFileContent('')
      // Refresh docs
      const docsRes = await fetch('/api/docs/list?category=research')
      if (docsRes.ok) {
        const data = await docsRes.json()
        setDocs(data.docs || [])
      }
    } catch (err) {
      console.error('Failed to create file:', err)
    } finally {
      setIsCreating(false)
    }
  }

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Research" description="Research findings and documentation" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading research...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title="Research"
        description={`${projects.length} research projects`}
        actions={
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research..."
                className="input-glass pl-10 pr-4 py-2 text-[14px] w-64"
              />
            </div>
            <Button
              variant="secondary"
              size="sm"
              icon={<FolderPlus size={14} />}
              onClick={() => setIsFolderDialogOpen(true)}
            >
              New Folder
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<FilePlus size={14} />}
              onClick={() => setIsFileDialogOpen(true)}
            >
              New File
            </Button>
          </div>
        }
      />

      {projects.length === 0 ? (
        <EmptyState
          title="No research yet"
          description="Research files from the research/ directory will appear here."
        />
      ) : (
        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedProjects.has(project.slug)
            const previewDoc = project.docs[0]

            return (
              <div key={project.slug} className="glass-card overflow-hidden">
                {/* Project Header - Level 1 */}
                <div
                  className="p-4 cursor-pointer hover:bg-[var(--glass-hover)] transition-colors"
                  onClick={() => toggleProject(project.slug)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--accent-muted)' }}
                      >
                        <FolderOpen size={20} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <h2 className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
                        </h2>
                        <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                          {project.docCount} {project.docCount === 1 ? 'document' : 'documents'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                        {formatRelativeTime(project.lastUpdated)}
                      </span>
                      {isExpanded ? (
                        <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />
                      ) : (
                        <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Documents - Level 2 */}
                {isExpanded && (
                  <div className="border-t" style={{ borderColor: 'var(--divider)' }}>
                    <div className="p-4 space-y-3">
                      {project.docs.map((doc) => (
                        <Link
                          key={doc.path}
                          href={`/drafts/${doc.path}`}
                          className="glass-card-flat p-4 flex items-start gap-3 hover:opacity-80 transition-opacity block"
                        >
                          <FileText size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-[14px] font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                              {doc.title}
                            </h3>
                            <p className="text-[12px] font-mono truncate mb-2" style={{ color: 'var(--text-muted)' }}>
                              {doc.path}
                            </p>
                            <div className="flex items-center gap-2">
                              {doc.content && (
                                <p className="text-[12px] line-clamp-1 flex-1" style={{ color: 'var(--text-secondary)' }}>
                                  {doc.content.replace(/^#.*\n/, '').slice(0, 100)}...
                                </p>
                              )}
                              <span className="text-[11px] flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                                {formatRelativeTime(doc.modifiedAt)}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* New Folder Dialog */}
      <Dialog
        isOpen={isFolderDialogOpen}
        onClose={() => setIsFolderDialogOpen(false)}
        title="New Research Folder"
        description="Create a new folder in the research directory"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Folder Name
            </label>
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="my-research"
              className="input-glass w-full px-3 py-2 text-[14px]"
              autoFocus
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsFolderDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleCreateFolder}
              loading={isCreating}
              disabled={!newFolderName.trim() || isCreating}
            >
              Create
            </Button>
          </div>
        </div>
      </Dialog>

      {/* New File Dialog */}
      <Dialog
        isOpen={isFileDialogOpen}
        onClose={() => setIsFileDialogOpen(false)}
        title="New Research File"
        description="Create a new markdown file in the research directory"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              File Name (without .md extension)
            </label>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              placeholder="my-findings"
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
            <Button variant="ghost" size="sm" onClick={() => setIsFileDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleCreateFile}
              loading={isCreating}
              disabled={!newFileName.trim() || isCreating}
            >
              Create
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}