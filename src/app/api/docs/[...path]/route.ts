import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DEFAULT_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'

/**
 * Get doc by path
 * GET /api/docs/[...path]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params
    const pathSegments = resolvedParams.path
    const docPath = pathSegments.join('/')
    const fullPath = path.join(DEFAULT_WORKSPACE, docPath)

    // Security: Prevent path traversal
    if (docPath.includes('..') || docPath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }

    // Read file content
    const content = fs.readFileSync(fullPath, 'utf-8')
    const stats = fs.statSync(fullPath)

    // Extract title from first H1
    let title = path.basename(docPath, '.md')
    const firstLine = content.split('\n')[0]
    if (firstLine.startsWith('# ')) {
      title = firstLine.slice(2).trim()
    }

    return NextResponse.json({
      path: docPath,
      title,
      content,
      modifiedAt: stats.mtime.toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/docs/[...path] GET:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Write doc content
 * POST /api/docs/[...path]
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params
    const pathSegments = resolvedParams.path
    const docPath = pathSegments.join('/')
    const fullPath = path.join(DEFAULT_WORKSPACE, docPath)

    // Security: Prevent path traversal
    if (docPath.includes('..') || docPath.startsWith('/')) {
      return NextResponse.json(
        { error: 'Invalid path: path traversal not allowed' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { content } = body

    if (content === undefined) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    // Ensure parent directory exists
    const parentDir = path.dirname(fullPath)
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true })
    }

    // Write file atomically
    const tempPath = fullPath + '.tmp'
    fs.writeFileSync(tempPath, content, 'utf-8')
    fs.renameSync(tempPath, fullPath)

    return NextResponse.json({
      success: true,
      path: docPath,
      modifiedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error in /api/docs/[...path] POST:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
