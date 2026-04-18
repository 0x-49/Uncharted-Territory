'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const testimonials = [
  {
    name: 'Jason M.',
    initials: 'JM',
    gradient: 'from-amber-500 to-orange-500',
    title: 'Day Trader',
    handle: '@JasonM_Trades',
    rating: 5,
    result: '+47% returns in 6 months',
    text: 'Started following Bracco\'s pre-market calls in January. My account is up 47% since then. The daily Zoom is worth gold - I no longer trade blind into the open.',
    verified: true,
  },
  {
    name: 'Sarah K.',
    initials: 'SK',
    gradient: 'from-blue-600 to-cyan-500',
    title: 'Swing Trader',
    handle: '@SarahK_Invests',
    rating: 5,
    result: 'Recovered losses in 3 months',
    text: 'Lost 2 years trying to learn on my own. TSDR\'s swing calls helped me recover everything I\'d lost plus 30% more. The trade reasoning behind each call is what sets UT apart.',
    verified: true,
  },
  {
    name: 'Mike R.',
    initials: 'MR',
    gradient: 'from-emerald-600 to-teal-500',
    title: 'Options Trader',
    handle: '@MikeROptions',
    rating: 5,
    result: 'First profitable month in 2 years',
    text: 'I was down 18% last year with another service. First month with UT and I\'m up 12%. The transparency - seeing every entry, stop, and target - finally gave me confidence to execute properly.',
    verified: true,
  },
]

export default function Testimonials() {
  const sectionRef = useRevealOnScroll()

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
              <div className="font-display text-4xl text-amber-grad">5.0</div>
              <div className="text-ut-amber text-sm mt-1">★★★★★</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
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
              className="reveal group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              style={index === 0 ? { background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(10,11,14,1) 60%)' } : {}}
            >
              <div className="absolute top-4 right-4 text-5xl text-ut-amber/10 font-serif leading-none">&quot;</div>

<div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-black font-bold text-sm shadow-lg`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-ut-amber/70">{testimonial.handle}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-ut-amber text-sm flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs text-emerald-400 font-mono mt-0.5">{testimonial.result}</div>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4 relative z-10">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span>{testimonial.title}</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span>Member since 2024</span>
                </div>

              {testimonial.verified && (
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-emerald-400 font-medium">Verified Member</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}