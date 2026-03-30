'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="glow-amber w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="absolute inset-0 terrain-bg opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ut-border bg-ut-card/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-ut-amber animate-pulse-dot" />
          <span className="text-sm font-medium text-ut-text">Daily · Live · Real Traders</span>
        </div>

        <h1 className="reveal font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ut-white mb-6 tracking-tight leading-none">
          ENTER THE<br />
          <span className="text-amber-grad">TERRITORY</span>
        </h1>

        <p className="reveal text-lg md:text-xl text-ut-text max-w-2xl mx-auto mb-10 leading-relaxed">
          Every morning Bracco and TSDR run a pre-market Zoom without you. Every evening there's a workshop. 
          Every Sunday there's a scan. The map is already drawn — you just need to get in the room.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-8 py-4 rounded-lg font-bold text-ut-white flex items-center gap-2"
          >
            <span>🗺️</span> Join Uncharted Territory
          </a>
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold border-2 border-ut-border hover:border-ut-amber text-ut-text hover:text-ut-amber transition-all"
          >
            View on Whop
          </a>
        </div>

        <div className="reveal flex flex-wrap items-center justify-center gap-6 text-sm text-ut-muted">
          <span className="flex items-center gap-1">
            <span className="text-ut-amber font-semibold">$79.99</span>/28 days
          </span>
          <span className="w-1 h-1 rounded-full bg-ut-border" />
          <span>Cancel anytime</span>
          <span className="w-1 h-1 rounded-full bg-ut-border" />
          <span>Deepvue AI free</span>
          <span className="w-1 h-1 rounded-full bg-ut-border" />
          <span>Substack 15% off</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ut-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
