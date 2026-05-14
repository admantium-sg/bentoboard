'use client'

import { useState, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ErrorPopupProps {
  error: string | null
  onDismiss?: () => void
  className?: string
}

export function ErrorPopup({ error, onDismiss, className }: ErrorPopupProps) {
  if (!error) return null

  return (
    <div className={cn('fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out', className)}>
      <div
        className="flex items-start gap-3 max-w-sm p-4 rounded-lg shadow-lg border"
        style={{
          backgroundColor: 'var(--bg-elevated)',
          borderColor: 'var(--border-error)',
        }}
      >
        <div
          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: 'var(--status-error)', color: 'white' }}
        >
          !
        </div>
        <p className="flex-1 text-sm" style={{ color: 'var(--text-primary)' }}>
          {error}
        </p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 p-1 rounded hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Dismiss error"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

// Hook for managing error state
export function useErrorPopup() {
  const [error, setError] = useState<string | null>(null)

  const showError = useCallback((message: string) => {
    setError(message)
  }, [])

  const dismissError = useCallback(() => {
    setError(null)
  }, [])

  return { error, showError, dismissError }
}
