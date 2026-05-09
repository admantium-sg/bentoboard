/**
 * File system path constants and utilities
 */

import 'server-only'
import { getWorkspacePath } from '@/lib/workspace'

export const getKanbanRoot = () => `${getWorkspacePath()}/kanban`
export const getSessionsDir = () => `${getKanbanRoot()}/sessions`

export const PHASES = [
  'backlog',
  'to-do',
  'in-progress',
  'in-review',
  'pull-request',
  'blocked',
  'cancelled',
] as const

export type KanbanPhase = typeof PHASES[number]

/**
 * Get project directory path
 */
export function getProjectPath(project: string): string {
  return `${getKanbanRoot()}/${project}`
}

/**
 * Get phase directory path
 */
export function getPhasePath(project: string, phase: KanbanPhase): string {
  return `${getProjectPath(project)}/${phase}`
}

/**
 * Get ticket file path (need to find actual filename)
 */
export function getTicketsPath(project: string): string {
  return getProjectPath(project)
}

/**
 * Get session file path
 */
export function getSessionPath(acronym: string): string {
  return `${getSessionsDir()}/${acronym}-session.json`
}