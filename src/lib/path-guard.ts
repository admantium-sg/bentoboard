import { createHash, randomUUID } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

export type PathGuardReason = 'absolute' | 'traversal' | 'nul' | 'escape' | 'symlink-escape' | 'missing-root'

export class UnsafePathError extends Error {
  constructor(readonly reason: PathGuardReason, message = `Unsafe path: ${reason}`) {
    super(message)
    this.name = 'UnsafePathError'
  }
}

export const SAFE_SEGMENT = /^[A-Za-z0-9-]+$/

export function isSafeSegment(value: unknown): value is string {
  return typeof value === 'string' && SAFE_SEGMENT.test(value)
}

function assertInside(root: string, candidate: string, reason: PathGuardReason): string {
  const relative = path.relative(root, candidate)
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new UnsafePathError(reason)
  }
  return candidate
}

export function resolveInside(root: string, relative: string): string {
  if (typeof root !== 'string' || typeof relative !== 'string') {
    throw new UnsafePathError('escape')
  }
  if (relative.includes('\0')) throw new UnsafePathError('nul')
  if (path.isAbsolute(relative)) throw new UnsafePathError('absolute')
  if (relative.split(/[\\/]+/).includes('..')) throw new UnsafePathError('traversal')

  const absoluteRoot = path.resolve(root)
  return assertInside(absoluteRoot, path.resolve(absoluteRoot, relative), 'escape')
}

function nearestExisting(target: string, root: string): string {
  let current = target
  while (!fs.existsSync(current)) {
    const parent = path.dirname(current)
    if (parent === current || current === root) throw new UnsafePathError('missing-root')
    current = parent
  }
  return current
}

export function realInside(root: string, relative: string): string {
  const absoluteRoot = path.resolve(root)
  const target = resolveInside(absoluteRoot, relative)
  const realRoot = fs.realpathSync(absoluteRoot)
  const existing = nearestExisting(target, absoluteRoot)
  const realExisting = fs.realpathSync(existing)
  const realTarget = path.resolve(realExisting, path.relative(existing, target))
  return assertInside(realRoot, realTarget, 'symlink-escape')
}

export function sha256(text: string): string {
  return createHash('sha256').update(text, 'utf8').digest('hex')
}

export function uuidTempPath(dir: string, prefix: string): string {
  return path.join(dir, `${path.basename(prefix)}.${randomUUID()}.tmp`)
}

export function safeChild(root: string, segment: string): string {
  if (!isSafeSegment(segment)) throw new UnsafePathError('escape')
  const lexical = resolveInside(root, segment)
  return fs.existsSync(lexical) ? realInside(root, segment) : lexical
}

export function unsafePathStatus(error: unknown): 400 | 403 | null {
  if (!(error instanceof UnsafePathError)) return null
  return error.reason === 'symlink-escape' ? 403 : 400
}
