const trustBadges = [
  { label: 'Secure Checkout', sublabel: '256-bit SSL' },
  { label: 'Money-Back', sublabel: '7 Days' },
  { label: 'Verified Members', sublabel: '5,000+' },
  { label: 'Cancel Anytime', sublabel: 'No Contracts' },
]

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="font-display text-lg text-white mb-0.5">{badge.label}</div>
              <div className="text-xs text-white/30">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
