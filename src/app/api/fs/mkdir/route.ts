import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject } from '@/lib/security'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

/**
 * Create a new directory.
 * POST /api/fs/mkdir
 * Body: { path }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { path: dirPath } = body
    if (typeof dirPath !== 'string' || !dirPath) {
      return NextResponse.json({ error: 'path required' }, { status: 400 })
    }

    const fullPath = realInside(getWorkspacePath(), dirPath)
    if (fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Directory already exists', path: dirPath }, { status: 409 })
    }

    fs.mkdirSync(fullPath, { recursive: true })
    return NextResponse.json({ success: true, path: dirPath })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/mkdir:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
