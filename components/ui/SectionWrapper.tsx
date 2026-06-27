import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionWrapperProps extends React.ComponentProps<'section'> {
  fullWidth?: boolean
  noPadding?: boolean
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, fullWidth = false, noPadding = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          !noPadding && 'py-16 md:py-24 lg:py-32 px-4 md:px-8',
          !fullWidth && 'mx-auto max-w-7xl',
          className
        )}
        {...props}
      />
    )
  }
)

SectionWrapper.displayName = 'SectionWrapper'
