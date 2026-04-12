'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBentoStore } from '@/lib/store'
import { useThemeStore } from '@/lib/theme'
import { cn } from '@/lib/utils'
import { DEFAULT_PROJECTS } from '@/lib/utils'
import {
  Inbox,
  FileText,
  Lightbulb,
  FolderOpen,
  CheckSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  TreePine,
  Sunset,
  MountainSnow,
} from 'lucide-react'

const NAV_ITEMS = [
  { href: '/inbox',  label: 'Inbox',  icon: <Inbox       size={18} strokeWidth={1.6} /> },
  { href: '/drafts', label: 'Drafts', icon: <FileText     size={18} strokeWidth={1.6} /> },
  { href: '/ideas',  label: 'Ideas',  icon: <Lightbulb    size={18} strokeWidth={1.6} /> },
  { href: '/files',  label: 'Files',  icon: <FolderOpen   size={18} strokeWidth={1.6} /> },
  { href: '/tasks',  label: 'Tasks',  icon: <CheckSquare  size={18} strokeWidth={1.6} /> },
]

export function Sidebar() {
  const pathname = usePathname()
  const { unreadCount, sidebarCollapsed, setSidebarCollapsed } = useBentoStore()
  const { theme, cycle, setTheme } = useThemeStore()
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
          <span className="text-white text-[11px] font-bold tracking-tight">BB</span>
        </div>
        {!sidebarCollapsed && (
          <div>
            <div className="text-[15px] font-semibold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
              BentoBoard
            </div>
            <div className="text-[12px] mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>
              Brian &amp; Bento
            </div>
          </div>
        )}
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const badgeCount = item.href === '/inbox' ? unreadCount : undefined

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150 relative',
                sidebarCollapsed ? 'justify-center px-0' : ''
              )}
              style={{
                background: isActive ? 'var(--nav-item-active)' : 'transparent',
                color: isActive ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
              }}
              onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
              onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <span className="flex-shrink-0 relative">
                {item.icon}
                {badgeCount && badgeCount > 0 && (
                  <span
                    className={cn(
                      'absolute -top-1.5 -right-1.5 min-w-[16px] h-4 flex items-center justify-center rounded-full text-[9px] font-bold text-white px-1',
                      !sidebarCollapsed && 'hidden'
                    )}
                    style={{ background: 'var(--danger)' }}
                  >
                    {badgeCount > 99 ? '99+' : badgeCount}
                  </span>
                )}
              </span>
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-[14px]">{item.label}</span>
                  {badgeCount && badgeCount > 0 && (
                    <span
                      className="min-w-[20px] h-5 flex items-center justify-center rounded-full text-[10px] font-bold text-white px-1.5"
                      style={{ background: 'var(--danger)' }}
                    >
                      {badgeCount > 99 ? '99+' : badgeCount}
                    </span>
                  )}
                </>
              )}
            </Link>
          )
        })}

        {/* Projects section */}
        {!sidebarCollapsed && (
          <div className="px-3 pt-6 pb-2">
            <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: 'var(--nav-section-label)' }}>
              Projects
            </span>
          </div>
        )}
        {sidebarCollapsed && (
          <div className="h-px mx-2 my-3" style={{ background: 'var(--divider)' }} />
        )}

        {DEFAULT_PROJECTS.map((project) => {
          const href = `/drafts?project=${project.slug}`
          const isActive = pathname.includes(`project=${project.slug}`)

          return (
            <Link
              key={project.slug}
              href={href}
              className={cn(
                'flex items-center gap-2.5 rounded-xl px-3 py-2 transition-all duration-150',
                sidebarCollapsed ? 'justify-center px-0' : ''
              )}
              style={{
                background: isActive ? 'var(--nav-item-active)' : 'transparent',
                color: isActive ? 'var(--nav-item-active-text)' : 'var(--nav-item-text)',
              }}
              title={project.name}
              onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)' }}
              onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
              {!sidebarCollapsed && (
                <span className="truncate text-[13px]">{project.name}</span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom controls */}
      <div className="px-3 py-3 space-y-1" style={{ borderTop: '1px solid var(--divider)' }}>
        {/* Theme cycle */}
        <button
          onClick={cycle}
          className={cn(
            'w-full flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150',
            sidebarCollapsed ? 'justify-center px-0' : ''
          )}
          style={{ color: 'var(--nav-item-text)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
          title={
            theme === 'light'    ? 'Switch to dark'
            : theme === 'dark'   ? 'Switch to forest'
            : theme === 'forest' ? 'Switch to desert'
            : theme === 'desert' ? 'Switch to mountain'
            : 'Switch to light'
          }
        >
          {theme === 'light'    && <Moon         size={18} strokeWidth={1.6} />}
          {theme === 'dark'     && <TreePine     size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />}
          {theme === 'forest'   && <Sunset       size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />}
          {theme === 'desert'   && <MountainSnow size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />}
          {theme === 'mountain' && <Sun          size={18} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />}
          {!sidebarCollapsed && (
            <span className="text-[14px]">
              {theme === 'light'    ? 'Dark mode'
               : theme === 'dark'   ? 'Forest mode'
               : theme === 'forest' ? 'Desert mode'
               : theme === 'desert' ? 'Mountain mode'
               : 'Light mode'}
            </span>
          )}
        </button>

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
          {!sidebarCollapsed && <span className="text-[14px]">Settings</span>}
        </Link>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={cn(
            'w-full flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150',
            sidebarCollapsed ? 'justify-center px-0' : ''
          )}
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--nav-item-hover)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
        >
          {sidebarCollapsed ? <ChevronRight size={16} strokeWidth={2} /> : <ChevronLeft size={16} strokeWidth={2} />}
          {!sidebarCollapsed && <span className="text-[13px]">Collapse</span>}
        </button>
      </div>
    </aside>
  )
}
