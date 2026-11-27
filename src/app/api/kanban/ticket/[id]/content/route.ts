import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { PHASES } from '@/lib/phases'
import { readJsonObject, sha256 } from '@/lib/security'
import { isSafeSegment, safeChild, unsafePathStatus, uuidTempPath } from '@/lib/path-guard'
import { ticketIdFromFilename } from '@/lib/parsers/ticketParser'

const getKanbanRoot = () => `${getWorkspacePath()}/kanban`

interface TicketHit {
  filePath: string
  id: string
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
          return { filePath: path.join(phasePath, file.name), id: ticketId }
        }
      }
    }
  }
  return null
}

function normalizeId(rawId: string): string | null {
  const id = rawId.toUpperCase()
  return isSafeSegment(id) ? id : null
}

/**
 * Get ticket content and hash for conflict detection.
 * GET /api/kanban/ticket/[id]/content
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = normalizeId((await params).id)
    if (!id) return NextResponse.json({ error: 'Invalid ticket id' }, { status: 400 })

    const hit = findTicketFile(id)
    if (!hit) return NextResponse.json({ error: 'Ticket not found', id }, { status: 404 })

    const content = fs.readFileSync(hit.filePath, 'utf-8')
    return NextResponse.json({ id, content, hash: sha256(content) })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/ticket/[id]/content GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Update ticket content after an expected-hash conflict check.
 * POST /api/kanban/ticket/[id]/content
 * Body: { content, expectedHash }
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = normalizeId((await params).id)
    if (!id) return NextResponse.json({ error: 'Invalid ticket id' }, { status: 400 })

    const body = await readJsonObject(request)
    if (!body || typeof body.content !== 'string' || typeof body.expectedHash !== 'string') {
      return NextResponse.json({ error: 'content and expectedHash are required' }, { status: 400 })
    }

    const hit = findTicketFile(id)
    if (!hit) return NextResponse.json({ error: 'Ticket not found', id }, { status: 404 })

    const currentContent = fs.readFileSync(hit.filePath, 'utf-8')
    const currentHash = sha256(currentContent)
    if (currentHash !== body.expectedHash) {
      return NextResponse.json({
        error: 'Conflict detected',
        message: 'File has been modified since you started editing',
        currentHash,
      }, { status: 409 })
    }

    const tempPath = uuidTempPath(path.dirname(hit.filePath), path.basename(hit.filePath))
    fs.writeFileSync(tempPath, body.content, 'utf-8')
    fs.renameSync(tempPath, hit.filePath)

    const stats = fs.statSync(hit.filePath)
    return NextResponse.json({
      success: true,
      id,
      hash: sha256(body.content),
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/ticket/[id]/content:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
