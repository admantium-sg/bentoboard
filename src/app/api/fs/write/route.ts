import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject, sha256 } from '@/lib/security'
import { realInside, unsafePathStatus, uuidTempPath } from '@/lib/path-guard'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

/**
 * Write file content atomically after an expected-hash conflict check.
 * POST /api/fs/write
 * Body: { path, content, expectedHash }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { path: relativePath, content, expectedHash, hash } = body
    if (typeof relativePath !== 'string' || typeof content !== 'string') {
      return NextResponse.json({ error: 'Path and content required' }, { status: 400 })
    }

    const expected = typeof expectedHash === 'string' ? expectedHash : hash
    if (typeof expected !== 'string') {
      return NextResponse.json({ error: 'expectedHash required' }, { status: 400 })
    }
    if (content.length > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'Content too large', maxSize: MAX_FILE_SIZE }, { status: 400 })
    }

    const fullPath = realInside(getWorkspacePath(), relativePath)
    const currentContent = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf-8') : ''
    const currentHash = sha256(currentContent)
    if (currentHash !== expected) {
      return NextResponse.json({
        error: 'Conflict detected',
        message: 'File has been modified since you started editing',
        currentHash,
      }, { status: 409 })
    }

    const parentDir = path.dirname(fullPath)
    const tempPath = uuidTempPath(parentDir, relativePath)
    fs.writeFileSync(tempPath, content, 'utf-8')
    const stats = fs.statSync(tempPath)
    fs.renameSync(tempPath, fullPath)

    return NextResponse.json({
      success: true,
      path: relativePath,
      hash: sha256(content),
      modifiedAt: stats.mtime.toISOString(),
      size: stats.size,
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/write:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
