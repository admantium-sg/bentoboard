import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

vi.mock('server-only', () => ({}))

import { getWorkspacePath } from '../lib/workspace'

describe('workspace path', () => {
  let root: string
  const originalEnv = process.env.BENTOBOARD_WORKSPACE_FOLDER

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'workspace-test-'))
    vi.spyOn(process, 'cwd').mockReturnValue(root)
    delete process.env.BENTOBOARD_WORKSPACE_FOLDER
  })

  afterEach(() => {
    vi.restoreAllMocks()
    if (originalEnv === undefined) delete process.env.BENTOBOARD_WORKSPACE_FOLDER
    else process.env.BENTOBOARD_WORKSPACE_FOLDER = originalEnv
    fs.rmSync(root, { recursive: true, force: true })
  })

  it('uses the env override when it is set', () => {
    const override = path.join(root, 'custom')
    fs.mkdirSync(override)
    process.env.BENTOBOARD_WORKSPACE_FOLDER = override

    expect(getWorkspacePath()).toBe(override)
  })

  it('uses bundled research content when the env var is unset', () => {
    const source = path.join(root, 'content', 'research')
    fs.mkdirSync(source, { recursive: true })

    expect(getWorkspacePath()).toBe(source)
  })

  it('falls back to /tmp/workspace when no content source exists', () => {
    fs.mkdirSync('/tmp/workspace', { recursive: true })

    expect(getWorkspacePath()).toBe('/tmp/workspace')
  })
})
