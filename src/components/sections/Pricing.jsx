'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 49,
    annualPrice: 29,
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
    monthlyPrice: 99,
    annualPrice: 59,
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
    monthlyPrice: 199,
    annualPrice: 119,
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
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ut-white mb-4">
            SIMPLE PRICING
          </h2>
          <p className="text-lg text-ut-muted max-w-2xl mx-auto mb-8">
            Choose the plan that fits your trading goals
          </p>

          <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-ut-card border border-ut-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                !isAnnual ? 'bg-ut-amber text-ut-white' : 'text-ut-muted hover:text-ut-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isAnnual ? 'bg-ut-amber text-ut-white' : 'text-ut-muted hover:text-ut-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-ut-green/20 text-ut-green px-2 py-0.5 rounded-full">
                Save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.featured
                  ? 'bg-ut-card border-ut-amber/50 shadow-lg shadow-ut-amber/10 scale-105'
                  : 'bg-ut-card/50 border-ut-border hover:border-ut-borderl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-ut-amber text-ut-white text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-ut-white mb-2">{plan.name}</h3>
                <p className="text-sm text-ut-muted">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="font-display text-5xl text-ut-white">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-ut-muted">/{isAnnual ? 'month' : 'month'}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-ut-green mt-0.5">✓</span>
                    <span className="text-ut-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://whop.com/uncharted"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  plan.featured
                    ? 'btn-amber text-ut-white'
                    : 'border border-ut-border text-ut-text hover:border-ut-amber hover:text-ut-amber'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-md mx-auto p-6 rounded-xl bg-ut-card border border-ut-border">
          <h4 className="font-semibold text-ut-white mb-2">Why 28 days instead of monthly?</h4>
          <p className="text-sm text-ut-muted">
            We align with the 4-week trading cycle used by prop firms and professional traders. 
            This gives you time to apply what you learn and see real results.
          </p>
        </div>
      </div>
    </section>
  )
}
