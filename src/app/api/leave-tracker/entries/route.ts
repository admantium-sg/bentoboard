import { NextRequest, NextResponse } from 'next/server'
import 'server-only'

import { getEntry, markDone, markOpen, keepDone } from '@/lib/leave-tracker'
import { getWorkspacePath } from '@/lib/workspace'
import { readJsonObject } from '@/lib/security'
import { realInside, unsafePathStatus } from '@/lib/path-guard'

/**
 * GET /api/leave-tracker/entries?path=/relative/path
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filePath = searchParams.get('path')

    if (filePath !== null) {
      if (!filePath) return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
      realInside(getWorkspacePath(), filePath)
      return NextResponse.json({ entry: getEntry(filePath) })
    }

    return NextResponse.json({ entries: [] })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in leave-tracker entries GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/leave-tracker/entries
 * Body: { action: 'done' | 'open' | 'keep-done', path: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await readJsonObject(request)
    if (!body || typeof body.action !== 'string' || typeof body.path !== 'string' || !body.path) {
      return NextResponse.json({ error: 'action and path required' }, { status: 400 })
    }

    realInside(getWorkspacePath(), body.path)

    let entry
    if (body.action === 'done') entry = markDone(body.path)
    else if (body.action === 'open') entry = markOpen(body.path)
    else if (body.action === 'keep-done') entry = keepDone(body.path)
    else return NextResponse.json({ error: 'Invalid action' }, { status: 400 })

    return NextResponse.json({ entry })
  } catch (error) {
    const unsafeStatus = unsafePathStatus(error)
    if (unsafeStatus) return NextResponse.json({ error: 'Invalid path' }, { status: unsafeStatus })
    console.error('Error in leave-tracker entries POST:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
