import { describe, it, expect, beforeEach } from 'vitest'
import { useBentoStore } from '../lib/store'

describe('store.ts', () => {
  // Reset store before each test
  beforeEach(() => {
    useBentoStore.setState({
      projects: [],
      tickets: {},
      docs: [],
      agentStatus: [],
      sessions: [],
      selectedProject: null,
      selectedPhase: 'all',
      editingPath: null,
      editingContent: '',
      editingHash: null,
      recentChanges: [],
      page: 1,
      searchQuery: '',
      isLoading: false,
      sidebarCollapsed: false,
    })
  })

  describe('projects state', () => {
    it('should set projects', () => {
      const projects = [{ slug: 'test', name: 'Test', acronym: 'TST', color: '#3B82F6', ticketCounts: {}, totalTickets: 0, hasActiveSession: false }]
      useBentoStore.getState().setProjects(projects)
      expect(useBentoStore.getState().projects).toEqual(projects)
    })
  })

  describe('tickets state', () => {
    it('should set tickets', () => {
      const tickets = {
        'TEST-001': {
          id: 'TEST-001',
          project: 'test',
          acronym: 'TEST',
          number: 1,
          title: 'Test',
          description: '',
          tasks: [],
          acceptanceCriteria: [],
          questions: [],
          assumptions: [],
          metadata: {},
          phase: 'backlog' as const,
          phaseHistory: [],
          attempts: [],
          filePath: '/test/TEST-001-test.md',
          modifiedAt: '2026-05-03T12:00:00Z',
        }
      }
      useBentoStore.getState().setTickets(tickets)
      expect(useBentoStore.getState().tickets['TEST-001']).toBeDefined()
    })

    it('should upsert ticket', () => {
      const ticket = {
        id: 'TEST-002',
        project: 'test',
        acronym: 'TEST',
        number: 2,
        title: 'Test 2',
        description: '',
        tasks: [],
        acceptanceCriteria: [],
        questions: [],
        assumptions: [],
        metadata: {},
        phase: 'backlog' as const,
        phaseHistory: [],
        attempts: [],
        filePath: '/test/TEST-002-test.md',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      useBentoStore.getState().upsertTicket(ticket)
      expect(useBentoStore.getState().tickets['TEST-002']).toEqual(ticket)
    })

    it('should remove ticket', () => {
      const ticket = {
        id: 'TEST-003',
        project: 'test',
        acronym: 'TEST',
        number: 3,
        title: 'Test 3',
        description: '',
        tasks: [],
        acceptanceCriteria: [],
        questions: [],
        assumptions: [],
        metadata: {},
        phase: 'backlog' as const,
        phaseHistory: [],
        attempts: [],
        filePath: '/test/TEST-003-test.md',
        modifiedAt: '2026-05-03T12:00:00Z',
      }
      useBentoStore.getState().upsertTicket(ticket)
      expect(useBentoStore.getState().tickets['TEST-003']).toBeDefined()
      useBentoStore.getState().removeTicket('TEST-003')
      expect(useBentoStore.getState().tickets['TEST-003']).toBeUndefined()
    })
  })

  describe('docs state', () => {
    it('should set docs', () => {
      const docs = [{ path: 'test.md', title: 'Test', content: 'Content', category: 'research', project: 'test', modifiedAt: '2026-05-03T12:00:00Z' }]
      useBentoStore.getState().setDocs(docs)
      expect(useBentoStore.getState().docs).toEqual(docs)
    })

    it('should upsert doc', () => {
      const doc = { path: 'test.md', title: 'Test', content: 'Content', category: 'research', project: 'test', modifiedAt: '2026-05-03T12:00:00Z' }
      useBentoStore.getState().upsertDoc(doc)
      expect(useBentoStore.getState().docs[0]).toEqual(doc)
    })

    it('should remove doc', () => {
      const doc = { path: 'test.md', title: 'Test', content: 'Content', category: 'research', project: 'test', modifiedAt: '2026-05-03T12:00:00Z' }
      useBentoStore.getState().upsertDoc(doc)
      expect(useBentoStore.getState().docs).toHaveLength(1)
      useBentoStore.getState().removeDoc('test.md')
      expect(useBentoStore.getState().docs).toHaveLength(0)
    })

    it('should update doc content', () => {
      const doc = { path: 'test.md', title: 'Test', content: 'Original', category: 'research', project: 'test', modifiedAt: '2026-05-03T12:00:00Z' }
      useBentoStore.getState().upsertDoc(doc)
      useBentoStore.getState().updateDocContent('test.md', 'Updated content')
      expect(useBentoStore.getState().docs[0].content).toBe('Updated content')
    })
  })

  describe('UI state', () => {
    it('should set selected project', () => {
      useBentoStore.getState().setSelectedProject('test-project')
      expect(useBentoStore.getState().selectedProject).toBe('test-project')
    })

    it('should set selected phase', () => {
      useBentoStore.getState().setSelectedPhase('in-progress')
      expect(useBentoStore.getState().selectedPhase).toBe('in-progress')
    })

    it('should toggle sidebar', () => {
      expect(useBentoStore.getState().sidebarCollapsed).toBe(false)
      useBentoStore.getState().setSidebarCollapsed(true)
      expect(useBentoStore.getState().sidebarCollapsed).toBe(true)
    })
  })

  describe('editor state', () => {
    it('should set editing path', () => {
      useBentoStore.getState().setEditingPath('/workspace/test.md')
      expect(useBentoStore.getState().editingPath).toBe('/workspace/test.md')
    })

    it('should set editing content', () => {
      useBentoStore.getState().setEditingContent('# Test content')
      expect(useBentoStore.getState().editingContent).toBe('# Test content')
    })

    it('should set editing hash', () => {
      useBentoStore.getState().setEditingHash('abc123')
      expect(useBentoStore.getState().editingHash).toBe('abc123')
    })
  })

  describe('recent changes', () => {
    it('should add recent change', () => {
      useBentoStore.getState().addRecentChange({ path: '/test.md', type: 'modified', timestamp: '2026-05-03T12:00:00Z' })
      expect(useBentoStore.getState().recentChanges).toHaveLength(1)
    })

    it('should limit recent changes to 20', () => {
      for (let i = 0; i < 25; i++) {
        useBentoStore.getState().addRecentChange({ path: `/test${i}.md`, type: 'modified', timestamp: '2026-05-03T12:00:00Z' })
      }
      expect(useBentoStore.getState().recentChanges).toHaveLength(20)
    })

    it('should dismiss recent change', () => {
      useBentoStore.getState().addRecentChange({ path: '/test1.md', type: 'modified', timestamp: '2026-05-03T12:00:00Z' })
      useBentoStore.getState().addRecentChange({ path: '/test2.md', type: 'modified', timestamp: '2026-05-03T12:01:00Z' })
      expect(useBentoStore.getState().recentChanges).toHaveLength(2)
      useBentoStore.getState().dismissRecentChange(0)
      expect(useBentoStore.getState().recentChanges).toHaveLength(1)
    })
  })

  describe('pagination', () => {
    it('should set page', () => {
      useBentoStore.getState().setPage(3)
      expect(useBentoStore.getState().page).toBe(3)
    })

    it('should have default page size of 15', () => {
      expect(useBentoStore.getState().pageSize).toBe(15)
    })
  })

  describe('search', () => {
    it('should set search query', () => {
      useBentoStore.getState().setSearchQuery('test search')
      expect(useBentoStore.getState().searchQuery).toBe('test search')
    })
  })

  describe('loading state', () => {
    it('should set loading state', () => {
      useBentoStore.getState().setIsLoading(true)
      expect(useBentoStore.getState().isLoading).toBe(true)
    })
  })
})