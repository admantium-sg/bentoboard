'use client'

import { useEffect } from 'react'
import { useBentoStore } from '@/lib/store'
import type { Item, Notification, Project, Comment } from '@/lib/types'

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { setProjects, setNotifications, setItems, upsertItem, removeItem, addNotification, addComment } = useBentoStore()

  useEffect(() => {
    let mounted = true

    async function bootstrap() {
      const { getSupabase } = await import('@/lib/supabase')
      const supabase = getSupabase()

      // ── Initial loads (parallel) ──────────────────────────────
      const [projectsRes, notifRes, itemsRes] = await Promise.all([
        supabase.from('projects').select('*').order('name'),
        supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(100),
        supabase.from('items').select('*').order('updated_at', { ascending: false }).limit(200),
      ])

      if (!mounted) return

      if (projectsRes.data?.length) {
        setProjects(projectsRes.data as Project[])
      }
      if (notifRes.data) {
        setNotifications(notifRes.data as Notification[])
      }
      if (itemsRes.data) {
        setItems(itemsRes.data as Item[])
      }

      // ── Realtime: items ───────────────────────────────────────
      const itemsChannel = supabase
        .channel('rt-items')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'items' },
          (payload) => {
            if (!mounted) return
            if (payload.eventType === 'DELETE') {
              removeItem((payload.old as { id: string }).id)
            } else {
              upsertItem(payload.new as Item)
            }
          }
        )
        .subscribe()

      // ── Realtime: notifications ───────────────────────────────
      const notifChannel = supabase
        .channel('rt-notifications')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'notifications' },
          (payload) => {
            if (!mounted) return
            addNotification(payload.new as Notification)
          }
        )
        .subscribe()

      // ── Realtime: comments ────────────────────────────────────
      const commentsChannel = supabase
        .channel('rt-comments')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'comments' },
          (payload) => {
            if (!mounted) return
            addComment(payload.new as Comment)
          }
        )
        .subscribe()

      // ── Realtime: events (no store action needed — just triggers item refresh) ──
      const eventsChannel = supabase
        .channel('rt-events')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'events' },
          async () => {
            if (!mounted) return
            // A new event may have triggered new items/notifications — refresh both
            const [freshItems, freshNotifs] = await Promise.all([
              supabase.from('items').select('*').order('updated_at', { ascending: false }).limit(200),
              supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(100),
            ])
            if (!mounted) return
            if (freshItems.data) setItems(freshItems.data as Item[])
            if (freshNotifs.data) setNotifications(freshNotifs.data as Notification[])
          }
        )
        .subscribe()

      // Cleanup on unmount
      return () => {
        mounted = false
        supabase.removeChannel(itemsChannel)
        supabase.removeChannel(notifChannel)
        supabase.removeChannel(commentsChannel)
        supabase.removeChannel(eventsChannel)
      }
    }

    const cleanupPromise = bootstrap()

    return () => {
      mounted = false
      // Run the async cleanup when it resolves
      cleanupPromise.then((cleanup) => cleanup?.())
    }
  }, [setProjects, setNotifications, setItems, upsertItem, removeItem, addNotification, addComment])

  return <>{children}</>
}
