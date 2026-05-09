import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

const getWorkspace = () => getWorkspacePath()

/**
 * Delete a file or directory
 * DELETE /api/fs/delete
 * Body: { path }
 */
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { path: filePath } = body

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

    const fullPath = path.join(getWorkspace(), filePath)

    // Check if exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Path not found', path: filePath },
        { status: 404 }
      )
    }

    // Don't allow deleting workspace root or critical directories
    if (filePath === '' || filePath === '.') {
      return NextResponse.json(
        { error: 'Cannot delete root workspace directory' },
        { status: 400 }
      )
    }

    const stats = fs.statSync(fullPath)

    // Delete file or recursively delete directory
    if (stats.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true })
    } else {
      fs.unlinkSync(fullPath)
    }

    return NextResponse.json({
      success: true,
      path: filePath,
      type: stats.isDirectory() ? 'directory' : 'file',
    })
  } catch (error) {
    console.error('Error in /api/fs/delete:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
