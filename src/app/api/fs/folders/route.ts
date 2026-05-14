import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()

/**
 * List all folders in the workspace (excluding specified ones)
 * GET /api/fs/folders
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const exclude = searchParams.get('exclude')?.split(',') || ['kanban']

    if (!fs.existsSync(getWorkspace())) {
      return NextResponse.json({
        folders: [],
        workspace: getWorkspace(),
        message: 'Workspace not found',
      })
    }

    const entries = fs.readdirSync(getWorkspace(), { withFileTypes: true })
    const folders = entries
      .filter((entry) => {
        if (!entry.isDirectory()) return false
        if (exclude.includes(entry.name)) return false
        // Skip hidden directories
        if (entry.name.startsWith('.')) return false
        return true
      })
      .map((entry) => {
        const folderPath = path.join(getWorkspace(), entry.name)
        const stats = fs.statSync(folderPath)
        return {
          name: entry.name,
          displayName: entry.name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          path: entry.name,
          modifiedAt: stats.mtime.toISOString(),
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    return NextResponse.json({
      folders,
      workspace: getWorkspace(),
      count: folders.length,
    })
  } catch (error) {
    console.error('Error in /api/fs/folders:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
