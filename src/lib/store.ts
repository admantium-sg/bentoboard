'use client'

import { create } from 'zustand'
import type { Item, Comment, Notification, Project } from './types'

interface BentoStore {
  // Items
  items: Item[]
  setItems: (items: Item[]) => void
  upsertItem: (item: Item) => void
  removeItem: (id: string) => void

  // Comments
  comments: Record<string, Comment[]>
  setComments: (itemId: string, comments: Comment[]) => void
  addComment: (comment: Comment) => void

  // Notifications
  notifications: Notification[]
  setNotifications: (notifications: Notification[]) => void
  markNotificationRead: (id: string) => void
  markAllRead: () => void
  addNotification: (notification: Notification) => void

  // Projects
  projects: Project[]
  setProjects: (projects: Project[]) => void

  // UI state
  sidebarCollapsed: boolean
  setSidebarCollapsed: (v: boolean) => void

  // Unread count
  unreadCount: number
  setUnreadCount: (count: number) => void
}

export const useBentoStore = create<BentoStore>((set, get) => ({
  items: [],
  setItems: (items) => set({ items }),
  upsertItem: (item) => {
    const { items } = get()
    const idx = items.findIndex((i) => i.id === item.id)
    if (idx >= 0) {
      const next = [...items]
      next[idx] = item
      set({ items: next })
    } else {
      set({ items: [item, ...items] })
    }
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

  comments: {},
  setComments: (itemId, comments) =>
    set((state) => ({ comments: { ...state.comments, [itemId]: comments } })),
  addComment: (comment) =>
    set((state) => {
      const existing = state.comments[comment.item_id] || []
      return {
        comments: {
          ...state.comments,
          [comment.item_id]: [...existing, comment],
        },
      }
    }),

  notifications: [],
  setNotifications: (notifications) => {
    const unread = notifications.filter((n) => !n.read).length
    set({ notifications, unreadCount: unread })
  },
  markNotificationRead: (id) =>
    set((state) => {
      const next = state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
      const unread = next.filter((n) => !n.read).length
      return { notifications: next, unreadCount: unread }
    }),
  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),
  addNotification: (notification) =>
    set((state) => {
      const next = [notification, ...state.notifications]
      const unread = next.filter((n) => !n.read).length
      return { notifications: next, unreadCount: unread }
    }),

  projects: [],
  setProjects: (projects) => set({ projects }),

  sidebarCollapsed: false,
  setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),

  unreadCount: 0,
  setUnreadCount: (count) => set({ unreadCount: count }),
}))
