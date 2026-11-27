import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { NextRequest } from 'next/server'

vi.mock('server-only', () => ({}))

let workspace: string
let previousWorkspace: string | undefined
let readRoute: typeof import('../app/api/fs/read/route')
let writeRoute: typeof import('../app/api/fs/write/route')
let deleteRoute: typeof import('../app/api/fs/delete/route')
let ticketsRoute: typeof import('../app/api/kanban/tickets/route')
let phaseRoute: typeof import('../app/api/kanban/ticket/[id]/phase/route')
let middlewareModule: typeof import('../middleware')

function bodyRequest(url: string, method: 'POST' | 'DELETE', body: unknown, headers: Record<string, string> = {}) {
  return new NextRequest(url, {
    method,
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
}

beforeAll(async () => {
  previousWorkspace = process.env.BENTOBOARD_WORKSPACE_FOLDER
  workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'bentoboard-api-'))
  process.env.BENTOBOARD_WORKSPACE_FOLDER = workspace

  readRoute = await import('../app/api/fs/read/route')
  writeRoute = await import('../app/api/fs/write/route')
  deleteRoute = await import('../app/api/fs/delete/route')
  ticketsRoute = await import('../app/api/kanban/tickets/route')
  phaseRoute = await import('../app/api/kanban/ticket/[id]/phase/route')
  middlewareModule = await import('../middleware')
})

afterEach(() => {
  fs.rmSync(workspace, { recursive: true, force: true })
  fs.mkdirSync(workspace)
})

afterAll(() => {
  if (previousWorkspace === undefined) delete process.env.BENTOBOARD_WORKSPACE_FOLDER
  else process.env.BENTOBOARD_WORKSPACE_FOLDER = previousWorkspace
  fs.rmSync(workspace, { recursive: true, force: true })
})

describe('API boundaries', () => {
  it('rejects traversal in a file read', async () => {
    const outsideName = `${path.basename(workspace)}-outside.txt`
    fs.writeFileSync(path.join(path.dirname(workspace), outsideName), 'secret')
    try {
      const response = await readRoute.GET(
        new NextRequest(`http://localhost/api/fs/read?path=${encodeURIComponent(`../${outsideName}`)}`)
      )
      expect(response.status).toBe(400)
    } finally {
      fs.rmSync(path.join(path.dirname(workspace), outsideName), { force: true })
    }
  })

  it('rejects project traversal on list and create', async () => {
    const project = '../../etc'
    const list = await ticketsRoute.GET(new NextRequest(`http://localhost/api/kanban/tickets?project=${encodeURIComponent(project)}`))
    const create = await ticketsRoute.POST(bodyRequest('http://localhost/api/kanban/tickets', 'POST', { project, title: 'Bad' }))

    expect(list.status).toBe(400)
    expect(create.status).toBe(400)
  })

  it('refuses to delete the workspace root', async () => {
    const response = await deleteRoute.DELETE(bodyRequest('http://localhost/api/fs/delete', 'DELETE', { path: '.' }))
    expect(response.status).toBe(400)
    expect(fs.existsSync(workspace)).toBe(true)
  })

  it('returns 409 for the second stale-hash save', async () => {
    const initial = 'original'
    fs.writeFileSync(path.join(workspace, 'note.txt'), initial)
    const { sha256 } = await import('../lib/path-guard')
    const staleHash = sha256(initial)

    const first = await writeRoute.POST(bodyRequest('http://localhost/api/fs/write', 'POST', {
      path: 'note.txt',
      content: 'from tab A',
      expectedHash: staleHash,
    }))
    const second = await writeRoute.POST(bodyRequest('http://localhost/api/fs/write', 'POST', {
      path: 'note.txt',
      content: 'from tab B',
      expectedHash: staleHash,
    }))

    expect(first.status).toBe(200)
    expect(second.status).toBe(409)
    expect(fs.readFileSync(path.join(workspace, 'note.txt'), 'utf8')).toBe('from tab A')
  })

  it('refuses a phase move onto an existing ticket', async () => {
    const base = path.join(workspace, 'kanban', 'demo')
    fs.mkdirSync(path.join(base, 'backlog'), { recursive: true })
    fs.mkdirSync(path.join(base, 'done'), { recursive: true })
    fs.writeFileSync(path.join(base, 'backlog', 'DEMO-001-one.md'), '# DEMO-001 One')
    fs.writeFileSync(path.join(base, 'done', 'DEMO-001-one.md'), 'do not replace')

    const response = await phaseRoute.POST(
      bodyRequest('http://localhost/api/kanban/ticket/DEMO-001/phase', 'POST', { phase: 'done' }),
      { params: Promise.resolve({ id: 'DEMO-001' }) }
    )

    expect(response.status).toBe(409)
    expect(fs.readFileSync(path.join(base, 'done', 'DEMO-001-one.md'), 'utf8')).toBe('do not replace')
    expect(fs.existsSync(path.join(base, 'backlog', 'DEMO-001-one.md'))).toBe(true)
  })

  it('prompts for Basic auth only when credentials are configured', async () => {
    const { middleware } = middlewareModule
    process.env.BENTOBOARD_AUTH_USER = 'admin'
    process.env.BENTOBOARD_AUTH_PASSWORD = 'secret'
    try {
      const anonymous = middleware(new NextRequest('http://localhost/api/status'))
      expect(anonymous.status).toBe(401)
      expect(anonymous.headers.get('www-authenticate')).toContain('Basic')

      const authorized = middleware(new NextRequest('http://localhost/api/status', {
        headers: { authorization: `Basic ${btoa('admin:secret')}` },
      }))
      expect(authorized.status).toBe(200)
    } finally {
      delete process.env.BENTOBOARD_AUTH_USER
      delete process.env.BENTOBOARD_AUTH_PASSWORD
    }
  })
})
