import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'
import { getWorkspacePath } from '@/lib/workspace'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

interface BrowseEntry {
  name: string
  path: string
  type: 'file' | 'directory'
}

/**
 * Browse directories under the workspace.
 * GET /api/fs/browse?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const workspace = getWorkspacePath()
    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path') || ''
    const fullPath = realInside(workspace, relativePath)

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Path not found', path: relativePath }, { status: 404 })
    }

    const stats = fs.statSync(fullPath)
    if (stats.isFile()) {
      return NextResponse.json({
        path: relativePath,
        name: path.basename(relativePath),
        type: 'file',
      })
    }

    const nodes: BrowseEntry[] = []
    for (const entry of fs.readdirSync(fullPath, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name.startsWith('.')) continue
      if (entry.isSymbolicLink()) continue

      nodes.push({
        name: entry.name,
        path: relativePath ? `${relativePath}/${entry.name}` : entry.name,
        type: entry.isDirectory() ? 'directory' : 'file',
      })
    }

    nodes.sort((a, b) => {
      if (a.type !== b.type) return a.type === 'directory' ? -1 : 1
      return a.name.localeCompare(b.name)
    })

    return NextResponse.json({ path: relativePath, basePath: workspace, entries: nodes, count: nodes.length })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/browse:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
