import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'
import { DataProvider } from '@/components/layout/DataProvider'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <div className="flex h-full min-h-screen">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content */}
        <main
          className="flex-1 min-w-0 overflow-y-auto transition-all duration-300"
          id="main-content"
          style={{ paddingLeft: 'var(--sidebar-width, 0)' }}
        >
          <SidebarPaddingSync />
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 pb-28 md:pb-12">
            {children}
          </div>
        </main>

        {/* Mobile bottom nav */}
        <MobileNav />
      </div>
    </DataProvider>
  )
}

// Client component to sync sidebar width to CSS variable
function SidebarPaddingSync() {
  return <SidebarPaddingSyncClient />
}

import SidebarPaddingSyncClient from '@/components/layout/SidebarPaddingSync'
