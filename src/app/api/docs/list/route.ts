import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

interface Doc {
  path: string
  title: string
  content: string
  category: string
  project: string
  modifiedAt: string
}

const PREVIEW_LENGTH = 512

function extractTitle(filePath: string, content: string): string {
  const heading = content.split('\n').find((line) => line.startsWith('# '))
  return heading ? heading.slice(2).trim() : path.basename(filePath, path.extname(filePath))
}

function scanDirectory(dirPath: string, baseCategory: string, workspaceRoot: string, docs: Doc[]): void {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.isSymbolicLink()) continue
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      scanDirectory(fullPath, baseCategory, workspaceRoot, docs)
      continue
    }
    if (!entry.isFile() || !['.md', '.txt'].includes(path.extname(entry.name).toLowerCase())) continue

    let stats: fs.Stats
    try {
      stats = fs.statSync(fullPath)
    } catch {
      continue
    }

    let content = ''
    try {
      const fd = fs.openSync(fullPath, 'r')
      const buffer = Buffer.alloc(PREVIEW_LENGTH)
      const bytesRead = fs.readSync(fd, buffer, 0, PREVIEW_LENGTH, 0)
      fs.closeSync(fd)
      content = buffer.toString('utf-8', 0, bytesRead).slice(0, PREVIEW_LENGTH)
    } catch {
      continue
    }

    const relPath = path.relative(workspaceRoot, fullPath)
    docs.push({
      path: relPath,
      title: extractTitle(fullPath, content),
      content,
      category: baseCategory,
      project: path.dirname(relPath),
      modifiedAt: stats.mtime.toISOString(),
    })
  }
}

/**
 * List short previews of .md and .txt documents in workspace subdirectories.
 * GET /api/docs/list
 * GET /api/docs/list?category=<name>
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryFilter = searchParams.get('category')
    const workspaceRoot = getWorkspacePath()

    if (!fs.existsSync(workspaceRoot)) {
      return NextResponse.json({ docs: [], workspace: workspaceRoot, message: 'Workspace not found' })
    }

    const docs: Doc[] = []
    let entries: fs.Dirent[]
    try {
      entries = fs.readdirSync(workspaceRoot, { withFileTypes: true })
    } catch {
      return NextResponse.json({ docs: [], workspace: workspaceRoot })
    }

    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith('.') || entry.isSymbolicLink()) continue
      if (categoryFilter !== null && entry.name !== categoryFilter) continue
      scanDirectory(path.join(workspaceRoot, entry.name), entry.name, workspaceRoot, docs)
    }

    docs.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())
    return NextResponse.json({ docs, workspace: workspaceRoot, count: docs.length })
  } catch (error) {
    console.error('Error in /api/docs/list:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
