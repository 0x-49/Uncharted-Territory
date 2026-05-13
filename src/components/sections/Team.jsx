'use client'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

const teamMembers = [
  {
    name: 'AlexJonesIA',
    role: 'Contributor',
    initials: 'A',
    gradient: 'from-amber-600 to-orange-600',
    bio: 'Multi-style analyst praised for one of the best earning years.',
  },
  {
    name: 'Manrav',
    role: 'Contributor',
    initials: 'M',
    gradient: 'from-blue-600 to-cyan-600',
    bio: 'Technical analyst contributing ideas, charts, and setups.',
  },
  {
    name: '1ChartMaster',
    role: 'Contributor',
    initials: 'C',
    gradient: 'from-emerald-600 to-teal-600',
    bio: 'Chart specialist known for clean, precise level-based setups.',
  },
  {
    name: 'Jersace',
    role: 'Contributor',
    initials: 'J',
    gradient: 'from-purple-600 to-violet-600',
    bio: 'Active trader bringing additional perspective and trade ideas.',
  },
]

export default function Team() {
  const sectionRef = useRevealOnScroll()

  return (
    <section id="team" ref={sectionRef} className="py-20 md:py-28 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
            BUILT BY OBSESSIVE TRADERS
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Founded by Bracco and TSDR - two traders who dedicated their careers to the markets.
            Six specialists, each with a distinct edge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group hover:border-ut-amber/30 transition-all duration-300 hover:shadow-2xl hover:shadow-ut-amber/5">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=900&q=80&auto=format&fit=crop"
                alt="Bracco - Co-Founder and Day Trader"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'saturate(0.15) brightness(0.5)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ut-bg via-ut-bg/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-ut-amber text-black text-xs font-bold flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                FOUNDER
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-display text-white text-2xl tracking-wider">BRACCO</div>
                  <div className="font-mono text-xs text-ut-amber mt-1">Co-Founder - Day Trader</div>
                </div>
                <a
                  href="https://x.com/Braczyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/55 hover:text-ut-amber transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @Braczyy
                </a>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Full-time day trader running the pre-market Zoom every morning, sharing live trade ideas throughout the day, and delivering the Sunday weekly scan without fail. Focuses on market internals and index behavior for high-probability intraday moves.
              </p>
              <div className="flex gap-6 pt-4 border-t border-white/5">
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Daily</div>
                  <div className="text-sm text-white/70 mt-0.5">Pre-Market Zoom</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Sunday</div>
                  <div className="text-sm text-white/70 mt-0.5">Weekly Scan</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Focus</div>
                  <div className="text-sm text-white/70 mt-0.5">Day Trading</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group hover:border-ut-amber/30 transition-all duration-300 hover:shadow-2xl hover:shadow-ut-amber/5">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop"
                alt="TSDR - Co-Founder and Swing Trader"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'saturate(0.15) brightness(0.5)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ut-bg via-ut-bg/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-ut-amber text-black text-xs font-bold flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                FOUNDER
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-display text-white text-2xl tracking-wider">TSDR</div>
                  <div className="font-mono text-xs text-ut-amber mt-1">Co-Founder - Swing Trader</div>
                </div>
                <a
                  href="https://x.com/TSDR_Trading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/55 hover:text-ut-amber transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @TSDR_Trading
                </a>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Swing trading specialist sharing high-conviction multi-day trades on stocks, ETFs, and indices with defined risk. Members credit his swing setups with some of their biggest winning years.
              </p>
              <div className="flex gap-6 pt-4 border-t border-white/5">
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Focus</div>
                  <div className="text-sm text-white/70 mt-0.5">Stocks, ETFs</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Style</div>
                  <div className="text-sm text-white/70 mt-0.5">Multi-Day Swing</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/55 uppercase tracking-widest">Alerts</div>
                  <div className="text-sm text-white/70 mt-0.5">Swing Trades</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="reveal bg-white/[0.02] border border-white/5 rounded-xl p-5 group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {member.initials}
                </div>
                <span className="text-[10px] text-white/55 uppercase tracking-widest">{member.role}</span>
              </div>
              <div className="font-medium text-white text-sm mb-1">{member.name}</div>
              <div className="text-xs text-white/55 leading-relaxed">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}