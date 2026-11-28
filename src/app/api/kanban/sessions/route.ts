import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { isSafeSegment, realInside, safeChild, unsafePathStatus } from '@/lib/path-guard'

const getSessionsDir = () => `${getWorkspacePath()}/kanban/sessions`

interface SessionRegistry {
  startedAt: string
  lastHeartbeat: string
  activeTicket: string | null
  activeBranch: string | null
  phase: string | null
  project: string
}

/**
 * Get active session for a project
 * GET /api/kanban/sessions?project=...
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const project = searchParams.get('project')

    if (!isSafeSegment(project)) {
      return NextResponse.json({ error: 'Valid project required' }, { status: 400 })
    }

    safeChild(getWorkspacePath() + '/kanban', project)

    // Derive acronym from project name (first 4 chars uppercase or pattern)
    const acronym = project.slice(0, 4).toUpperCase()
    const sessionDir = getSessionsDir()
    const sessionFile = `${acronym}-session.json`
    const sessionPath = fs.existsSync(path.join(sessionDir, sessionFile))
      ? realInside(sessionDir, sessionFile)
      : path.join(sessionDir, sessionFile)

    // Check if session file exists
    if (!fs.existsSync(sessionPath)) {
      return NextResponse.json({
        project,
        session: null,
        message: 'No active session',
      })
    }

    // Read and parse session JSON
    let session: SessionRegistry | null = null
    try {
      const content = fs.readFileSync(sessionPath, 'utf-8')
      session = JSON.parse(content)
    } catch {
      return NextResponse.json({
        project,
        session: null,
        message: 'Invalid session JSON',
      })
    }

    // Check if session is stale (>10 min since lastHeartbeat)
    if (session) {
      const lastHeartbeat = new Date(session.lastHeartbeat)
      const now = new Date()
      const diffMs = now.getTime() - lastHeartbeat.getTime()
      const diffMin = diffMs / 1000 / 60

      if (diffMin > 10) {
        return NextResponse.json({
          project,
          session: null,
          stale: true,
          lastHeartbeat: session.lastHeartbeat,
          message: 'Session is stale',
        })
      }
    }

    return NextResponse.json({
      project,
      session,
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/kanban/sessions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}