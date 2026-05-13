'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

export default function PainSection() {
  const sectionRef = useRevealOnScroll()

  return (
    <section ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-mono text-xs text-red-400 tracking-widest uppercase">The Problem</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-wide mb-6">
              TRADING ALONE<br />
              <span className="text-amber-grad">IS LOSING ALONE</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Most traders bounce between YouTube videos, Reddit threads, and Telegram groups that send random signals.
              None of it builds a real edge. Uncharted Territory is different — structured, educational,
              and run by real traders who show their work every day.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Random signals with no explanation', desc: 'You enter, you don\'t know why. You exit, you don\'t know why. Bracco and TSDR show their full process - live, every session.' },
                { title: 'No pre-market preparation', desc: 'Walking into the open blind destroys accounts. We start every day with a pre-market Zoom - levels, ideas, and watchlist before the bell.' },
                { title: 'One style, one strategy', desc: 'Most groups have one trader and one style. UT has six experts - day traders, swing traders, scalpers - so you find what fits you.' },
              ].map((item, i) => (
                <div key={i} className="group flex gap-4 p-5 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm mb-1.5">{item.title}</div>
                    <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-ut-bg via-transparent to-transparent z-10" />
              <img
                src="/hero-bg.jpg"
                alt="Professional trading setup with multiple monitors showing live charts"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'saturate(0.2) brightness(0.5)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-ut-card/90 backdrop-blur-sm p-6 border-t border-white/5">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-2">Inside UT</div>
                <div className="text-white/80 text-sm leading-relaxed">
                  &quot;Pre-market update, live Zoom call, and teaching every day. After-market workshops. Sunday weekly scan. This group is 100% useful for serious traders.&quot;
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-ut-card flex items-center justify-center text-[10px] font-bold text-black">B</div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-ut-card flex items-center justify-center text-[10px] font-bold text-black">T</div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-ut-card flex items-center justify-center text-[10px] font-bold text-black">A</div>
                  </div>
                  <span className="text-xs text-white/70">Active community on Whop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}