import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject } from '@/lib/security'
import { realInside, resolveInside, unsafePathStatus } from '@/lib/path-guard'

/**
 * Delete a file or directory.
 * DELETE /api/fs/delete
 * Body: { path }
 */
export async function DELETE(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body) return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })

    const { path: filePath } = body
    if (typeof filePath !== 'string' || !filePath) {
      return NextResponse.json({ error: 'path required' }, { status: 400 })
    }

    const workspace = getWorkspacePath()
    const lexicalPath = resolveInside(workspace, filePath)
    if (lexicalPath === path.resolve(workspace)) {
      return NextResponse.json({ error: 'Cannot delete root workspace directory' }, { status: 400 })
    }

    const fullPath = realInside(workspace, filePath)
    if (fullPath === fs.realpathSync(workspace)) {
      return NextResponse.json({ error: 'Cannot delete root workspace directory' }, { status: 400 })
    }
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Path not found', path: filePath }, { status: 404 })
    }

    const stats = fs.lstatSync(fullPath)
    if (stats.isDirectory() && !stats.isSymbolicLink()) {
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
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in /api/fs/delete:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
