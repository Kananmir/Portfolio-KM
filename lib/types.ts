/**
 * Project type for portfolio projects
 */
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  imageAlt: string
  github?: string
  liveDemo?: string
  featured: boolean
}

/**
 * Skill category type
 */
export interface SkillCategory {
  name: string
  skills: string[]
}

/**
 * Timeline event for About page
 */
export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
}

/**
 * Achievement or award
 */
export interface Achievement {
  id: string
  title: string
  description: string
  date?: string
  icon?: string
}

/**
 * Interest item
 */
export interface Interest {
  id: string
  name: string
  description: string
  icon?: string
}

/**
 * Fun fact for About page
 */
export interface FunFact {
  id: string
  text: string
}

/**
 * Social link
 */
export interface SocialLink {
  name: string
  url: string
  icon: string
}
