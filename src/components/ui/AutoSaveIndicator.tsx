'use client'

import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Check, Loader2, AlertCircle } from 'lucide-react'

export type SaveState = 'idle' | 'saving' | 'saved' | 'error' | 'unsaved'

export interface AutoSaveIndicatorProps {
  state: SaveState
  lastSaved?: Date | null
  error?: string | null
  className?: string
}

export function AutoSaveIndicator({ state, lastSaved, error, className }: AutoSaveIndicatorProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (state !== 'idle') {
      requestAnimationFrame(() => {
        setVisible(true)
      })
    } else {
      const timer = setTimeout(() => setVisible(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [state])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getContent = () => {
    switch (state) {
      case 'saving':
        return (
          <>
            <Loader2 size={12} className="animate-spin" />
            <span>Saving...</span>
          </>
        )
      case 'saved':
        return (
          <>
            <Check size={12} />
            <span>Saved at {lastSaved ? formatTime(lastSaved) : ''}</span>
          </>
        )
      case 'error':
        return (
          <>
            <AlertCircle size={12} />
            <span>{error || 'Failed to save'}</span>
          </>
        )
      case 'unsaved':
        return (
          <>
            <AlertCircle size={12} />
            <span>Unsaved changes</span>
          </>
        )
      default:
        return (
          <>
            <Check size={12} />
            <span>Saved</span>
          </>
        )
    }
  }

  const getColor = () => {
    switch (state) {
      case 'error':
        return 'var(--status-error)'
      case 'saved':
      case 'idle':
        return 'var(--status-success)'
      default:
        return 'var(--text-muted)'
    }
  }

  const getBorderColor = () => {
    if (state === 'error') return 'var(--border-error)'
    return 'var(--border-default)'
  }

  if (!visible && state === 'idle') return null

  return (
    <div
      className={cn(
        'fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-200',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        className
      )}
    >
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border shadow-sm"
        style={{
          backgroundColor: 'var(--bg-elevated)',
          borderColor: getBorderColor(),
          color: getColor(),
        }}
      >
        {getContent()}
      </div>
    </div>
  )
}

// Hook for managing auto-save state
export function useAutoSave() {
  const [state, setState] = useState<SaveState>('idle')
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [error, setError] = useState<string | null>(null)

  const save = useCallback(async (saveFn: () => Promise<void>) => {
    setState('saving')
    setError(null)
    try {
      await saveFn()
      setState('saved')
      setLastSaved(new Date())
    } catch (e) {
      setState('error')
      setError(e instanceof Error ? e.message : 'Save failed')
    }
  }, [])

  const markUnsaved = useCallback(() => {
    setState('unsaved')
  }, [])

  const reset = useCallback(() => {
    setState('idle')
    setError(null)
  }, [])

  return { state, lastSaved, error, save, markUnsaved, reset }
}
