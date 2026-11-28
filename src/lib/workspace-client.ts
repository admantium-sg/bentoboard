/**
 * Client-side workspace folder choice utilities.
 * Server base paths come from /api/fs/browse, not localStorage.
 */

'use client'

const ENV_VAR = 'NEXT_PUBLIC_BENTOBOARD_WORKSPACE_FOLDER'
export const WORKSPACE_CHOICE_KEY = 'bentoboard-workspace-folder'

export function getClientWorkspacePath(): string {
  if (typeof window !== 'undefined') {
    return process.env[ENV_VAR] || localStorage.getItem(WORKSPACE_CHOICE_KEY) || ''
  }
  return process.env[ENV_VAR] || ''
}

export function hasWorkspacePath(): boolean {
  return getClientWorkspacePath().length > 0
}
