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

/** Extensions treated as text (non-binary) */
const TEXT_EXTENSIONS = new Set([
  '.md', '.txt', '.json', '.yaml', '.yml', '.toml', '.ini', '.cfg', '.conf',
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.html', '.htm', '.css', '.scss', '.sass', '.less',
  '.py', '.rb', '.php', '.sh', '.bash', '.zsh', '.fish',
  '.sql', '.graphql', '.gql',
  '.xml', '.svg',
  '.csv', '.tsv', '.log', '.env', '.gitignore', '.dockerignore',
  '.dockerfile', '.nginx', '.conf',
  '.rst', '.adoc', '.tex',
])

/**
 * Check if a file extension is considered a text format
 */
function isTextFile(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase()
  return TEXT_EXTENSIONS.has(ext)
}

/**
 * Extract a readable title from file content or name
 */
function extractTitle(filePath: string, content: string): string {
  const ext = path.extname(filePath).toLowerCase()
  // Markdown and reStructuredText use first heading as title
  if (ext === '.md' || ext === '.rst' || ext === '.adoc') {
    const lines = content.split('\n')
    for (const line of lines) {
      if (line.startsWith('# ')) {
        return line.slice(2).trim()
      }
    }
  }
  // JSON — use first key as title if top-level is an object
  if (ext === '.json') {
    try {
      const parsed = JSON.parse(content)
      if (typeof parsed === 'object' && parsed !== null) {
        const firstKey = Object.keys(parsed)[0]
        if (firstKey) return String(parsed[firstKey])
      }
    } catch {
      // not JSON or malformed
    }
  }
  // Fall back to filename without extension
  return path.basename(filePath, ext)
}

/**
 * Recursively scan a directory for text files
 */
function scanDirectory(
  dirPath: string,
  baseCategory: string,
  docs: Doc[]
): void {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      scanDirectory(fullPath, baseCategory, docs)
    } else if (isTextFile(fullPath)) {
      let stats: fs.Stats
      try {
        stats = fs.statSync(fullPath)
      } catch {
        continue
      }
      let content = ''
      try {
        // Read only first 64 KB for performance and memory safety
        const fd = fs.openSync(fullPath, 'r')
        const buf = Buffer.alloc(65536)
        const bytesRead = fs.readSync(fd, buf, 0, 65536, 0)
        fs.closeSync(fd)
        content = buf.slice(0, bytesRead).toString('utf-8')
      } catch {
        // Skip files that can't be read
        continue
      }
      const title = extractTitle(fullPath, content)
      const relPath = path.relative(getWorkspacePath(), fullPath)
      docs.push({
        path: relPath,
        title,
        content,
        category: baseCategory,
        project: path.dirname(relPath),
        modifiedAt: stats.mtime.toISOString(),
      })
    }
  }
}

/**
 * List all text documents from all subdirectories of the workspace root
 * GET /api/docs/list
 * GET /api/docs/list?category=<name>
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryFilter = searchParams.get('category')

    const workspaceRoot = getWorkspacePath()

    if (!fs.existsSync(workspaceRoot)) {
      return NextResponse.json({
        docs: [],
        workspace: workspaceRoot,
        message: 'Workspace not found',
      })
    }

    const docs: Doc[] = []

    // Dynamically discover all subdirectories of the workspace root
    let entries: fs.Dirent[]
    try {
      entries = fs.readdirSync(workspaceRoot, { withFileTypes: true })
    } catch {
      return NextResponse.json({ docs: [], workspace: workspaceRoot })
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      if (categoryFilter && entry.name !== categoryFilter) continue

      const fullPath = path.join(workspaceRoot, entry.name)
      scanDirectory(fullPath, entry.name, docs)
    }

    // Sort by modified time (newest first)
    docs.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())

    return NextResponse.json({
      docs,
      workspace: workspaceRoot,
      count: docs.length,
    })
  } catch (error) {
    console.error('Error in /api/docs/list:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
