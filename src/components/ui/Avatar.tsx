import { cn } from '@/lib/utils'
import type { Author } from '@/lib/types'

interface AvatarProps {
  author: Author
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({ author, size = 'md', className }: AvatarProps) {
  const sizes = {
    sm: 'w-6 h-6 text-[9px]',
    md: 'w-8 h-8 text-[11px]',
    lg: 'w-10 h-10 text-[13px]',
  }

  const gradients = {
    bento: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    brian: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white',
        sizes[size],
        className
      )}
      style={{ background: gradients[author] ?? gradients.brian }}
    >
      {author === 'bento' ? 'B' : 'BT'}
    </div>
  )
}
