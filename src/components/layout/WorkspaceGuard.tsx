'use client'

import { useEffect, useState } from 'react'

export function WorkspaceGuard({ children }: { children: React.ReactNode }) {
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [workspacePath, setWorkspacePath] = useState<string>('')

  useEffect(() => {
    async function validateWorkspace() {
      try {
        const res = await fetch('/api/fs/browse?path=')
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Failed to validate workspace')
        }
        const data = await res.json()
        setIsValid(true)
        setWorkspacePath(data.basePath || '')
        // Store workspace path for later use
        localStorage.setItem('workspacePath', data.basePath || '')
      } catch (err) {
        setIsValid(false)
        setError(err instanceof Error ? err.message : 'Failed to connect to workspace')
      }
    }
    validateWorkspace()
  }, [])

  if (isValid === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg-base)]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[14px]" style={{ color: 'var(--text-muted)' }}>
            Checking workspace...
          </p>
        </div>
      </div>
    )
  }

  if (!isValid) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg-base)]">
        <div className="max-w-md mx-auto p-6 text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'var(--error-muted)' }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--error)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1
            className="text-[20px] font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Workspace Not Available
          </h1>
          <p
            className="text-[14px] mb-6 whitespace-pre-line"
            style={{ color: 'var(--text-secondary)' }}
          >
            {error || 'Failed to validate workspace folder'}
          </p>
          <div
            className="rounded-xl p-4 text-left"
            style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border-subtle)' }}
          >
            <p className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
              Required Environment Variable
            </p>
            <code
              className="text-[13px] block mb-3 font-mono"
              style={{ color: 'var(--accent)' }}
            >
              BENTOBOARD_WORKSPACE_FOLDER=/path/to/workspace
            </code>
            <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
              Make sure this variable is set and points to a valid, accessible directory.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}