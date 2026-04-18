export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="glow-amber w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
          READY TO ENTER<br />
          <span className="text-amber-grad">THE TERRITORY?</span>
        </h2>
        
        <p className="text-base text-white/50 max-w-lg mx-auto mb-8">
          Join thousands of traders mastering the markets. Your journey to consistent profits starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-ut-amber text-black font-semibold rounded-lg hover:bg-ut-ambers transition-colors flex items-center gap-2"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
          >
            View on Whop
          </a>
        </div>

        <p className="mt-8 text-xs text-white/30">
          $79.99/28 days - Cancel anytime - 7-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
