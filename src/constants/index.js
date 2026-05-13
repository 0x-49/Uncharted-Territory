export const AFFILIATE_LINK = 'https://whop.com/uncharted/uncharted?a=digitalartlab'

// Legacy aliases — always use AFFILIATE_LINK for new code.
export const WHOP_URL = AFFILIATE_LINK
export const WHOP_CHECKOUT_URL = AFFILIATE_LINK

// All numeric claims below are reconciled against the live Whop product page.
// Last verified: 2026-04-29 against https://whop.com/uncharted
export const VERIFIED_AT = '2026-04-29'

export const COMMUNITY_STATS = {
  // Live Whop page shows "892 joined" — kept as exact verified number.
  members: '892+',
  // Live Whop page shows 5.0 (162 reviews). Site previously claimed 4.97; corrected up.
  rating: '5.0',
  reviewCount: '162',
  // Editorial / not-strictly-verifiable; kept as qualitative ranges.
  hoursOfContent: '100+',
  liveSessionsMonthly: '50+',
  foundedYear: '2022',
}

export const PRICING = {
  price: '$79.99',
  period: '28 days',
  cancellation: 'Cancel anytime',
  guarantee: '7-day money-back guarantee',
}

export const SOCIAL_LINKS = {
  bracco: 'https://x.com/Braczyy',
  tsdr: 'https://x.com/TSDR_Trading',
  substack: 'https://substack.com/@unchartedterritoryy',
}
