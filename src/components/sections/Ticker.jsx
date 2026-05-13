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
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-xs font-mono text-white/50">LIVE</span>
          </div>

          <div className="flex items-center gap-6 md:gap-8 overflow-x-auto">
            {statusItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3 flex-shrink-0">
                <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-green-500' : 'bg-white/20'}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white/80">{item.label}</span>
                  <span className="text-[10px] text-white/55 font-mono">{item.time}</span>
                </div>
                {i < statusItems.length - 1 && (
                  <span className="ml-2 md:ml-4 text-white/10 hidden sm:block">|</span>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://whop.com/uncharted/uncharted?a=digitalartlab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ut-amber hover:text-ut-ambers transition-colors font-medium flex-shrink-0"
          >
            Start Free Trial →
          </a>
        </div>
      </div>
    </div>
  )
}