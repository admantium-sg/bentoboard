import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'success'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export function Button({
  variant = 'secondary',
  size = 'md',
  loading = false,
  icon,
  children,
  className,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed select-none'

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-sm px-5 py-2.5',
  }

  // Variant styles use inline style for theme-aware values where needed
  const variantClass = {
    primary:   'text-white shadow-sm',
    secondary: 'shadow-sm',
    danger:    'text-white shadow-sm',
    success:   'text-white shadow-sm',
    ghost:     '',
  }[variant]

  const variantStyle: React.CSSProperties = (() => {
    switch (variant) {
      case 'primary':
        return {
          background: 'var(--accent)',
          boxShadow: '0 1px 4px var(--accent-muted)',
        }
      case 'secondary':
        return {
          background: 'var(--glass-bg)',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-subtle)',
        }
      case 'danger':
        return {
          background: 'var(--danger)',
          boxShadow: '0 1px 4px rgba(239,68,68,0.20)',
        }
      case 'success':
        return {
          background: 'var(--success)',
          boxShadow: '0 1px 4px rgba(16,185,129,0.20)',
        }
      case 'ghost':
        return {
          color: 'var(--text-muted)',
        }
    }
  })()

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(base, variantClass, sizes[size], className)}
      style={{ ...variantStyle, ...style }}
    >
      {loading ? (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : null}
      {children}
    </button>
  )
}
