import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
const KANBAN_ROOT = `${DEFAULT_WORKSPACE}/kanban`
const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

/**
 * Search for a ticket file by ID
 */
function findTicketFile(ticketId: string): { filePath: string; phase: string } | null {
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
        // Check if filename matches ticket ID pattern
        const fileId = extractTicketId(file)
        if (fileId === ticketId) {
          return {
            filePath: path.join(phasePath, file),
            phase,
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
  // Pattern: ACRONYM-NUMBER or ACRONYM-NUMBER-SYMBOL
  const match = name.match(/^([A-Z]+-\d+)/)
  return match ? match[1] : ''
}

/**
 * Parse a ticket markdown file
 */
function parseTicketFile(filePath: string, phase: string): Record<string, unknown> {
  const content = fs.readFileSync(filePath, 'utf-8')
  const filename = path.basename(filePath)
  const stats = fs.statSync(filePath)

  const fileId = extractTicketId(filename)
  const idParts = fileId.split('-')
  const acronym = idParts[0] || 'UNKNOWN'
  const number = parseInt(idParts[1], 10) || 0

  // Check for symbol in filename
  const symbolMatch = filename.match(/^.+-(\d+)-([⏳❌])-/)
  const symbol = symbolMatch ? symbolMatch[2] : null

  // Simple markdown parsing
  const lines = content.split('\n')
  let title = filename.replace(/\.md$/, '')
  const description = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('# ') && i === 0) {
      title = line.slice(2).trim()
      break
    }
  }

  // Get priority from metadata
  let priority = 'normal'
  const priorityMatch = content.match(/Priority:\s*(\w+)/i)
  if (priorityMatch) {
    priority = priorityMatch[1].toLowerCase()
  }

  return {
    id: fileId,
    project: path.basename(path.dirname(path.dirname(filePath))),
    acronym,
    number,
    title,
    description,
    tasks: [],
    acceptanceCriteria: [],
    questions: [],
    assumptions: [],
    priority,
    metadata: {},
    phase,
    phaseHistory: [],
    attempts: [],
    symbol,
    filePath,
    modifiedAt: stats.mtime.toISOString(),
  }
}

/**
 * Get single ticket by ID
 * GET /api/kanban/ticket/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: ticketId } = await params
    const id = ticketId.toUpperCase()

    const ticketInfo = findTicketFile(id)
    if (!ticketInfo) {
      return NextResponse.json(
        { error: 'Ticket not found', id },
        { status: 404 }
      )
    }

    const ticket = parseTicketFile(ticketInfo.filePath, ticketInfo.phase)

    return NextResponse.json({ id, ticket })
  } catch (error) {
    console.error('Error in /api/kanban/ticket/[id]:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}