import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'
import { getWorkspacePath } from '@/lib/workspace'

interface BrowseEntry {
  name: string
  path: string
  type: 'file' | 'directory'
}

/**
 * Browse directories up to the base path
 * GET /api/fs/browse?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const BASE_PATH = getWorkspacePath()

    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path') || ''

    // Security: Prevent path traversal
    if (relativePath.includes('..')) {
      return NextResponse.json(
        { error: 'Path traversal not allowed' },
        { status: 400 }
      )
    }

    const fullPath = path.join(BASE_PATH, relativePath)

    // Ensure path doesn't escape BASE_PATH
    if (!fullPath.startsWith(BASE_PATH)) {
      return NextResponse.json(
        { error: 'Access denied: path outside base directory' },
        { status: 403 }
      )
    }

    // Validate path exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Path not found', path: relativePath },
        { status: 404 }
      )
    }

    const stats = fs.statSync(fullPath)

    // If it's a file, return single file info
    if (stats.isFile()) {
      return NextResponse.json({
        path: relativePath,
        name: path.basename(relativePath),
        type: 'file',
      })
    }

    // It's a directory - list contents
    const entries = fs.readdirSync(fullPath, { withFileTypes: true })
    const nodes: BrowseEntry[] = []

    for (const entry of entries) {
      // Skip certain directories
      if (entry.name === 'node_modules' || entry.name === '.git') continue

      const entryPath = relativePath ? `${relativePath}/${entry.name}` : entry.name

      nodes.push({
        name: entry.name,
        path: entryPath,
        type: entry.isDirectory() ? 'directory' : 'file',
      })
    }

    // Sort: directories first, then files, alphabetically
    nodes.sort((a, b) => {
      if (a.type !== b.type) return a.type === 'directory' ? -1 : 1
      return a.name.localeCompare(b.name)
    })

    return NextResponse.json({
      path: relativePath,
      basePath: BASE_PATH,
      entries: nodes,
      count: nodes.length,
    })
  } catch (error) {
    console.error('Error in /api/fs/browse:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}