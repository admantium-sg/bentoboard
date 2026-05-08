import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
const KANBAN_ROOT = `${DEFAULT_WORKSPACE}/kanban`
const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

/**
 * Search for a ticket file by ID
 */
function findTicketFile(ticketId: string): { filePath: string; phase: string; project: string } | null {
  if (!fs.existsSync(KANBAN_ROOT)) return null

  const entries = fs.readdirSync(KANBAN_ROOT, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const projectPath = path.join(KANBAN_ROOT, entry.name)

    for (const phase of PHASES) {
      const phasePath = path.join(projectPath, phase)
      if (!fs.existsSync(phasePath)) continue

      const files = fs.readdirSync(phasePath).filter(f => f.endsWith('.md'))
      for (const file of files) {
        const fileId = extractTicketId(file)
        if (fileId === ticketId) {
          return {
            filePath: path.join(phasePath, file),
            phase,
            project: entry.name,
          }
        }
      }
    }
  }
  return null
}

/**
 * Extract ticket ID from filename
 */
function extractTicketId(filename: string): string {
  const name = filename.replace(/\.md$/, '')
  const match = name.match(/^([A-Z]+-\d+)/)
  return match ? match[1] : ''
}

/**
 * Update phase history in ticket markdown
 */
function updatePhaseHistory(content: string, newPhase: string, notes?: string): string {
  const timestamp = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '')

  const lines = content.split('\n')
  let phaseHistoryIndex = -1
  let insertIndex = -1

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '## Phase History') {
      phaseHistoryIndex = i
    }
    if (phaseHistoryIndex >= 0 && lines[i].includes('|-------|')) {
      insertIndex = i + 1
      break
    }
  }

  if (insertIndex >= 0) {
    const entry = `| ${newPhase} | ${timestamp} | ${notes || ''} |`
    lines.splice(insertIndex, 0, entry)
    return lines.join('\n')
  }

  // Add section if it doesn't exist
  let attemptsIndex = lines.findIndex(l => l === '## Attempts')
  if (attemptsIndex < 0) attemptsIndex = lines.length

  const section = [
    '',
    '## Phase History',
    '| Phase | Date | Notes |',
    '|-------|------|-------|',
    `| ${newPhase} | ${timestamp} | ${notes || ''} |`,
  ].join('\n')

  lines.splice(attemptsIndex, 0, section)
  return lines.join('\n')
}

/**
 * Update ticket phase
 * POST /api/kanban/ticket/[id]/phase
 * Body: { phase, notes }
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: ticketId } = await params
    const id = ticketId.toUpperCase()
    const body = await request.json()
    const { phase, notes } = body

    if (!phase) {
      return NextResponse.json(
        { error: 'Phase parameter required' },
        { status: 400 }
      )
    }

    // Validate phase
    if (!PHASES.includes(phase)) {
      return NextResponse.json(
        { error: 'Invalid phase', validPhases: PHASES },
        { status: 400 }
      )
    }

    // Find ticket
    const ticketInfo = findTicketFile(id)
    if (!ticketInfo) {
      return NextResponse.json(
        { error: 'Ticket not found', id },
        { status: 404 }
      )
    }

    // If same phase, no-op
    if (ticketInfo.phase === phase) {
      return NextResponse.json({
        success: true,
        id,
        phase,
        message: 'Ticket already in this phase',
      })
    }

    // Read current content
    const content = fs.readFileSync(ticketInfo.filePath, 'utf-8')

    // Update phase history
    const updatedContent = updatePhaseHistory(content, phase, notes)

    // Calculate new file path
    const newFilePath = path.join(
      KANBAN_ROOT,
      ticketInfo.project,
      phase,
      path.basename(ticketInfo.filePath)
    )

    // Ensure target directory exists
    const targetDir = path.join(KANBAN_ROOT, ticketInfo.project, phase)
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    }

    // Atomic write to new location
    const tempPath = newFilePath + '.tmp.' + Date.now()
    fs.writeFileSync(tempPath, updatedContent, 'utf-8')
    fs.renameSync(tempPath, newFilePath)

    // Delete old file
    fs.unlinkSync(ticketInfo.filePath)

    const stats = fs.statSync(newFilePath)

    return NextResponse.json({
      success: true,
      id,
      fromPhase: ticketInfo.phase,
      toPhase: phase,
      notes,
      filePath: newFilePath,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/kanban/ticket/[id]/phase:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}