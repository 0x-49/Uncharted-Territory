'use client'
import { AFFILIATE_LINK } from '@/constants'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

// Compact, banded mid-funnel CTA. Placed BETWEEN large sections so the
// reader can convert without scrolling all the way to the FinalCTA.
// Each instance gets its own copy via props — never reuse identical text.
export default function InlineCTA({
  eyebrow = 'Ready to start',
  title = 'See it from the inside.',
  subtitle = '7-day money-back guarantee · cancel anytime',
  ctaText = 'Try Uncharted Territory →',
  variant = 'amber', // 'amber' | 'subtle'
}) {
  const ref = useRevealOnScroll()
  const isAmber = variant === 'amber'

  return (
    <section
      ref={ref}
      className={
        isAmber
          ? 'relative my-2 py-12 md:py-16 border-y-2 border-ut-amber/30 bg-gradient-to-r from-ut-amber/[0.08] via-ut-amber/[0.04] to-ut-amber/[0.08]'
          : 'relative my-2 py-12 md:py-16 border-y border-white/10 bg-white/[0.04]'
      }
    >
      {/* Left amber rail — subtle conversion-cue marker that the band is a CTA, not a section */}
      <span aria-hidden="true" className={`absolute left-0 top-0 bottom-0 w-1 ${isAmber ? 'bg-ut-amber' : 'bg-ut-amber/50'}`} />
      <div className="max-w-5xl mx-auto px-6 md:px-8 reveal flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className={`font-mono text-[11px] uppercase tracking-widest mb-2 ${isAmber ? 'text-ut-amber' : 'text-ut-amber/80'}`}>
            {eyebrow}
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide leading-tight">
            {title}
          </h2>
          <p className="text-white/70 text-xs md:text-sm mt-2">{subtitle}</p>
        </div>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isAmber
              ? 'inline-flex items-center gap-2 bg-ut-amber hover:bg-ut-ambers text-black font-bold text-sm md:text-base px-7 md:px-8 py-3.5 md:py-4 rounded-xl transition-all whitespace-nowrap no-underline hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02]'
              : 'inline-flex items-center gap-2 bg-ut-amber/15 hover:bg-ut-amber/25 border-2 border-ut-amber/40 hover:border-ut-amber/70 text-ut-amber font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap no-underline'
          }
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}
