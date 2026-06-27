'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Card } from '@/components/ui/Card'
import { aboutData } from '@/data/about'

export const AchievementsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
          Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {aboutData.achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <Card variant="outlined" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-soft-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-heading-4 font-serif text-warm-brown mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-warm-brown text-opacity-70 mb-2">
                      {achievement.description}
                    </p>
                    {achievement.date && (
                      <p className="text-xs text-warm-brown text-opacity-50 font-handwrite">
                        {achievement.date}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
