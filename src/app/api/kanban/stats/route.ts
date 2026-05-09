import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
const getKanbanRoot = () => `${getWorkspacePath()}/kanban`
const PHASES = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

interface Stats {
  total: number
  byPhase: Record<string, number>
  completedTasks: number
  totalTasks: number
  byPriority: Record<string, number>
  averageTaskCompletion: number
}

/**
 * Calculate statistics for a project
 */
function calculateProjectStats(projectPath: string): Stats {
  const stats: Stats = {
    total: 0,
    byPhase: {},
    completedTasks: 0,
    totalTasks: 0,
    byPriority: { urgent: 0, high: 0, normal: 0, low: 0 },
    averageTaskCompletion: 0,
  }

  for (const phase of PHASES) {
    stats.byPhase[phase] = 0
    const phasePath = path.join(projectPath, phase)

    if (!fs.existsSync(phasePath)) continue

    const files = fs.readdirSync(phasePath).filter(f => f.endsWith('.md'))

    for (const file of files) {
      stats.total++
      stats.byPhase[phase]++

      const filePath = path.join(phasePath, file)
      try {
        const content = fs.readFileSync(filePath, 'utf-8')

        // Extract priority
        const priorityMatch = content.match(/Priority:\s*(\w+)/i)
        if (priorityMatch) {
          const p = priorityMatch[1].toLowerCase()
          if (stats.byPriority[p] !== undefined) {
            stats.byPriority[p]++
          }
        }

        // Count tasks
        const taskMatches = content.match(/^-\s*\[[ x]\]\s*.+/gm)
        if (taskMatches) {
          stats.totalTasks += taskMatches.length
          const completedMatches = content.match(/^-\s*\[x\]\s*.+/gm)
          stats.completedTasks += (completedMatches ? completedMatches.length : 0)
        }
      } catch {
        // Skip files that can't be read
      }
    }
  }

  // Calculate average task completion percentage
  if (stats.totalTasks > 0) {
    stats.averageTaskCompletion = (stats.completedTasks / stats.totalTasks) * 100
  }

  return stats
}

/**
 * Get project statistics
 * GET /api/kanban/stats?project=...
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

    const projectPath = path.join(getKanbanRoot(), project)

    if (!fs.existsSync(projectPath)) {
      return NextResponse.json(
        { error: 'Project not found', project },
        { status: 404 }
      )
    }

    const stats = calculateProjectStats(projectPath)

    return NextResponse.json({
      project,
      stats,
    })
  } catch (error) {
    console.error('Error in /api/kanban/stats:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}