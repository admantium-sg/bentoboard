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

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-150 relative"
              style={{ color: isActive ? 'var(--nav-item-active-text)' : 'var(--text-muted)' }}
            >
              {tab.icon}
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
