import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { AboutPreview } from '@/components/home/AboutPreview'
import { SkillsPreview } from '@/components/home/SkillsPreview'

export const metadata: Metadata = {
  title: 'Kanan Mirchandani | Creative Technologist',
  description: 'Portfolio of a creative technologist blending design, photography, and engineering.',
  openGraph: {
    title: 'Kanan Mirchandani | Creative Technologist',
    description: 'Portfolio of a creative technologist blending design, photography, and engineering.',
    type: 'website',
  },
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <Hero />
        <FeaturedProjects />
        <AboutPreview />
        <SkillsPreview />
      </main>
      <Footer />
    </>
  )
}
