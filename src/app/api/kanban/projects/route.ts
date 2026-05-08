import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
const KANBAN_ROOT = `${DEFAULT_WORKSPACE}/kanban`

const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

interface ProjectInfo {
  slug: string
  name: string
  acronym: string
  color: string
  ticketCounts: Record<string, number>
  totalTickets: number
  hasActiveSession: boolean
}

/**
 * List all kanban projects
 * GET /api/kanban/projects
 */
export async function GET(request: NextRequest) {
  try {
    // Check if workspace exists
    if (!fs.existsSync(KANBAN_ROOT)) {
      return NextResponse.json({
        projects: [],
        workspace: KANBAN_ROOT,
        message: 'Kanban directory not found',
      })
    }

    // Read kanban directory
    const entries = fs.readdirSync(KANBAN_ROOT, { withFileTypes: true })
    const projectDirs = entries.filter(
      (entry) => entry.isDirectory() && entry.name !== 'sessions'
    )

    const projects: ProjectInfo[] = projectDirs.map((dir) => {
      const projectPath = path.join(KANBAN_ROOT, dir.name)
      const ticketCounts: Record<string, number> = {}
      let totalTickets = 0
      let hasActiveSession = false

      // Count tickets per phase
      PHASES.forEach((phase) => {
        const phasePath = path.join(projectPath, phase)
        if (fs.existsSync(phasePath)) {
          const phaseEntries = fs.readdirSync(phasePath, { withFileTypes: true })
          const mdFiles = phaseEntries.filter(
            (e) => e.isFile() && e.name.endsWith('.md')
          )
          ticketCounts[phase] = mdFiles.length
          totalTickets += mdFiles.length
        } else {
          ticketCounts[phase] = 0
        }
      })

      // Check for active session
      const sessionPath = path.join(projectPath, 'sessions')
      if (fs.existsSync(sessionPath)) {
        const sessionFiles = fs.readdirSync(sessionPath).filter((f) => f.endsWith('-session.json'))
        for (const sessionFile of sessionFiles) {
          try {
            const sessionData = JSON.parse(
              fs.readFileSync(path.join(sessionPath, sessionFile), 'utf-8')
            )
            // Check if session is stale (>10 min since lastHeartbeat)
            const lastHeartbeat = new Date(sessionData.lastHeartbeat)
            const now = new Date()
            const diffMs = now.getTime() - lastHeartbeat.getTime()
            const diffMin = diffMs / 1000 / 60
            if (diffMin < 10) {
              hasActiveSession = true
              break
            }
          } catch {
            // Invalid session JSON, skip
          }
        }
      }

      // Generate project name from slug
      const name = dir.name
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      // Extract acronym from slug (first letters or specific pattern)
      const acronymMatch = dir.name.match(/^([A-Z]{2,})/)
      const acronym = acronymMatch ? acronymMatch[1] : dir.name.slice(0, 4).toUpperCase()

      // Generate color from project name
      const color = stringToColor(dir.name)

      return {
        slug: dir.name,
        name,
        acronym,
        color,
        ticketCounts,
        totalTickets,
        hasActiveSession,
      }
    })

    return NextResponse.json({
      projects,
      workspace: KANBAN_ROOT,
    })
  } catch (error) {
    console.error('Error in /api/kanban/projects:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Generate a consistent color from a string
 */
function stringToColor(str: string): string {
  const colors = [
    '#3B82F6', // Blue
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#F59E0B', // Amber
    '#10B981', // Emerald
    '#06B6D4', // Cyan
    '#EF4444', // Red
    '#6366F1', // Indigo
  ]

  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}
