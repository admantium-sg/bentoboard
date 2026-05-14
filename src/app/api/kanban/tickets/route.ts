import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
const getKanbanRoot = () => `${getWorkspacePath()}/kanban`

const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled', 'done']

const TICKET_TEMPLATE = `# {TITLE}

## Description

## Tasks
- [ ]

## Acceptance Criteria
- [ ]
`

/**
 * List tickets by project and phase
 * GET /api/kanban/tickets?project=...&phase=...
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const project = searchParams.get('project')
    const phase = searchParams.get('phase')

    if (!project) {
      return NextResponse.json(
        { error: 'Project parameter required' },
        { status: 400 }
      )
    }

    const projectPath = path.join(getKanbanRoot(), project)

    if (!fs.existsSync(projectPath)) {
      return NextResponse.json({
        project,
        phase,
        tickets: [],
        message: 'Project not found',
      })
    }

    const tickets: ParsedTicket[] = []

    if (phase) {
      // Get tickets from specific phase
      const phasePath = path.join(projectPath, phase)
      if (fs.existsSync(phasePath)) {
        const files = fs.readdirSync(phasePath).filter((f) => f.endsWith('.md'))
        for (const file of files) {
          const filePath = path.join(phasePath, file)
          try {
            tickets.push(parseTicketFile(filePath, phase))
          } catch (error) {
            console.error('Failed to parse ticket:', file, error)
          }
        }
      }
    } else {
      // Get all tickets from all phases
      for (const p of PHASES) {
        const phasePath = path.join(projectPath, p)
        if (fs.existsSync(phasePath)) {
          const files = fs.readdirSync(phasePath).filter((f) => f.endsWith('.md'))
          for (const file of files) {
            const filePath = path.join(phasePath, file)
            try {
              tickets.push(parseTicketFile(filePath, p))
            } catch (error) {
              console.error('Failed to parse ticket:', file, error)
            }
          }
        }
      }
    }

    // Sort by modified time (newest first)
    tickets.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())

    return NextResponse.json({
      project,
      phase,
      tickets,
    })
  } catch (error) {
    console.error('Error in /api/kanban/tickets:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Create a new ticket
 * POST /api/kanban/tickets
 * Body: { project, title, phase }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { project, title, phase = 'backlog' } = body

    if (!project || !title) {
      return NextResponse.json(
        { error: 'project and title required' },
        { status: 400 }
      )
    }

    // Validate phase
    if (!PHASES.includes(phase)) {
      return NextResponse.json(
        { error: `Invalid phase: ${phase}. Must be one of: ${PHASES.join(', ')}` },
        { status: 400 }
      )
    }

    // Get project path and ensure it exists
    const projectPath = path.join(getKanbanRoot(), project)
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true })
      // Create phase directories
      PHASES.forEach((p) => {
        const phasePath = path.join(projectPath, p)
        if (!fs.existsSync(phasePath)) {
          fs.mkdirSync(phasePath, { recursive: true })
        }
      })
    }

    // Find acronym and next ticket number from existing tickets
    let acronym: string | null = null
    let maxNumber = 0

    for (const p of PHASES) {
      const phasePath = path.join(projectPath, p)
      if (fs.existsSync(phasePath)) {
        const files = fs.readdirSync(phasePath).filter((f) => f.endsWith('.md'))
        for (const file of files) {
          const match = file.match(/^([A-Z]+)-(\d+)-/)
          if (match) {
            // Set acronym from first found ticket
            if (!acronym) {
              acronym = match[1]
            }
            const num = parseInt(match[2], 10)
            if (num > maxNumber) {
              maxNumber = num
            }
          }
        }
      }
    }

    // If no existing tickets, derive acronym from project name
    if (!acronym) {
      acronym = project
        .split('-')
        .map((w: string) => w.charAt(0).toUpperCase())
        .join('')
        .slice(0, 3)
    }

    const nextNumber = maxNumber + 1

    // Create ticket filename
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    const filename = `${acronym}-${String(nextNumber).padStart(3, '0')}-${slug}.md`
    const filePath = path.join(projectPath, phase, filename)

    // Create ticket content
    const content = TICKET_TEMPLATE.replace('{TITLE}', title)

    // Write file
    fs.writeFileSync(filePath, content, 'utf-8')

    const ticketId = `${acronym}-${String(nextNumber).padStart(3, '0')}`

    return NextResponse.json({
      success: true,
      ticket: {
        id: ticketId,
        path: `kanban/${project}/${phase}/${filename}`,
        filename,
        title,
        phase,
      },
    })
  } catch (error) {
    console.error('Error in POST /api/kanban/tickets:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

interface ParsedTicket {
  id: string
  project: string
  acronym: string
  number: number
  title: string
  description: string
  tasks: Array<{ checked: boolean; text: string }>
  acceptanceCriteria: string[]
  questions: string[]
  assumptions: string[]
  priority: string
  metadata: Record<string, string>
  phase: string
  phaseHistory: Array<{ phase: string; date: string; notes?: string }>
  attempts: unknown[]
  symbol: string | null
  filePath: string
  modifiedAt: string
}

/**
 * Parse ticket ID from filename
 */
function parseTicketId(filename: string): { acronym: string; number: number; symbol: string | null } {
  const nameWithoutExt = filename.replace(/\.md$/, '')

  // Pattern with symbol: ACRONYM-NUMBER-SYMBOL-title
  const symbolMatch = nameWithoutExt.match(/^([A-Z]+)-(\d+)-([⏳❌])-/)
  if (symbolMatch) {
    return {
      acronym: symbolMatch[1],
      number: parseInt(symbolMatch[2], 10),
      symbol: symbolMatch[3],
    }
  }

  // Standard pattern: ACRONYM-NUMBER-title
  const standardMatch = nameWithoutExt.match(/^([A-Z]+)-(\d+)-/)
  if (standardMatch) {
    return {
      acronym: standardMatch[1],
      number: parseInt(standardMatch[2], 10),
      symbol: null,
    }
  }

  // Fallback: use filename as-is
  return {
    acronym: 'UNKNOWN',
    number: 0,
    symbol: null,
  }
}

/**
 * Parse a ticket markdown file
 */
function parseTicketFile(filePath: string, phase: string): ParsedTicket {
  const content = fs.readFileSync(filePath, 'utf-8')
  const filename = path.basename(filePath)
  const stats = fs.statSync(filePath)

  const { acronym, number, symbol } = parseTicketId(filename)

  // Simple markdown parsing
  const lines = content.split('\n')
  let title = filename.replace(/\.md$/, '')
  let description = ''
  const tasks: { checked: boolean; text: string }[] = []
  const acceptanceCriteria: string[] = []
  const questions: string[] = []
  const assumptions: string[] = []
  const phaseHistory: Array<{ phase: string; date: string; notes?: string }> = []

  let currentSection: string | null = null
  const descriptionLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // H1 header is the title
    if (trimmed.startsWith('# ') && i === 0) {
      title = trimmed.slice(2).trim()
      continue
    }

    // Track sections
    if (trimmed.startsWith('## ')) {
      currentSection = trimmed.slice(3).toLowerCase().replace(/-/g, '')
      if (currentSection === 'acceptancecriteria' || currentSection === 'acceptance criteria') {
        currentSection = 'acceptance-criteria'
      }
      if (currentSection === 'phasehistory' || currentSection === 'phase history') {
        currentSection = 'phase-history'
      }
      continue
    }

    // Parse content based on section
    if (currentSection === 'description') {
      if (trimmed) {
        descriptionLines.push(trimmed)
      }
    } else if (currentSection === 'tasks') {
      const checkboxMatch = trimmed.match(/^-\s*\[([ x])\]\s*(.+)$/)
      if (checkboxMatch) {
        tasks.push({
          checked: checkboxMatch[1] === 'x',
          text: checkboxMatch[2].trim(),
        })
      }
    } else if (currentSection === 'acceptance-criteria') {
      const checkboxMatch = trimmed.match(/^-\s*\[([ x])\]\s*(.+)$/)
      if (checkboxMatch) {
        acceptanceCriteria.push(checkboxMatch[2].trim())
      } else if (trimmed.startsWith('- ')) {
        acceptanceCriteria.push(trimmed.slice(2).trim())
      }
    } else if (currentSection === 'questions') {
      if (trimmed.startsWith('- ')) {
        questions.push(trimmed.slice(2).trim())
      }
    } else if (currentSection === 'assumptions') {
      if (trimmed.startsWith('- ')) {
        assumptions.push(trimmed.slice(2).trim())
      }
    } else if (currentSection === 'phase-history') {
      // Parse markdown table: | Phase | Date | Notes |
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed.split('|').map(c => c.trim()).filter(c => c)
        if (cells.length >= 2 && cells[0] !== 'Phase') {
          phaseHistory.push({
            phase: cells[0],
            date: cells[1],
            notes: cells[2] || '',
          })
        }
      }
    }
  }

  description = descriptionLines.join('\n')

  // Get priority from metadata section
  let priority = 'normal'
  const priorityMatch = content.match(/Priority:\s*(\w+)/i)
  if (priorityMatch) {
    priority = priorityMatch[1].toLowerCase()
  }

  return {
    id: `${acronym}-${number}`,
    project: path.basename(path.dirname(path.dirname(filePath))),
    acronym,
    number,
    title,
    description,
    tasks,
    acceptanceCriteria,
    questions,
    assumptions,
    priority,
    metadata: {},
    phase,
    phaseHistory,
    attempts: [],
    symbol,
    filePath,
    modifiedAt: stats.mtime.toISOString(),
  }
}
