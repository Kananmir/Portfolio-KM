import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { IntroSection } from '@/components/about/IntroSection'
import { TimelineSection } from '@/components/about/TimelineSection'
import { InterestsSection } from '@/components/about/InterestsSection'
import { AchievementsSection } from '@/components/about/AchievementsSection'
import { FunFactsSection } from '@/components/about/FunFactsSection'

export const metadata: Metadata = {
  title: 'About | Kanan Mirchandani',
  description: 'Learn more about my journey, interests, and achievements.',
  openGraph: {
    title: 'About | Kanan Mirchandani',
    description: 'Learn more about my journey, interests, and achievements.',
    type: 'website',
  },
}

export default function About(): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <IntroSection />
        <TimelineSection />
        <InterestsSection />
        <AchievementsSection />
        <FunFactsSection />
      </main>
      <Footer />
    </>
  )
}
