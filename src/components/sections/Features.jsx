'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const features = [
  {
    num: '01',
    title: 'PRE-MARKET ZOOM',
    description: 'Every trading day begins with a live Zoom - levels, charts, ideas, and the full team\'s watchlist before the market opens.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'REAL-TIME ALERTS',
    description: 'Live Discord alerts for entries, exits, and stop-loss levels with full reasoning. TSDR\'s swing setups. Bracco\'s day trades. All transparent.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'NIGHTLY WORKSHOPS',
    description: 'After-market educational workshops multiple times per week. Deep-dives on strategy, setups, risk management, and market structure.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'SUNDAY SCANS (FREE)',
    description: "Bracco's free weekly newsletter - market breakdown, top watchlist stocks, sector analysis, and the team's best ideas for the week.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: '6-TRADER TEAM',
    description: 'TSDR, Bracco, AlexJonesIA, Manrav, 1ChartMaster, and Jersace - each with a unique style. Day, swing, scalp, options - find what fits you.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'DEEPVUE FREE',
    description: '1 month of Deepvue Charting and Deepvue Terminal AI absolutely free. Professional tools at no extra cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Features() {
  const sectionRef = useRevealOnScroll({ threshold: 0.07 })

  return (
    <section id="features" ref={sectionRef} className="relative py-20 md:py-28 border-b border-white/5">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
            WHAT YOU GET
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            One membership. Every resource. Six experienced traders dedicated to making you better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.num}
              className="reveal group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ut-amber/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ut-amber/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-ut-amber/15 border border-ut-amber/20 flex items-center justify-center text-ut-amber group-hover:bg-ut-amber/25 group-hover:border-ut-amber/40 transition-all">
                    <span className="scale-125">{feature.icon}</span>
                  </div>
                  <div className="font-mono text-xs text-ut-amber/60 uppercase tracking-widest">{feature.num}</div>
                </div>
                <h3 className="font-display text-xl text-white tracking-wider mb-2 group-hover:text-ut-amber transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/75 text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-ut-amber/10 to-orange-500/5 border border-ut-amber/20 rounded-2xl p-8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-ut-amber/20 rounded-full px-3 py-1 mb-4">
                <span className="font-mono text-xs text-ut-amber uppercase tracking-widest">Also Included</span>
              </div>
              <h3 className="font-display text-2xl text-white tracking-wider mb-2">
                DEEPVUE AI BUNDLE
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                1 month of Deepvue Charting and Deepvue Terminal AI absolutely free - a personal stock market AI assistant. Professional tools at no extra cost.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-ut-amber/20 flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-8 h-8 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-display text-lg text-amber-grad">+AI</div>
                <div className="text-xs text-white/55 mt-1 font-mono uppercase tracking-widest">AI Assistant</div>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="font-display text-lg text-emerald-400">FREE</div>
                <div className="text-xs text-white/55 mt-1 font-mono uppercase tracking-widest">1 Month Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}