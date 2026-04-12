export type ItemType = 'draft' | 'idea' | 'file' | 'task'

export type ItemStatus =
  | 'proposed'
  | 'in_review'
  | 'approved'
  | 'rejected'
  | 'done'

export type Priority = 'normal' | 'high' | 'urgent'

export type Author = 'bento' | 'brian'

export type NotificationType =
  | 'vip_email'
  | 'approval_needed'
  | 'idea_proposed'
  | 'task_complete'
  | 'alert'

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
  // Extended fields from DB
  trigger_event_ids?: string[] | null
  trigger_context_id?: string | null
  trigger_reason?: string | null
  destination?: string | null
  auto_execute?: boolean | null
  scheduled_for?: string | null
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  item_id: string
  author: Author
  content: string
  resolved: boolean
  created_at: string
}

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

export interface Project {
  slug: string
  name: string
  emoji?: string | null
  description?: string | null
  color: string
  created_at: string
}

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

export interface Config {
  key: string
  value: Record<string, unknown>
  updated_at: string
}
