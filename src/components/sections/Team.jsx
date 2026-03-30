const teamMembers = [
  { name: '@Braczyy', role: 'Founder & Lead Trader', handle: 'Braczyy' },
  { name: '@TSDR_Trading', role: 'Co-Founder & Analyst', handle: 'TSDR_Trading' },
  { name: 'Patrick', role: 'Strategy Developer', handle: '' },
  { name: 'Manrav', role: 'Technical Analyst', handle: '' },
  { name: '1ChartMaster', role: 'Chart Specialist', handle: '' },
  { name: 'Jersace', role: 'Community Manager', handle: '' },
]

export default function Team() {
  return (
    <section className="py-24 bg-ut-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-ut-blue/30 bg-ut-blue/5 text-ut-blue text-sm font-medium mb-4">
            Industry Pros
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ut-white mb-4">
            MEET THE TEAM
          </h2>
          <p className="text-lg text-ut-muted max-w-2xl mx-auto">
            Learn from traders who have years of experience and a proven track record
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-4 rounded-xl bg-ut-card border border-ut-border text-center hover:border-ut-amber/30 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-ut-border flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-semibold text-ut-white text-sm">{member.name}</h4>
              <p className="text-xs text-ut-muted mt-1">{member.role}</p>
              {member.handle && (
                <a
                  href={`https://x.com/${member.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-ut-blue hover:text-ut-amber transition-colors"
                >
                  @{member.handle}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
