'use client'

import { useEffect } from 'react'
import { create } from 'zustand'

export type Theme = 'light' | 'dark' | 'forest' | 'desert' | 'mountain'

const CYCLE: Theme[] = ['light', 'dark', 'forest', 'desert', 'mountain']

interface ThemeStore {
  theme: Theme
  setTheme: (t: Theme) => void
  cycle: () => void
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  setTheme: (theme) => {
    set({ theme })
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('bb-theme', theme)
    }
  },
  cycle: () => {
    const current = get().theme
    const idx = CYCLE.indexOf(current)
    const next = CYCLE[(idx + 1) % CYCLE.length]
    get().setTheme(next)
  },
}))

/** Call once at the top of the component tree to hydrate from localStorage */
export function useThemeInit() {
  const setTheme = useThemeStore((s) => s.setTheme)
  useEffect(() => {
    const stored = localStorage.getItem('bb-theme') as Theme | null
    const valid: Theme[] = ['light', 'dark', 'forest', 'desert', 'mountain']
    const resolved: Theme = valid.includes(stored as Theme) ? (stored as Theme) : 'light'
    setTheme(resolved)
  }, [setTheme])
}
