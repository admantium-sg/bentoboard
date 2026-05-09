import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()
const getKanbanRoot = () => `${getWorkspace()}/kanban`

/**
 * Move file between directories
 * POST /api/fs/move
 * Body: { fromPath, toPath, updatePhaseHistory?, notes? }
 *
 * For kanban tickets, can optionally update phase history.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fromPath, toPath, updatePhaseHistory, notes } = body

    if (!fromPath || !toPath) {
      return NextResponse.json(
        { error: 'fromPath and toPath required' },
        { status: 400 }
      )
    }

    // Security: Prevent path traversal
    for (const p of [fromPath, toPath]) {
      if (p.includes('..') || p.startsWith('/')) {
        return NextResponse.json(
          { error: 'Invalid path: path traversal not allowed' },
          { status: 400 }
        )
      }
    }

    const fromFullPath = path.join(getWorkspace(), fromPath)
    const toFullPath = path.join(getWorkspace(), toPath)

    // Validate source exists
    if (!fs.existsSync(fromFullPath)) {
      return NextResponse.json(
        { error: 'Source file not found', path: fromPath },
        { status: 404 }
      )
    }

    // Ensure target directory exists
    const toDir = path.dirname(toFullPath)
    if (!fs.existsSync(toDir)) {
      fs.mkdirSync(toDir, { recursive: true })
    }

    // Check if target already exists
    if (fs.existsSync(toFullPath)) {
      return NextResponse.json(
        { error: 'Target file already exists', path: toPath },
        { status: 409 }
      )
    }

    // Read source content for potential phase history update
    let content = fs.readFileSync(fromFullPath, 'utf-8')
    let modified = false

    // If this is a kanban ticket and we need to update phase history
    if (updatePhaseHistory && fromPath.includes('/kanban/') && toPath.includes('/kanban/')) {
      content = updateTicketPhaseHistory(content, fromPath, toPath, notes)
      modified = true
    }

    // Atomic move: write to temp, then rename
    const tempPath = toFullPath + '.tmp.' + Date.now()
    fs.writeFileSync(tempPath, content, 'utf-8')
    fs.renameSync(tempPath, toFullPath)

    // Delete original after successful move
    fs.unlinkSync(fromFullPath)

    // Get new stats
    const stats = fs.statSync(toFullPath)

    return NextResponse.json({
      success: true,
      fromPath,
      toPath,
      modifiedAt: stats.mtime.toISOString(),
      updatedPhaseHistory: modified,
    })
  } catch (error) {
    console.error('Error in /api/fs/move:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Update phase history when moving a kanban ticket
 */
function updateTicketPhaseHistory(
  content: string,
  fromPath: string,
  toPath: string,
  notes?: string
): string {
  // Extract phase from path
  const fromPhaseMatch = fromPath.match(/\/kanban\/[^/]+\/([^/]+)\//)
  const toPhaseMatch = toPath.match(/\/kanban\/[^/]+\/([^/]+)\//)

  if (!fromPhaseMatch || !toPhaseMatch) {
    return content // Not a kanban ticket path, skip
  }

  const fromPhase = fromPhaseMatch[1]
  const toPhase = toPhaseMatch[1]

  // Only update if phase changed
  if (fromPhase === toPhase) {
    return content
  }

  // Format timestamp
  const timestamp = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '')

  // Check if Phase History section exists
  const lines = content.split('\n')
  let phaseHistoryIndex = -1
  let insertIndex = -1

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '## Phase History') {
      phaseHistoryIndex = i
    }
    // Find the table header after Phase History
    if (phaseHistoryIndex >= 0 && lines[i].includes('|-------|')) {
      insertIndex = i + 1
      break
    }
  }

  // Add new phase entry
  if (insertIndex >= 0) {
    const entry = `| ${toPhase} | ${timestamp} | ${notes || ''} |`
    lines.splice(insertIndex, 0, entry)
    return lines.join('\n')
  }

  // Phase History section doesn't exist, add it before Attempts or at end
  let attemptsIndex = lines.findIndex(l => l === '## Attempts')
  if (attemptsIndex < 0) {
    attemptsIndex = lines.length
  }

  const phaseHistorySection = [
    '',
    '## Phase History',
    '| Phase | Date | Notes |',
    '|-------|------|-------|',
    `| ${toPhase} | ${timestamp} | ${notes || ''} |`,
  ].join('\n')

  lines.splice(attemptsIndex, 0, phaseHistorySection)
  return lines.join('\n')
}