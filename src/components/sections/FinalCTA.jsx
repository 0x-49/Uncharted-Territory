export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="glow-amber w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ut-white mb-6">
          READY TO ENTER<br />
          <span className="text-amber-grad">THE TERRITORY?</span>
        </h2>
        
        <p className="text-lg text-ut-text max-w-2xl mx-auto mb-10">
          Join thousands of traders who are already mastering the markets. 
          Your journey to consistent profits starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-10 py-5 rounded-lg font-bold text-lg text-ut-white flex items-center gap-2"
          >
            <span>🗺️</span> Start Your Journey
          </a>
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold border-2 border-ut-border hover:border-ut-amber text-ut-text hover:text-ut-amber transition-all"
          >
            View on Whop
          </a>
        </div>

        <p className="mt-8 text-sm text-ut-muted">
          $79.99/28 days · Cancel anytime · 7-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
