/**
 * Path validation and security utilities for file system operations
 */

import { resolve } from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

/**
 * Validate that a path is within the allowed workspace
 * Prevents directory traversal attacks
 */
export function validatePath(path: string, workspace: string = DEFAULT_WORKSPACE): boolean {
  try {
    const resolvedPath = resolve(path)
    const workspaceRoot = resolve(workspace)

    // Check if the resolved path starts with the workspace root
    // This prevents ../ attacks and absolute path escapes
    return resolvedPath.startsWith(workspaceRoot)
  } catch (error) {
    console.error('Error validating path:', error)
    return false
  }
}

/**
 * Sanitize a path by removing dangerous components
 * Removes '..', leading slashes, and other traversal attempts
 */
export function sanitizePath(path: string): string {
  return path
    .split('/')
    .filter((segment) => {
      // Remove empty segments and traversal attempts
      return segment !== '' && segment !== '..' && segment !== '.'
    })
    .join('/')
}

/**
 * Calculate a simple hash of a string for conflict detection
 * Uses a simple hash for demonstration - production should use crypto API
 */
export function calculateHash(content: string): string {
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36)
}
