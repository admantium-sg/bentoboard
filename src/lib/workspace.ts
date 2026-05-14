/**
 * Server-side workspace path validation and utilities
 * This file is server-only - do not import from client components
 */

import 'server-only'
import fs from 'fs'
import path from 'path'

const ENV_VAR = 'BENTOBOARD_WORKSPACE_FOLDER'

/**
 * Validates that BENTOBOARD_WORKSPACE_FOLDER env var is set and accessible.
 * Throws an error if not valid - preventing the app from starting.
 */
export function validateWorkspace(): string {
  const workspacePath = process.env[ENV_VAR]

  if (!workspacePath) {
    // For development, create a default workspace if env var is not set
    console.warn(`${ENV_VAR} not set, creating default workspace`)
    const defaultPath = path.resolve('/tmp/workspace')
    
    // Create default workspace if it doesn't exist
    if (!fs.existsSync(defaultPath)) {
      fs.mkdirSync(defaultPath, { recursive: true })
    }
    return defaultPath
  }

  // Resolve to absolute path
  const absolutePath = path.resolve(workspacePath)

  // Create workspace if it doesn't exist
  if (!fs.existsSync(absolutePath)) {
    console.warn(`Workspace does not exist, creating: ${absolutePath}`)
    fs.mkdirSync(absolutePath, { recursive: true })
  }

  // Check if it's a directory
  try {
    const stats = fs.statSync(absolutePath)
    if (!stats.isDirectory()) {
      throw new Error(
        `Workspace path is not a directory: ${absolutePath}\n` +
        `${ENV_VAR} must point to a folder, not a file.`
      )
    }
  } catch (err) {
    if (err instanceof Error && err.message.startsWith('Workspace path')) {
      throw err
    }
    throw new Error(
      `Cannot access workspace folder: ${absolutePath}\n` +
      `Please check permissions for ${ENV_VAR}.`
    )
  }

  // Check read permissions
  try {
    fs.accessSync(absolutePath, fs.constants.R_OK)
  } catch {
    throw new Error(
      `No read permission for workspace folder: ${absolutePath}\n` +
      `Please check file permissions for ${ENV_VAR}.`
    )
  }

  // Check write permissions
  try {
    fs.accessSync(absolutePath, fs.constants.W_OK)
  } catch {
    throw new Error(
      `No write permission for workspace folder: ${absolutePath}\n` +
      `Please check file permissions for ${ENV_VAR}.`
    )
  }

  return absolutePath
}

/**
 * Get the validated workspace path.
 * This should only be called after validateWorkspace() has been called.
 */
export function getWorkspacePath(): string {
  const workspacePath = process.env[ENV_VAR]
  if (!workspacePath) {
    // Return a default path for development/testing
    // In production, this should be set via environment variable
    console.warn(`${ENV_VAR} not set, using default path`)
    return path.resolve('/tmp/workspace')
  }
  return path.resolve(workspacePath)
}