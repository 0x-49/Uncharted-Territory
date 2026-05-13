import { MetadataRoute } from 'next'

const blogSlugs = [
  { slug: 'uncharted-territory-review', date: '2026-04-20' },
  { slug: 'uncharted-territory-vs-warrior-trading', date: '2026-04-18' },
  { slug: 'best-trading-discord-communities-2026', date: '2026-04-15' },
  { slug: 'what-is-pre-market-trading', date: '2026-04-12' },
  { slug: 'are-trading-discords-worth-it', date: '2026-04-10' },
  { slug: 'day-trading-vs-swing-trading', date: '2026-04-08' },
  { slug: 'what-is-deepvue-ai', date: '2026-04-05' },
  { slug: 'trading-risk-management-guide', date: '2026-04-02' },
  { slug: 'how-to-choose-a-trading-community', date: '2026-03-28' },
  { slug: 'uncharted-territory-vs-bear-bull-traders', date: '2026-03-25' },
  { slug: 'trading-psychology-for-beginners', date: '2026-03-20' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, date }) => ({
    url: `https://unchartedterritory.com/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly',
    priority: slug === 'uncharted-territory-review' ? 0.9 : 0.8,
  }))

  return [
    {
      url: 'https://unchartedterritory.com',
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://unchartedterritory.com/blog',
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://unchartedterritory.com/glossary',
      lastModified: new Date('2026-04-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://unchartedterritory.com/vs/warrior-trading',
      lastModified: new Date('2026-04-29'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://unchartedterritory.com/vs/bear-bull-traders',
      lastModified: new Date('2026-04-29'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...blogPages,
  ]
}
