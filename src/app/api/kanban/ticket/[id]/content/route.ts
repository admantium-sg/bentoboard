import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
const getKanbanRoot = () => `${getWorkspacePath()}/kanban`
const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

/**
 * Search for a ticket file by ID
 */
function findTicketFile(ticketId: string): { filePath: string; phase: string } | null {
  if (!fs.existsSync(getKanbanRoot())) return null

  const entries = fs.readdirSync(getKanbanRoot(), { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const projectPath = path.join(getKanbanRoot(), entry.name)

    for (const phase of PHASES) {
      const phasePath = path.join(projectPath, phase)
      if (!fs.existsSync(phasePath)) continue

      const files = fs.readdirSync(phasePath).filter(f => f.endsWith('.md'))
      for (const file of files) {
        const fileId = extractTicketId(file)
        if (fileId === ticketId) {
          return { filePath: path.join(phasePath, file), phase }
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
 * Calculate content hash for conflict detection
 */
function calculateHash(content: string): string {
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

/**
 * Update ticket content
 * POST /api/kanban/ticket/[id]/content
 * Body: { content, hash? }
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: ticketId } = await params
    const id = ticketId.toUpperCase()
    const body = await request.json()
    const { content, hash } = body

    if (content === undefined) {
      return NextResponse.json(
        { error: 'Content parameter required' },
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

    // Check for conflicts if hash provided
    if (hash) {
      const currentContent = fs.readFileSync(ticketInfo.filePath, 'utf-8')
      const currentHash = calculateHash(currentContent)
      if (currentHash !== hash) {
        return NextResponse.json(
          {
            error: 'Conflict detected',
            message: 'File has been modified since you started editing',
            currentHash,
          },
          { status: 409 }
        )
      }
    }

    // Atomic write
    const tempPath = ticketInfo.filePath + '.tmp.' + Date.now()
    fs.writeFileSync(tempPath, content, 'utf-8')
    fs.renameSync(tempPath, ticketInfo.filePath)

    const stats = fs.statSync(ticketInfo.filePath)
    const newHash = calculateHash(content)

    return NextResponse.json({
      success: true,
      id,
      hash: newHash,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/kanban/ticket/[id]/content:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}