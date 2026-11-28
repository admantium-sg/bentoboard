import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { PHASES, isPhase } from '@/lib/phases'
import { readJsonObject } from '@/lib/security'
import { isSafeSegment, safeChild, unsafePathStatus, uuidTempPath } from '@/lib/path-guard'
import { ticketIdFromFilename } from '@/lib/parsers/ticketParser'
import type { KanbanPhase } from '@/lib/types'

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

function updatePhaseHistory(content: string, newPhase: KanbanPhase, notes?: string): string {
  const timestamp = new Date().toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '')
  const lines = content.split('\n')
  let phaseHistoryIndex = -1
  let insertIndex = -1

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '## Phase History') phaseHistoryIndex = i
    if (phaseHistoryIndex >= 0 && lines[i].includes('|-------|')) {
      insertIndex = i + 1
      break
    }
  }

  if (insertIndex >= 0) {
    lines.splice(insertIndex, 0, `| ${newPhase} | ${timestamp} | ${notes || ''} |`)
    return lines.join('\n')
  }

  let attemptsIndex = lines.findIndex((line) => line === '## Attempts')
  if (attemptsIndex < 0) attemptsIndex = lines.length
  lines.splice(attemptsIndex, 0, '', '## Phase History', '| Phase | Date | Notes |', '|-------|------|-------|', `| ${newPhase} | ${timestamp} | ${notes || ''} |`)
  return lines.join('\n')
}

/**
 * Move a ticket between phase directories.
 * POST /api/kanban/ticket/[id]/phase
 * Body: { phase, notes? }
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id.toUpperCase()
    if (!isSafeSegment(id)) return NextResponse.json({ error: 'Invalid ticket id' }, { status: 400 })

    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { phase, notes } = body
    if (!isPhase(phase) || (typeof notes !== 'undefined' && typeof notes !== 'string')) {
      return NextResponse.json({ error: 'Valid phase and optional notes are required' }, { status: 400 })
    }

    const ticketInfo = findTicketFile(id)
    if (!ticketInfo) return NextResponse.json({ error: 'Ticket not found', id }, { status: 404 })
    if (ticketInfo.phase === phase) {
      return NextResponse.json({ success: true, id, phase, message: 'Ticket already in this phase' })
    }

    const root = getKanbanRoot()
    const projectPath = safeChild(root, ticketInfo.project)
    const targetDir = safeChild(projectPath, phase)
    const targetPath = path.join(targetDir, path.basename(ticketInfo.filePath))
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })

    try {
      fs.lstatSync(targetPath)
      return NextResponse.json({ error: 'Target ticket already exists', id }, { status: 409 })
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code !== 'ENOENT') throw error
    }

    const content = fs.readFileSync(ticketInfo.filePath, 'utf-8')
    const updatedContent = updatePhaseHistory(content, phase, notes)
    const tempPath = uuidTempPath(targetDir, path.basename(targetPath))
    fs.writeFileSync(tempPath, updatedContent, 'utf-8')
    fs.renameSync(tempPath, targetPath)
    fs.unlinkSync(ticketInfo.filePath)

    const stats = fs.statSync(targetPath)
    return NextResponse.json({
      success: true,
      id,
      fromPhase: ticketInfo.phase,
      toPhase: phase,
      notes,
      filePath: targetPath,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/ticket/[id]/phase:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
