'use client'
import { useEffect, useRef } from 'react'

const teamMembers = [
  { 
    name: 'Patrick', 
    role: 'Contributor', 
    initials: 'P',
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
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealElements = sectionRef.current?.querySelectorAll('.reveal')
    revealElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group hover:border-ut-amber/30 transition-all duration-300">
            <div className="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=900&q=80&auto=format&fit=crop" 
                alt="Bracco" 
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.15) brightness(0.5)' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-ut-amber text-black text-xs font-bold">FOUNDER</div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-display text-white text-2xl tracking-wider">BRACCO</div>
                  <div className="font-mono text-xs text-ut-amber mt-0.5">Co-Founder - Day Trader</div>
                </div>
                <a 
                  href="https://x.com/Braczyy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-ut-amber transition-colors"
                >
                  @Braczyy
                </a>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Full-time day trader running the pre-market Zoom every morning, sharing live trade ideas throughout the day, and delivering the Sunday weekly scan without fail. Focuses on market internals and index behavior for high-probability intraday moves.
              </p>
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/5">
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Daily</div>
                  <div className="text-sm text-white/70">Pre-Market Zoom</div>
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Sunday</div>
                  <div className="text-sm text-white/70">Weekly Scan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group hover:border-ut-amber/30 transition-all duration-300">
            <div className="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop" 
                alt="TSDR" 
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.15) brightness(0.5)' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-ut-amber text-black text-xs font-bold">FOUNDER</div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-display text-white text-2xl tracking-wider">TSDR</div>
                  <div className="font-mono text-xs text-ut-amber mt-0.5">Co-Founder - Swing Trader</div>
                </div>
                <a 
                  href="https://x.com/TSDR_Trading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-ut-amber transition-colors"
                >
                  @TSDR_Trading
                </a>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Swing trading specialist sharing high-conviction multi-day trades on stocks, ETFs, and indices with defined risk. Members credit his swing setups with some of their biggest winning years.
              </p>
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/5">
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Focus</div>
                  <div className="text-sm text-white/70">Stocks, ETFs</div>
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Style</div>
                  <div className="text-sm text-white/70">Multi-Day Swing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="reveal bg-white/[0.02] border border-white/5 rounded-xl p-4 group hover:border-white/10 transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-sm mb-3`}>
                {member.initials}
              </div>
              <div className="font-medium text-white text-sm">{member.name}</div>
              <div className="text-xs text-white/30 mt-0.5 mb-2">{member.role}</div>
              <div className="text-xs text-white/40 leading-relaxed">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
