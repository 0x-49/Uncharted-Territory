'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const discordMessages = [
  { user: 'Bracco', color: 'from-amber-500 to-orange-500', avatar: 'B', time: '7:32 AM', text: 'QQQ breaking 450 resistance. Looking for longs above there.' },
  { user: 'TSDR', color: 'from-blue-500 to-cyan-500', avatar: 'T', time: '7:35 AM', text: 'Silver setup forming on GLD. Watching $AGQ closely.' },
  { user: 'Bracco', color: 'from-amber-500 to-orange-500', avatar: 'B', time: '7:41 AM', text: 'Entry QQQ @ 450.30, stop 449.50, target 452.' },
  { user: 'AlexJonesIA', color: 'from-emerald-500 to-teal-500', avatar: 'A', time: '7:45 AM', text: 'Earnings catalyst on $BTC this week. Watch for vol expansion.' },
]

const alerts = [
  { ticker: 'AGQ', action: 'LONG', price: '$38.20', status: 'bg-emerald-500/20 border-emerald-500/40' },
  { ticker: 'GLD', action: 'LONG', price: '$187.50', status: 'bg-emerald-500/20 border-emerald-500/40' },
  { ticker: 'KORU', action: 'SHORT', price: '$42.80', status: 'bg-red-500/20 border-red-500/40' },
]

export default function LivePlatform() {
  const sectionRef = useRevealOnScroll()

  return (
    <section id="platform" ref={sectionRef} className="py-20 md:py-28 border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">Live Trading Floor</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
            INSIDE THE COMMUNITY
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Real-time Discord alerts, live Zoom sessions, and trade ideas from six expert traders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="reveal">
            <div className="rounded-2xl bg-[#1e1f22] border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2b2d31] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <svg className="w-4 h-4 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                  <span className="font-medium text-white/80 text-sm">Uncharted Territory</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-emerald-400">847 Online</span>
                </div>
              </div>
              <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                {discordMessages.map((msg, i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${msg.color} flex items-center justify-center text-black font-bold text-sm flex-shrink-0`}>
                      {msg.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-white text-sm hover:underline cursor-pointer">{msg.user}</span>
                        <span className="font-mono text-xs text-white/55">{msg.time}</span>
                      </div>
                      <p className="text-white/85 text-[15px] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 bg-[#2b2d31] border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <span className="px-2 py-1 bg-[#404249] rounded text-white">Message #general</span>
                  <span>Type a message...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 reveal">
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8"/>
                  </svg>
                  <span className="font-mono text-xs text-white/55">Live Trade Alerts</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="font-mono text-xs text-red-400">Real-Time</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${alert.status} hover:scale-[1.02] transition-transform`}>
                    <div className="flex items-center gap-3">
                      <div className="font-display text-xl text-white tracking-wider">{alert.ticker}</div>
                      <div className={`px-3 py-1 rounded-lg text-xs font-bold ${alert.action === 'LONG' ? 'bg-emerald-500/30 text-emerald-300' : 'bg-red-500/30 text-red-300'}`}>
                        {alert.action}
                      </div>
                    </div>
                    <div className="font-mono text-lg text-white/90">{alert.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-ut-amber/10 to-orange-500/5 border border-ut-amber/20 p-6 hover:border-ut-amber/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-ut-amber/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-white text-lg">Daily Pre-Market Zoom</div>
                  <div className="font-mono text-xs text-white/55">Starts 7:30 AM ET, Mon-Fri</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Every trading day begins with a live Zoom - levels, charts, ideas, and the full team&apos;s watchlist before the market opens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}