import type { KanbanTicket, KanbanPhase } from '@/lib/types'

/**
 * Parse kanban ticket markdown format
 * Matches the format from auto-kanban-flow skill
 */

export interface ParseResult {
  ticket?: KanbanTicket
  error?: string
}

/**
 * Extract ticket metadata from filename
 * Format: {ACRONYM}-{NUMBER}-{SYMBOL}-{kebab-title}.md
 * Example: DASH-019-dark-mode.md
 *          USC-005-⏳-conflict-detection.md
 */
function extractTicketMetadata(filename: string): {
  acronym: string
  number: number
  symbol?: string
  title: string
} {
  // Remove .md extension
  const nameWithoutExt = filename.replace(/\.md$/, '')

  // Check for symbol pattern (between dashes)
  const symbolMatch = nameWithoutExt.match(/^-{0,4}-\d+-([⏳⏸❌])-(.+)$/)
  if (symbolMatch) {
    return {
      acronym: symbolMatch[1],
      number: parseInt(symbolMatch[1], 10),
      symbol: symbolMatch[2],
      title: symbolMatch[3].replace(/-/g, ' '),
    }
  }

  // Check for standard pattern without symbol
  const standardMatch = nameWithoutExt.match(/^([A-Z]+)-(\d+)-(.+)$/)
  if (standardMatch) {
    return {
      acronym: standardMatch[1],
      number: parseInt(standardMatch[2], 10),
      title: standardMatch[3].replace(/-/g, ' '),
    }
  }

  // Fallback: use filename as title
  return {
    acronym: 'UNKNOWN',
    number: 0,
    title: nameWithoutExt.replace(/-/g, ' '),
  }
}

/**
 * Parse checkbox list
 * Format: "- [x] Text" or "- [ ] Text"
 */
function parseCheckboxes(lines: string[], startIndex: number): {
  tasks: Array<{ checked: boolean; text: string }>
  nextIndex: number
} {
  const tasks: Array<{ checked: boolean; text: string }> = []
  let i = startIndex

  while (i < lines.length && !lines[i].trim().startsWith('## ')) {
    const line = lines[i].trim()
    const match = line.match(/^-\s*\[([ x])\]\s*(.+)$/)
    if (match) {
      tasks.push({
        checked: match[1] === 'x',
        text: match[2].trim(),
      })
    } else {
      // Stop at next section header
      break
    }
    i++
  }

  return { tasks, nextIndex: i }
}

/**
 * Parse table format
 * | Col1 | Col2 | Col3 |
 */
function parseTable(lines: string[], startIndex: number): {
  rows: Array<{ phase: KanbanPhase; date: string; notes?: string }>
    nextIndex: number
} {
  const rows: Array<{ phase: KanbanPhase; date: string; notes?: string }> = []
  let i = startIndex
  let inTable = false
  let headers: string[] | null = null

  while (i < lines.length) {
    const line = lines[i].trim()

    // Table start marker
    if (line.startsWith('|')) {
      inTable = true

      // Parse header row
      if (line.includes('Phase') && line.includes('Date')) {
        headers = line.split('|').map(h => h.trim()).filter(Boolean)
      } else if (headers && inTable) {
        const cols = line.split('|').map(h => h.trim()).filter(Boolean)
        if (cols.length >= 2) {
          rows.push({
            phase: cols[0] as KanbanPhase,
            date: cols[1],
            notes: cols[2] || undefined,
          })
        }
      }
    } else if (inTable) {
      break
    }

    i++
  }

  return { rows, nextIndex: i }
}

/**
 * Parse phase history table
 * Format:
 * | Phase | Date | Notes |
 * |-------|------|-------|
 * | backlog | 2026-04-20 18:24:00 | Self-drafted |
 */
function parsePhaseHistory(lines: string[], startIndex: number): {
  history: Array<{ phase: KanbanPhase; date: string; notes?: string }>
  nextIndex: number
} {
  const result = parseTable(lines, startIndex)
  return { history: result.rows as Array<{ phase: KanbanPhase; date: string; notes?: string }>, nextIndex: result.nextIndex }
}

/**
 * Parse attempts table
 * Format:
 * | # | Phase | Question/Block | Attempts | Resolution |
 * |---|-------|------------------|-----------|------------|
 * | 1 | in-progress | Question text | 3 | Resolution |
 */
function parseAttempts(lines: string[], startIndex: number): {
  attempts: Array<{ number: number; phase: KanbanPhase; questionBlock: string; attempts: number; resolution?: string }>
  nextIndex: number
} {
  const attempts: Array<{ number: number; phase: KanbanPhase; questionBlock: string; attempts: number; resolution?: string }> = []
  let i = startIndex
  let inTable = false
  let headers: string[] | null = null

  while (i < lines.length) {
    const line = lines[i].trim()

    // Table start marker
    if (line.startsWith('|')) {
      inTable = true

      // Parse header row
      if (line.includes('#') && line.includes('Phase')) {
        headers = line.split('|').map(h => h.trim()).filter(Boolean)
      } else if (headers && inTable) {
        const cols = line.split('|').map(h => h.trim()).filter(Boolean)
        if (cols.length >= 4) {
          attempts.push({
            number: parseInt(cols[0], 10),
            phase: cols[1] as KanbanPhase,
            questionBlock: cols[2],
            attempts: parseInt(cols[3], 10),
            resolution: cols[4] || undefined,
          })
        }
      }
    } else if (inTable) {
      break
    }

    i++
  }

  return { attempts, nextIndex: i }
}

/**
 * Parse metadata section
 * Format: "## Metadata\n- Key: Value"
 */
function parseMetadata(lines: string[], startIndex: number): {
  metadata: Record<string, string>
  nextIndex: number
} {
  const metadata: Record<string, string> = {}
  let i = startIndex

  while (i < lines.length) {
    const line = lines[i].trim()

    if (line.startsWith('## ') || line.startsWith('---')) {
      break
    }

    const match = line.match(/^-\s*(.+):\s*(.+)$/)
    if (match) {
      metadata[match[1].trim()] = match[2].trim()
    }

    i++
  }

  return { metadata, nextIndex: i }
}

/**
 * Main parser function
 */
export function parseTicketMarkdown(
  content: string,
  filePath: string
): ParseResult {
  try {
    const lines = content.split('\n')
    let i = 0

    // Extract title (first H1)
    const titleMatch = lines[i]?.match(/^#\s*(.+)$/)
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled'
    i++

    // Extract description
    let description = ''
    const descriptionLines: string[] = []
    while (i < lines.length && !lines[i].trim().startsWith('## ')) {
      const line = lines[i].trim()
      if (line && !line.startsWith('-') && !line.startsWith('|')) {
        descriptionLines.push(line)
      }
      i++
    }
    description = descriptionLines.join('\n').trim()

    // Extract tasks
    const { tasks, nextIndex: tasksIndex } = parseCheckboxes(lines, i)

    // Extract acceptance criteria
    const acceptanceCriteria: string[] = []
    let inACSection = false
    while (i < lines.length && !lines[i].trim().startsWith('## ')) {
      const line = lines[i].trim()
      if (line.startsWith('## Acceptance Criteria') || line.startsWith('## Acceptance criteria')) {
        inACSection = true
        i++
        continue
      }
      if (inACSection) {
        const match = line.match(/^-\s*\[([ x])\]\s*(.+)$/)
        if (match) {
          acceptanceCriteria.push(match[2].trim())
        } else if (!line.startsWith('-') && !line.startsWith('|')) {
          break
        }
      }
      i++
    }

    // Extract questions & assumptions
    const questions: string[] = []
    const assumptions: string[] = []
    let inQACheckSection = false
    while (i < lines.length && !lines[i].trim().startsWith('## ')) {
      const line = lines[i].trim()
      if (line.startsWith('## Questions & Assumption Check') || line.startsWith('## Questions & assumption check')) {
        inQACheckSection = true
        i++
        continue
      }
      if (inQACheckSection) {
        const match = line.match(/^-\s*\[([ x])\]\s*(.+)$/)
        if (match) {
          if (match[1] === 'x') {
            assumptions.push(match[2].trim())
          } else {
            questions.push(match[2].trim())
          }
        } else if (!line.startsWith('-') && !line.startsWith('|')) {
          break
        }
      }
      i++
    }

    // Extract phase history
    const { history: phaseHistory, nextIndex: phaseHistoryNextIndex } = parsePhaseHistory(lines, tasksIndex)

    // Extract attempts
    const { attempts, nextIndex: attemptsIndex } = parseAttempts(lines, phaseHistoryNextIndex)

    // Extract metadata
    const { metadata } = parseMetadata(lines, Math.max(attemptsIndex, phaseHistoryNextIndex))

    // Extract priority from metadata
    const priority = metadata['Priority'] || 'normal'

    // Extract filename metadata
    const filename = filePath.split('/').pop() || ''
    const { acronym, number, symbol } = extractTicketMetadata(filename)

    return {
      ticket: {
        id: `${acronym}-${number}`,
        project: 'unknown', // Will be set from directory path
        acronym,
        number,
        title,
        description,
        tasks,
        acceptanceCriteria,
        questions,
        assumptions,
        priority,
        metadata,
        phase: 'backlog', // Will be set from directory
        phaseHistory,
        attempts,
        symbol,
        filePath,
        modifiedAt: new Date().toISOString(),
      },
    }
  } catch (error) {
    return {
      error: `Failed to parse ticket: ${error}`,
    }
  }
}
