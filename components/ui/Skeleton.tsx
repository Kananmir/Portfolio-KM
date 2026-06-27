'use client'

import { motion } from 'framer-motion'

export const CardSkeleton: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="bg-sage bg-opacity-30 rounded-lg p-6 space-y-4"
    >
      <div className="h-6 bg-warm-brown bg-opacity-10 rounded w-2/3" />
      <div className="h-4 bg-warm-brown bg-opacity-10 rounded" />
      <div className="h-4 bg-warm-brown bg-opacity-10 rounded w-5/6" />
      <div className="h-32 bg-warm-brown bg-opacity-10 rounded" />
    </motion.div>
  )
}

export const GridSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
