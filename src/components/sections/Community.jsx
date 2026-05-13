'use client'
import { useEffect, useRef, useState } from 'react'

// Stats are reconciled against the live Whop product page on 2026-04-29.
// 892 = exact "joined" count on whop.com/uncharted; others are illustrative
// editorial estimates that round conservatively (would be tightened with
// Whop's full activity dashboard).
const stats = [
  { value: 892, suffix: '+', label: 'Verified Members' },
  { value: 100, suffix: '+', label: 'Hours of Content' },
  { value: 50,  suffix: '+', label: 'Live Sessions Monthly' },
]

// Renders the final value immediately (no flash of "0+") and runs the
// count-up animation as a progressive enhancement only when visible AND
// motion is allowed. If JS fails, screenshot tools, no-JS bots, and
// `prefers-reduced-motion` users all see the final number.
function AnimatedCounter({ value, suffix, isVisible }) {
  const [count, setCount] = useState(value)
  const animatedOnce = useRef(false)

  useEffect(() => {
    if (!isVisible || animatedOnce.current) return
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    animatedOnce.current = true
    setCount(0)
    let startTime
    const duration = 1600
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(value * easeOut))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, value])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function Community() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="community" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ut-bg/50 to-transparent" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245,158,11,0.3) 0%, transparent 50%)`
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          JOIN SERIOUS TRADERS
        </h2>
        <p className="text-white/50 text-base max-w-md mx-auto mb-10">
          Be part of a community dedicated to trading excellence
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-4xl text-ut-amber mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-xs text-white/55 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href="https://whop.com/uncharted/uncharted?a=digitalartlab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ut-amber text-black font-bold rounded-xl hover:bg-ut-ambers hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all duration-300 group"
        >
          Join the Community
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  )
}