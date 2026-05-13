'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { AFFILIATE_LINK } from '@/constants'

const testimonials = [
  {
    initials: 'WM',
    gradient: 'from-amber-500 to-orange-500',
    title: 'Verified Whop Member',
    memberSince: 'Long-term member',
    rating: 5,
    text: "You'll learn more in this room in a few days than you will in a year in 99% of other trading rooms. They teach you how to fish each and every day on Zoom for hours with live examples and constant chart reviews of what's happening in the market.",
  },
  {
    initials: 'WM',
    gradient: 'from-blue-600 to-cyan-500',
    title: 'Verified Whop Member',
    memberSince: 'Member since Sept 2025',
    rating: 5,
    text: "I joined UCT in September 2025 as someone relatively new to trading, and it's been one of the best decisions I've made on my journey so far. Finding a trustworthy community isn't easy, but from the start, UCT stood out for its transparency, professionalism, and the genuine willingness of experienced traders to share.",
  },
  {
    initials: 'WM',
    gradient: 'from-emerald-600 to-teal-500',
    title: 'Verified Whop Member',
    memberSince: '2-year member',
    rating: 5,
    text: "Uncharted has been an absolute game changer for my trading. I started trading with TSDR and Bracco over two years ago. The education provided from daily live trading, watch list sessions, and trade reviews is second to none.",
  },
  {
    initials: 'WM',
    gradient: 'from-violet-600 to-purple-500',
    title: 'Verified Whop Member',
    memberSince: 'Long-term member',
    rating: 5,
    text: "I tried many trading groups and it was obvious that I found my people when I saw how TSDR and Bracco talk on Zoom and the awesome vibe in the chats. Pre-market update, live Zoom call, and a lot of teaching every day. Best trading group I have ever been to.",
  },
  {
    initials: 'WM',
    gradient: 'from-rose-500 to-pink-500',
    title: 'Verified Whop Member',
    memberSince: 'Active member',
    rating: 5,
    text: "There are teaching moments every day that just flow along with the trading day. I have been part of many Discord groups and paid for many services, in the short time I have been part of the Uncharted group I can say this is by far the best community out there.",
  },
  {
    initials: 'WM',
    gradient: 'from-sky-500 to-blue-500',
    title: 'Verified Whop Member',
    memberSince: 'New member',
    rating: 5,
    text: "I learned more in two weeks than in two months on my own!",
  },
]

export default function Testimonials() {
  const sectionRef = useRevealOnScroll()

  return (
    <section id="reviews" ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="font-mono text-xs text-ut-amber tracking-widest uppercase mb-3">Real Member Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">
              WHAT MEMBERS SAY
            </h2>
            <p className="text-white/55 text-sm mt-3 max-w-sm">
              Every review below is from a verified Whop member. Read all 162 reviews directly on Whop.
            </p>
          </div>

          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 flex gap-6 items-center flex-shrink-0">
            <div className="text-center">
              <div className="font-display text-4xl text-amber-grad">5.0</div>
              <div className="text-ut-amber text-sm mt-1">★★★★★</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-xs text-white/55 uppercase tracking-widest">Whop Verified</div>
              <div className="text-white text-sm mt-0.5">162 reviews</div>
              <div className="text-ut-amber text-xs mt-0.5 font-mono">Daily since 2022</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              style={index === 0 ? { background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(10,11,14,1) 60%)' } : {}}
            >
              <div className="absolute top-4 right-4 text-5xl text-ut-amber/10 font-serif leading-none">&quot;</div>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-black font-bold text-xs shadow-lg flex-shrink-0`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.title}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-ut-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-4 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-white/55">{testimonial.memberSince}</div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-emerald-400 font-medium">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-ut-amber transition-colors"
          >
            Read all 162 reviews on Whop
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
