'use client'

const statusItems = [
  { label: 'Pre-Market', time: '7:30 AM ET', active: true },
  { label: 'Live Trading', time: '9:30 AM - 4:00 PM ET', active: true },
  { label: 'After-Hours', time: '4:00 PM - 8:00 PM ET', active: false },
  { label: 'Sunday Scan', time: 'Weekly', active: false },
]

export default function Ticker() {
  return (
    <div className="border-b border-white/5 bg-ut-bg/50">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-white/50">LIVE</span>
          </div>
          
          <div className="flex items-center gap-8">
            {statusItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-green-500' : 'bg-white/20'}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white/80">{item.label}</span>
                  <span className="text-[10px] text-white/40 font-mono">{item.time}</span>
                </div>
                {i < statusItems.length - 1 && (
                  <span className="ml-4 text-white/10">|</span>
                )}
              </div>
            ))}
          </div>
          
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ut-amber hover:text-ut-ambers transition-colors font-medium"
          >
            Start Free Trial →
          </a>
        </div>
      </div>
    </div>
  )
}