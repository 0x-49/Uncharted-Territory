'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '📹',
    title: 'Pre-Market Zoom',
    description: 'Every morning our expert traders run a live pre-market analysis session. Get real-time insights on market setup and key levels before the bell.',
  },
  {
    icon: '⚡',
    title: 'Live Trading Alerts',
    description: 'Receive instant notifications on trade opportunities. Our team shares entries, exits, and risk management in real-time.',
  },
  {
    icon: '🎓',
    title: 'Nightly Workshops',
    description: 'Every evening dive deep into trading strategies, technical analysis, and market psychology with our expert-led sessions.',
  },
  {
    icon: '🤖',
    title: 'Deepvue AI Tools',
    description: 'Access cutting-edge AI-powered scanning and analysis tools. Identify high-probability setups with machine learning precision.',
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
    <section id="features" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full border border-ut-amber/30 bg-ut-amber/5 text-ut-amber text-sm font-medium mb-4">
            Core Features
          </span>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-ut-white mb-4">
            EVERYTHING YOU NEED
          </h2>
          <p className="reveal text-lg text-ut-muted max-w-2xl mx-auto">
            Master the markets with our comprehensive suite of trading tools and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal stagger-${index + 1} group p-6 rounded-xl bg-ut-card border border-ut-border hover:border-ut-amber/50 transition-all duration-300 hover:shadow-lg hover:shadow-ut-amber/5 hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl text-ut-white mb-3">{feature.title}</h3>
              <p className="text-sm text-ut-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
