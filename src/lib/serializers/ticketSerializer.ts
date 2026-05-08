import type { KanbanTicket, KanbanPhase } from '@/lib/types'

/**
 * Serialize kanban ticket object back to markdown format
 * Matches the format from auto-kanban-flow skill
 */

/**
 * Format checkbox list item
 */
function formatCheckbox(checked: boolean, text: string): string {
  return `- [${checked ? 'x' : ' '}] ${text}`
}

/**
 * Format phase history table row
 */
function formatPhaseHistoryRow(phase: KanbanPhase, date: string, notes?: string): string {
  return `| ${phase} | ${date} | ${notes || ''} |`
}

/**
 * Format attempts table row
 */
function formatAttemptsRow(
  number: number,
  phase: KanbanPhase,
  questionBlock: string,
  attempts: number,
  resolution?: string
): string {
  return `| ${number} | ${phase} | ${questionBlock} | ${attempts} | ${resolution || ''} |`
}

/**
 * Serialize ticket object to markdown
 */
export function serializeTicketToMarkdown(ticket: KanbanTicket): string {
  const lines: string[] = []

  // Title (H1)
  lines.push(`#${ticket.id} ${ticket.title}`)
  lines.push('')

  // Description
  if (ticket.description) {
    lines.push('## Description')
    lines.push(ticket.description)
    lines.push('')
  }

  // Tasks
  if (ticket.tasks.length > 0) {
    lines.push('## Tasks')
    ticket.tasks.forEach((task) => {
      lines.push(formatCheckbox(task.checked, task.text))
    })
    lines.push('')
  }

  // Acceptance Criteria
  if (ticket.acceptanceCriteria.length > 0) {
    lines.push('## Acceptance Criteria')
    ticket.acceptanceCriteria.forEach((ac) => {
      lines.push(formatCheckbox(true, ac))
    })
    lines.push('')
  }

  // Questions & Assumptions
  const hasQuestions = ticket.questions && ticket.questions.length > 0
  const hasAssumptions = ticket.assumptions && ticket.assumptions.length > 0

  if (hasQuestions || hasAssumptions) {
    lines.push('## Questions & Assumption Check')
    ticket.questions?.forEach((q) => {
      lines.push(formatCheckbox(true, q))
    })
    ticket.assumptions?.forEach((a) => {
      lines.push(formatCheckbox(true, a))
    })
    lines.push('')
  }

  // Metadata
  if (Object.keys(ticket.metadata || {}).length > 0) {
    lines.push('## Metadata')
    Object.entries(ticket.metadata).forEach(([key, value]) => {
      lines.push(`- ${key}: ${value}`)
    })
    lines.push('')
  }

  // Phase History
  if (ticket.phaseHistory && ticket.phaseHistory.length > 0) {
    lines.push('## Phase History')
    lines.push('| Phase | Date | Notes |')
    lines.push('|-------|------|-------|')
    ticket.phaseHistory.forEach((entry) => {
      lines.push(formatPhaseHistoryRow(entry.phase, entry.date, entry.notes))
    })
    lines.push('')
  }

  // Attempts
  if (ticket.attempts && ticket.attempts.length > 0) {
    lines.push('## Attempts')
    lines.push('| # | Phase | Question/Block | Attempts | Resolution |')
    lines.push('|---|-------|------------------|----------|------------|')
    ticket.attempts.forEach((attempt) => {
      lines.push(formatAttemptsRow(
        attempt.number,
        attempt.phase,
        attempt.questionBlock,
        attempt.attempts,
        attempt.resolution
      ))
    })
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Generate ticket filename with symbol
 * Format: {ACRONYM}-{NUMBER}-{SYMBOL}-{kebab-title}.md
 */
export function generateTicketFilename(
  acronym: string,
  number: number,
  title: string,
  symbol?: string | null
): string {
  const kebabTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  if (symbol) {
    return `${acronym}-${number}-${symbol}-${kebabTitle}.md`
  }
  return `${acronym}-${number}-${kebabTitle}.md`
}

/**
 * Add phase history entry to ticket
 */
export function addPhaseHistoryEntry(
  ticket: KanbanTicket,
  newPhase: KanbanPhase,
  notes?: string
): KanbanTicket {
  const timestamp = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '') + ':00'

  return {
    ...ticket,
    phase: newPhase,
    phaseHistory: [
      ...ticket.phaseHistory,
      { phase: newPhase, date: timestamp, notes },
    ],
  }
}
