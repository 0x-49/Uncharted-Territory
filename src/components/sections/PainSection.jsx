'use client'
import { useEffect, useRef } from 'react'

export default function PainSection() {
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
    <section ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs text-red-400 tracking-widest uppercase">The Problem</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-wide mb-6">
              TRADING ALONE<br />
              <span className="text-amber-grad">IS LOSING ALONE</span>
            </h2>
            
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
              Most traders bounce between YouTube videos, Reddit threads, and Telegram groups that send random signals. 
              None of it builds a real edge. Uncharted Territory is different - structured, educational, 
              and run by real traders who show their work every day.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Random signals with no explanation', desc: 'You enter, you don\'t know why. You exit, you don\'t know why. Bracco and TSDR show their full process - live, every session.' },
                { title: 'No pre-market preparation', desc: 'Walking into the open blind destroys accounts. We start every day with a pre-market Zoom - levels, ideas, and watchlist before the bell.' },
                { title: 'One style, one strategy', desc: 'Most groups have one trader and one style. UT has six experts - day traders, swing traders, scalpers - so you find what fits you.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 items-start">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87a5e36e44?w=900&q=80&auto=format&fit=crop" 
                alt="Trading community" 
                className="w-full h-64 object-cover"
                style={{ filter: 'saturate(0.2) brightness(0.5)' }}
              />
              <div className="bg-ut-card/80 backdrop-blur-sm p-6 border-t border-white/5">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-2">Inside UT</div>
                <div className="text-white/80 text-sm leading-relaxed">
                  &quot;Pre-market update, live Zoom call, and teaching every day. After-market workshops. Sunday weekly scan. This group is 100% useful for serious traders.&quot;
                </div>
                <div className="text-xs text-white/30 mt-2">- Verified Member</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}