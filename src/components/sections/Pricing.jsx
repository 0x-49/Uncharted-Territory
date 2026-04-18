'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for getting started',
    features: [
      'Core educational content',
      'Community access',
      'Weekly market analysis',
      'Basic trading tools',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: 99,
    description: 'Most popular for serious traders',
    features: [
      'Everything in Basic',
      'Live trading sessions',
      'Premium scanning tools',
      'Priority support',
      'Deepvue AI access',
      'Real-time alerts',
    ],
    featured: true,
  },
  {
    name: 'VIP',
    price: 199,
    description: 'For those who want the edge',
    features: [
      'Everything in Pro',
      '1-on-1 coaching sessions',
      'Custom strategy development',
      'Founder access',
      'Exclusive workshops',
      'Advanced risk management',
    ],
    featured: false,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
            SIMPLE PRICING
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto mb-6">
            Choose the plan that fits your trading goals
          </p>

          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? 'bg-ut-amber text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-ut-amber text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                -40%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border transition-all ${
                plan.featured
                  ? 'bg-ut-amber/5 border-ut-amber/40 scale-105'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ut-amber text-black text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className="font-display text-xl text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/40">{plan.description}</p>
              </div>

              <div className="text-center mb-5">
                <span className="font-display text-4xl text-white">
                  ${isAnnual ? Math.round(plan.price * 0.6) : plan.price}
                </span>
                <span className="text-white/40 text-sm">/28 days</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-ut-amber mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://whop.com/uncharted"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-2.5 rounded-lg font-semibold text-center text-sm transition-all ${
                  plan.featured
                    ? 'bg-ut-amber text-black hover:bg-ut-ambers'
                    : 'bg-white/10 text-white hover:bg-white/15'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-sm mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center">
          <p className="text-sm text-white/50">
            <span className="text-white/70 font-medium">28-day cycle</span> aligns with the 4-week trading cycle used by prop firms.
          </p>
        </div>
      </div>
    </section>
  )
}
