import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { PHASES } from '@/lib/phases'
import { sha256 } from '@/lib/security'
import { isSafeSegment, safeChild, unsafePathStatus } from '@/lib/path-guard'
import { parseTicketMarkdown, ticketIdFromFilename } from '@/lib/parsers/ticketParser'
import type { KanbanPhase, KanbanTicket } from '@/lib/types'

const getKanbanRoot = () => `${getWorkspacePath()}/kanban`

interface TicketHit {
  filePath: string
  phase: KanbanPhase
  project: string
}

function findTicketFile(ticketId: string): TicketHit | null {
  const root = getKanbanRoot()
  if (!fs.existsSync(root)) return null

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.isSymbolicLink() || !isSafeSegment(entry.name)) continue
    const projectPath = safeChild(root, entry.name)

    for (const phase of PHASES) {
      const phasePath = safeChild(projectPath, phase)
      if (!fs.existsSync(phasePath)) continue

      for (const file of fs.readdirSync(phasePath, { withFileTypes: true })) {
        if (!file.isFile() || file.isSymbolicLink() || !file.name.endsWith('.md')) continue
        if (ticketIdFromFilename(file.name) === ticketId) {
          return { filePath: path.join(phasePath, file.name), phase, project: entry.name }
        }
      }
    }
  }
  return null
}

/**
 * Get one ticket and its content hash.
 * GET /api/kanban/ticket/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await params
    const id = rawId.toUpperCase()
    if (!isSafeSegment(id)) return NextResponse.json({ error: 'Invalid ticket id' }, { status: 400 })

    const hit = findTicketFile(id)
    if (!hit) return NextResponse.json({ error: 'Ticket not found', id }, { status: 404 })

    const content = fs.readFileSync(hit.filePath, 'utf-8')
    const stats = fs.statSync(hit.filePath)
    const parsed = parseTicketMarkdown(content, hit.filePath, {
      phase: hit.phase,
      project: hit.project,
      modifiedAt: stats.mtime.toISOString(),
    })
    if (!parsed.ticket) return NextResponse.json({ error: 'Invalid ticket content' }, { status: 500 })

    const ticket: KanbanTicket & { hash: string } = { ...parsed.ticket, hash: sha256(content) }
    return NextResponse.json({ id, ticket })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/ticket/[id]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
