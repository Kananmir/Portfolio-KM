'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/types'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github } from 'lucide-react'

export interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <div className="overflow-hidden rounded mb-4 flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="origin-center"
          >
            <ImagePlaceholder
              alt={project.imageAlt}
              aspect="video"
              src={project.image}
            />
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col">
          {project.featured && (
            <Badge variant="gold" className="mb-2 w-fit">
              Featured
            </Badge>
          )}

          <h3 className="text-heading-4 font-serif text-warm-brown mb-2">
            {project.title}
          </h3>

          <p className="text-warm-brown text-opacity-70 mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="blue">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-warm-brown border-opacity-20">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
