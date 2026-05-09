import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

/**
 * Read file content
 * GET /api/fs/read?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path')

    if (!relativePath) {
      return NextResponse.json(
        { error: 'Path parameter required' },
        { status: 400 }
      )
    }

    // Security: Prevent path traversal
    if (relativePath.includes('..') || relativePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    const fullPath = path.join(getWorkspace(), relativePath)

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'File not found', path: relativePath },
        { status: 404 }
      )
    }

    // Get file stats
    const stats = fs.statSync(fullPath)

    // Check file size
    if (stats.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large', path: relativePath, maxSize: MAX_FILE_SIZE },
        { status: 400 }
      )
    }

    // Read file content
    const content = fs.readFileSync(fullPath, 'utf-8')

    // Calculate content hash for conflict detection
    const contentHash = calculateHash(content)

    return NextResponse.json({
      path: relativePath,
      content,
      hash: contentHash,
      modifiedAt: stats.mtime.toISOString(),
      size: stats.size,
    })
  } catch (error) {
    console.error('Error in /api/fs/read:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Calculate a simple hash of a string for conflict detection
 */
function calculateHash(content: string): string {
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36)
}