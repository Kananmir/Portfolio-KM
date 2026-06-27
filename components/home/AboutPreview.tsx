'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { homeData } from '@/data/home'
import Link from 'next/link'

export const AboutPreview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <SectionWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-heading-2 font-serif text-warm-brown mb-4">
            {homeData.aboutPreview.title}
          </h2>
          <p className="text-lg text-warm-brown text-opacity-75 leading-relaxed mb-6">
            {homeData.aboutPreview.excerpt}
          </p>
          <Link href="/about">
            <Button variant="primary">
              {homeData.aboutPreview.cta}
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card variant="elevated" className="p-8 space-y-4">
            <div className="space-y-2">
              <h3 className="text-heading-4 font-serif text-warm-brown">Creative Focus</h3>
              <p className="text-warm-brown text-opacity-70">
                Blending technology with creative expression through thoughtful design and innovative engineering.
              </p>
            </div>
            <div className="border-t border-warm-brown border-opacity-20 pt-4">
              <p className="text-sm font-handwrite text-dusty-blue">Currently exploring AI + design</p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
