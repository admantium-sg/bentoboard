'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { JsonViewer } from '@/components/ui/JsonViewer'
import { Dialog } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { formatRelativeTime } from '@/lib/utils'
import { FileText, FolderOpen, ChevronRight, Plus, FolderPlus, FilePlus, Trash2, MoreVertical } from 'lucide-react'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  size?: number
  modifiedAt: string
  children?: FileNode[]
}

export default function WorkspacePage() {
  const pathname = usePathname()
  const router = useRouter()
  const [nodes, setNodes] = useState<FileNode[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFolderDialogOpen, setIsFolderDialogOpen] = useState(false)
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const [newFileContent, setNewFileContent] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<{ path: string; name: string; type: 'file' | 'directory' } | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  // Extract the workspace path from the URL
  // URL format: /workspace/{folder}/{subfolder}/{...}
  const workspacePath = pathname.replace('/workspace/', '')

  useEffect(() => {
    async function fetchDirectory() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/fs/ls?path=${encodeURIComponent(workspacePath)}`)
        if (!res.ok) {
          const data = await res.json()
          setError(data.error || 'Failed to load directory')
          setNodes([])
          return
        }
        const data = await res.json()
        setNodes(data.entries || [])
      } catch (err) {
        console.error('Failed to fetch directory:', err)
        setError('Failed to load directory')
      } finally {
        setIsLoading(false)
      }
    }

    if (workspacePath) {
      fetchDirectory()
    }
  }, [workspacePath])

  const directories = nodes.filter((n) => n.type === 'directory')
  const files = nodes.filter((n) => n.type === 'file')

  async function handleCreateFolder() {
    if (!newFolderName.trim()) return
    setIsCreating(true)
    setError(null)

    try {
      const folderPath = workspacePath ? `${workspacePath}/${newFolderName.trim().replace(/[^a-zA-Z0-9-_]/g, '')}` : newFolderName.trim().replace(/[^a-zA-Z0-9-_]/g, '')
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
      // Refresh the directory
      const listRes = await fetch(`/api/fs/ls?path=${encodeURIComponent(workspacePath)}`)
      if (listRes.ok) {
        const data = await listRes.json()
        setNodes(data.entries || [])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create folder')
    } finally {
      setIsCreating(false)
    }
  }

  async function handleCreateFile() {
    if (!newFileName.trim()) return
    setIsCreating(true)
    setError(null)

    try {
      const fileName = newFileName.trim().replace(/[^a-zA-Z0-9-_]/g, '')
      const filePath = workspacePath ? `${workspacePath}/${fileName}.md` : `${fileName}.md`
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
      // Navigate to the new file
      router.push(`/drafts/${filePath}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create file')
    } finally {
      setIsCreating(false)
    }
  }

  function openDeleteDialog(path: string, name: string, type: 'file' | 'directory') {
    setItemToDelete({ path, name, type })
    setIsDeleteDialogOpen(true)
  }

  async function handleDelete() {
    if (!itemToDelete) return
    setIsDeleting(true)
    setError(null)

    try {
      const res = await fetch('/api/fs/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: itemToDelete.path }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to delete item')
      }

      setIsDeleteDialogOpen(false)
      setItemToDelete(null)
      // Refresh the directory
      const listRes = await fetch(`/api/fs/ls?path=${encodeURIComponent(workspacePath)}`)
      if (listRes.ok) {
        const data = await listRes.json()
        setNodes(data.entries || [])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item')
    } finally {
      setIsDeleting(false)
    }
  }

  // Get breadcrumb parts
  const parts = workspacePath.split('/')

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Loading..." description="" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
          <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading directory...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Error" description={error} />
        <div className="glass-card p-12 text-center" style={{ color: 'var(--text-muted)' }}>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  const folderName = parts[parts.length - 1].split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  // Check if this is a JSON file (not a directory)
  const isJsonFile = workspacePath.endsWith('.json')

  // If it's a JSON file, show the JsonViewer
  if (isJsonFile) {
    return <JsonViewer filePath={workspacePath} />
  }

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title={folderName}
        description={`${nodes.length} items`}
        actions={
          <div className="flex items-center gap-2">
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

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[13px] mb-6" style={{ color: 'var(--text-muted)' }}>
        <Link href="/workspace" className="hover:underline">Workspace</Link>
        {parts.map((part, index) => {
          const isLast = index === parts.length - 1
          const href = `/workspace/${parts.slice(0, index + 1).join('/')}`
          return (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {isLast ? (
                <span style={{ color: 'var(--text-primary)' }}>
                  {part.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              ) : (
                <Link href={href} className="hover:underline">
                  {part.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </Link>
              )}
            </div>
          )
        })}
      </div>

      {nodes.length === 0 ? (
        <EmptyState
          title="Empty folder"
          description="This folder is empty."
        />
      ) : (
        <div className="space-y-4">
          {/* Directories */}
          {directories.length > 0 && (
            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-wider mb-3 px-1" style={{ color: 'var(--text-secondary)' }}>
                Folders ({directories.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {directories.map((dir) => (
                  <div
                    key={dir.path}
                    className="glass-card p-4 flex items-center gap-3 hover:opacity-80 transition-opacity relative group"
                  >
                    <Link
                      href={`/workspace/${dir.path}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <FolderOpen size={20} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                          {dir.name.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </h3>
                        <p className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                          {formatRelativeTime(dir.modifiedAt)}
                        </p>
                      </div>
                      <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        openDeleteDialog(dir.path, dir.name, 'directory')
                      }}
                      className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors opacity-0 group-hover:opacity-100"
                      title="Delete folder"
                    >
                      <Trash2 size={14} style={{ color: 'var(--text-muted)' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Files */}
          {files.length > 0 && (
            <div>
              <h3 className="text-[13px] font-medium uppercase tracking-wider mb-3 px-1" style={{ color: 'var(--text-secondary)' }}>
                Files ({files.length})
              </h3>
              <div className="space-y-2">
                {files.map((file) => {
                  const isMarkdown = file.name.endsWith('.md')
                  const isJson = file.name.endsWith('.json')
                  const href = isMarkdown ? `/drafts/${file.path}` : isJson ? `/workspace/${file.path}` : '#'

                  return (
                    <div
                      key={file.path}
                      className="glass-card p-3 flex items-center gap-3 hover:opacity-80 transition-opacity relative group"
                    >
                      <Link
                        href={href}
                        className="flex items-center gap-3 flex-1 min-w-0"
                      >
                        <FileText size={16} className="flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[14px] font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                            {file.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                              {file.size ? `${(file.size / 1024).toFixed(1)} KB` : ''}
                            </span>
                            <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
                              {formatRelativeTime(file.modifiedAt)}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          openDeleteDialog(file.path, file.name, 'file')
                        }}
                        className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete file"
                      >
                        <Trash2 size={14} style={{ color: 'var(--text-muted)' }} />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* New Folder Dialog */}
      <Dialog
        isOpen={isFolderDialogOpen}
        onClose={() => setIsFolderDialogOpen(false)}
        title="New Folder"
        description="Create a new folder in this directory"
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
              placeholder="my-folder"
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
        title="New File"
        description="Create a new markdown file (.md)"
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
              placeholder="my-file"
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

      {/* Delete Confirmation Dialog */}
      <Dialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        title={itemToDelete?.type === 'directory' ? 'Delete Folder' : 'Delete File'}
        description={
          itemToDelete?.type === 'directory'
            ? 'This will permanently delete this folder and all its contents.'
            : 'This will permanently delete this file.'
        }
      >
        <div className="space-y-4">
          <p style={{ color: 'var(--text-muted)' }}>
            Are you sure you want to delete <strong>{itemToDelete?.name}</strong>? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsDeleteDialogOpen(false)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleDelete}
              loading={isDeleting}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
