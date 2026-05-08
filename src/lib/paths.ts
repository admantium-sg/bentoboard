/**
 * File system path constants and utilities
 */

export const SHARED_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
export const KANBAN_ROOT = `${SHARED_WORKSPACE}/kanban`
export const SESSIONS_DIR = `${KANBAN_ROOT}/sessions`

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
  return `${KANBAN_ROOT}/${project}`
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
  return `${SESSIONS_DIR}/${acronym}-session.json`
}
