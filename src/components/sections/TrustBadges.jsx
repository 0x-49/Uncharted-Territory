'use client'
import { useState } from 'react'

const trustBadges = [
  { icon: '🔒', label: 'Secure Checkout', sublabel: '256-bit SSL' },
  { icon: '💯', label: 'Money-Back Guarantee', sublabel: '30 Days' },
  { icon: '👥', label: 'Verified Members', sublabel: '5,000+' },
  { icon: '💬', label: '24/7 Support', sublabel: 'Live Chat' },
  { icon: '🏆', label: 'Expert Team', sublabel: 'Industry Pros' },
]

export default function TrustBadges() {
  return (
    <section className="py-16 border-y border-ut-border bg-ut-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="font-semibold text-ut-white text-sm">{badge.label}</div>
              <div className="text-xs text-ut-muted">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
