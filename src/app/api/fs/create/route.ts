import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject } from '@/lib/security'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

/**
 * Create a new file without overwriting an existing one.
 * POST /api/fs/create
 * Body: { path, content?, extension? }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { path: filePath, content = '', extension = '.md' } = body
    if (typeof filePath !== 'string' || typeof content !== 'string' || typeof extension !== 'string') {
      return NextResponse.json({ error: 'path, content and extension must be strings' }, { status: 400 })
    }

    const fullPath = realInside(getWorkspacePath(), filePath)
    if (fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'File already exists', path: filePath }, { status: 409 })
    }

    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(fullPath, content, { encoding: 'utf8', flag: 'wx' })

    const stats = fs.statSync(fullPath)
    return NextResponse.json({
      success: true,
      path: filePath,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/create:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
