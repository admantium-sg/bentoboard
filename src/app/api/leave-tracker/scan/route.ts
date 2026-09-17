import { NextResponse } from 'next/server'
import 'server-only'

import { scanWorkspace } from '@/lib/leave-tracker'

/**
 * POST /api/leave-tracker/scan
 * Scan workspace and return all tracked files with current state
 */
export async function POST() {
  try {
    const entries = scanWorkspace()
    return NextResponse.json({ entries })
  } catch (error) {
    console.error('Error in leave-tracker scan POST:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
