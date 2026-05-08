import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

/**
 * Create a new directory
 * POST /api/fs/mkdir
 * Body: { path }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path: dirPath } = body

    if (!dirPath) {
      return NextResponse.json(
        { error: 'path required' },
        { status: 400 }
      )
    }

    // Security: Prevent path traversal
    if (dirPath.includes('..') || dirPath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    const fullPath = path.join(DEFAULT_WORKSPACE, dirPath)

    // Check if already exists
    if (fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Directory already exists', path: dirPath },
        { status: 409 }
      )
    }

    // Create directory
    fs.mkdirSync(fullPath, { recursive: true })

    return NextResponse.json({
      success: true,
      path: dirPath,
    })
  } catch (error) {
    console.error('Error in /api/fs/mkdir:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
