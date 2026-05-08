// ============================================
// FILE SYSTEM TYPES (Active)
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

// ============================================
// DEPRECATED TYPES (Kept for migration compatibility)
// These will be removed in a future version
// ============================================

/** @deprecated Use KanbanTicket instead */
export type ItemType = 'draft' | 'idea' | 'file' | 'task'

/** @deprecated Use KanbanPhase instead */
export type ItemStatus =
  | 'proposed'
  | 'in_review'
  | 'approved'
  | 'rejected'
  | 'done'

/** @deprecated Use string priority in KanbanTicket.metadata instead */
export type Priority = 'normal' | 'high' | 'urgent'

/** @deprecated Use author from session/auth context */
export type Author = 'bento' | 'brian'

/** @deprecated Use file system events for notifications */
export type NotificationType =
  | 'vip_email'
  | 'approval_needed'
  | 'idea_proposed'
  | 'task_complete'
  | 'alert'

/** @deprecated Use KanbanTicket instead */
export interface Item {
  id: string
  type: ItemType
  title: string
  project: string
  status: ItemStatus
  created_by: Author
  content_markdown?: string | null
  content_html?: string | null
  file_path?: string | null
  file_type?: string | null
  description?: string | null
  tags: string[]
  priority: Priority
  due_date?: string | null
  trigger_event_ids?: string[] | null
  trigger_context_id?: string | null
  trigger_reason?: string | null
  destination?: string | null
  auto_execute?: boolean | null
  scheduled_for?: string | null
  created_at: string
  updated_at: string
}

/** @deprecated Use ticket attempts field instead */
export interface Comment {
  id: string
  item_id: string
  author: Author
  content: string
  resolved: boolean
  created_at: string
}

/** @deprecated Use file system derived notifications */
export interface Notification {
  id: string
  type: NotificationType
  title: string
  body?: string | null
  priority: Priority
  read: boolean
  action_item_id?: string | null
  created_at: string
}

/** @deprecated Use kanban project discovery instead */
export interface Project {
  slug: string
  name: string
  emoji?: string | null
  description?: string | null
  color: string
  created_at: string
}

/** @deprecated Use status files instead */
export interface Event {
  id: string
  type: string
  source?: string | null
  raw_content?: string | null
  summary?: string | null
  entities?: string[] | null
  sentiment?: string | null
  topics?: string[] | null
  urgency?: string | null
  people?: string[] | null
  related_projects?: string[] | null
  correlation_ids?: string[] | null
  processed: boolean
  created_at: string
}

/** @deprecated Use markdown-doc type instead */
export type OutreachStatus = 'sent' | 'follow_up' | 'in_conversation' | 'meeting_scheduled' | 'closed' | 'no_response'

/** @deprecated Use markdown-doc type instead */
export interface OutreachCreator {
  id: string
  niche: string | null
  name: string | null
  linkedin_url: string | null
  followers: number | null
  email: string | null
  title: string | null
  headline: string | null
  organization: string | null
  city: string | null
  state: string | null
  country: string | null
  twitter_url: string | null
  outreach_status: OutreachStatus | null
  replied: boolean | null
  reply_summary: string | null
  reply_date: string | null
  created_at: string
  updated_at: string
}

/** @deprecated Use configuration files instead */
export interface Config {
  key: string
  value: Record<string, unknown>
  updated_at: string
}