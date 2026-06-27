'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Flourish } from '@/components/common/DecorativeElements'
import { homeData } from '@/data/home'
import Link from 'next/link'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <SectionWrapper className="min-h-[80vh] flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <Flourish className="mx-auto mb-4" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-warm-brown mb-4"
        >
          {homeData.hero.greeting}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-warm-brown text-opacity-80 mb-8 leading-relaxed"
        >
          {homeData.hero.subheading}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <Button variant="primary" size="lg">
              {homeData.hero.cta}
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 opacity-50"
        >
          <svg className="animate-bounce mx-auto w-6 h-6 text-warm-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
