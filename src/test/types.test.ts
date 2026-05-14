import { describe, it, expect } from 'vitest'
import type { KanbanTicket, KanbanPhase, FileNode, MarkdownDoc, AgentStatus } from '../lib/types'

describe('types.ts', () => {
  describe('KanbanPhase', () => {
    const phases: KanbanPhase[] = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']

    it('should have all expected phases', () => {
      expect(phases).toContain('backlog')
      expect(phases).toContain('to-do')
      expect(phases).toContain('in-progress')
      expect(phases).toContain('in-review')
      expect(phases).toContain('pull-request')
      expect(phases).toContain('blocked')
      expect(phases).toContain('cancelled')
    })
  })

  describe('KanbanTicket structure', () => {
    it('should allow creating a valid ticket object', () => {
      const ticket: KanbanTicket = {
        id: 'TEST-001',
        project: 'test-project',
        acronym: 'TEST',
        number: 1,
        title: 'Test Ticket',
        description: 'Test description',
        tasks: [{ checked: false, text: 'Test task' }],
        acceptanceCriteria: [],
        questions: [],
        assumptions: [],
        metadata: {},
        phase: 'backlog',
        phaseHistory: [],
        attempts: [],
        filePath: '/workspace/test/TEST-001-test.md',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      expect(ticket.id).toBe('TEST-001')
      expect(ticket.phase).toBe('backlog')
    })

    it('should accept optional symbol', () => {
      const ticket: KanbanTicket = {
        id: 'TEST-002',
        project: 'test-project',
        acronym: 'TEST',
        number: 2,
        title: 'Blocked Ticket',
        description: 'Test',
        tasks: [],
        acceptanceCriteria: [],
        questions: [],
        assumptions: [],
        metadata: {},
        phase: 'blocked',
        phaseHistory: [],
        attempts: [],
        symbol: '⏳',
        filePath: '/workspace/test/TEST-002-blocked.md',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      expect(ticket.symbol).toBe('⏳')
    })

    it('should accept all phase types', () => {
      const phases: KanbanPhase[] = ['backlog', 'to-do', 'in-progress', 'in-review', 'pull-request', 'blocked', 'cancelled']
      phases.forEach(phase => {
        const ticket: KanbanTicket = {
          id: 'TEST-001',
          project: 'test-project',
          acronym: 'TEST',
          number: 1,
          title: 'Test',
          description: '',
          tasks: [],
          acceptanceCriteria: [],
          questions: [],
          assumptions: [],
          metadata: {},
          phase,
          phaseHistory: [],
          attempts: [],
          filePath: '/workspace/test/TEST-001-test.md',
          modifiedAt: '2026-05-03T12:00:00Z',
        }
        expect(ticket.phase).toBe(phase)
      })
    })
  })

  describe('FileNode structure', () => {
    it('should allow creating file node', () => {
      const node: FileNode = {
        name: 'test.md',
        path: '/workspace/test/test.md',
        type: 'file',
        size: 1024,
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      expect(node.type).toBe('file')
    })

    it('should allow creating directory node', () => {
      const node: FileNode = {
        name: 'test-dir',
        path: '/workspace/test-dir',
        type: 'directory',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      expect(node.type).toBe('directory')
    })
  })

  describe('MarkdownDoc structure', () => {
    it('should allow creating markdown doc', () => {
      const doc: MarkdownDoc = {
        path: 'research/topic/test.md',
        title: 'Research Topic',
        content: '# Research\n\nFindings...',
        category: 'research',
        project: 'general',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      expect(doc.category).toBe('research')
    })
  })

  describe('AgentStatus structure', () => {
    it('should allow creating agent status', () => {
      const status: AgentStatus = {
        agent: 'agent-1',
        state: 'working',
        currentTask: 'Processing files',
        progress: '50%',
        blockers: [],
        inputFiles: ['file1.md'],
        outputFiles: ['file2.md'],
        updatedAt: '2026-05-03T12:00:00Z',
      }
      expect(status.agent).toBe('agent-1')
      expect(status.blockers).toHaveLength(0)
    })
  })
})