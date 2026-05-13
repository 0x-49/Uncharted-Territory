/**
 * Fires a GA4 event when a user clicks the affiliate CTA.
 * Usage: onClick={trackAffiliate('hero_cta')}
 */
export function trackAffiliate(location = 'unknown') {
  return () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        event_category: 'conversion',
        event_label: location,
        value: 1,
      })
    }
  }
}
