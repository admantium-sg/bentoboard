import { NextRequest, NextResponse } from 'next/server'
import 'server-only'

import { getEntry, markDone, markOpen, keepDone } from '@/lib/leave-tracker'

/**
 * GET /api/leave-tracker/entries?path=/relative/path
 * Get a single entry or all entries
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filePath = searchParams.get('path')

    if (filePath) {
      // Security: prevent path traversal
      if (filePath.includes('..') || filePath.startsWith('/')) {
        return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
      }
      const entry = getEntry(filePath)
      return NextResponse.json({ entry })
    }

    // If no path, return empty (use /scan to get all)
    return NextResponse.json({ entries: [] })
  } catch (error) {
    console.error('Error in leave-tracker entries GET:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/leave-tracker/entries
 * Mark done, reopen, or keep-done for a file
 * Body: { action: 'done' | 'open' | 'keep-done', path: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, path: filePath } = body

    if (!filePath || !action) {
      return NextResponse.json({ error: 'action and path required' }, { status: 400 })
    }

    // Security: prevent path traversal
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
    }

    let entry
    if (action === 'done') {
      entry = markDone(filePath)
    } else if (action === 'open') {
      entry = markOpen(filePath)
    } else if (action === 'keep-done') {
      entry = keepDone(filePath)
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    return NextResponse.json({ entry })
  } catch (error) {
    console.error('Error in leave-tracker entries POST:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
