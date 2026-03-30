const footerLinks = {
  community: [
    { label: 'Join Now', href: 'https://whop.com/uncharted' },
    { label: 'Whop Page', href: 'https://whop.com/uncharted' },
    { label: 'Substack', href: 'https://substack.com/@unchartedterritoryy' },
    { label: 'Reviews', href: '#reviews' },
  ],
  features: [
    { label: 'Pre-Market Zoom', href: '#features' },
    { label: 'Live Alerts', href: '#features' },
    { label: 'Workshops', href: '#features' },
    { label: 'Deepvue AI', href: '#features' },
  ],
  team: [
    { label: '@Braczyy', href: 'https://x.com/Braczyy' },
    { label: '@TSDR_Trading', href: 'https://x.com/TSDR_Trading' },
    { label: 'Patrick', href: '#' },
    { label: 'Manrav', href: '#' },
  ],
  social: [
    { label: 'Twitter/X', href: 'https://x.com/Braczyy' },
    { label: 'Substack', href: 'https://substack.com/@unchartedterritoryy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ut-deep border-t border-ut-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-ut-amber" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="font-display text-xl text-ut-white tracking-wider">UNCHARTED</span>
            </a>
            <p className="text-ut-muted text-sm leading-relaxed">
              Where serious traders come to learn & earn. Daily Zoom sessions, live alerts, and expert workshops.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ut-white mb-4 text-sm">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-ut-muted hover:text-ut-amber transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ut-white mb-4 text-sm">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-ut-muted hover:text-ut-amber transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-ut-white mb-4 text-sm">Team</h4>
            <ul className="space-y-2">
              {footerLinks.team.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-ut-muted hover:text-ut-amber transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ut-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ut-muted text-xs">© 2026 Uncharted Territory. All rights reserved.</p>
          <p className="text-ut-muted text-xs max-w-md text-center md:text-right">
            Risk Disclosure: Trading involves substantial risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
