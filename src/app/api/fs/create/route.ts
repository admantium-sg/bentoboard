import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

/**
 * Create a new file
 * POST /api/fs/create
 * Body: { path, content?, extension? }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path: filePath, content = '', extension = '.md' } = body

    if (!filePath) {
      return NextResponse.json(
        { error: 'path required' },
        { status: 400 }
      )
    }

    // Security: Prevent path traversal
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    const fullPath = path.join(DEFAULT_WORKSPACE, filePath)

    // Ensure directory exists
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Check if already exists
    if (fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'File already exists', path: filePath },
        { status: 409 }
      )
    }

    // Write file
    fs.writeFileSync(fullPath, content, 'utf-8')

    const stats = fs.statSync(fullPath)

    return NextResponse.json({
      success: true,
      path: filePath,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/fs/create:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
