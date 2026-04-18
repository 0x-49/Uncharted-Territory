'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

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

    const revealElements = heroRef.current?.querySelectorAll('.reveal')
    revealElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ut-bg/50 to-ut-bg" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245,158,11,0.2) 0%, transparent 50%)`
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="reveal animate-slide-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 md:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white/60 tracking-wide">Live Daily - Bracco & TSDR</span>
        </div>

        <h1 className="reveal animate-slide-up animate-delay-100 font-display text-[clamp(3rem,10vw,8rem)] text-white leading-[0.92] tracking-tight mb-6 md:mb-8">
          <span className="block">UNCHARTED</span>
          <span className="block text-amber-grad">TERRITORY</span>
        </h1>

        <p className="reveal animate-slide-up animate-delay-200 text-base md:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed px-4">
          A trading community built by obsessive traders. Daily Zoom sessions, real-time alerts, and workshops that teach you to think about the markets.
        </p>

        <div className="reveal animate-slide-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm text-black overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-ut-amber via-ut-amberl to-ut-amberd" />
            <span className="relative flex items-center gap-2.5">
              Join the Community
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#features"
            className="px-6 py-3.5 rounded-xl font-medium text-sm text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            See What's Inside
          </a>
        </div>

        <div className="reveal animate-slide-up animate-delay-400 flex flex-wrap items-center justify-center gap-5 md:gap-6 text-xs text-white/40">
          <div className="flex items-center gap-1.5">
            <span className="text-ut-amber text-sm">★★★★★</span>
            <span>Top-rated on Whop</span>
          </div>
          <span className="w-px h-3 bg-white/10" />
          <span><span className="text-white/70 font-medium">5,000+</span> members</span>
          <span className="w-px h-3 bg-white/10" />
          <span>Daily since <span className="text-white/70 font-medium">2022</span></span>
          <span className="w-px h-3 bg-white/10" />
          <span><span className="text-white/70 font-medium">6</span> expert traders</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}
