import { describe, it, expect } from 'vitest'
import { serializeTicketToMarkdown, generateTicketFilename, addPhaseHistoryEntry } from '../lib/serializers/ticketSerializer'
import type { KanbanTicket } from '../lib/types'

describe('ticketSerializer', () => {
  const sampleTicket: KanbanTicket = {
    id: 'DASH-019',
    project: 'openclaw-kanban-dashboard',
    acronym: 'DASH',
    number: 19,
    title: 'Dark Mode',
    description: 'Add dark mode toggle for the dashboard.',
    tasks: [
      { checked: true, text: 'Add theme toggle button' },
      { checked: false, text: 'Detect system preference' },
    ],
    acceptanceCriteria: ['Dark mode visually complete'],
    questions: [],
    assumptions: ['Assume CSS custom properties'],
    priority: 'low',
    metadata: { Priority: 'low' },
    phase: 'backlog',
    phaseHistory: [
      { phase: 'backlog', date: '2026-04-20 18:24:00', notes: 'Self-drafted' },
    ],
    attempts: [],
    symbol: undefined,
    filePath: '/workspace/kanban/project/backlog/DASH-019-dark-mode.md',
    modifiedAt: '2026-04-20T18:24:00Z',
  }

  describe('serializeTicketToMarkdown', () => {
    it('should serialize ticket to markdown format', () => {
      const markdown = serializeTicketToMarkdown(sampleTicket)
      expect(markdown).toContain('#DASH-019 Dark Mode')
      expect(markdown).toContain('## Description')
      expect(markdown).toContain('Add dark mode toggle')
    })

    it('should serialize tasks with correct checkbox format', () => {
      const markdown = serializeTicketToMarkdown(sampleTicket)
      expect(markdown).toContain('- [x] Add theme toggle button')
      expect(markdown).toContain('- [ ] Detect system preference')
    })

    it('should serialize phase history', () => {
      const markdown = serializeTicketToMarkdown(sampleTicket)
      expect(markdown).toContain('## Phase History')
      expect(markdown).toContain('backlog')
    })

    it('should handle empty tasks array', () => {
      const ticketWithoutTasks = { ...sampleTicket, tasks: [] }
      const markdown = serializeTicketToMarkdown(ticketWithoutTasks)
      expect(markdown).not.toContain('## Tasks')
    })

    it('should handle empty phase history', () => {
      const ticketWithoutHistory = { ...sampleTicket, phaseHistory: [] }
      const markdown = serializeTicketToMarkdown(ticketWithoutHistory)
      expect(markdown).not.toContain('## Phase History')
    })

    it('should handle empty acceptance criteria', () => {
      const ticketWithoutAC = { ...sampleTicket, acceptanceCriteria: [] }
      const markdown = serializeTicketToMarkdown(ticketWithoutAC)
      expect(markdown).not.toContain('## Acceptance Criteria')
    })

    it('should handle empty metadata', () => {
      const ticketWithoutMeta = { ...sampleTicket, metadata: {} }
      const markdown = serializeTicketToMarkdown(ticketWithoutMeta)
      expect(markdown).not.toContain('## Metadata')
    })

    it('should include assumptions when present', () => {
      const markdown = serializeTicketToMarkdown(sampleTicket)
      expect(markdown).toContain('## Questions & Assumption Check')
    })

    it('should handle empty assumptions', () => {
      const ticketNoAssumptions = { ...sampleTicket, assumptions: [] }
      const markdown = serializeTicketToMarkdown(ticketNoAssumptions)
      expect(markdown).not.toContain('## Questions & Assumption Check')
    })

    it('should handle empty attempts', () => {
      const markdown = serializeTicketToMarkdown(sampleTicket)
      expect(markdown).not.toContain('## Attempts')
    })

    it('should handle attempts with content', () => {
      const ticketWithAttempts = {
        ...sampleTicket,
        attempts: [{
          number: 1,
          phase: 'in-progress',
          questionBlock: 'How do I implement this?',
          attempts: 3,
          resolution: 'Used CSS variables',
        }]
      }
      const markdown = serializeTicketToMarkdown(ticketWithAttempts)
      expect(markdown).toContain('## Attempts')
    })
  })

  describe('generateTicketFilename', () => {
    it('should generate filename', () => {
      const filename = generateTicketFilename('DASH', 19, 'Dark Mode')
      expect(filename).toContain('DASH-19')
      expect(filename).toContain('dark-mode')
      expect(filename).toMatch(/\.md$/)
    })

    it('should generate filename with symbol', () => {
      const filename = generateTicketFilename('DASH', 19, 'Dark Mode', '⏳')
      expect(filename).toContain('⏳')
    })

    it('should generate filename with null symbol', () => {
      const filename = generateTicketFilename('DASH', 19, 'Dark Mode', null)
      expect(filename).toContain('DASH-19')
    })
  })

  describe('addPhaseHistoryEntry', () => {
    it('should add new phase entry to history', () => {
      const updated = addPhaseHistoryEntry(sampleTicket, 'to-do', 'Moving to todo')
      expect(updated.phase).toBe('to-do')
      expect(updated.phaseHistory.length).toBeGreaterThan(sampleTicket.phaseHistory.length)
    })

    it('should add entry without notes', () => {
      const updated = addPhaseHistoryEntry(sampleTicket, 'in-progress')
      expect(updated.phase).toBe('in-progress')
    })
  })
})