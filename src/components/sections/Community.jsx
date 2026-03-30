'use client'
import { useState } from 'react'

const stats = [
  { value: '5,000+', label: 'Verified Members' },
  { value: '24/7', label: 'Community Support' },
  { value: '100+', label: 'Hours of Content' },
  { value: '50+', label: 'Live Sessions Monthly' },
]

export default function Community() {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ut-deep via-ut-bg to-ut-deep" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ut-white mb-4">
            JOIN 5,000+ SERIOUS TRADERS
          </h2>
          <p className="text-lg text-ut-muted max-w-2xl mx-auto">
            Be part of a community dedicated to trading excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-ut-amber mb-2">{stat.value}</div>
              <div className="text-sm text-ut-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-8 py-4 rounded-lg font-bold text-ut-white flex items-center gap-2"
          >
            <span>🗺️</span> Join the Community
          </a>
          <a
            href="#reviews"
            className="px-8 py-4 rounded-lg font-semibold border-2 border-ut-border hover:border-ut-amber text-ut-text hover:text-ut-amber transition-all"
          >
            Read Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
