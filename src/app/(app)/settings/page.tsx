'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/ui/PageHeader'
import { cn } from '@/lib/utils'
import { useThemeStore } from '@/lib/theme'
import { useBentoStore } from '@/lib/store'
import { Dialog } from '@/components/ui/Dialog'
import { Check, Sun, Moon, TreePine, Sunset, MountainSnow, FolderOpen, FolderOpen as FolderOpenIcon, ChevronRight, Home, ArrowUp } from 'lucide-react'

const ACCENT_COLORS = [
  { label: 'Blue',   value: '#3B82F6' },
  { label: 'Purple', value: '#8B5CF6' },
  { label: 'Pink',   value: '#EC4899' },
  { label: 'Teal',   value: '#14B8A6' },
  { label: 'Green',  value: '#22C55E' },
  { label: 'Orange', value: '#F97316' },
]

interface DirectoryItem {
  name: string
  path: string
  type: 'file' | 'directory'
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card-flat rounded-2xl p-5 mb-4">
      <h2 className="text-[15px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  const [accentColor, setAccentColor] = useState('#3B82F6')
  const [saved, setSaved] = useState(false)
  const { theme, cycle } = useThemeStore()
  const { projects, setProjects } = useBentoStore()
  const isDark = theme === 'dark'
  const isForest = theme === 'forest'

  const [isWorkspaceDialogOpen, setIsWorkspaceDialogOpen] = useState(false)
  // Get workspace path from guard (stored in localStorage) or default
  const getInitialWorkspacePath = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('workspacePath') || ''
    }
    return ''
  }

  const [currentWorkspacePath, setCurrentWorkspacePath] = useState<string>('')
  const [workspaceDirectories, setWorkspaceDirectories] = useState<DirectoryItem[]>([])
  const [browsePath, setBrowsePath] = useState<string>('')
  const [directoryContents, setDirectoryContents] = useState<DirectoryItem[]>([])
  const [isBrowsing, setIsBrowsing] = useState(false)

  const router = useRouter()

  // Fetch available workspace directories
  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        const res = await fetch('/api/fs/browse?path=')
        if (!res.ok) throw new Error('Failed to fetch directories')
        const data = await res.json()
        const items = (data.entries || []) as { name: string; path: string; type: string }[]
        const dirs = items.filter((item) => item.type === 'directory')
        const enriched: DirectoryItem[] = dirs.map((dir: { name: string; path: string; type: string }) => ({
          name: dir.name,
          path: dir.path,
          type: 'directory' as const,
        }))
        setWorkspaceDirectories(enriched)
        // Initialize browse path to empty string (relative to workspace root)
        setBrowsePath('')
        // Set current workspace path from localStorage if available and valid
        const savedPath = localStorage.getItem('workspacePath')
        if (savedPath && savedPath !== '/home/devcon/.openclaw') {
          setCurrentWorkspacePath(savedPath)
        } else {
          // Clear invalid saved path
          localStorage.removeItem('workspacePath')
          setCurrentWorkspacePath('')
        }
      } catch (error) {
        console.error('Failed to fetch workspaces:', error)
        // Clear invalid data on error
        localStorage.removeItem('workspacePath')
      }
    }
    fetchWorkspaces()
  }, [])

  // Fetch directory contents when browsing
  useEffect(() => {
    async function fetchContents(path: string) {
      try {
        const res = await fetch(`/api/fs/browse?path=${encodeURIComponent(path)}`)
        if (!res.ok) throw new Error('Failed to fetch directory contents')
        const data = await res.json()
        const items = (data.entries || []) as { name: string; path: string; type: string }[]
        const enriched: DirectoryItem[] = items.map((item: { name: string; path: string; type: string }) => ({
          name: item.name,
          path: item.path,
          type: item.type as 'file' | 'directory',
        }))
        setDirectoryContents(enriched)
      } catch (error) {
        console.error('Failed to fetch directory contents:', error)
      }
    }
    if (isBrowsing) {
      fetchContents(browsePath)
    }
  }, [isBrowsing, browsePath])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/kanban/projects')
        if (!res.ok) throw new Error('Failed to fetch projects')
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      }
    }
    fetchProjects()
  }, [setProjects])

  function handleSave() {
    setSaved(true)
    // Update workspace path in localStorage or API
    localStorage.setItem('workspacePath', currentWorkspacePath)
    setTimeout(() => setSaved(false), 2000)
  }

  function handleSelectWorkspace(path: string) {
    setCurrentWorkspacePath(path)
    setBrowsePath(path)
    setIsBrowsing(false)
    setDirectoryContents([])
    // Save the selected workspace to localStorage
    localStorage.setItem('workspacePath', path)
  }

  function handleBrowseDirectory(path: string) {
    setBrowsePath(path)
    setIsBrowsing(true)
    setDirectoryContents([])
  }

  function handleGoUp() {
    const parts = browsePath.split('/')
    if (parts.length > 1) {
      const upPath = parts.slice(0, -1).join('/')
      handleBrowseDirectory(upPath)
    }
  }

  function handleSelectItem(item: DirectoryItem) {
    if (item.type === 'file') {
      // Open file in editor
      const href = item.path.endsWith('.md')
        ? `/drafts/${item.path}`
        : `/workspace/${item.path}`
      router.push(href)
    } else {
      // Browse into directory
      handleBrowseDirectory(item.path)
    }
  }

  return (
    <div className="animate-fade-in max-w-2xl">
      <PageHeader title="Settings" description="Configure BentoBoard" />

      <Section title="Workspace">
        <div className="space-y-3">
          {/* Current workspace display */}
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border-subtle)' }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: 'var(--success)' }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium" style={{ color: 'var(--text-primary)' }}>
                Workspace Connected
              </p>
              <p className="text-[12px] truncate font-mono" style={{ color: 'var(--text-muted)' }}>
                {currentWorkspacePath}
              </p>
            </div>
            <button
              onClick={() => setIsWorkspaceDialogOpen(true)}
              className="ml-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              <FolderOpen size={16} />
            </button>
          </div>

          {/* Browse directories */}
          <div className="mt-3 p-3 rounded-xl" style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border-subtle)' }}>
            <p className="text-[11px] font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
              Browse Directories
            </p>
            <Button
              variant="secondary"
              size="sm"
              icon={<FolderOpenIcon size={14} />}
              onClick={() => setIsBrowsing(true)}
            >
              {isBrowsing ? 'Select Workspace' : 'Browse Folders'}
            </Button>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-1">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors"
              style={{ cursor: 'default' }}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{project.name}</p>
                <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>{project.slug}</p>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-[13px] px-3 py-2" style={{ color: 'var(--text-muted)' }}>
              No projects found in kanban folder
            </p>
          )}
        </div>
      </Section>

      <Section title="Appearance">
        <div className="space-y-5">
          {/* Theme toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>Theme</p>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                {theme === 'light'    ? 'Light - frosted glass'
                 : theme === 'dark'   ? 'Dark - obsidian + yellow'
                 : theme === 'forest' ? 'Forest - lush green background'
                 : theme === 'desert' ? 'Desert - arid sandstone scene'
                 : theme === 'mountain' ? 'Mountain - snow and steel-blue peaks'
                 : ''}
              </p>
            </div>
            {/* Five-way picker */}
            <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border)' }}>
              {([
                { value: 'light',    icon: <Sun         size={13} strokeWidth={2} />, label: 'Light'  },
                { value: 'dark',     icon: <Moon        size={13} strokeWidth={2} />, label: 'Dark'   },
                { value: 'forest',   icon: <TreePine     size={13} strokeWidth={2} />, label: 'Forest'   },
                { value: 'desert',   icon: <Sunset       size={13} strokeWidth={2} />, label: 'Desert'   },
                { value: 'mountain', icon: <MountainSnow size={13} strokeWidth={2} />, label: 'Mountain' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => cycle()}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150"
                  style={{
                    background: theme === opt.value ? 'var(--tab-active-bg)' : 'transparent',
                    color: theme === opt.value ? 'var(--accent-text)' : 'var(--text-muted)',
                  }}
                >
                  {opt.icon}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accent colors */}
          <div>
            <p className="text-[11px] font-medium mb-2.5 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Accent Color
            </p>
            <div className="flex gap-2">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setAccentColor(c.value)}
                  className="w-7 h-7 rounded-full transition-all duration-150 flex items-center justify-center"
                  style={{
                    backgroundColor: c.value,
                    outline: accentColor === c.value ? `2px solid ${c.value}` : 'none',
                    outlineOffset: 2,
                    transform: accentColor === c.value ? 'scale(1.15)' : 'scale(1)',
                  }}
                  title={c.label}
                >
                  {accentColor === c.value && <Check size={12} strokeWidth={3} className="text-white" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="flex justify-end">
        <Button
          variant="primary"
          icon={saved ? <Check size={13} strokeWidth={2.5} /> : undefined}
          onClick={handleSave}
        >
          {saved ? 'Saved' : 'Save Settings'}
        </Button>
      </div>

      {/* Workspace Selection Dialog */}
      <Dialog
        isOpen={isWorkspaceDialogOpen}
        onClose={() => setIsWorkspaceDialogOpen(false)}
        title="Select Workspace"
        description="Choose a workspace directory"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Workspace Path
            </label>
            <input
              type="text"
              value={currentWorkspacePath}
              onChange={(e) => setCurrentWorkspacePath(e.target.value)}
              className="input-glass w-full px-3 py-2 text-[13px] font-mono"
              placeholder="Enter workspace path"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Available Directories (shared-workspace)
            </label>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {workspaceDirectories.map((dir) => (
                <button
                  key={dir.path}
                  onClick={() => handleSelectWorkspace(dir.path)}
                  className="w-full flex items-center gap-3 p-2 rounded-lg text-left hover:opacity-80 transition-opacity"
                  style={{ background: dir.path === currentWorkspacePath ? 'var(--nav-item-active)' : 'transparent' }}
                >
                  <FolderOpen size={16} className="flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{dir.name}</p>
                    <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>{dir.path}</p>
                  </div>
                  <ChevronRight size={14} className="flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                </button>
              ))}
              {workspaceDirectories.length === 0 && (
                <p className="text-center py-8 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                  No workspace directories found
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsWorkspaceDialogOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Directory Browser Dialog */}
      <Dialog
        isOpen={isBrowsing}
        onClose={() => setIsBrowsing(false)}
        title={isBrowsing ? 'Select Workspace' : 'Browse Directories'}
        description={isBrowsing ? 'Select a workspace directory' : 'Browse up to ' + browsePath}
      >
        <div className="space-y-3">
          {/* Breadcrumb navigation */}
          {browsePath !== '/' && (
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={handleGoUp}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:opacity-80 transition-opacity"
                style={{ background: 'var(--glass-bg-flat)' }}
              >
                <ArrowUp size={16} className="flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                <span className="text-[13px]">Up</span>
              </button>
              <span style={{ color: 'var(--text-muted)' }}>/</span>
              <span className="text-[13px] font-mono" style={{ color: 'var(--text-muted)' }}>{browsePath}</span>
            </div>
          )}

          {/* Directory contents */}
          <div className="space-y-2">
            {directoryContents.map((item) => (
              <button
                key={item.path}
                onClick={() => handleSelectItem(item)}
                className="w-full flex items-center gap-3 p-2 rounded-lg text-left hover:opacity-80 transition-opacity"
                style={{ background: 'var(--glass-bg-flat)' }}
              >
                <Home size={16} className="flex-shrink-0" style={{ color: item.type === 'file' ? 'var(--text-muted)' : 'var(--accent)' }} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
                  <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>{item.path}</p>
                </div>
                <ChevronRight size={14} className="flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
              </button>
            ))}
            {directoryContents.length === 0 && (
              <p className="text-center py-8 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                Empty directory
              </p>
            )}
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsBrowsing(false)}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
