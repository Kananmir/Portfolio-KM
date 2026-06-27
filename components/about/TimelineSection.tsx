'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { aboutData } from '@/data/about'

export const TimelineSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <SectionWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-heading-2 font-serif text-warm-brown mb-12"
        >
          My Journey
        </motion.h2>

        <div className="space-y-8 max-w-2xl">
          {aboutData.timeline.map((event, idx) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-brown mt-2" />
                {idx !== aboutData.timeline.length - 1 && (
                  <div className="w-0.5 h-24 bg-warm-brown bg-opacity-30 mt-2" />
                )}
              </div>
              <div className="pb-4">
                <div className="flex gap-4 items-baseline mb-2">
                  <span className="text-heading-4 font-serif text-warm-brown">{event.year}</span>
                  <h3 className="text-lg font-medium text-warm-brown">{event.title}</h3>
                </div>
                <p className="text-warm-brown text-opacity-70">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
