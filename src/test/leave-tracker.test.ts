import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

vi.mock('server-only', () => ({}))

import { readEntries, scanWorkspace, upsertEntry, type LeaveEntry } from '../lib/leave-tracker'

describe('leave-tracker', () => {
  let workspace: string

  beforeEach(() => {
    workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'bentoboard-leave-'))
    process.env.BENTOBOARD_WORKSPACE_FOLDER = workspace
  })

  afterEach(() => {
    delete process.env.BENTOBOARD_WORKSPACE_FOLDER
    fs.rmSync(workspace, { recursive: true, force: true })
  })

  it('keeps both changes and preserves the original created_at', () => {
    upsertEntry({
      path: 'first.md',
      status: 'open',
      md5: 'one',
      created_at: '2026-01-01T00:00:00.000Z',
    })
    upsertEntry({
      path: 'second.md',
      status: 'open',
      md5: 'two',
      created_at: '2026-01-02T00:00:00.000Z',
    })
    upsertEntry({
      path: 'first.md',
      status: 'done',
      md5: 'three',
      created_at: '2026-02-01T00:00:00.000Z',
    })

    const lines = fs.readFileSync(path.join(workspace, '.leave-db.jsonl'), 'utf-8').trim().split('\n')
    expect(lines).toHaveLength(3)

    const entries = readEntries()
    expect(entries.map((entry) => entry.path).sort()).toEqual(['first.md', 'second.md'])
    expect(entries.find((entry) => entry.path === 'first.md')?.status).toBe('done')
    expect(entries.find((entry) => entry.path === 'first.md')?.created_at).toBe('2026-01-01T00:00:00.000Z')
  })

  it('drops a deleted path from scan output', () => {
    const filePath = path.join(workspace, 'note.md')
    fs.writeFileSync(filePath, '# Note')
    const entry: LeaveEntry = {
      path: 'note.md',
      status: 'open',
      md5: 'hash',
      created_at: '2026-01-01T00:00:00.000Z',
    }
    upsertEntry(entry)

    expect(scanWorkspace().some((item) => item.path === 'note.md')).toBe(true)

    fs.unlinkSync(filePath)

    expect(scanWorkspace().some((item) => item.path === 'note.md')).toBe(false)
  })
})
