'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { aboutData } from '@/data/about'

export const FunFactsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <SectionWrapper className="bg-soft-gold bg-opacity-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-heading-2 font-serif text-warm-brown mb-12 text-center"
        >
          Fun Facts
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {aboutData.funFacts.map((fact) => (
            <motion.div
              key={fact.id}
              variants={itemVariants}
              className="p-6 bg-cream rounded-lg border-2 border-warm-brown border-opacity-20"
            >
              <p className="text-base font-handwrite text-warm-brown leading-relaxed">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
