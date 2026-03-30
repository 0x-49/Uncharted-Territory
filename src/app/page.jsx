import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Team from '@/components/sections/Team'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Community from '@/components/sections/Community'
import TrustBadges from '@/components/sections/TrustBadges'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Team />
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
