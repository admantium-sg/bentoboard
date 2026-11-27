import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  size?: number
  modifiedAt: string
}

/**
 * List directory contents.
 * GET /api/fs/ls?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path') || ''
    const fullPath = realInside(getWorkspacePath(), relativePath)

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Path not found', path: relativePath }, { status: 404 })
    }

    const stats = fs.statSync(fullPath)
    if (stats.isFile()) {
      return NextResponse.json({
        path: relativePath,
        name: path.basename(relativePath),
        type: 'file',
        size: stats.size,
        modifiedAt: stats.mtime.toISOString(),
      })
    }

    const nodes: FileNode[] = []
    for (const entry of fs.readdirSync(fullPath, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name.startsWith('.')) continue
      if (entry.isSymbolicLink()) continue

      const entryPath = relativePath ? `${relativePath}/${entry.name}` : entry.name
      const entryStats = fs.statSync(path.join(fullPath, entry.name))
      nodes.push({
        name: entry.name,
        path: entryPath,
        type: entry.isDirectory() ? 'directory' : 'file',
        size: entry.isFile() ? entryStats.size : undefined,
        modifiedAt: entryStats.mtime.toISOString(),
      })
    }

    nodes.sort((a, b) => {
      if (a.type !== b.type) return a.type === 'directory' ? -1 : 1
      return a.name.localeCompare(b.name)
    })

    return NextResponse.json({ path: relativePath, entries: nodes, count: nodes.length })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/ls:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
