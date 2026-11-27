import type { KanbanTicket, KanbanPhase } from '@/lib/types'
import { isPhase } from '@/lib/phases'

export interface ParseResult {
  ticket?: KanbanTicket
  error?: string
}

export interface TicketContext {
  phase?: KanbanPhase
  project?: string
  modifiedAt?: string
}

type Section = 'description' | 'tasks' | 'acceptance-criteria' | 'questions' | 'metadata' | 'phase-history' | 'attempts' | 'other'

function filenameMetadata(filename: string) {
  const name = filename.replace(/\.md$/, '')
  const symbolMatch = name.match(/^([A-Z]+)-(\d+)-([⏳⏸❌])-(.+)$/)
  const standardMatch = name.match(/^([A-Z]+)-(\d+)-(.+)$/)
  const match = symbolMatch ?? standardMatch

  if (!match) {
    return { id: 'UNKNOWN-0', acronym: 'UNKNOWN', number: 0, symbol: undefined, slugTitle: name.replace(/-/g, ' ') }
  }

  return {
    id: `${match[1]}-${match[2]}`,
    acronym: match[1],
    number: Number.parseInt(match[2], 10),
    symbol: symbolMatch ? symbolMatch[3] : undefined,
    slugTitle: (symbolMatch ? symbolMatch[4] : match[3]).replace(/-/g, ' '),
  }
}

export function ticketIdFromFilename(filename: string): string {
  return filenameMetadata(filename).id
}

function sectionFromHeading(heading: string): Section {
  const key = heading.trim().toLowerCase().replace(/&/g, 'and').replace(/[_\s]+/g, '-')
  if (key.startsWith('description')) return 'description'
  if (key.startsWith('tasks')) return 'tasks'
  if (key.startsWith('acceptance')) return 'acceptance-criteria'
  if (key.includes('questions') || key.includes('assumptions')) return 'questions'
  if (key.startsWith('metadata')) return 'metadata'
  if (key.startsWith('phase')) return 'phase-history'
  if (key.startsWith('attempts')) return 'attempts'
  return 'other'
}

function tableCells(line: string): string[] | null {
  const trimmed = line.trim()
  if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return null
  const cells = trimmed.slice(1, -1).split('|').map((cell) => cell.trim())
  if (cells.every((cell) => /^:?-+:?$/.test(cell))) return null
  return cells
}

function checkboxText(line: string): { checked: boolean; text: string } | null {
  const match = line.match(/^-\s*\[([ xX])\]\s*(.+)$/)
  return match ? { checked: match[1].toLowerCase() === 'x', text: match[2].trim() } : null
}

/**
 * Parse a kanban ticket into its visible sections.
 * Padded IDs stay padded: DASH-019.md has id DASH-019 and number 19.
 */
export function parseTicketMarkdown(
  content: string,
  filePath: string,
  context: TicketContext = {}
): ParseResult {
  try {
    const lines = content.split('\n')
    const meta = filenameMetadata(filePath.split('/').pop() ?? '')
    let title = meta.slugTitle
    let section: Section = 'other'
    const descriptionLines: string[] = []
    const tasks: KanbanTicket['tasks'] = []
    const acceptanceCriteria: string[] = []
    const questions: string[] = []
    const assumptions: string[] = []
    const metadata: Record<string, string> = {}
    const phaseHistory: KanbanTicket['phaseHistory'] = []
    const attempts: KanbanTicket['attempts'] = []

    for (const raw of lines) {
      if (!raw.startsWith('##')) {
        const heading = raw.match(/^#\s+(.+)$/)
        if (heading) {
          title = heading[1].trim()
          continue
        }
      }

      const sectionHeading = raw.match(/^##\s+(.+)$/)
      if (sectionHeading) {
        section = sectionFromHeading(sectionHeading[1])
        continue
      }

      const line = raw.trim()
      if (!line) continue

      switch (section) {
        case 'description':
          descriptionLines.push(line)
          break
        case 'tasks': {
          const item = checkboxText(line)
          if (item) tasks.push({ checked: item.checked, text: item.text })
          break
        }
        case 'acceptance-criteria': {
          const item = checkboxText(line)
          if (item) acceptanceCriteria.push(item.text)
          else if (line.startsWith('- ')) acceptanceCriteria.push(line.slice(2).trim())
          break
        }
        case 'questions': {
          const item = checkboxText(line)
          if (item) {
            if (item.checked) assumptions.push(item.text)
            else questions.push(item.text)
          } else if (line.startsWith('- ')) {
            questions.push(line.slice(2).trim())
          }
          break
        }
        case 'metadata': {
          const item = line.match(/^-\s*(.+?):\s*(.+)$/)
          if (item) metadata[item[1].trim()] = item[2].trim()
          break
        }
        case 'phase-history': {
          const cells = tableCells(line)
          if (cells && cells.length >= 2 && isPhase(cells[0])) {
            phaseHistory.push({ phase: cells[0], date: cells[1], notes: cells[2] || undefined })
          }
          break
        }
        case 'attempts': {
          const cells = tableCells(line)
          if (cells && cells.length >= 4 && /^\d+$/.test(cells[0]) && isPhase(cells[1])) {
            attempts.push({
              number: Number.parseInt(cells[0], 10),
              phase: cells[1],
              questionBlock: cells[2],
              attempts: Number.parseInt(cells[3], 10),
              resolution: cells[4] || undefined,
            })
          }
          break
        }
        default:
          break
      }
    }

    const priorityEntry = Object.entries(metadata).find(([key]) => key.toLowerCase() === 'priority')

    return {
      ticket: {
        id: meta.id,
        project: context.project ?? 'unknown',
        acronym: meta.acronym,
        number: meta.number,
        title,
        description: descriptionLines.join('\n'),
        tasks,
        acceptanceCriteria,
        questions,
        assumptions,
        priority: priorityEntry?.[1] ?? 'normal',
        metadata,
        phase: context.phase ?? 'backlog',
        phaseHistory,
        attempts,
        symbol: meta.symbol,
        filePath,
        modifiedAt: context.modifiedAt ?? new Date().toISOString(),
      },
    }
  } catch (error) {
    return { error: `Failed to parse ticket: ${error}` }
  }
}
