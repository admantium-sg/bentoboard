import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

/**
 * Write file content
 * POST /api/fs/write
 * Body: { path, content, hash? }
 *
 * Uses atomic write (temp file + rename) to prevent corruption.
 * Optionally checks hash for conflict detection.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path: relativePath, content, hash } = body

    if (!relativePath || content === undefined) {
      return NextResponse.json(
        { error: 'Path and content required' },
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

    // Check content size
    if (content.length > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Content too large', maxSize: MAX_FILE_SIZE },
        { status: 400 }
      )
    }

    const fullPath = path.join(getWorkspace(), relativePath)

    // If hash provided, check for conflicts by comparing current file hash
    if (hash) {
      if (fs.existsSync(fullPath)) {
        const currentContent = fs.readFileSync(fullPath, 'utf-8')
        const currentHash = calculateHash(currentContent)
        if (currentHash !== hash) {
          return NextResponse.json(
            {
              error: 'Conflict detected',
              message: 'File has been modified since you started editing',
              currentHash,
            },
            { status: 409 }
          )
        }
      }
    }

    // Ensure parent directory exists
    const parentDir = path.dirname(fullPath)
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true })
    }

    // Atomic write: write to temp file, then rename
    const tempPath = fullPath + '.tmp.' + Date.now()
    fs.writeFileSync(tempPath, content, 'utf-8')

    // Get stats before rename for response
    const stats = fs.statSync(tempPath)

    // Rename to final path (atomic on POSIX)
    fs.renameSync(tempPath, fullPath)

    // Calculate new hash for response
    const newHash = calculateHash(content)

    return NextResponse.json({
      success: true,
      path: relativePath,
      hash: newHash,
      modifiedAt: stats.mtime.toISOString(),
      size: stats.size,
    })
  } catch (error) {
    console.error('Error in /api/fs/write:', error)
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