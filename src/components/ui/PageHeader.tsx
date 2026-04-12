import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between mb-8', className)}>
      <div>
        <h1
          className="text-[26px] font-semibold tracking-tight leading-none"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-[15px] mt-2 leading-snug" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 ml-6 flex-shrink-0 mt-1">
          {actions}
        </div>
      )}
    </div>
  )
}
