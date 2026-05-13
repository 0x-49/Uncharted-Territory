'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { AFFILIATE_LINK, COMMUNITY_STATS } from '@/constants'
import { trackAffiliate } from '@/hooks/useTrackClick'

export default function Hero() {
  const heroRef = useRevealOnScroll()

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ut-bg/50 to-ut-bg" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245,158,11,0.3) 0%, transparent 50%)`
      }} />

      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path d="M0,80 L30,65 L50,70 L80,40 L110,55 L140,25 L170,35 L200,10" fill="none" stroke="url(#chartGrad)" strokeWidth="2"/>
          <path d="M0,85 L30,75 L50,78 L80,60 L110,68 L140,50 L170,55 L200,40" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="1.5"/>
          <circle cx="140" cy="25" r="4" fill="#22c55e" className="animate-pulse" />
          <circle cx="80" cy="40" r="4" fill="#22c55e" />
          <circle cx="170" cy="35" r="4" fill="#f59e0b" />
          <circle cx="50" cy="70" r="3" fill="#f59e0b" opacity="0.6" />
          <circle cx="110" cy="55" r="3" fill="#f59e0b" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <rect x="5" y="20" width="8" height="25" fill="rgba(245,158,11,0.4)" rx="1"/>
          <rect x="18" y="15" width="8" height="30" fill="rgba(245,158,11,0.5)" rx="1"/>
          <rect x="31" y="25" width="8" height="20" fill="rgba(245,158,11,0.3)" rx="1"/>
          <rect x="44" y="10" width="8" height="35" fill="rgba(245,158,11,0.6)" rx="1"/>
          <rect x="57" y="18" width="8" height="27" fill="rgba(245,158,11,0.4)" rx="1"/>
          <rect x="70" y="5" width="8" height="40" fill="rgba(245,158,11,0.7)" rx="1"/>
          <rect x="83" y="12" width="8" height="33" fill="rgba(245,158,11,0.5)" rx="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="reveal animate-slide-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 md:mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-white/60 tracking-wide">Live Daily - Bracco & TSDR</span>
        </div>

        <h1 className="reveal animate-slide-up animate-delay-100 font-display text-[clamp(2.5rem,8vw,6rem)] text-white leading-[1] tracking-tight mb-4 md:mb-6">
          <span className="block">UNCHARTED</span>
          <span className="block text-amber-grad">TERRITORY</span>
          <span
            className="block text-[clamp(0.75rem,1.8vw,1rem)] font-medium text-white/55 tracking-[0.35em] uppercase mt-3"
            style={{ fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.35em' }}
          >
            Trading Community
          </span>
        </h1>

        <p className="reveal animate-slide-up animate-delay-200 text-base md:text-lg text-white/55 max-w-xl mx-auto mb-3 md:mb-4 leading-relaxed px-4">
          Daily 7:30 AM Zoom · live alerts from six traders · workshops most nights.
          One paid room that actually trades what it teaches.
        </p>
        <div className="reveal animate-slide-up animate-delay-200 inline-flex items-center gap-2 mb-8 md:mb-10 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
          <span className="font-mono text-xs text-white/70">$79.99 / 28 days</span>
          <span className="w-px h-3 bg-white/15" />
          <span className="font-mono text-xs text-emerald-400">7-day money-back</span>
        </div>

        <div className="reveal animate-slide-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackAffiliate('hero_cta')}
            className="group relative px-8 py-4 rounded-xl font-bold text-sm text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-ut-amber via-ut-amberl to-ut-amberd" />
            <span className="relative flex items-center justify-center gap-2.5">
              Join Uncharted Territory
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#platform"
            className="group px-6 py-4 rounded-xl font-medium text-sm text-white/60 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See How It Works
          </a>
        </div>

        <div className="reveal animate-slide-up animate-delay-400 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 text-xs text-white/55">
            <div className="flex items-center gap-1.5">
              <span className="text-ut-amber text-sm">★★★★★</span>
              <span><span className="text-white/70 font-medium">{COMMUNITY_STATS.rating}</span> from {COMMUNITY_STATS.reviewCount} reviews on Whop</span>
            </div>
            <span className="w-px h-3 bg-white/10" />
            <span>Daily since <span className="text-white/70 font-medium">{COMMUNITY_STATS.foundedYear}</span></span>
            <span className="w-px h-3 bg-white/10" />
            <span><span className="text-white/70 font-medium">6</span> expert traders</span>
          </div>
          <p className="text-[11px] text-white/50 italic max-w-md text-center leading-relaxed px-4">
            &ldquo;You&rsquo;ll learn more in a few days here than in a year in 99% of other trading rooms&rdquo; &mdash; Verified Whop Member
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}