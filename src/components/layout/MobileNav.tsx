'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBentoStore } from '@/lib/store'
import { Inbox, FileText, Lightbulb, FolderOpen, CheckSquare } from 'lucide-react'

const TABS = [
  { href: '/inbox',  label: 'Inbox',  icon: <Inbox       size={20} strokeWidth={1.75} /> },
  { href: '/drafts', label: 'Drafts', icon: <FileText     size={20} strokeWidth={1.75} /> },
  { href: '/ideas',  label: 'Ideas',  icon: <Lightbulb    size={20} strokeWidth={1.75} /> },
  { href: '/files',  label: 'Files',  icon: <FolderOpen   size={20} strokeWidth={1.75} /> },
  { href: '/tasks',  label: 'Tasks',  icon: <CheckSquare  size={20} strokeWidth={1.75} /> },
]

export function MobileNav() {
  const pathname = usePathname()
  const { unreadCount } = useBentoStore()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="flex items-center justify-around px-2 py-2"
        style={{
          background: 'var(--glass-sidebar)',
          backdropFilter: 'var(--glass-blur-heavy)',
          WebkitBackdropFilter: 'var(--glass-blur-heavy)',
          borderTop: '1px solid var(--divider)',
        }}
      >
        {TABS.map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(tab.href + '/')
          const badge = tab.href === '/inbox' ? unreadCount : 0

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 relative"
              style={{ color: isActive ? 'var(--nav-item-active-text)' : 'var(--text-muted)' }}
            >
              <span className="relative">
                {tab.icon}
                {badge > 0 && (
                  <span
                    className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] flex items-center justify-center rounded-full text-[8px] font-bold text-white px-1"
                    style={{ background: 'var(--danger)' }}
                  >
                    {badge > 99 ? '99+' : badge}
                  </span>
                )}
              </span>
              <span className="text-[9px] font-medium tracking-wide">
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
