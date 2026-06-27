import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-warm-brown text-cream hover:bg-opacity-90 active:bg-opacity-100',
      secondary: 'bg-dusty-blue text-warm-brown hover:bg-opacity-90 active:bg-opacity-100',
      ghost: 'text-warm-brown hover:bg-cream hover:bg-opacity-50 active:bg-opacity-75',
      outline: 'border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream transition-colors',
    }

    const sizes = {
      sm: 'px-3 py-1 text-sm rounded',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg',
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
            Loading...
          </>
        ) : (
          props.children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
