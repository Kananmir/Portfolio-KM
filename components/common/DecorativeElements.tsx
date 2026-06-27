import React from 'react'

export const TornPaperEdge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1200 100"
    className={`w-full ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M0,50 Q 60,30 120,50 T 240,50 T 360,50 T 480,50 T 600,50 T 720,50 T 840,50 T 960,50 T 1080,50 T 1200,50 L1200,100 L0,100 Z"
      fill="currentColor"
      opacity="0.1"
    />
  </svg>
)

export const DecorativeDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-3 h-3 rounded-full bg-soft-gold ${className}`} />
)

export const UnderlineBrush: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 300 20"
    className={`w-full max-w-xs ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M0,15 Q 75,5 150,15 T 300,15"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      opacity="0.3"
    />
  </svg>
)

export const CornerAccent: React.FC<{ variant?: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({
  variant = 'tl',
  className = '',
}) => {
  const positions = {
    tl: 'top-0 left-0 rotate-0',
    tr: 'top-0 right-0 rotate-90',
    br: 'bottom-0 right-0 rotate-180',
    bl: 'bottom-0 left-0 rotate-270',
  }

  return (
    <div className={`absolute w-16 h-16 ${positions[variant]} opacity-20 pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-warm-brown">
        <path
          d="M0,0 L100,0 L100,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

export const Flourish: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 100" className={`w-32 h-16 opacity-20 ${className}`}>
    <path
      d="M10,50 Q50,20 100,50 T 190,50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-warm-brown"
    />
  </svg>
)
