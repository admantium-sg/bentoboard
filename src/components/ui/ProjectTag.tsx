import { cn } from '@/lib/utils'
import { DEFAULT_PROJECTS } from '@/lib/utils'

interface ProjectTagProps {
  slug: string
  size?: 'sm' | 'md'
  className?: string
}

export function ProjectTag({ slug, size = 'md', className }: ProjectTagProps) {
  const project = DEFAULT_PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md font-medium',
          size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-[11px] px-2 py-0.5',
          className
        )}
        style={{
          background: 'var(--tag-bg)',
          color: 'var(--text-muted)',
          border: '1px solid var(--tag-border)',
        }}
      >
        {slug}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md font-medium border',
        size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-[11px] px-2 py-1',
        className
      )}
      style={{
        backgroundColor: project.color + '18',
        color: project.color,
        borderColor: project.color + '35',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: project.color }}
      />
      <span>{project.name}</span>
    </span>
  )
}
