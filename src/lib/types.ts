// ============================================
// FILE SYSTEM TYPES
// ============================================

export type KanbanPhase =
  | 'backlog'
  | 'to-do'
  | 'in-progress'
  | 'in-review'
  | 'pull-request'
  | 'blocked'
  | 'cancelled'
  | 'done'

export type ContentType = 'kanban-ticket' | 'markdown-doc' | 'session-registry' | 'status-file'

export interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: FileNode[]
  size?: number
  modifiedAt: string
}

export interface KanbanTicket {
  id: string                  // e.g., "DASH-019"
  project: string           // e.g., "openclaw-kanban-dashboard"
  acronym: string          // e.g., "DASH"
  number: number           // e.g., 19
  title: string
  description: string
  tasks: TicketTask[]
  acceptanceCriteria: string[]
  questions: string[]
  assumptions: string[]
  priority?: string
  metadata: Record<string, string>
  phase: KanbanPhase
  phaseHistory: PhaseHistoryEntry[]
  attempts: AttemptEntry[]
  symbol?: string          // e.g., "⏳" or "❌"
  filePath: string         // Absolute path to file
  modifiedAt: string
}

export interface TicketTask {
  checked: boolean
  text: string
}

export interface PhaseHistoryEntry {
  phase: KanbanPhase
  date: string
  notes?: string
}

export interface AttemptEntry {
  number: number
  phase: KanbanPhase
  questionBlock: string
  attempts: number
  resolution?: string
}

export interface SessionRegistry {
  startedAt: string
  lastHeartbeat: string
  activeTicket: string | null
  activeBranch: string | null
  phase: KanbanPhase | null
  project: string
}

export interface AgentStatus {
  agent: string
  state: string
  currentTask: string
  progress: string
  blockers: string[]
  inputFiles: string[]
  outputFiles: string[]
  updatedAt: string
}

export interface MarkdownDoc {
  path: string
  title: string
  content: string
  category: string       // e.g., "research-findings", "feature-ideas", "run-report"
  project: string
  modifiedAt: string
}
