'use client'

import { useThemeInit } from '@/lib/theme'
import { WorkspaceGuard } from './WorkspaceGuard'

export function Providers({ children }: { children: React.ReactNode }) {
  useThemeInit()
  return <WorkspaceGuard>{children}</WorkspaceGuard>
}