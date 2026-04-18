import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import PainSection from '@/components/sections/PainSection'
import Features from '@/components/sections/Features'
import Team from '@/components/sections/Team'
import Schedule from '@/components/sections/Schedule'
import Testimonials from '@/components/sections/Testimonials'
import TrustBadges from '@/components/sections/TrustBadges'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Community from '@/components/sections/Community'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <PainSection />
        <Features />
        <Team />
        <Schedule />
        <Testimonials />
        <TrustBadges />
        <Pricing />
        <FAQ />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
