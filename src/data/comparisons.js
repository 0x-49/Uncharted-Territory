export const comparisons = [
  {
    slug: 'warrior-trading',
    competitorName: 'Warrior Trading',
    metaTitle: 'Uncharted Territory vs Warrior Trading: Which Is Better in 2026?',
    metaDescription:
      "Honest side-by-side of Uncharted Territory and Warrior Trading. Pricing, style coverage, live sessions, who each one is actually for.",
    hookSentence:
      "Uncharted Territory and Warrior Trading target overlapping audiences with different shapes. The right pick depends on whether you want one focused day-trading style or six traders covering day, swing and options.",
    competitorTagline: 'Established small-cap momentum day-trading platform',
    competitorStrengths: [
      'Strong brand recognition built around founder Ross Cameron',
      'Polished course curriculum and recorded education',
      'Bundled stock scanner (Warrior Scanner)',
      'Consistent focus on small-cap momentum day trading',
    ],
    competitorWeaknesses: [
      'Pricing starts at $199/month — more than 2× UCT',
      'Style coverage limited to small-cap day trading',
      'Single-trader voice (Ross) for the live experience',
      'No bundled charting / AI tooling beyond Warrior Scanner',
    ],
    comparisonTable: [
      { feature: 'Price',                       uct: '$79.99 / 28 days',                 competitor: '$199+ / month',                  edge: 'uct' },
      { feature: 'Trading styles covered',      uct: 'Day, swing, options',              competitor: 'Day (small-cap momentum)',       edge: 'uct' },
      { feature: 'Number of active traders',    uct: 'Six traders',                      competitor: 'One primary (Ross Cameron)',     edge: 'uct' },
      { feature: 'Live sessions per month',     uct: '50+ workshops + daily Zoom',       competitor: 'Daily chatroom (live)',          edge: 'uct' },
      { feature: 'Pre-market prep',             uct: 'Daily 7:30 AM ET Zoom',            competitor: 'Pre-market chatroom activity',   edge: 'tie' },
      { feature: 'Bonus tools',                 uct: 'Deepvue AI bundled (1 mo free)',   competitor: 'Warrior Scanner bundled',        edge: 'tie' },
      { feature: 'Money-back / trial',          uct: '7-day money-back guarantee',       competitor: 'Varies per package',             edge: 'uct' },
      { feature: 'Best for',                    uct: 'Traders who want diverse styles + lower cost', competitor: 'Pure small-cap momentum day traders' },
    ],
    whoEachOneIsFor: {
      uct:
        "Traders who want to stress-test multiple styles (day, swing, options) under one roof, with a daily live Zoom and a sub-$100 price point. The 7-day money-back guarantee removes the financial risk of finding out.",
      competitor:
        "Pure small-cap momentum day traders who want a recognised brand, a structured course library and the Warrior Scanner — and are happy to pay $199+/mo for that focus.",
    },
    bottomLine:
      "If you specifically want to trade small-caps with the Warrior playbook, Warrior Trading is a credible category leader. If you want to trade across day, swing and options at less than half the price — with six traders and a daily live Zoom — Uncharted Territory is the more efficient, more flexible path.",
  },
  {
    slug: 'bear-bull-traders',
    competitorName: 'Bear Bull Traders',
    metaTitle: 'Uncharted Territory vs Bear Bull Traders: 2026 Comparison',
    metaDescription:
      "Side-by-side comparison of Uncharted Territory and Bear Bull Traders. Pricing, education depth, live sessions, multi-style coverage.",
    hookSentence:
      "Uncharted Territory and Bear Bull Traders both target serious retail traders with structured education. The split: BBT is day-trading-focused with a deep course library; UCT is multi-style and bundles Deepvue AI.",
    competitorTagline: 'Day-trading community founded by Dr. Andrew Aziz',
    competitorStrengths: [
      'Founder Dr. Andrew Aziz is widely-recognised in retail trading',
      'Long operating history — nearly a decade of community building',
      'Beginner-friendly structured course library',
      'Established public profile and documented trading',
    ],
    competitorWeaknesses: [
      'Primary focus is day trading — narrower style coverage',
      'No bundled AI / charting platform comparable to Deepvue AI',
      'Verified-rating signal less quantified than UCT\'s 5.0 / 162 reviews on Whop',
      'Slightly higher monthly price ($99 vs $79.99)',
    ],
    comparisonTable: [
      { feature: 'Price',                       uct: '$79.99 / 28 days',                 competitor: '$99 / month',                    edge: 'uct' },
      { feature: 'Trading styles covered',      uct: 'Day, swing, options',              competitor: 'Day trading (primary focus)',    edge: 'uct' },
      { feature: 'Number of active traders',    uct: 'Six traders',                      competitor: 'Multiple moderators',            edge: 'tie' },
      { feature: 'Live sessions per month',     uct: '50+ workshops + daily Zoom',       competitor: 'Daily chatroom + some workshops', edge: 'uct' },
      { feature: 'Pre-market prep',             uct: 'Daily 7:30 AM ET Zoom',            competitor: 'Pre-market chat activity',       edge: 'uct' },
      { feature: 'Bonus tools',                 uct: 'Deepvue AI (1 mo free, ~$150 value)', competitor: 'Course library access',       edge: 'uct' },
      { feature: 'Verified rating signal',      uct: '5.0 / 162 reviews on Whop',        competitor: 'Generally positive, less quantified', edge: 'uct' },
      { feature: 'Founder visibility',          uct: 'Bracco + TSDR active in community', competitor: 'Dr. Andrew Aziz, public profile', edge: 'tie' },
      { feature: 'Best for',                    uct: 'Traders who want diverse styles + bundled tooling', competitor: 'Pure day traders who want structured course content' },
    ],
    whoEachOneIsFor: {
      uct:
        "Traders who want multiple styles (day, swing, options) under one roof, the Deepvue AI tooling bundled in, and a single coherent live experience for less than $80 per cycle.",
      competitor:
        "Day traders who want a long-established brand, a deep beginner-friendly course library, and learning under Dr. Andrew Aziz's public methodology.",
    },
    bottomLine:
      "If you want a pure day-trading focus and value a long-running, course-driven brand led by Dr. Andrew Aziz, Bear Bull Traders is a credible choice. If you want broader style coverage, bundled AI tools and a slightly lower price — with a verified 5.0 rating on Whop to back it — Uncharted Territory is the stronger value.",
  },
];

export function getComparison(slug) {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs() {
  return comparisons.map((c) => c.slug);
}
