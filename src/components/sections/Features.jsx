'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    num: '01',
    title: 'PRE-MARKET ZOOM',
    description: 'Every trading day begins with a live Zoom - levels, charts, ideas, and the full team\'s watchlist before the market opens.',
  },
  {
    num: '02',
    title: 'REAL-TIME ALERTS',
    description: 'Live Discord alerts for entries, exits, and stop-loss levels with full reasoning. TSDR\'s swing setups. Bracco\'s day trades. All transparent.',
  },
  {
    num: '03',
    title: 'NIGHTLY WORKSHOPS',
    description: 'After-market educational workshops multiple times per week. Deep-dives on strategy, setups, risk management, and market structure.',
  },
  {
    num: '04',
    title: 'SUNDAY WEEKLY SCAN',
    description: 'Bracco\'s full Sunday scan - market breakdown, top watchlist stocks, sector analysis, and the team\'s best ideas for the week.',
  },
  {
    num: '05',
    title: '6-TRADER TEAM',
    description: 'TSDR, Bracco, Patrick, Manrav, 1ChartMaster, and Jersace - each with a unique style. Day, swing, scalp, options - find what fits you.',
  },
  {
    num: '06',
    title: 'DEEPVUE INCLUDED',
    description: 'Deepvue Charting and Deepvue Terminal AI included with membership. Professional charting tools and an AI stock market assistant.',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.07 }
    )

    const revealElements = sectionRef.current?.querySelectorAll('.reveal')
    revealElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
              className="reveal group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ut-amber/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-3">{feature.num}</div>
              <h3 className="font-display text-xl text-white tracking-wider mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-gradient-to-br from-ut-amber/10 to-orange-500/5 border border-ut-amber/20 rounded-2xl p-8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-2">Also Included</div>
              <h3 className="font-display text-2xl text-white tracking-wider mb-2">
                DEEPVUE AI BUNDLE
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Deepvue Charting and Deepvue Terminal AI - a personal stock market AI assistant. Professional tools included at no extra cost.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-6">
              <div className="text-center">
                <div className="font-display text-4xl text-amber-grad">+AI</div>
                <div className="text-xs text-white/40 mt-1 font-mono uppercase tracking-widest">AI Assistant</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="font-display text-4xl text-amber-grad">$0</div>
                <div className="text-xs text-white/40 mt-1 font-mono uppercase tracking-widest">Extra Cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
