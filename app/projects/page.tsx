import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectsHero } from '@/components/projects/ProjectsHero'
import { ProjectGrid } from '@/components/projects/ProjectGrid'

export const metadata: Metadata = {
  title: 'Projects | Kanan Mirchandani',
  description: 'Explore my portfolio of creative projects and technical work.',
  openGraph: {
    title: 'Projects | Kanan Mirchandani',
    description: 'Explore my portfolio of creative projects and technical work.',
    type: 'website',
  },
}

export default function Projects(): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <ProjectsHero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}
