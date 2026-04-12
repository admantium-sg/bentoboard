'use client'

import { useEffect } from 'react'
import { useBentoStore } from '@/lib/store'

export default function SidebarPaddingSync() {
  const sidebarCollapsed = useBentoStore((s) => s.sidebarCollapsed)

  useEffect(() => {
    const width = sidebarCollapsed ? '68px' : '256px'
    document.documentElement.style.setProperty('--sidebar-width', width)
  }, [sidebarCollapsed])

  return null
}
