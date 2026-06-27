'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { projectsHero } from '@/data/projects'

export const ProjectsHero: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <SectionWrapper className="py-12 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="max-w-2xl"
      >
        <h1 className="text-heading-1 font-serif text-warm-brown mb-4">
          {projectsHero.title}
        </h1>
        <p className="text-lg text-warm-brown text-opacity-75">
          {projectsHero.description}
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
