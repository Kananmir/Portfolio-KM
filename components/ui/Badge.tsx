import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'gold' | 'blue' | 'sage'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-warm-brown text-cream',
      gold: 'bg-soft-gold text-warm-brown',
      blue: 'bg-dusty-blue text-warm-brown',
      sage: 'bg-sage text-warm-brown',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-block px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
