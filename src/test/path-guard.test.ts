import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { UnsafePathError, realInside, resolveInside, sha256 } from '../lib/path-guard'

describe('path guard', () => {
  let tempDir: string
  let root: string
  let outside: string

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'path-guard-'))
    root = path.join(tempDir, 'workspace')
    outside = path.join(tempDir, 'workspace-evil')
    fs.mkdirSync(root)
    fs.mkdirSync(outside)
  })

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true })
  })

  it('rejects a sibling directory with the workspace prefix', () => {
    expect(() => resolveInside(root, '../workspace-evil/secret.txt')).toThrowError(UnsafePathError)
  })

  it('rejects parent traversal', () => {
    expect(() => resolveInside(root, 'kanban/../../secret.txt')).toThrowError(UnsafePathError)
  })

  it('rejects a symlink that points outside the root', () => {
    fs.writeFileSync(path.join(outside, 'secret.txt'), 'secret')
    fs.symlinkSync(outside, path.join(root, 'link'), 'dir')

    expect(() => realInside(root, 'link/secret.txt')).toThrowError(UnsafePathError)
  })

  it('hashes two different strings differently', () => {
    expect(sha256('first')).not.toBe(sha256('second'))
  })
})
