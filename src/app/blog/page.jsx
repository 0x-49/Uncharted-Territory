import Link from 'next/link'
import { posts, categories } from '@/data/posts'

export const metadata = {
  title: 'Trading Education Blog | Uncharted Territory',
  description: 'In-depth trading education articles, community reviews, comparisons, and guides, written for traders who want real insight, not hype.',
  alternates: {
    canonical: 'https://unchartedterritory.com/blog',
  },
  openGraph: {
    title: 'Trading Education Blog | Uncharted Territory',
    description: 'In-depth trading education articles, community reviews, comparisons, and guides, written for traders who want real insight, not hype.',
    url: 'https://unchartedterritory.com/blog',
    type: 'website',
  },
}

const categoryColors = {
  Review: 'bg-ut-amber/10 text-ut-amber border-ut-amber/20',
  Comparison: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Education: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Guide: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function PostCard({ post, featured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block bg-ut-card border border-ut-border rounded-xl overflow-hidden hover:border-ut-amber/30 hover:bg-ut-card/80 transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {post.image && (
        <div className={`overflow-hidden ${featured ? 'h-40 md:h-52' : 'h-28 md:h-36'}`}>
          <img
            src={post.image}
            alt={post.title}
            width="800"
            height="450"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            style={{ filter: 'saturate(0.7)' }}
          />
        </div>
      )}
      <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-medium border ${
            categoryColors[post.category] || 'bg-white/5 text-white/50 border-white/10'
          }`}
        >
          {post.category}
        </span>
        {featured && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-ut-amber/20 text-ut-amber border border-ut-amber/30">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
        )}
      </div>

      <h2
        className={`font-sans font-semibold text-ut-white leading-snug mb-3 group-hover:text-ut-amber transition-colors duration-200 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}
      >
        {post.title}
      </h2>

      <p className="text-ut-muted text-sm leading-relaxed mb-5 line-clamp-2">{post.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-white/55">
          <span>{formatDate(post.date)}</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>{post.readTime}</span>
        </div>
        <span className="text-xs text-ut-amber font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
          Read More
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </div>
      </div>
    </Link>
  )
}

// Group posts by category for static rendering (no searchParams, static export)
const nonAllCategories = categories.filter((c) => c !== 'All')

export default function BlogPage() {
  const featuredPosts = posts.filter((p) => p.featured)

  return (
    <div className="min-h-screen bg-ut-bg">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Hero header */}
      <section className="relative pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ut-amber transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/50">Blog</span>
          </nav>

          <div className="max-w-2xl">
            <p className="text-ut-amber text-xs font-mono tracking-[0.25em] uppercase mb-4">
              Education &amp; Insights
            </p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider text-white mb-4 leading-none">
              TRADING <span className="text-amber-grad">EDUCATION</span>
            </h1>
            <p className="text-ut-muted text-base md:text-lg leading-relaxed">
              Honest reviews, in-depth comparisons, and real trading education, no hype, no signal selling.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-3xl tracking-widest text-white mb-6 uppercase border-l-4 border-ut-amber pl-4">
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Category jump links */}
        <div className="flex items-center gap-2.5 flex-wrap mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-white/55 mr-1">Jump to:</span>
          <a
            href="#all-articles"
            className="px-5 py-2 rounded-lg text-sm font-bold border-2 bg-ut-amber text-ut-bg border-ut-amber hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
          >
            All
          </a>
          {nonAllCategories.map((cat) => (
            <a
              key={cat}
              href={`#category-${cat.toLowerCase()}`}
              className="px-5 py-2 rounded-lg text-sm font-semibold border-2 bg-white/[0.04] text-white/80 border-white/15 hover:border-ut-amber/50 hover:bg-ut-amber/10 hover:text-ut-amber transition-all"
            >
              {cat}
            </a>
          ))}
        </div>

        {/* All posts grid */}
        <section id="all-articles">
          <h2 className="font-display text-3xl tracking-widest text-white mb-6 uppercase border-l-4 border-ut-amber pl-4">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Per-category sections */}
        {nonAllCategories.map((cat) => {
          const catPosts = posts.filter((p) => p.category === cat)
          if (catPosts.length === 0) return null
          return (
            <section key={cat} id={`category-${cat.toLowerCase()}`} className="mt-16 pt-10 border-t border-white/5">
              <h2 className="font-display text-3xl tracking-widest text-white mb-6 uppercase border-l-4 border-ut-amber pl-4">
                {cat}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
