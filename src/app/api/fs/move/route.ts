import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject } from '@/lib/security'
import { realInside, unsafePathStatus, uuidTempPath } from '@/lib/path-guard'

/**
 * Move a file, refusing to replace an existing target.
 * POST /api/fs/move
 * Body: { fromPath, toPath, updatePhaseHistory?, notes? }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { fromPath, toPath, updatePhaseHistory, notes } = body
    if (typeof fromPath !== 'string' || typeof toPath !== 'string' || !fromPath || !toPath) {
      return NextResponse.json({ error: 'fromPath and toPath required' }, { status: 400 })
    }
    if (typeof updatePhaseHistory !== 'undefined' && typeof updatePhaseHistory !== 'boolean') {
      return NextResponse.json({ error: 'updatePhaseHistory must be a boolean' }, { status: 400 })
    }
    if (typeof notes !== 'undefined' && typeof notes !== 'string') {
      return NextResponse.json({ error: 'notes must be a string' }, { status: 400 })
    }

    const workspace = getWorkspacePath()
    const fromFullPath = realInside(workspace, fromPath)
    const toFullPath = realInside(workspace, toPath)

    if (!fs.existsSync(fromFullPath)) {
      return NextResponse.json({ error: 'Source file not found', path: fromPath }, { status: 404 })
    }

    const toDir = path.dirname(toFullPath)
    if (!fs.existsSync(toDir)) fs.mkdirSync(toDir, { recursive: true })

    try {
      fs.lstatSync(toFullPath)
      return NextResponse.json({ error: 'Target file already exists', path: toPath }, { status: 409 })
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
    }

    let content = fs.readFileSync(fromFullPath, 'utf-8')
    let modified = false

    if (updatePhaseHistory && fromPath.includes('/kanban/') && toPath.includes('/kanban/')) {
      content = updateTicketPhaseHistory(content, fromPath, toPath, notes)
      modified = true
    }

    const tempPath = uuidTempPath(toDir, path.basename(toFullPath))
    fs.writeFileSync(tempPath, content, 'utf-8')
    fs.renameSync(tempPath, toFullPath)
    fs.unlinkSync(fromFullPath)

    const stats = fs.statSync(toFullPath)
    return NextResponse.json({
      success: true,
      fromPath,
      toPath,
      modifiedAt: stats.mtime.toISOString(),
      updatedPhaseHistory: modified,
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/move:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function updateTicketPhaseHistory(
  content: string,
  fromPath: string,
  toPath: string,
  notes?: string
): string {
  const fromPhaseMatch = fromPath.match(/\/kanban\/[^/]+\/([^/]+)\//)
  const toPhaseMatch = toPath.match(/\/kanban\/[^/]+\/([^/]+)\//)
  if (!fromPhaseMatch || !toPhaseMatch || fromPhaseMatch[1] === toPhaseMatch[1]) return content

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
    lines.splice(insertIndex, 0, `| ${toPhaseMatch[1]} | ${timestamp} | ${notes || ''} |`)
    return lines.join('\n')
  }

  let attemptsIndex = lines.findIndex((line) => line === '## Attempts')
  if (attemptsIndex < 0) attemptsIndex = lines.length
  lines.splice(attemptsIndex, 0, '', '## Phase History', '| Phase | Date | Notes |', '|-------|------|-------|', `| ${toPhaseMatch[1]} | ${timestamp} | ${notes || ''} |`)
  return lines.join('\n')
}
