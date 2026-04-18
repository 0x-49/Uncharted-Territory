'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

export default function Pricing() {
  const sectionRef = useRevealOnScroll()

  return (
    <section id="pricing" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ut-amber/10 border border-ut-amber/20 mb-6">
            <span className="font-mono text-xs text-ut-amber tracking-widest uppercase">Membership</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
            ONE PLAN. EVERYTHING.
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            No tiers. No upsells. Full access to all six trader channels, Deepvue AI tools, and every future update.
          </p>
        </div>

        <div className="reveal bg-gradient-to-br from-ut-amber/8 to-ut-deep border border-ut-amber/25 rounded-2xl p-8 md:p-10 shadow-[0_0_60px_rgba(245,158,11,0.07)]">
          <div className="text-center mb-6 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-emerald-400 text-sm font-medium">Save $420+ vs individual coaching</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
              <div className="text-white/40 line-through text-lg">$499/month</div>
              <div className="font-display text-white text-5xl text-amber-grad">$79.99</div>
            </div>
            <div className="font-mono text-xs text-white/40">per 28 days - Cancel anytime</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-white/[0.02] rounded-xl border border-white/5">
            <div className="text-center">
              <div className="font-display text-2xl text-ut-amber">$200</div>
              <div className="text-xs text-white/40 mt-1">Pre-market Zoom</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl text-ut-amber">$150</div>
              <div className="text-xs text-white/40 mt-1">Trade Alerts</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl text-ut-amber">$100</div>
              <div className="text-xs text-white/40 mt-1">Workshops</div>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl text-ut-amber">$50</div>
              <div className="text-xs text-white/40 mt-1">Deepvue AI</div>
            </div>
          </div>

          <div className="h-px bg-ut-amber/10 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {[
              { icon: '✓', text: 'Daily pre-market Zoom session' },
              { icon: '✓', text: 'Real-time entry and exit alerts' },
              { icon: '✓', text: 'Nightly educational workshops' },
              { icon: '✓', text: 'Sunday weekly scan and watchlist' },
              { icon: '✓', text: 'Deepvue Charting (1 month free)' },
              { icon: '✓', text: 'Deepvue Terminal AI (1 month free)' },
              { icon: '✓', text: 'All 6 trader channels' },
              { icon: '✓', text: '24/7 active community Discord' },
              { icon: '✓', text: 'SUBSTACK promo for 15% off' },
              { icon: '✓', text: 'Cancel anytime via Whop' },
            ].map((feature) => (
              <div key={feature.text} className="flex items-start gap-2.5 text-sm">
                <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70">{feature.text}</span>
              </div>
            ))}
          </div>

          <a
            href="https://whop.com/uncharted/uncharted?a=digitalartlab"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-xl bg-ut-amber text-black font-bold text-center hover:bg-ut-ambers transition-colors hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          >
            Start Your Journey - $79.99 / 28 days
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-mono text-xs text-white/50">7-Day Money-Back Guarantee</span>
            </div>
            <span className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-mono text-xs text-white/50">Cancel Anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-sm mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center reveal">
          <p className="text-sm text-white/50">
            <span className="text-white/70 font-medium">28-day cycle</span> aligns with the 4-week trading cycle used by prop firms.
          </p>
        </div>
      </div>
    </section>
  )
}