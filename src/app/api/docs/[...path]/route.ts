import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject, sha256 } from '@/lib/security'
import { realInside, unsafePathStatus, uuidTempPath } from '@/lib/path-guard'

function docPathFrom(params: unknown): string | null {
  if (typeof params !== 'object' || params === null || !('path' in params)) return null
  const segments = params.path
  if (!Array.isArray(segments) || segments.length === 0 || !segments.every((s) => typeof s === 'string')) return null
  return segments.join('/')
}

/**
 * Get a doc and its content hash.
 * GET /api/docs/[...path]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const docPath = docPathFrom(await params)
    if (!docPath) return NextResponse.json({ error: 'Invalid doc path' }, { status: 400 })

    const fullPath = realInside(getWorkspacePath(), docPath)
    if (!fs.existsSync(fullPath)) return NextResponse.json({ error: 'File not found' }, { status: 404 })

    const content = fs.readFileSync(fullPath, 'utf-8')
    const stats = fs.statSync(fullPath)
    const firstLine = content.split('\n')[0]
    const title = firstLine.startsWith('# ') ? firstLine.slice(2).trim() : path.basename(docPath, '.md')

    return NextResponse.json({
      path: docPath,
      title,
      content,
      hash: sha256(content),
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/docs/[...path] GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * Write doc content after an expected-hash conflict check.
 * POST /api/docs/[...path]
 * Body: { content, expectedHash }
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const docPath = docPathFrom(await params)
    if (!docPath) return NextResponse.json({ error: 'Invalid doc path' }, { status: 400 })

    const body = await readJsonObject(request)
    if (!body || typeof body.content !== 'string' || typeof body.expectedHash !== 'string') {
      return NextResponse.json({ error: 'content and expectedHash are required' }, { status: 400 })
    }

    const fullPath = realInside(getWorkspacePath(), docPath)
    const currentContent = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf-8') : ''
    const currentHash = sha256(currentContent)
    if (currentHash !== body.expectedHash) {
      return NextResponse.json({
        error: 'Conflict detected',
        message: 'File has been modified since you started editing',
        currentHash,
      }, { status: 409 })
    }

    const parentDir = path.dirname(fullPath)
    if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true })
    const tempPath = uuidTempPath(parentDir, path.basename(fullPath))
    fs.writeFileSync(tempPath, body.content, 'utf-8')
    fs.renameSync(tempPath, fullPath)

    return NextResponse.json({
      success: true,
      path: docPath,
      hash: sha256(body.content),
      modifiedAt: new Date().toISOString(),
    })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/docs/[...path] POST:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
