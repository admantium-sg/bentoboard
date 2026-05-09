import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()

/**
 * Poll for file changes
 * GET /api/fs/watch?since=ISO_TIMESTAMP
 * 
 * Returns list of files that have been modified since the given timestamp.
 * Uses mtime comparison to detect changes.
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sinceParam = searchParams.get('since')

    if (!sinceParam) {
      return NextResponse.json({
        since: new Date().toISOString(),
        changed: [],
        message: 'since parameter required',
      })
    }

    const since = new Date(sinceParam)
    const changed: string[] = []

    // Scan workspace directories recursively
    function scanDirectory(dirPath: string, relativePath: string = '') {
      if (!fs.existsSync(dirPath)) return

      const entries = fs.readdirSync(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name)
        const relPath = relativePath ? `${relativePath}/${entry.name}` : entry.name

        if (entry.isDirectory()) {
          // Skip certain directories
          if (entry.name === 'node_modules' || entry.name === '.git') continue

          scanDirectory(fullPath, relPath)
        } else if (entry.isFile()) {
          // Check if file was modified since 'since'
          try {
            const stats = fs.statSync(fullPath)
            if (stats.mtime > since) {
              changed.push(relPath)
            }
          } catch {
            // Skip files that can't be accessed
          }
        }
      }
    }

    scanDirectory(getWorkspace())

    return NextResponse.json({
      since: sinceParam,
      changed,
      checkedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/fs/watch:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
