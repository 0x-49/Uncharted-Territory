'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'JV',
    initials: 'JV',
    gradient: 'from-amber-500 to-orange-500',
    title: 'Experienced Trader',
    rating: 5,
    text: 'As someone who has run several discord rooms and been a member of just about all the best rooms - this is the best discord trading room out there. I listen to TSDR & Bracco every morning as part of my process. The combination of pre-market and live analysis is genuinely invaluable.',
    verified: true,
  },
  {
    name: 'AT',
    initials: 'AT',
    gradient: 'from-blue-600 to-cyan-500',
    title: 'Aspiring Trader',
    rating: 5,
    text: 'If you want to learn how to become a better trader and investor - invest in Uncharted Territory. It\'s a great way to avoid years of losing money to Mr. Market and become more knowledgeable and self-confident.',
    verified: true,
  },
  {
    name: 'MK',
    initials: 'MK',
    gradient: 'from-emerald-600 to-teal-500',
    title: 'Swing Trader',
    rating: 5,
    text: 'Following TSDR\'s swing ideas has been a game changer. The pre-market analysis is incredibly thorough and the trade alerts come with full reasoning. I\'ve made back my subscription cost many times over.',
    verified: true,
  },
]

export default function Testimonials() {
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
    <section id="reviews" ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
              WHAT MEMBERS SAY
            </h2>
          </div>
          
          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 flex gap-6 items-center">
            <div className="text-center">
              <div className="font-display text-3xl text-white">5.0</div>
              <div className="text-ut-amber text-sm">★★★★★</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Whop Verified</div>
              <div className="text-white text-sm mt-0.5">Top-Rated Community</div>
              <div className="text-ut-amber text-xs mt-0.5 font-mono">Daily since 2022</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal bg-white/[0.02] border border-white/5 rounded-2xl p-5 group hover:border-white/10 transition-all duration-300"
              style={index === 0 ? { background: 'linear-gradient(135deg, rgba(245,158,11,0.03) 0%, rgba(10,11,14,1) 60%)' } : {}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-black font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-white/40">{testimonial.title}</div>
                  </div>
                </div>
                <div className="text-ut-amber text-sm">{'★'.repeat(testimonial.rating)}</div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed italic mb-4">
                &quot;{testimonial.text}&quot;
              </p>
              {testimonial.verified && (
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-emerald-400">Verified</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}