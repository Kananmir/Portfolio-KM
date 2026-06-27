import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt: string
  aspect?: 'square' | 'video' | 'portrait'
}

export const ImagePlaceholder = React.forwardRef<HTMLDivElement, ImagePlaceholderProps>(
  ({ className, src, alt, aspect = 'video', ...props }, ref) => {
    const aspectRatios = {
      square: 'aspect-square',
      video: 'aspect-video',
      portrait: 'aspect-[3/4]',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden rounded-lg bg-gradient-to-br from-dusty-blue to-sage flex items-center justify-center',
          aspectRatios[aspect],
          className
        )}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="text-6xl mb-2 opacity-30">📷</div>
            <p className="text-warm-brown text-sm opacity-50">{alt}</p>
          </div>
        )}
      </div>
    )
  }
)

ImagePlaceholder.displayName = 'ImagePlaceholder'
