'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const schedule = [
  {
    time: 'PRE-MARKET',
    title: 'MORNING ZOOM',
    description: 'Bracco and TSDR lead a live Zoom covering key levels, sector analysis, indices, and the full team\'s watchlist.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    time: '9:30 AM+',
    title: 'LIVE ALERTS',
    description: 'Real-time Discord alerts for every trade - entry, stop, target, and reasoning. Multiple traders across swing, day, and scalp.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    time: 'POST-MARKET',
    title: 'TRADE REVIEW',
    description: 'The team reviews the day\'s trades, discusses what worked, and answers community questions. Full transparency.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    time: 'EVENINGS',
    title: 'WORKSHOPS',
    description: 'Multiple workshops per week on strategy, setups, market structure, psychology, and risk management.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    time: 'SUNDAY',
    title: 'WEEKLY SCAN',
    description: 'Bracco\'s full Sunday scan - market breadth, index analysis, top stock ideas, and the week\'s watchlist.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Schedule() {
  const sectionRef = useRevealOnScroll()

  return (
    <section id="schedule" ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
            DAILY SCHEDULE
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            What a full trading day looks like inside UT - from pre-market to after-hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-0 reveal">
            {schedule.map((item, index) => (
              <div key={item.time} className="flex gap-5 items-start py-5 border-b border-white/5 last:border-b-0 group hover:pl-2 transition-all duration-300">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-ut-amber/10 flex items-center justify-center text-ut-amber group-hover:bg-ut-amber/20 transition-colors">
                    {item.icon}
                  </div>
                  {index < schedule.length - 1 && (
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-ut-amber/30 to-transparent" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">{item.time}</div>
                  <div className="font-display text-white text-lg tracking-wider mb-1">{item.title}</div>
                  <div className="text-sm text-white/70 leading-relaxed">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-colors">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop"
                  alt="Trading setup analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: 'saturate(0.2) brightness(0.5)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ut-bg via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">Inside the room</div>
                <div className="text-white/80 text-sm leading-relaxed">Live trade alerts include entry, stop, target and the full reason behind the trade — every call is a teaching moment, not a blind signal.</div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Verified Reasoning</span>
                  <span className="text-xs text-white/70">Posted live in Discord</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="font-mono text-xs text-white/55 uppercase tracking-widest">Strategies</span>
                </div>
                <div className="font-display text-white text-xl">6 STYLES</div>
                <div className="text-xs text-white/55 mt-1">Day - Swing - Scalp</div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Deepvue</span>
                </div>
                <div className="font-display text-white text-xl">+AI</div>
                <div className="text-xs text-white/55 mt-1">Charting Included</div>
              </div>
            </div>

            <div className="bg-ut-amber/5 border border-ut-amber/20 rounded-xl p-4 hover:border-ut-amber/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="font-mono text-xs text-ut-amber uppercase tracking-widest">Promo Code</span>
              </div>
              <div className="font-display text-white text-2xl tracking-wider mb-1">SUBSTACK</div>
              <div className="text-sm text-white/50">
                15% off forever at checkout
              </div>
            </div>

            <a
              href="https://whop.com/uncharted/uncharted?a=digitalartlab"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-ut-amber to-ut-amberd rounded-xl p-5 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-xs text-black/60 uppercase tracking-widest">Join Now</div>
                <svg className="w-5 h-5 text-black/60 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="font-display text-black text-3xl tracking-wider mb-1">$79.99</div>
              <div className="font-mono text-xs text-black/60 uppercase tracking-widest mb-2">28 days - Cancel anytime</div>
              <div className="text-sm text-black/70">
                Full access to all features
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}