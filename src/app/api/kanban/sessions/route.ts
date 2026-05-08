import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
const SESSIONS_DIR = `${DEFAULT_WORKSPACE}/kanban/sessions`

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

    if (!project) {
      return NextResponse.json(
        { error: 'Project parameter required' },
        { status: 400 }
      )
    }

    // Derive acronym from project name (first 4 chars uppercase or pattern)
    const acronym = project.slice(0, 4).toUpperCase()
    const sessionPath = path.join(SESSIONS_DIR, `${acronym}-session.json`)

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
    } catch (parseError) {
      return NextResponse.json({
        project,
        session: null,
        message: 'Invalid session JSON',
        error: String(parseError),
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
    console.error('Error in /api/kanban/sessions:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}