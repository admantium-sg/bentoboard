'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useBentoStore } from '@/lib/store'
import { useThemeStore } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { Dialog } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import {
  FolderOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  TreePine,
  Sunset,
  MountainSnow,
  Layers,
  ArrowRight,
} from 'lucide-react'

interface WorkspaceFolder {
  name: string
  displayName: string
  path: string
  modifiedAt: string
}

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { sidebarCollapsed, setSidebarCollapsed, projects, selectedProject, setSelectedProject } = useBentoStore()
  const { theme, cycle } = useThemeStore()
  const [workspaceFolders, setWorkspaceFolders] = useState<WorkspaceFolder[]>([])
  const [isWorkspaceDialogOpen, setIsWorkspaceDialogOpen] = useState(false)

  useEffect(() => {
    async function fetchFolders() {
      try {
        const res = await fetch('/api/fs/folders?exclude=kanban')
        if (res.ok) {
          const data = await res.json()
          setWorkspaceFolders(data.folders || [])
        }
      } catch (error) {
        console.error('Failed to fetch workspace folders:', error)
      }
    }
    fetchFolders()
  }, [])

  // Compute current workspace from pathname
  const currentWorkspace = (() => {
    const workspaceMatch = pathname.match(/^\/workspace\/([^\/]+)/)
    if (workspaceMatch) {
      const workspacePath = workspaceMatch[1]
      return workspaceFolders.find(f => f.path === workspacePath) || null
    }
    return null
  })()

  function handleWorkspaceSelect(folder: WorkspaceFolder) {
    setIsWorkspaceDialogOpen(false)
    // Save the selected workspace to localStorage
    localStorage.setItem('workspacePath', folder.path)
    router.push(`/workspace/${folder.path}`)
  }

  const isDark = theme === 'dark'
  const isForest = theme === 'forest'
  const isDesert = theme === 'desert'
  const isMountain = theme === 'mountain'

  return (
    <aside
      className={cn(
        'glass-sidebar fixed left-0 top-0 h-full z-40 flex flex-col transition-all duration-300',
        sidebarCollapsed ? 'w-[68px]' : 'w-64'
      )}
    >
      {/* Logo — generous top padding, clear hierarchy */}
      <div
        className={cn(
          'flex items-center gap-3.5 px-5 pt-7 pb-6',
          sidebarCollapsed && 'justify-center px-0'
        )}
        style={{ borderBottom: '1px solid var(--divider)' }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: isForest
              ? 'linear-gradient(135deg, #4ADE80, #16A34A)'
              : isDesert
              ? 'linear-gradient(135deg, #F0A040, #C2602A)'
              : isMountain
              ? 'linear-gradient(135deg, #7ABAFF, #3A6ED8)'
              : isDark
              ? 'linear-gradient(135deg, #FACC15, #EAB308)'
              : 'linear-gradient(135deg, #3B82F6, #6366F1)',
            boxShadow: isForest
              ? '0 2px 10px rgba(74,222,128,0.30)'
              : isDesert
              ? '0 2px 10px rgba(240,160,64,0.30)'
              : isMountain
              ? '0 2px 10px rgba(59,125,216,0.30)'
              : isDark
              ? '0 2px 10px rgba(250,204,21,0.30)'
              : '0 2px 10px rgba(59,130,246,0.30)',
          }}
        >
          <span className="text-[16px]">🍣</span>
        </div>
        {!sidebarCollapsed && (
          <div>
            <div className="text-[15px] font-semibold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
              BentoBoard
            </div>
            <div className="text-[12px] mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>
              Shared Workspace
            </div>
          </div>
        )}
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {/* Workspace selector */}
        <button
          onClick={() => setIsWorkspaceDialogOpen(true)}
          className={cn(
            'w-full flex flex-col items-start gap-0.5 rounded-xl px-3 py-2.5 font-medium transition-all duration-150',
            sidebarCollapsed ? 'justify-center px-0' : ''
          )}
          style={{
            background: pathname.startsWith('/workspace') ? 'var(--nav-item-active)' : 'transparent',
            color: pathname.startsWith('/workspace') ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
          }}
          onMouseEnter={(e) => { if (!pathname.startsWith('/workspace')) (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
          onMouseLeave={(e) => { if (!pathname.startsWith('/workspace')) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
        >
          <div className={cn('flex items-center gap-3 w-full', sidebarCollapsed ? 'justify-center' : '')}>
            <Layers size={18} strokeWidth={1.6} />
            {!sidebarCollapsed && <span className="text-[14px]">Workspace</span>}
          </div>
          {!sidebarCollapsed && currentWorkspace && (
            <div className="text-[11px] ml-8 truncate" style={{ color: 'var(--nav-section-label)' }}>
              {currentWorkspace.displayName}
            </div>
          )}
        </button>

        {/* Divider */}
        {!sidebarCollapsed && (
          <div className="h-px mx-2 my-3" style={{ background: 'var(--divider)' }} />
        )}

        {/* Workspace Folders - shown when not collapsed */}
        {!sidebarCollapsed && workspaceFolders.length > 0 && (
          <>
            {workspaceFolders.map((folder) => (
              <Link
                key={folder.path}
                href={`/workspace/${folder.path}`}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150',
                  sidebarCollapsed ? 'justify-center px-0' : ''
                )}
                style={{
                  background: pathname.startsWith(`/workspace/${folder.path}`) ? 'var(--nav-item-active)' : 'transparent',
                  color: pathname.startsWith(`/workspace/${folder.path}`) ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
                }}
                onMouseEnter={(e) => { if (!pathname.startsWith(`/workspace/${folder.path}`)) (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
                onMouseLeave={(e) => { if (!pathname.startsWith(`/workspace/${folder.path}`)) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                <FolderOpen size={18} strokeWidth={1.6} />
                {!sidebarCollapsed && <span className="flex-1 text-[14px]">{folder.displayName}</span>}
              </Link>
            ))}
          </>
        )}

        {/* Divider */}
        {!sidebarCollapsed && (
          <div className="h-px mx-2 my-3" style={{ background: 'var(--divider)' }} />
        )}

        {/* Projects section */}
        {!sidebarCollapsed && projects.length > 0 && (
          <>
            <span className="text-[11px] font-medium uppercase tracking-wider block px-3" style={{ color: 'var(--nav-section-label)' }}>
              Projects
            </span>
            {projects.map((project) => {
              const href = `/projects/${project.slug}`
              const isActive = pathname === href

              return (
                <Link
                  key={project.slug}
                  href={href}
                  onClick={() => setSelectedProject(project.slug)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 transition-all duration-150"
                  style={{
                    background: isActive ? 'var(--nav-item-active)' : 'transparent',
                    color: isActive ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <FolderOpen size={16} strokeWidth={1.5} />
                  <span className="flex-1 min-w-0">
                    <span className="text-[13px] font-medium block truncate">{project.name}</span>
                    <span className="text-[11px] font-mono truncate block" style={{ color: 'var(--text-muted)' }}>{project.slug}</span>
                  </span>
                </Link>
              )
            })}
          </>
        )}

        {/* Divider */}
        {!sidebarCollapsed && (
          <div className="h-px mx-2 my-3" style={{ background: 'var(--divider)' }} />
        )}

        {/* Bottom sections */}
        <Link
          href="/settings"
          className={cn(
            'flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150',
            sidebarCollapsed ? 'justify-center px-0' : ''
          )}
          style={{
            background: pathname === '/settings' ? 'var(--nav-item-active)' : 'transparent',
            color: pathname === '/settings' ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
          }}
          onMouseEnter={(e) => { if (pathname !== '/settings') (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
          onMouseLeave={(e) => { if (pathname !== '/settings') (e.currentTarget as HTMLElement).style.background = 'transparent' }}
        >
          <Settings size={18} strokeWidth={1.6} />
          {!sidebarCollapsed && <span className="flex-1 text-[14px]">Settings</span>}
        </Link>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)'}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
        >
          {sidebarCollapsed ? <ChevronRight size={16} strokeWidth={2} /> : <ChevronLeft size={16} strokeWidth={2} />}
          {!sidebarCollapsed && <span className="flex-1 text-[14px]">Collapse</span>}
        </button>
      </nav>

      {/* Bottom controls */}
      <div className="px-3 py-3 space-y-1" style={{ borderTop: '1px solid var(--divider)' }}>
        {/* Theme cycle */}
        <button
          onClick={cycle}
          className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150"
          style={{ color: 'var(--nav-item-text)' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)'}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          title={
            theme === 'light'    ? 'Switch to dark'
            : theme === 'dark'   ? 'Switch to forest'
            : theme === 'forest' ? 'Switch to desert'
            : theme === 'desert' ? 'Switch to mountain'
            : 'Switch to light'
          }
        >
          {theme === 'light'    && <Moon         size={18} strokeWidth={1.6} />}
          {theme === 'dark'     && <TreePine     size={18} strokeWidth={1.6} />}
          {theme === 'forest'   && <Sunset       size={18} strokeWidth={1.6} />}
          {theme === 'desert'   && <MountainSnow size={18} strokeWidth={1.6} />}
          {theme === 'mountain' && <Sun          size={18} strokeWidth={1.6} />}
          {!sidebarCollapsed && <span className="flex-1 text-[14px]">
            {theme === 'light'    ? 'Dark mode'
             : theme === 'dark'   ? 'Forest mode'
             : theme === 'forest' ? 'Desert mode'
             : theme === 'desert' ? 'Mountain mode'
             : 'Light mode'}
          </span>}
        </button>
      </div>

      {/* Workspace Selection Dialog */}
      <Dialog
        isOpen={isWorkspaceDialogOpen}
        onClose={() => setIsWorkspaceDialogOpen(false)}
        title="Select Workspace"
        description="Choose a workspace folder to work in"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            {workspaceFolders.map((folder) => (
              <button
                key={folder.path}
                onClick={() => handleWorkspaceSelect(folder)}
                className="w-full glass-card p-3 flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <FolderOpen size={20} style={{ color: 'var(--accent)' }} />
                <div className="flex-1 text-left">
                  <h3 className="text-[14px] font-medium" style={{ color: 'var(--text-primary)' }}>
                    {folder.displayName}
                  </h3>
                  <p className="text-[12px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    {folder.path}
                  </p>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
              </button>
            ))}
            {workspaceFolders.length === 0 && (
              <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
                <p className="text-[14px]">No workspace folders found.</p>
              </div>
            )}
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsWorkspaceDialogOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    </aside>
  )
}
