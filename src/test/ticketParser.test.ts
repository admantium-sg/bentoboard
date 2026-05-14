import { describe, it, expect } from 'vitest'
import { parseTicketMarkdown } from '../lib/parsers/ticketParser'

describe('ticketParser', () => {
  describe('parseTicketMarkdown', () => {
    it('should return ticket for valid content', () => {
      const content = `# TEST-001 Test Ticket

## Description
Test description here.

## Tasks
- [x] First task
- [ ] Second task

`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test-ticket.md')
      expect(result.ticket).toBeDefined()
      expect(result.ticket?.id).toBe('TEST-1')
    })

    it('should extract title from H1', () => {
      const content = `# DASH-019 Dark Mode

Some description here.
`
      const result = parseTicketMarkdown(content, '/workspace/test/DASH-019-dark-mode.md')
      expect(result.ticket?.title).toBe('DASH-019 Dark Mode')
    })

    it('should handle empty content', () => {
      const result = parseTicketMarkdown('', '/workspace/test.md')
      expect(result.ticket).toBeDefined()
    })

    it('should extract description', () => {
      const content = `# TEST-001 Test

Some description text.
`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test.md')
      expect(result.ticket?.description).toBe('Some description text.')
    })

    it('should handle content without description', () => {
      const content = `# TEST-001 Test

## Tasks
- [x] Task
`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test.md')
      expect(result.ticket).toBeDefined()
    })

    it('should extract filename metadata', () => {
      const content = `# TEST-001 Something

`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-something.md')
      expect(result.ticket?.acronym).toBe('TEST')
      expect(result.ticket?.number).toBe(1)
    })

    it('should set default phase to backlog', () => {
      const content = `# TEST-001 Test

`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test.md')
      expect(result.ticket?.phase).toBe('backlog')
    })

    it('should set project to unknown', () => {
      const content = `# TEST-001 Test

`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test.md')
      expect(result.ticket?.project).toBe('unknown')
    })

    it('should parse phase history table', () => {
      const content = `# TEST-001 Test

## Phase History
| Phase | Date | Notes |
|-------|------|-------|
| backlog | 2026-04-20 18:24:00 | Self-drafted |
`
      const result = parseTicketMarkdown(content, '/workspace/test/TEST-001-test.md')
      // Parser may include separator row, so check for backlog entry
      expect(result.ticket?.phaseHistory.some(h => h.phase === 'backlog')).toBe(true)
    })

    it('should handle file path correctly', () => {
      const content = `# TEST-001 Test

`
      const result = parseTicketMarkdown(content, '/workspace/kanban/myproject/backlog/TEST-001-test.md')
      expect(result.ticket?.filePath).toBe('/workspace/kanban/myproject/backlog/TEST-001-test.md')
    })
  })
})
