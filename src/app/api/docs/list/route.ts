import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

/**
 * List all markdown docs from non-kanban directories
 * GET /api/docs/list
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    if (!fs.existsSync(getWorkspacePath())) {
      return NextResponse.json({
        docs: [],
        workspace: getWorkspacePath(),
        message: 'Workspace not found',
      })
    }

    const docs: {
      path: string
      title: string
      content: string
      category: string
      project: string
      modifiedAt: string
    }[] = []

    // Directories to scan (non-kanban)
    const scanDirs = ['brainstorming', 'research', 'code-bugfix', 'code-bugfix/openclaw-kanban-dashboard', 'drafts', 'inbox']

    for (const scanDir of scanDirs) {
      const fullPath = path.join(getWorkspacePath(), scanDir)

      if (!fs.existsSync(fullPath)) continue

      // Recursively find all .md files
      function scanDirectory(dirPath: string, relDir: string) {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true })

        for (const entry of entries) {
          if (entry.isDirectory()) {
            scanDirectory(
              path.join(dirPath, entry.name),
              relDir ? `${relDir}/${entry.name}` : entry.name
            )
          } else if (entry.name.endsWith('.md')) {
            const filePath = path.join(dirPath, entry.name)
            const stats = fs.statSync(filePath)

            try {
              const content = fs.readFileSync(filePath, 'utf-8')
              const title = extractTitle(content) || entry.name.replace(/\.md$/, '')

              docs.push({
                path: `${scanDir}/${relDir ? relDir + '/' : ''}${entry.name}`,
                title,
                content,
                category: scanDir === 'brainstorming' ? 'feature-ideas' : scanDir === 'drafts' ? 'drafts' : scanDir === 'inbox' ? 'inbox' : scanDir,
                project: relDir || 'general',
                modifiedAt: stats.mtime.toISOString(),
              })
            } catch (error) {
              console.error('Failed to read doc:', filePath, error)
            }
          }
        }
      }

      scanDirectory(fullPath, '')
    }

    // Sort by modified time (newest first)
    docs.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())

    return NextResponse.json({
      docs,
      workspace: getWorkspacePath(),
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

/**
 * Extract title from markdown content
 */
function extractTitle(content: string): string | null {
  const lines = content.split('\n')
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.slice(2).trim()
    }
  }
  return null
}
