'use client'

const stats = [
  { value: '5,000+', label: 'Verified Members' },
  { value: '100+', label: 'Hours of Content' },
  { value: '50+', label: 'Live Sessions Monthly' },
]

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ut-bg/50 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          JOIN 5,000+ SERIOUS TRADERS
        </h2>
        <p className="text-white/50 text-base max-w-md mx-auto mb-10">
          Be part of a community dedicated to trading excellence
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-ut-amber mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href="https://whop.com/uncharted"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-ut-amber text-black font-semibold rounded-lg hover:bg-ut-ambers transition-colors"
        >
          Join the Community
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
