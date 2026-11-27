import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { PHASES, isPhase } from '@/lib/phases'
import { readJsonObject, sha256 } from '@/lib/security'
import { UnsafePathError, isSafeSegment, safeChild, unsafePathStatus } from '@/lib/path-guard'
import { parseTicketMarkdown, ticketIdFromFilename } from '@/lib/parsers/ticketParser'
import type { KanbanPhase, KanbanTicket } from '@/lib/types'

const getKanbanRoot = () => `${getWorkspacePath()}/kanban`

const TICKET_TEMPLATE = `# {TITLE}

## Description

## Tasks
- [ ]

## Acceptance Criteria
- [ ]
`

type TicketWithHash = KanbanTicket & { hash: string }

function projectPath(project: string): string {
  return safeChild(getKanbanRoot(), project)
}

function phasePath(base: string, phase: string): string {
  if (!isPhase(phase)) throw new UnsafePathError('escape')
  return safeChild(base, phase)
}

function readTickets(dir: string, project: string, phase: KanbanPhase): TicketWithHash[] {
  const tickets: TicketWithHash[] = []
  if (!fs.existsSync(dir)) return tickets

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.name.endsWith('.md') || entry.isSymbolicLink() || !entry.isFile()) continue
    const filePath = path.join(dir, entry.name)
    try {
      const stats = fs.statSync(filePath)
      const content = fs.readFileSync(filePath, 'utf-8')
      const parsed = parseTicketMarkdown(content, filePath, {
        phase,
        project,
        modifiedAt: stats.mtime.toISOString(),
      })
      if (parsed.ticket) tickets.push({ ...parsed.ticket, hash: sha256(content) })
    } catch (error) {
      console.error('Failed to parse ticket:', entry.name, error)
    }
  }
  return tickets
}

/**
 * List tickets by project and optional phase.
 * GET /api/kanban/tickets?project=...&phase=...
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const project = searchParams.get('project')
    const phase = searchParams.get('phase')

    if (!isSafeSegment(project) || (phase !== null && !isPhase(phase))) {
      return NextResponse.json({ error: 'Invalid project or phase' }, { status: 400 })
    }

    const base = projectPath(project)
    if (!fs.existsSync(base)) {
      return NextResponse.json({ project, phase, tickets: [], message: 'Project not found' })
    }

    const phases: readonly KanbanPhase[] = phase ? [phase] : PHASES
    const tickets = phases.flatMap((p) => readTickets(phasePath(base, p), project, p))
    tickets.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())

    return NextResponse.json({ project, phase, tickets })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/tickets:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Create a ticket.
 * POST /api/kanban/tickets
 * Body: { project, title, phase }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { project, title, phase = 'backlog' } = body
    if (!isSafeSegment(project) || typeof title !== 'string' || !title || !isPhase(phase)) {
      return NextResponse.json({ error: 'Valid project, title and phase are required' }, { status: 400 })
    }

    const base = projectPath(project)
    if (!fs.existsSync(base)) fs.mkdirSync(base, { recursive: true })
    PHASES.forEach((p) => {
      const dir = phasePath(base, p)
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    })

    let acronym: string | null = null
    let maxNumber = 0
    for (const p of PHASES) {
      for (const file of fs.readdirSync(phasePath(base, p), { withFileTypes: true })) {
        if (!file.isFile() || file.isSymbolicLink()) continue
        const match = file.name.match(/^([A-Z]+)-(\d+)-/)
        if (!match) continue
        acronym ??= match[1]
        maxNumber = Math.max(maxNumber, Number.parseInt(match[2], 10))
      }
    }

    acronym ??= project.split('-').map((part) => part.charAt(0).toUpperCase()).join('').slice(0, 3) || 'TKT'
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    const paddedNumber = String(maxNumber + 1).padStart(3, '0')
    const filename = `${acronym}-${paddedNumber}-${slug}.md`
    const target = path.join(phasePath(base, phase), filename)
    const content = TICKET_TEMPLATE.replace('{TITLE}', title)
    fs.writeFileSync(target, content, { encoding: 'utf8', flag: 'wx' })

    return NextResponse.json({
      success: true,
      ticket: {
        id: ticketIdFromFilename(filename),
        path: `kanban/${project}/${phase}/${filename}`,
        filename,
        title,
        phase,
      },
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in POST /api/kanban/tickets:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
