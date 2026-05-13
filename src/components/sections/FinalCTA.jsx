'use client'
import { trackAffiliate } from '@/hooks/useTrackClick'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ut-bg/50 to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
        <div className="absolute inset-0 bg-ut-amber/20 rounded-full blur-[120px]" />
        <div className="absolute inset-[20%] bg-ut-amber/10 rounded-full blur-[80px]" />
        <div className="absolute inset-[40%] bg-ut-amber/5 rounded-full blur-[40px]" />
      </div>

      <div className="glow-amber w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
          READY TO ENTER<br />
          <span className="text-amber-grad">THE TERRITORY?</span>
        </h2>

        <p className="text-base text-white/50 max-w-lg mx-auto mb-10">
          Join traders mastering the markets. Your journey to consistent profits starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://whop.com/uncharted/uncharted?a=digitalartlab"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackAffiliate('final_cta')}
            className="group relative px-10 py-5 bg-ut-amber text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(245,158,11,0.5)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-ut-amber via-ut-amberl to-ut-amberd opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2.5 text-lg">
              Start Your Journey
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="https://whop.com/uncharted/uncharted?a=digitalartlab"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 rounded-xl font-medium border-2 border-white/20 text-white/70 hover:text-white hover:border-ut-amber/50 hover:bg-ut-amber/5 transition-all text-lg"
          >
            View on Whop
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/55">
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            $79.99/28 days
          </span>
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            7-day money-back guarantee
          </span>
        </div>
      </div>
    </section>
  )
}