'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Badge } from '@/components/ui/Badge'
import { homeData } from '@/data/home'

export const SkillsPreview: React.FC = () => {
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

  const colorMap: Record<number, 'default' | 'gold' | 'blue' | 'sage'> = {
    0: 'default',
    1: 'gold',
    2: 'blue',
    3: 'sage',
  }

  return (
    <SectionWrapper className="bg-sage bg-opacity-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-heading-2 font-serif text-warm-brown mb-12 text-center"
        >
          Skills & Interests
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {homeData.skills.map((skill, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="space-y-3">
                <h3 className="text-heading-4 font-serif text-warm-brown">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <Badge key={item} variant={colorMap[idx]}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
