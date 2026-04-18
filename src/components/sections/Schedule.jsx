'use client'
import { useEffect, useRef } from 'react'

const schedule = [
  {
    time: 'PRE-MARKET',
    title: 'MORNING ZOOM',
    description: 'Bracco and TSDR lead a live Zoom covering key levels, sector analysis, indices, and the full team\'s watchlist.',
  },
  {
    time: '9:30 AM+',
    title: 'LIVE ALERTS',
    description: 'Real-time Discord alerts for every trade - entry, stop, target, and reasoning. Multiple traders across swing, day, and scalp.',
  },
  {
    time: 'POST-MARKET',
    title: 'TRADE REVIEW',
    description: 'The team reviews the day\'s trades, discusses what worked, and answers community questions. Full transparency.',
  },
  {
    time: 'EVENINGS',
    title: 'WORKSHOPS',
    description: 'Multiple workshops per week on strategy, setups, market structure, psychology, and risk management.',
  },
  {
    time: 'SUNDAY',
    title: 'WEEKLY SCAN',
    description: 'Bracco\'s full Sunday scan - market breadth, index analysis, top stock ideas, and the week\'s watchlist.',
  },
]

export default function Schedule() {
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
      { threshold: 0.1 }
    )

    const revealElements = sectionRef.current?.querySelectorAll('.reveal')
    revealElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
              <div key={item.time} className="flex gap-5 items-start py-5 border-b border-white/5 last:border-b-0">
                <div className="w-24 flex-shrink-0 font-mono text-xs text-ut-amber uppercase tracking-widest">{item.time}</div>
                <div className="flex-1">
                  <div className="font-display text-white text-lg tracking-wider mb-1">{item.title}</div>
                  <div className="text-sm text-white/40 leading-relaxed">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop" 
                alt="Trading" 
                className="w-full h-36 object-cover"
                style={{ filter: 'saturate(0.2) brightness(0.5)' }}
              />
              <div className="p-4 border-t border-white/5">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">TSDR Swing</div>
                <div className="text-white/80 text-sm">&quot;TNA at $43.40. Exited at $48 and $50 - 7:1 and 10:1 risk-reward.&quot;</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">Strategies</div>
                <div className="font-display text-white text-xl">6 STYLES</div>
                <div className="text-xs text-white/30 mt-1">Day - Swing - Scalp</div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-1">Deepvue</div>
                <div className="font-display text-white text-xl">+AI</div>
                <div className="text-xs text-white/30 mt-1">Charting Included</div>
              </div>
            </div>

            <div className="bg-ut-amber/5 border border-ut-amber/20 rounded-xl p-4">
              <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">Promo Code</div>
              <div className="font-display text-white text-2xl tracking-wider mb-1">SUBSTACK</div>
              <div className="text-sm text-white/50">
                15% off forever at checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
