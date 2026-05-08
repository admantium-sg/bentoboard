import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
const STATUS_DIR = `${DEFAULT_WORKSPACE}/status`

/**
 * Get agent status
 * GET /api/status
 */
export async function GET(request: NextRequest) {
  try {
    if (!fs.existsSync(STATUS_DIR)) {
      return NextResponse.json({
        statuses: [],
        workspace: DEFAULT_WORKSPACE,
        message: 'Status directory not found',
      })
    }

    const entries = fs.readdirSync(STATUS_DIR)
    const jsonFiles = entries.filter((f) => f.endsWith('.json'))

    const statuses: {
      agent: string
      state: string
      currentTask: string
      progress: string
      blockers: string[]
      inputFiles: string[]
      outputFiles: string[]
      updatedAt: string
    }[] = []

    for (const file of jsonFiles) {
      try {
        const filePath = path.join(STATUS_DIR, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const data = JSON.parse(content)

        // Normalize field names (some use camelCase, some use snake_case)
        statuses.push({
          agent: data.agent || data.agent_name || file.replace('.json', ''),
          state: data.state || data.status || 'unknown',
          currentTask: data.current_task || data.currentTask || data.task || '',
          progress: data.progress || '',
          blockers: data.blockers || data.blocking || [],
          inputFiles: data.input_files || data.inputFiles || [],
          outputFiles: data.output_files || data.outputFiles || [],
          updatedAt: data.updated_at || data.updatedAt || new Date().toISOString(),
        })
      } catch (error) {
        console.error('Failed to parse status file:', file, error)
      }
    }

    // Sort by updated time (newest first)
    statuses.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

    return NextResponse.json({
      statuses,
      workspace: DEFAULT_WORKSPACE,
    })
  } catch (error) {
    console.error('Error in /api/status:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
