/**
 * Leave File Tracker - JSON Lines DB
 * Server-only module - do not import from client components
 */

import 'server-only'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { getWorkspacePath } from './workspace'

const DB_FILE = '.leave-db.jsonl'
const TRACKED_EXTENSIONS = ['.md', '.txt', '.pdf', '.json', '.yaml', '.yml']

export type LeaveStatus = 'open' | 'done' | 'modified'

export interface LeaveEntry {
  path: string
  status: LeaveStatus
  md5: string
  created_at: string
  done_at?: string
  md5_at_done?: string
}

function getDbPath(): string {
  return path.join(getWorkspacePath(), DB_FILE)
}

function computeMd5(content: string): string {
  return crypto.createHash('md5').update(content, 'utf-8').digest('hex')
}

function computeFileMd5(fullPath: string): string {
  const content = fs.readFileSync(fullPath, 'utf-8')
  return computeMd5(content)
}

/** Read all entries from the JSON Lines DB */
export function readEntries(): LeaveEntry[] {
  const dbPath = getDbPath()
  if (!fs.existsSync(dbPath)) return []

  const lines = fs.readFileSync(dbPath, 'utf-8').split('\n').filter(Boolean)
  const entries: LeaveEntry[] = []

  for (const line of lines) {
    try {
      entries.push(JSON.parse(line) as LeaveEntry)
    } catch {
      // Skip malformed lines
    }
  }

  return entries
}

/** Write all entries to the JSON Lines DB (overwrite) */
function writeEntries(entries: LeaveEntry[]): void {
  const dbPath = getDbPath()
  const lines = entries.map((e) => JSON.stringify(e)).join('\n') + '\n'
  fs.writeFileSync(dbPath, lines, 'utf-8')
}

/** Get a single entry by path */
export function getEntry(filePath: string): LeaveEntry | null {
  const entries = readEntries()
  return entries.find((e) => e.path === filePath) ?? null
}

/** Upsert a single entry */
export function upsertEntry(entry: LeaveEntry): void {
  const entries = readEntries()
  const idx = entries.findIndex((e) => e.path === entry.path)
  if (idx >= 0) {
    entries[idx] = entry
  } else {
    entries.push(entry)
  }
  writeEntries(entries)
}

/** Mark a file as done */
export function markDone(filePath: string): LeaveEntry {
  const fullPath = path.join(getWorkspacePath(), filePath)
  const md5 = computeFileMd5(fullPath)
  const now = new Date().toISOString()

  const entry: LeaveEntry = {
    path: filePath,
    status: 'done',
    md5,
    created_at: now,
    done_at: now,
    md5_at_done: md5,
  }

  upsertEntry(entry)
  return entry
}

/** Reopen a file (mark as open) */
export function markOpen(filePath: string): LeaveEntry {
  const fullPath = path.join(getWorkspacePath(), filePath)
  const md5 = computeFileMd5(fullPath)
  const now = new Date().toISOString()

  const entry: LeaveEntry = {
    path: filePath,
    status: 'open',
    md5,
    created_at: now,
  }

  upsertEntry(entry)
  return entry
}

/** Keep done (update md5_at_done to current md5) */
export function keepDone(filePath: string): LeaveEntry {
  const fullPath = path.join(getWorkspacePath(), filePath)
  const md5 = computeFileMd5(fullPath)
  const now = new Date().toISOString()

  const entry: LeaveEntry = {
    path: filePath,
    status: 'done',
    md5,
    created_at: now,
    done_at: now,
    md5_at_done: md5,
  }

  upsertEntry(entry)
  return entry
}

/** Scan workspace and return all tracked files with current state */
export function scanWorkspace(): LeaveEntry[] {
  const workspaceRoot = getWorkspacePath()
  const entries = readEntries()
  const entryMap = new Map(entries.map((e) => [e.path, e]))

  const trackedFiles = walkDir(workspaceRoot, '')

  const result: LeaveEntry[] = []

  for (const filePath of trackedFiles) {
    const fullPath = path.join(workspaceRoot, filePath)
    const currentMd5 = computeFileMd5(fullPath)
    const existing = entryMap.get(filePath)
    const now = new Date().toISOString()

    if (existing) {
      // Detect modified state
      if (existing.status === 'done' && existing.md5_at_done && currentMd5 !== existing.md5_at_done) {
        result.push({ ...existing, status: 'modified', md5: currentMd5 })
      } else {
        result.push({ ...existing, md5: currentMd5 })
      }
    } else {
      // New file
      result.push({
        path: filePath,
        status: 'open',
        md5: currentMd5,
        created_at: now,
      })
    }
  }

  // Preserve entries for files that no longer exist (they'll be cleaned up on next scan)
  return result
}

/** Recursively walk directory and return relative paths of tracked files */
function walkDir(dir: string, relativeBase: string): string[] {
  const results: string[] = []

  if (!fs.existsSync(dir)) return results

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue
    if (entry.name === DB_FILE) continue // skip the DB file itself

    const relPath = relativeBase ? `${relativeBase}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      results.push(...walkDir(path.join(dir, entry.name), relPath))
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (TRACKED_EXTENSIONS.includes(ext)) {
        results.push(relPath)
      }
    }
  }

  return results
}

/** Get status summary for all tracked files */
export function getStatusMap(): Map<string, LeaveStatus> {
  const entries = scanWorkspace()
  return new Map(entries.map((e) => [e.path, e.status]))
}
