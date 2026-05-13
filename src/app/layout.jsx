import './globals.css'
import Script from 'next/script'
import { Bebas_Neue, DM_Sans, Fira_Code } from 'next/font/google'

// Paste your Google Analytics 4 Measurement ID here (format: G-XXXXXXXXXX)
// Get it free at analytics.google.com -> Admin -> Data Streams -> your stream -> Measurement ID
const GA_ID = 'G-XXXXXXXXXX' // <-- replace this with your actual ID

// JSON-LD schemas are hardcoded server-side constants, no user input, no XSS risk.
// dangerouslySetInnerHTML is the standard Next.js pattern for structured data injection.

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Uncharted Territory | Trading Community Review 2026',
  description: 'Join traders with daily pre-market Zoom, live alerts from 6 expert traders & nightly workshops. 5.0★ rated on Whop. 7-day guarantee. $79.99/28 days.',
  keywords: [
    'Uncharted Territory trading',
    'trading discord community',
    'trading community review',
    'day trading discord',
    'swing trading community',
    'pre-market trading alerts',
    'live trading alerts discord',
    'Bracco trading',
    'TSDR trading',
    'best trading community 2026',
    'trading education discord',
    'Uncharted Territory review',
    'Uncharted Territory Whop',
  ],
  authors: [{ name: 'Max', url: 'https://unchartedterritory.com' }],
  creator: 'Max',
  alternates: {
    canonical: 'https://unchartedterritory.com',
  },
  openGraph: {
    title: 'Uncharted Territory | Trading Community, 5.0★ Rated',
    description: 'Daily pre-market Zoom, live alerts from 6 expert traders, nightly workshops & Deepvue AI free. members of our active community. 7-day guarantee.',
    url: 'https://unchartedterritory.com',
    siteName: 'Uncharted Territory',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://unchartedterritory.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Uncharted Territory, Trading Community with daily pre-market Zoom, live alerts, and expert workshops. 5.0★ on Whop.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uncharted Territory | Trading Community',
    description: 'Daily pre-market Zoom, live trade alerts from 6 experts, nightly workshops. members of our active community. 5.0★ on Whop.',
    creator: '@Braczyy',
    images: ['https://unchartedterritory.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.avif',
  },
}

export default function RootLayout({ children }) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Uncharted Territory Trading Community',
      description: 'Daily pre-market Zoom sessions, real-time trade alerts from 6 expert traders, nightly educational workshops, and Deepvue AI tools for serious traders of all levels.',
      url: 'https://unchartedterritory.com',
      provider: {
        '@type': 'Organization',
        name: 'Uncharted Territory',
        url: 'https://unchartedterritory.com',
        logo: { '@type': 'ImageObject', url: 'https://unchartedterritory.com/icon.avif' },
        foundingDate: '2022',
        sameAs: ['https://x.com/Braczyy', 'https://x.com/TSDR_Trading'],
        founder: [
          { '@type': 'Person', name: 'Bracco', jobTitle: 'Co-Founder, Day Trader', sameAs: 'https://x.com/Braczyy' },
          { '@type': 'Person', name: 'TSDR', jobTitle: 'Co-Founder, Swing Trader', sameAs: 'https://x.com/TSDR_Trading' },
        ],
      },
      offers: {
        '@type': 'Offer',
        price: '79.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://whop.com/uncharted/uncharted?a=digitalartlab',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '79.99',
          priceCurrency: 'USD',
          billingDuration: 'P28D',
          description: '28-day recurring membership, cancel anytime',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '162',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Verified Whop Member' },
          reviewBody: "You'll learn more in this room in a few days than you will in a year in 99% of other trading rooms. They teach you how to fish each and every day on Zoom for hours with live examples and constant chart reviews.",
          datePublished: '2025-06-01',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Member since September 2025' },
          reviewBody: "I joined UCT in September 2025 as someone relatively new to trading, and it's been one of the best decisions I've made on my journey so far. UCT stood out for its transparency, professionalism, and the genuine willingness of experienced traders to share.",
          datePublished: '2025-09-15',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: '2-Year Member' },
          reviewBody: 'Uncharted has been an absolute game changer for my trading. The education provided from daily live trading, watch list sessions, and trade reviews is second to none.',
          datePublished: '2024-03-01',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Long-term Member' },
          reviewBody: 'I tried many trading groups and it was obvious that I found my people when I saw how TSDR and Bracco talk on Zoom and the awesome vibe in the chats. Best trading group I have ever been to.',
          datePublished: '2024-08-01',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in the Uncharted Territory membership?',
          acceptedAnswer: { '@type': 'Answer', text: 'Your membership includes daily pre-market Zoom sessions (7:30 AM ET, Monday–Friday), real-time trade alerts from 6 expert traders with full reasoning, nightly educational workshops (50+ per month), Sunday weekly market scan (free always), 1 month of Deepvue AI platform access, and the active community Discord with members of our active community.' },
        },
        {
          '@type': 'Question',
          name: 'Is Uncharted Territory legit?',
          acceptedAnswer: { '@type': 'Answer', text: 'Uncharted Territory has been operating since 2022 with our active member base and a 5.0-star rating from 162 verified reviews on Whop. The founders are active traders who trade alongside members daily.' },
        },
        {
          '@type': 'Question',
          name: 'How much does Uncharted Territory cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Uncharted Territory costs $79.99 per 28 days with a 7-day money-back guarantee and no long-term contract.' },
        },
        {
          '@type': 'Question',
          name: 'Is there a free trial for Uncharted Territory?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no free trial, but there is a 7-day money-back guarantee, full refund, no questions asked.' },
        },
        {
          '@type': 'Question',
          name: 'How does Uncharted Territory compare to Warrior Trading?',
          acceptedAnswer: { '@type': 'Answer', text: 'Warrior Trading costs $199+/month and covers day trading only. Uncharted Territory at $79.99/28 days offers 6 traders across day, swing, and options styles, plus Deepvue AI free ($150/month value).' },
        },
        {
          '@type': 'Question',
          name: 'Is Uncharted Territory suitable for beginners?',
          acceptedAnswer: { '@type': 'Answer', text: "Absolutely. Members range from beginners to experienced traders. One member wrote: 'I learned more in two weeks than in two months on my own.'" },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Uncharted Territory',
      url: 'https://unchartedterritory.com',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Uncharted Territory', item: 'https://unchartedterritory.com' },
      ],
    },
  ]

  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <head>
        <link rel="preconnect" href="https://whop.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//whop.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="manifest" href="/site.webmanifest" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        {children}
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
