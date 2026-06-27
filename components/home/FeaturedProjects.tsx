'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { homeData } from '@/data/home'

export const FeaturedProjects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <SectionWrapper className="bg-dusty-blue bg-opacity-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-heading-2 font-serif text-warm-brown mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-warm-brown text-opacity-70 mb-12 max-w-2xl"
        >
          A selection of projects that showcase my blend of design, technology, and creativity.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {homeData.featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-2xl cursor-pointer">
                <div className="overflow-hidden mb-4 rounded">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="origin-center"
                  >
                    <ImagePlaceholder
                      alt={project.title}
                      aspect="video"
                      src={project.image}
                    />
                  </motion.div>
                </div>
                <h3 className="text-heading-4 font-serif text-warm-brown mb-2">
                  {project.title}
                </h3>
                <p className="text-warm-brown text-opacity-70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="blue">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="gold">+{project.technologies.length - 2}</Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
