const footerLinks = {
  community: [
    { label: 'Join Now', href: 'https://whop.com/uncharted' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Pricing', href: '#pricing' },
  ],
  features: [
    { label: 'Pre-Market Zoom', href: '#features' },
    { label: 'Live Alerts', href: '#features' },
    { label: 'Workshops', href: '#features' },
  ],
  connect: [
    { label: '@Braczyy', href: 'https://x.com/Braczyy' },
    { label: '@TSDR_Trading', href: 'https://x.com/TSDR_Trading' },
    { label: 'Substack', href: 'https://substack.com/@unchartedterritoryy' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <img src="/icon.avif" alt="Uncharted Territory" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-display text-lg text-white tracking-widest">UNCHARTED</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A trading community built by obsessive traders. Daily Zoom, real-time alerts, and workshops that teach you to think about the markets.
            </p>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-widest mb-4">Community</h4>
            <ul className="space-y-2.5">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-widest mb-4">Features</h4>
            <ul className="space-y-2.5">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-ut-amber transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2026 Uncharted Territory. All rights reserved.</p>
          <p className="text-white/20 text-xs max-w-md text-center md:text-right">
            Risk Disclosure: Trading involves substantial risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
