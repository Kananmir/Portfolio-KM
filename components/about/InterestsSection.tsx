'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Card } from '@/components/ui/Card'
import { aboutData } from '@/data/about'

export const InterestsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const interests = aboutData.interests || []

  return (
    <SectionWrapper className="bg-dusty-blue bg-opacity-20">
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
          Interests & Passions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {interests.map((interest) => (
            <motion.div key={interest.id} variants={itemVariants}>
              <Card className="h-full text-center">
                <h3 className="text-heading-4 font-serif text-warm-brown mb-2">
                  {interest.name}
                </h3>
                <p className="text-sm text-warm-brown text-opacity-70">
                  {interest.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
