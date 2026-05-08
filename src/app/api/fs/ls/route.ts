import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  size?: number
  modifiedAt: string
  children?: FileNode[]
}

/**
 * List directory contents recursively
 * GET /api/fs/ls?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path') || ''

    // Security: Prevent path traversal
    if (relativePath.includes('..') || relativePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    const fullPath = path.join(DEFAULT_WORKSPACE, relativePath)

    // Validate path is within workspace
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
        size: stats.size,
        modifiedAt: stats.mtime.toISOString(),
      })
    }

    // It's a directory - build tree
    const entries = fs.readdirSync(fullPath, { withFileTypes: true })
    const nodes: FileNode[] = []

    for (const entry of entries) {
      // Skip certain directories
      if (entry.name === 'node_modules' || entry.name === '.git') continue

      const entryPath = relativePath ? `${relativePath}/${entry.name}` : entry.name
      const entryFullPath = path.join(fullPath, entry.name)
      const entryStats = fs.statSync(entryFullPath)

      nodes.push({
        name: entry.name,
        path: entryPath,
        type: entry.isDirectory() ? 'directory' : 'file',
        size: entry.isFile() ? entryStats.size : undefined,
        modifiedAt: entryStats.mtime.toISOString(),
      })
    }

    // Sort: directories first, then files, alphabetically
    nodes.sort((a, b) => {
      if (a.type !== b.type) return a.type === 'directory' ? -1 : 1
      return a.name.localeCompare(b.name)
    })

    return NextResponse.json({
      path: relativePath,
      entries: nodes,
      count: nodes.length,
    })
  } catch (error) {
    console.error('Error in /api/fs/ls:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}