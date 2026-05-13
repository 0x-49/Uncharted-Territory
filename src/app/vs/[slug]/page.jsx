import Link from 'next/link'
import { notFound } from 'next/navigation'
import { comparisons, getComparison, getAllComparisonSlugs } from '@/data/comparisons'
import { AFFILIATE_LINK, COMMUNITY_STATS } from '@/constants'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const cmp = getComparison(params.slug)
  if (!cmp) return { title: 'Comparison not found | Uncharted Territory' }
  const url = `https://unchartedterritory.com/vs/${cmp.slug}`
  return {
    title: cmp.metaTitle,
    description: cmp.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: cmp.metaTitle,
      description: cmp.metaDescription,
      images: ['https://unchartedterritory.com/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: cmp.metaTitle,
      description: cmp.metaDescription,
      images: ['https://unchartedterritory.com/og-image.png'],
    },
  }
}

function EdgeIcon({ edge }) {
  if (edge === 'uct') return (
    <span aria-label="Edge to Uncharted Territory" className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-ut-amber/15 border border-ut-amber/40">
      <svg className="w-3.5 h-3.5 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
  if (edge === 'competitor') return (
    <span aria-label="Edge to competitor" className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-rose-500/15 border border-rose-400/40">
      <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
  return (
    <span aria-label="Tie" className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/15 text-white/55 text-xs font-mono">
      =
    </span>
  )
}

export default function VsPage({ params }) {
  const cmp = getComparison(params.slug)
  if (!cmp) notFound()

  const otherComparisons = comparisons.filter((c) => c.slug !== cmp.slug)

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 min-h-screen bg-ut-bg">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
            <Link href="/" className="hover:text-ut-amber transition-colors no-underline">Home</Link>
            <span className="mx-2 text-white/50">/</span>
            <Link href="/blog" className="hover:text-ut-amber transition-colors no-underline">Compare</Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white/80">Uncharted Territory vs {cmp.competitorName}</span>
          </nav>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ut-amber/20 bg-ut-amber/[0.06] mb-5">
              <span className="font-mono text-xs text-ut-amber tracking-widest uppercase">Side-by-Side</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-5 leading-tight">
              UNCHARTED TERRITORY <span className="font-display text-white/45">vs</span> {cmp.competitorName.toUpperCase()}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-6">{cmp.hookSentence}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ut-amber hover:bg-ut-ambers text-black font-bold text-sm px-6 py-3 rounded-xl transition-all no-underline hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
              >
                Try Uncharted Territory — $79.99 / 28 days →
              </a>
              <span className="font-mono text-xs text-white/55">7-day money-back · cancel anytime</span>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/[0.02] border border-ut-amber/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-xs text-ut-amber uppercase tracking-widest">Uncharted Territory</div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-ut-amber/10 border border-ut-amber/25">
                  <svg className="w-3.5 h-3.5 text-ut-amber" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="font-mono text-xs text-ut-amber font-bold">{COMMUNITY_STATS.rating}</span>
                </div>
              </div>
              <h2 className="font-display text-xl text-white tracking-wide mb-3">Six traders, one daily live Zoom</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Day, swing and options coverage with a daily 7:30 AM ET pre-market Zoom, real-time alerts with reasoning,
                and Deepvue AI bundled. Currently {COMMUNITY_STATS.rating}★ from {COMMUNITY_STATS.reviewCount} verified Whop reviews.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <div className="font-mono text-xs text-white/55 uppercase tracking-widest mb-3">{cmp.competitorName}</div>
              <h2 className="font-display text-xl text-white tracking-wide mb-3">{cmp.competitorTagline}</h2>
              <ul className="text-white/70 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
                {cmp.competitorStrengths.slice(0, 3).map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/[0.02] border border-emerald-500/15 rounded-2xl p-6">
              <h3 className="font-display text-base text-emerald-400 uppercase tracking-widest mb-4">{cmp.competitorName} — Strengths</h3>
              <ul className="space-y-2 list-none">
                {cmp.competitorStrengths.map((s) => (
                  <li key={s} className="text-white/70 text-sm leading-relaxed flex gap-2">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span><span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.02] border border-rose-500/15 rounded-2xl p-6">
              <h3 className="font-display text-base text-rose-400 uppercase tracking-widest mb-4">{cmp.competitorName} — Trade-offs</h3>
              <ul className="space-y-2 list-none">
                {cmp.competitorWeaknesses.map((s) => (
                  <li key={s} className="text-white/70 text-sm leading-relaxed flex gap-2">
                    <span className="text-rose-400 mt-0.5 flex-shrink-0">✕</span><span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Mid-page CTA — captures readers who are convinced after seeing strengths/trade-offs, before the long table. */}
          <section className="mb-14 py-7 px-6 md:px-8 rounded-2xl border border-ut-amber/20 bg-gradient-to-r from-ut-amber/[0.06] via-transparent to-ut-amber/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="font-mono text-xs text-ut-amber uppercase tracking-widest mb-1">Already convinced?</div>
              <div className="font-display text-lg md:text-xl text-white tracking-wide">Skip the comparison — try it for 7 days.</div>
            </div>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ut-amber hover:bg-ut-ambers text-black font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap no-underline hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
            >
              Try Uncharted Territory →
            </a>
          </section>

          <section className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide uppercase">Side-by-Side</h2>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5">
                <span className="font-mono uppercase tracking-widest text-xs text-white/70">Edge legend:</span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-ut-amber/20 border border-ut-amber/50">
                    <svg className="w-3 h-3 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-white/85">Uncharted wins</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-rose-500/20 border border-rose-400/50">
                    <svg className="w-3 h-3 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  <span className="text-white/85">Competitor wins</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-white/8 border border-white/20 text-white/70 text-xs font-mono">=</span>
                  <span className="text-white/85">Roughly equal</span>
                </span>
              </div>
            </div>
            <div className="overflow-x-auto bg-white/[0.02] border border-white/10 rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-5 py-4 font-mono text-xs uppercase tracking-widest text-white/55">Feature</th>
                    <th className="text-left px-5 py-4 font-mono text-xs uppercase tracking-widest text-ut-amber">Uncharted Territory</th>
                    <th className="text-left px-5 py-4 font-mono text-xs uppercase tracking-widest text-white/70">{cmp.competitorName}</th>
                    <th className="text-center px-3 py-4 font-mono text-xs uppercase tracking-widest text-white/55">Edge</th>
                  </tr>
                </thead>
                <tbody>
                  {cmp.comparisonTable.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5 last:border-b-0">
                      <td className="px-5 py-4 text-white/80 font-medium align-top">{row.feature}</td>
                      <td className="px-5 py-4 text-white/80 align-top">{row.uct}</td>
                      <td className="px-5 py-4 text-white/65 align-top">{row.competitor}</td>
                      <td className="px-3 py-4 align-top text-center"><EdgeIcon edge={row.edge} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="bg-gradient-to-br from-ut-amber/[0.10] to-ut-amber/[0.02] border-2 border-ut-amber/40 rounded-2xl p-6 pt-9 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.08)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-ut-amber text-black text-xs font-bold uppercase tracking-widest rounded-b-lg flex items-center gap-1.5 shadow-lg">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                Our Recommendation
              </div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-display text-base text-ut-amber uppercase tracking-widest">Pick Uncharted Territory if</h3>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{cmp.whoEachOneIsFor.uct}</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-white/55" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <h3 className="font-display text-base text-white/70 uppercase tracking-widest">Pick {cmp.competitorName} if</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{cmp.whoEachOneIsFor.competitor}</p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-ut-amber/10 to-ut-amber/5 border border-ut-amber/20 rounded-2xl p-8 md:p-12 text-center mb-14">
            <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-4 uppercase">The Bottom Line</h2>
            <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">{cmp.bottomLine}</p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ut-amber hover:bg-ut-ambers text-black font-bold px-8 py-4 rounded-xl transition-all text-base no-underline hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            >
              Start the 7-Day Trial · $79.99 after →
            </a>
            <p className="text-white/55 font-mono text-xs mt-4">Full money-back inside week one · cancel anytime</p>
          </section>

          {otherComparisons.length > 0 && (
            <section className="text-center">
              <h3 className="font-display text-sm text-white/55 uppercase tracking-widest mb-3">More Comparisons</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {otherComparisons.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/vs/${other.slug}`}
                    className="bg-white/[0.02] border border-white/10 hover:border-ut-amber/30 hover:text-ut-amber text-white/70 text-sm px-5 py-2.5 rounded-xl transition-all no-underline"
                  >
                    vs {other.competitorName}
                  </Link>
                ))}
                <Link
                  href="/blog/best-trading-discord-communities-2026"
                  className="bg-white/[0.02] border border-white/10 hover:border-ut-amber/30 hover:text-ut-amber text-white/70 text-sm px-5 py-2.5 rounded-xl transition-all no-underline"
                >
                  All Communities Compared →
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
