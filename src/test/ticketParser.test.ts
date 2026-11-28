import { describe, it, expect } from 'vitest'
import { parseTicketMarkdown } from '../lib/parsers/ticketParser'
import { serializeTicketToMarkdown } from '../lib/serializers/ticketSerializer'
import type { KanbanTicket } from '../lib/types'

const ticket: KanbanTicket = {
  id: 'DASH-019',
  project: 'dashboard',
  acronym: 'DASH',
  number: 19,
  title: 'Dark Mode',
  description: 'Add a toggle.',
  tasks: [
    { checked: true, text: 'Add button' },
    { checked: false, text: 'Detect preference' },
  ],
  acceptanceCriteria: ['Toggle works'],
  questions: ['Which theme wins?'],
  assumptions: ['CSS variables exist'],
  priority: 'low',
  metadata: { Priority: 'low' },
  phase: 'in-progress',
  phaseHistory: [{ phase: 'backlog', date: '2026-04-20 18:24:00', notes: 'Self-drafted' }],
  attempts: [{
    number: 1,
    phase: 'in-progress',
    questionBlock: 'How?',
    attempts: 3,
    resolution: 'Variables',
  }],
  symbol: undefined,
  filePath: '/workspace/kanban/dashboard/in-progress/DASH-019-dark-mode.md',
  modifiedAt: '2026-04-20T18:24:00Z',
}

describe('ticketParser', () => {
  it('parses every section written by the serializer', () => {
    const content = serializeTicketToMarkdown(ticket)
    const result = parseTicketMarkdown(content, ticket.filePath, { phase: 'in-progress', project: 'dashboard' })

    expect(result.error).toBeUndefined()
    expect(result.ticket?.id).toBe('DASH-019')
    expect(result.ticket?.title).toBe('DASH-019 Dark Mode')
    expect(result.ticket?.description).toBe('Add a toggle.')
    expect(result.ticket?.tasks).toEqual(ticket.tasks)
    expect(result.ticket?.acceptanceCriteria).toEqual(['Toggle works'])
    expect(result.ticket?.questions).toEqual(['Which theme wins?'])
    expect(result.ticket?.assumptions).toEqual(['CSS variables exist'])
    expect(result.ticket?.phaseHistory).toHaveLength(1)
    expect(result.ticket?.attempts).toHaveLength(1)
  })

  it('keeps zero padding from the filename', () => {
    const result = parseTicketMarkdown('# Test\n', '/workspace/TEST-001-test.md')
    expect(result.ticket?.id).toBe('TEST-001')
    expect(result.ticket?.number).toBe(1)
  })

  it('uses caller context for phase and project', () => {
    const result = parseTicketMarkdown('# Test\n', '/workspace/TEST-001-test.md', { phase: 'done', project: 'demo' })
    expect(result.ticket?.phase).toBe('done')
    expect(result.ticket?.project).toBe('demo')
  })

  it('skips dash-only table separator rows', () => {
    const content = `# Test

## Phase History
| Phase | Date | Notes |
|-------|------|-------|
| backlog | 2026-04-20 18:24:00 | Self-drafted |
`
    const result = parseTicketMarkdown(content, '/workspace/TEST-001-test.md')
    expect(result.ticket?.phaseHistory).toEqual([
      { phase: 'backlog', date: '2026-04-20 18:24:00', notes: 'Self-drafted' },
    ])
  })
})
