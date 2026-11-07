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
  metadataBase: new URL('https://joinunchartedterritory.com'),
  authors: [{ name: 'Max Yao', url: 'https://joinunchartedterritory.com' }],
  creator: 'Max Yao',
  publisher: 'Software Automated Ltd',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Uncharted Territory | Trading Community, 5.0★ Rated',
    description: 'Daily pre-market Zoom, live alerts from 6 expert traders, nightly workshops & Deepvue AI free. members in its active community. 7-day guarantee.',
    url: './',
    siteName: 'JoinUnchartedTerritory (independent guide)',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://joinunchartedterritory.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Uncharted Territory, Trading Community with daily pre-market Zoom, live alerts, and expert workshops. 5.0★ on Whop.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uncharted Territory | Trading Community',
    description: 'Daily pre-market Zoom, live trade alerts from 6 experts, nightly workshops. members in its active community. 5.0★ on Whop.',
    images: ['https://joinunchartedterritory.com/og-image.png'],
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
      // Independent affiliate guide run by Software Automated Ltd. Uncharted Territory and its founders are the subject
      // (about), never this site's publisher/founder, and no ratings are claimed (Whop: don't represent yourself as the Seller).
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://joinunchartedterritory.com/#website',
          url: 'https://joinunchartedterritory.com/',
          name: 'JoinUnchartedTerritory (independent guide)',
          description: 'Independent review of Uncharted Territory, a trading community on Whop. Not run by or affiliated with Uncharted Territory; links to Whop are affiliate links.',
          publisher: { '@id': 'https://joinunchartedterritory.com/#publisher' },
          about: { '@id': 'https://joinunchartedterritory.com/#subject' },
        },
        { '@type': 'Organization', '@id': 'https://joinunchartedterritory.com/#publisher', name: 'Software Automated Ltd', url: 'https://joinunchartedterritory.com/' },
        {
          '@type': 'Organization',
          '@id': 'https://joinunchartedterritory.com/#subject',
          name: 'Uncharted Territory',
          description: 'Trading community run by Bracco and TSDR, sold on Whop. Subject of this independent review.',
          sameAs: ['https://whop.com/uncharted/', 'https://x.com/Braczyy', 'https://x.com/TSDR_Trading'],
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
          acceptedAnswer: { '@type': 'Answer', text: 'Your membership includes daily pre-market Zoom sessions (7:30 AM ET, Monday–Friday), real-time trade alerts from 6 expert traders with full reasoning, nightly educational workshops (50+ per month), Sunday weekly market scan (free always), 1 month of Deepvue AI platform access, and the community Discord.' },
        },
        {
          '@type': 'Question',
          name: 'Is Uncharted Territory legit?',
          acceptedAnswer: { '@type': 'Answer', text: 'Uncharted Territory has been operating since 2022 with an active member base and a 5.0-star rating from 162 verified reviews on Whop. The founders are active traders who trade alongside members daily.' },
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
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'JoinUnchartedTerritory', item: 'https://joinunchartedterritory.com' },
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
        <div style={{ position: 'relative', zIndex: 60, background: '#111318', borderBottom: '1px solid rgba(245,158,11,0.2)', padding: '8px 16px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
          Independent guide, not run by or affiliated with Uncharted Territory. Links to Whop are affiliate links: we may earn a commission at no extra cost to you.{' '}
          <a href="/#disclosure" style={{ color: '#f59e0b', textDecoration: 'underline' }}>How this works</a>
        </div>
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
