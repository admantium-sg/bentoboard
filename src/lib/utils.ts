import { formatDistanceToNow, format, isToday, isYesterday } from 'date-fns'

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return 'Unknown'
  }
  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true })
  }
  if (isYesterday(date)) {
    return 'Yesterday'
  }
  return format(date, 'MMM d')
}

export function formatFullDate(dateString: string): string {
  return format(new Date(dateString), 'MMM d, yyyy · h:mm a')
}

export function calculateContentHash(content: string): string {
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

export function getDocPreview(content?: string, maxLength = 120): string {
  if (!content) return ''
  const line = content.slice(0, 2048).split('\n').find((value) => {
    const trimmed = value.trim()
    return trimmed.length > 0 && !trimmed.startsWith('#')
  })
  return line?.trim().slice(0, maxLength) ?? ''
}

export async function deletePaths(paths: string[], request: typeof fetch = fetch): Promise<void> {
  for (const path of paths) {
    const res = await request('/api/fs/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'Failed to delete item')
    }
  }
}

export const DEFAULT_PROJECTS = [
  { slug: 'newsletter',         name: 'Weekly Newsletter',   color: '#5B9CF6' },
  { slug: 'claudepocalypse',    name: 'Claudepocalypse',     color: '#F43F5E' },
  { slug: 'ambassador-outreach',name: 'Ambassador Outreach',  color: '#A78BFA' },
  { slug: 'morning-briefing',   name: 'Morning Briefing',     color: '#F59E0B' },
  { slug: 'content-creation',   name: 'Content Creation',    color: '#EC4899' },
  { slug: 'email-monitoring',   name: 'Email Monitoring',    color: '#22D3EE' },
  { slug: 'blog-posts',         name: 'Blog Posts',          color: '#10B981' },
]

export function getFileTypeKey(fileType?: string | null): string {
  if (!fileType) return 'generic'
  if (fileType.includes('image')) return 'image'
  if (fileType.includes('pdf')) return 'pdf'
  if (fileType.includes('csv') || fileType.includes('sheet')) return 'spreadsheet'
  if (fileType.includes('markdown') || fileType === 'text/plain') return 'text'
  if (fileType.includes('html')) return 'web'
  if (fileType.includes('zip') || fileType.includes('archive')) return 'archive'
  return 'generic'
}
