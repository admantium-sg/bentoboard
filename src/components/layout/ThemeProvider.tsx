'use client'

import { useThemeInit } from '@/lib/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useThemeInit()
  return <>{children}</>
}
