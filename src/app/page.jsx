import { ErrorBoundary } from '@/components/ErrorBoundary'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import PainSection from '@/components/sections/PainSection'
import Features from '@/components/sections/Features'
import LivePlatform from '@/components/sections/LivePlatform'
import Team from '@/components/sections/Team'
import Schedule from '@/components/sections/Schedule'
import Testimonials from '@/components/sections/Testimonials'
import TrustBadges from '@/components/sections/TrustBadges'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Community from '@/components/sections/Community'
import FinalCTA from '@/components/sections/FinalCTA'
import InlineCTA from '@/components/sections/InlineCTA'

export default function Home() {
  return (
    <ErrorBoundary>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <PainSection />
        {/* Mid-funnel CTA #1 — after pain, before features. Reader feels the pain, gets shown a way out. */}
        <InlineCTA
          variant="subtle"
          eyebrow="If any of this hits home"
          title="See what daily live trading actually looks like."
          subtitle="7-day money-back guarantee · no card needed for the trial"
          ctaText="See the Platform →"
        />
        <Features />
        <LivePlatform />
        <Team />
        {/* Mid-funnel CTA #2 — after meeting the traders, before schedule. Trust peak. */}
        <InlineCTA
          variant="amber"
          eyebrow="Trade alongside the team"
          title="Get the daily 7:30 AM Zoom in your calendar."
          subtitle="$79.99 / 28 days · cancel anytime via Whop"
          ctaText="Join Uncharted Territory →"
        />
        <Schedule />
        <Testimonials />
        {/* Mid-funnel CTA #3 — peak social-proof moment, strike while iron is hot. */}
        <InlineCTA
          variant="subtle"
          eyebrow="Verified by 162 reviews"
          title="Same room. Same Zoom. Try it for 7 days."
          subtitle="Full refund inside the first week — no questions asked"
          ctaText="Start the 7-Day Trial →"
        />
        <TrustBadges />
        <Pricing />
        <FAQ />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}