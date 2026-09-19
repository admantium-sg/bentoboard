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
