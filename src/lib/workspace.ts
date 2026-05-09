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
    throw new Error(
      `Missing required environment variable: ${ENV_VAR}\n` +
      `Please set ${ENV_VAR} to the path of your BentoBoard workspace folder.\n` +
      `Example: BENTOBOARD_WORKSPACE_FOLDER=/home/user/.openclaw`
    )
  }

  // Resolve to absolute path
  const absolutePath = path.resolve(workspacePath)

  // Check if path exists
  if (!fs.existsSync(absolutePath)) {
    throw new Error(
      `Workspace folder does not exist: ${absolutePath}\n` +
      `Please ensure ${ENV_VAR} points to a valid directory.`
    )
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
    throw new Error(
      `Environment variable ${ENV_VAR} is not set. ` +
      `Call validateWorkspace() before getWorkspacePath().`
    )
  }
  return path.resolve(workspacePath)
}