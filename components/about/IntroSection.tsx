'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { aboutData } from '@/data/about'

export const IntroSection: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <SectionWrapper className="pt-8 md:pt-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-heading-1 font-serif text-warm-brown mb-6">
          {aboutData.introduction.title}
        </h1>
        <p className="text-lg md:text-xl text-warm-brown text-opacity-80 leading-relaxed mb-4">
          {aboutData.introduction.bio}
        </p>
        <p className="text-base text-warm-brown text-opacity-60">
          Based in {aboutData.introduction.location}
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
