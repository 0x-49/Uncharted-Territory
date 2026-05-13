import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllSlugs, getPostBySlug, posts } from "@/data/posts"
import { postContent } from "@/data/post-content"
import { AFFILIATE_LINK } from "@/constants"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Uncharted Territory`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://unchartedterritory.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://unchartedterritory.com/blog/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: "https://unchartedterritory.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

const categoryColors = {
  Review: "bg-ut-amber/10 text-ut-amber border-ut-amber/20",
  Comparison: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Education: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Guide: "bg-purple-500/10 text-purple-400 border-purple-500/20",
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-ut-amber" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function SidebarCTA() {
  return (
    <div className="bg-ut-card border border-ut-border rounded-xl p-6 sticky top-24">
      <div className="flex items-center gap-3 mb-4">
        <img src="/icon.avif" alt="Uncharted Territory" className="w-10 h-10 rounded-lg object-contain" />
        <div>
          <span className="font-display text-base tracking-widest text-white leading-none block">UNCHARTED</span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-white/40">Territory</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <StarRating />
        <span className="text-white/50 text-xs">5.0 (162 reviews)</span>
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-4">
        Daily pre-market Zoom, live alerts from 6 expert traders, nightly workshops &amp; Deepvue AI free.
      </p>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-display text-3xl text-white tracking-wide">$79.99</span>
        <span className="text-white/40 text-sm">/ 28 days</span>
      </div>
      <p className="text-white/55 text-xs mb-5">7-day money-back guarantee - Cancel anytime</p>

      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full btn-amber text-ut-bg font-bold text-sm py-3 px-4 rounded-lg text-center"
      >
        Join Uncharted Territory
      </a>

      <div className="mt-4 flex items-center gap-2 text-xs text-white/55">
        <svg className="w-3.5 h-3.5 text-ut-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        our active member base - Whop verified
      </div>
    </div>
  )
}

function PopularArticles({ currentSlug }) {
  const popular = posts.filter((p) => p.slug !== currentSlug).slice(0, 4)
  return (
    <div className="bg-ut-card border border-ut-border rounded-xl p-6 mt-6">
      <h3 className="font-display text-lg tracking-widest text-white mb-4 uppercase">Popular Articles</h3>
      <ul className="space-y-3">
        {popular.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex items-start gap-2 text-white/50 hover:text-white transition-colors text-sm leading-snug"
            >
              <svg className="w-3.5 h-3.5 text-ut-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="group-hover:text-ut-amber transition-colors">{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RelatedPosts({ currentSlug, category }) {
  const related = posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3)

  const fallback = posts
    .filter((p) => p.slug !== currentSlug && !related.includes(p))
    .slice(0, 3 - related.length)

  const display = [...related, ...fallback].slice(0, 3)

  if (display.length === 0) return null

  return (
    <section className="mt-16 pt-12 border-t border-white/5">
      <h2 className="font-display text-3xl tracking-widest text-white mb-8 uppercase">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {display.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-ut-card border border-ut-border rounded-xl p-5 hover:border-ut-amber/30 transition-all duration-300"
          >
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs font-medium border mb-3 ${
                categoryColors[post.category] || "bg-white/5 text-white/50 border-white/10"
              }`}
            >
              {post.category}
            </span>
            <h3 className="text-white/80 text-sm font-medium leading-snug group-hover:text-ut-amber transition-colors mb-2">
              {post.title}
            </h3>
            <p className="text-white/55 text-xs">{post.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Max",
      url: "https://unchartedterritory.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Uncharted Territory",
      logo: { "@type": "ImageObject", url: "https://unchartedterritory.com/icon.avif" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://unchartedterritory.com/blog/${post.slug}`,
    },
    keywords: post.keywords ? post.keywords.join(", ") : "",
  })

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://unchartedterritory.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://unchartedterritory.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://unchartedterritory.com/blog/${post.slug}`,
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      <div className="min-h-screen bg-ut-bg">
        <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />

        {post.image && (
          <div className="absolute inset-0 top-0 h-[420px] overflow-hidden pointer-events-none" aria-hidden="true">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover opacity-[0.12]"
              style={{ filter: 'saturate(0.6)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ut-bg/60 via-ut-bg/80 to-ut-bg" />
          </div>
        )}

        <section className="relative pt-32 pb-10 px-6 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-white/55 mb-8 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ut-amber transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-ut-amber transition-colors">Blog</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/50 truncate max-w-xs">{post.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-medium border ${
                    categoryColors[post.category] || "bg-white/5 text-white/50 border-white/10"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-white/55 text-xs">{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/55 text-xs">{formatDate(post.date)}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/55 text-xs">By <span className="text-white/50 font-medium">{post.author || 'Max'}</span></span>
              </div>

              <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-ut-white leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-ut-muted text-lg leading-relaxed">{post.description}</p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <article className="min-w-0">
              <div className="bg-ut-card border border-ut-border rounded-xl p-6 mb-8">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Quick summary:</strong> {post.description}
                </p>
              </div>

              {postContent[post.slug] ? (
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: postContent[post.slug] }}
                />
              ) : (
                <div className="space-y-6 text-ut-text leading-relaxed">
                  <p className="text-white/60">{post.description}</p>
                </div>
              )}

              <div className="my-10">
                <div className="relative bg-gradient-to-r from-ut-amber/10 to-ut-amberd/5 border border-ut-amber/20 rounded-xl p-6 md:p-8">
                  <p className="text-ut-amber text-xs font-mono tracking-widest uppercase mb-2">Ready to level up?</p>
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-white mb-3">
                    Join Uncharted Territory Today
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    traders. Daily pre-market Zoom. Live alerts with full reasoning. Deepvue AI included free. 7-day money-back guarantee.
                  </p>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-amber text-ut-bg font-bold text-sm py-3 px-6 rounded-lg"
                  >
                    Join Uncharted Territory →
                  </a>
                </div>
              </div>

              <RelatedPosts currentSlug={post.slug} category={post.category} />

              <section className="mt-14 pt-10 border-t border-white/5">
                <div className="relative bg-ut-card border border-ut-borderl rounded-2xl p-8 md:p-10 overflow-hidden text-center">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
                  />
                  <div className="relative">
                    <p className="text-ut-amber text-xs font-mono tracking-[0.3em] uppercase mb-3">Start today</p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-wider text-white mb-4 leading-none">
                      READY TO TRADE <span className="text-amber-grad">SMARTER?</span>
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                      Join traders getting daily pre-market prep, live alerts with full reasoning, and weekly
                      workshops. 7-day money-back guarantee.
                    </p>
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-amber text-ut-bg font-bold text-base py-4 px-8 rounded-xl"
                    >
                      Join Uncharted Territory
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <p className="text-white/50 text-xs mt-4">$79.99 / 28 days - Cancel anytime - 7-day guarantee</p>
                  </div>
                </div>
              </section>
            </article>

            <aside className="hidden lg:block">
              <SidebarCTA />
              <PopularArticles currentSlug={post.slug} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}