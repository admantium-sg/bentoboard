import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'

import { getWorkspacePath } from '@/lib/workspace'
import { sha256 } from '@/lib/security'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

/**
 * Read file content and hash for conflict detection.
 * GET /api/fs/read?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const relativePath = searchParams.get('path')

    if (typeof relativePath !== 'string' || !relativePath) {
      return NextResponse.json({ error: 'Path parameter required' }, { status: 400 })
    }

    const fullPath = realInside(getWorkspacePath(), relativePath)

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'File not found', path: relativePath }, { status: 404 })
    }

    const stats = fs.statSync(fullPath)
    if (stats.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large', path: relativePath, maxSize: MAX_FILE_SIZE }, { status: 400 })
    }

    const content = fs.readFileSync(fullPath, 'utf-8')
    return NextResponse.json({
      path: relativePath,
      content,
      hash: sha256(content),
      modifiedAt: stats.mtime.toISOString(),
      size: stats.size,
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/read:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
