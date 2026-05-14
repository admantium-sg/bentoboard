'use client'

import { create } from 'zustand'
import type { KanbanTicket, MarkdownDoc, AgentStatus, SessionRegistry, KanbanPhase } from './types'

interface FilesystemStore {
  // Projects
  projects: Array<{ slug: string; name: string; acronym: string; color: string; ticketCounts: Record<string, number>; totalTickets: number; hasActiveSession: boolean }>
  setProjects: (projects: Array<{ slug: string; name: string; acronym: string; color: string; ticketCounts: Record<string, number>; totalTickets: number; hasActiveSession: boolean }>) => void

  // Tickets (indexed by ID for O(1) lookup)
  tickets: Record<string, KanbanTicket>
  setTickets: (tickets: Record<string, KanbanTicket>) => void
  upsertTicket: (ticket: KanbanTicket) => void
  removeTicket: (id: string) => void
  moveTicketPhase: (id: string, phase: KanbanPhase, notes?: string) => Promise<void>

  // Docs
  docs: MarkdownDoc[]
  setDocs: (docs: MarkdownDoc[]) => void
  upsertDoc: (doc: MarkdownDoc) => void
  removeDoc: (path: string) => void
  updateDocContent: (path: string, content: string) => void

  // Agent Status
  agentStatus: AgentStatus[]
  setAgentStatus: (status: AgentStatus[]) => void

  // Session Registry
  sessions: SessionRegistry[]
  setSessions: (sessions: SessionRegistry[]) => void

  // File Watcher
  lastPollTime: string
  setLastPollTime: (time: string) => void

  // UI State
  selectedProject: string | null
  selectedPhase: KanbanPhase | 'all'
  setSelectedProject: (project: string | null) => void
  setSelectedPhase: (phase: KanbanPhase | 'all') => void

  // Editor State
  editingPath: string | null
  editingContent: string
  setEditingPath: (path: string | null) => void
  setEditingContent: (content: string) => void

  // Conflict Detection
  editingHash: string | null
  setEditingHash: (hash: string | null) => void

  // Recent Changes
  recentChanges: Array<{ path: string; type: string; timestamp: string }>
  addRecentChange: (change: { path: string; type: string; timestamp: string }) => void
  dismissRecentChange: (index: number) => void

  // Pagination State
  page: number
  pageSize: number
  setPage: (page: number) => void

  // Search State
  searchQuery: string
  setSearchQuery: (query: string) => void

  // Loading States
  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  // Sidebar
  sidebarCollapsed: boolean
  setSidebarCollapsed: (v: boolean) => void
}

export const useBentoStore = create<FilesystemStore>((set, get) => ({
  // Projects
  projects: [],
  setProjects: (projects) => set({ projects }),

  // Tickets
  tickets: {},
  setTickets: (tickets) => set({ tickets }),
  upsertTicket: (ticket) => {
    const { tickets } = get()
    set({ tickets: { ...tickets, [ticket.id]: ticket } })
  },
  removeTicket: (id) =>
    set((state) => {
      const next = { ...state.tickets }
      delete next[id]
      return { tickets: next }
    }),
  moveTicketPhase: async (id, phase, notes) => {
    const { tickets } = get()
    if (tickets[id]) {
      const timestamp = new Date()
        .toISOString()
        .replace('T', ' ')
        .replace(/\.\d{3}Z$/, '')
      const updated = {
        ...tickets[id],
        phase,
        phaseHistory: [
          ...tickets[id].phaseHistory,
          { phase, date: timestamp, notes },
        ],
      }
      set({ tickets: { ...tickets, [id]: updated } })
    }
  },

  // Docs
  docs: [],
  setDocs: (docs) => set({ docs }),
  upsertDoc: (doc) => {
    const { docs } = get()
    const idx = docs.findIndex((d) => d.path === doc.path)
    if (idx >= 0) {
      const next = [...docs]
      next[idx] = doc
      set({ docs: next })
    } else {
      set({ docs: [doc, ...docs] })
    }
  },
  removeDoc: (path) =>
    set((state) => ({ docs: state.docs.filter((d) => d.path !== path) })),
  updateDocContent: (path, content) =>
    set((state) => ({
      docs: state.docs.map((d) =>
        d.path === path ? { ...d, content } : d
      ),
    })),

  // Agent Status
  agentStatus: [],
  setAgentStatus: (status) => set({ agentStatus: status }),

  // Session Registry
  sessions: [],
  setSessions: (sessions) => set({ sessions }),

  // File Watcher
  lastPollTime: '',
  setLastPollTime: (time) => set({ lastPollTime: time }),

  // UI State
  selectedProject: null,
  selectedPhase: 'all',
  setSelectedProject: (project) => set({ selectedProject: project }),
  setSelectedPhase: (phase) => set({ selectedPhase: phase }),

  // Editor State
  editingPath: null,
  editingContent: '',
  setEditingPath: (path) => set({ editingPath: path }),
  setEditingContent: (content) => set({ editingContent: content }),

  // Conflict Detection
  editingHash: null,
  setEditingHash: (hash) => set({ editingHash: hash }),

  // Recent Changes
  recentChanges: [],
  addRecentChange: (change) =>
    set((state) => ({
      recentChanges: [change, ...state.recentChanges].slice(0, 20),
    })),
  dismissRecentChange: (index) =>
    set((state) => ({
      recentChanges: state.recentChanges.filter((_, i) => i !== index),
    })),

  // Pagination
  page: 1,
  pageSize: 15,
  setPage: (page) => set({ page }),

  // Search
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Loading
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),

  // Sidebar
  sidebarCollapsed: false,
  setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
}))