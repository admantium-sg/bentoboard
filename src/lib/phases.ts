import type { KanbanPhase } from '@/lib/types'

export const PHASES = [
  'backlog',
  'to-do',
  'in-progress',
  'in-review',
  'pull-request',
  'blocked',
  'cancelled',
  'done',
] as const satisfies readonly KanbanPhase[]

export function isPhase(value: unknown): value is KanbanPhase {
  return typeof value === 'string'
    && /^[A-Za-z0-9-]+$/.test(value)
    && PHASES.some((phase) => phase === value)
}
