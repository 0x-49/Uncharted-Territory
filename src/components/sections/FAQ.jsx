const faqs = [
  {
    question: 'What is included in the Uncharted Territory membership?',
    answer: 'Your membership includes daily pre-market Zoom sessions (7:30 AM ET, Monday–Friday led by Bracco), real-time trade alerts from 6 expert traders with full reasoning, nightly educational workshops (50+ per month), Sunday weekly market scan (free always), 1 month of Deepvue AI platform access, and the active community Discord with members of our active community.',
  },
  {
    question: 'Is Uncharted Territory legit?',
    answer: 'Uncharted Territory has been operating since 2022 with our active member base and a 5.0-star rating from 162 verified reviews on Whop. The founders, Bracco and TSDR, are active traders who trade alongside members daily, not just instructors. You can read every review directly on Whop before buying.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'There is no free trial, but there is a 7-day money-back guarantee. If you join and are not satisfied within your first week, you receive a full refund with no questions asked. This gives you a complete trading week to evaluate the community at zero risk.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. No contracts, no cancellation fees. Cancel directly from your Whop account in under 60 seconds. You retain access until the end of your paid 28-day period.',
  },
  {
    question: 'How does Uncharted Territory compare to Warrior Trading or Investors Underground?',
    answer: 'Warrior Trading costs $199+/month and focuses primarily on momentum day trading. Investors Underground costs $297+/month. Uncharted Territory at $79.99/28 days offers 6 traders across multiple styles (day, swing, options), plus Deepvue AI included free, a $150/month value. It is the most comprehensive package at its price point.',
  },
  {
    question: 'Do I need experience to join?',
    answer: "No. Members range from first-week beginners to traders with years of experience. The daily Zoom sessions, trade reasoning, and nightly workshops are designed to be educational, not just signal drops. One member wrote: 'I learned more in two weeks than in two months on my own.'",
  },
  {
    question: 'What trading styles are covered?',
    answer: 'Six traders, six styles: Bracco (day trading, market internals), TSDR (swing trading, multi-day positions), AlexJonesIA (options flow), Manrav (technical analysis), 1ChartMaster (levels and structure), and Jersace (active day trading). Whatever your preferred approach, there is an expert for it.',
  },
  {
    question: 'What is Deepvue AI and is it actually useful?',
    answer: 'Deepvue is an institutional-grade market research platform with real-time scanning, fundamental ratings, and an AI research assistant that answers questions like "show me tech stocks with EPS growth above 40% near their 52-week highs." It updates earnings data within 3 minutes of public release. Standalone, Deepvue costs $150/month. Your membership includes 1 month free.',
  },
  {
    question: 'What exactly happens when I join?',
    answer: 'Immediately after payment on Whop, you receive Discord access. From day one: Monday to Friday at 7:30 AM ET you join the live pre-market Zoom with Bracco. Throughout the trading day, 6 traders post live alerts and commentary in Discord. After market close, nightly workshops cover strategy, setups, and review. Every Sunday, Bracco publishes the free weekly market scan.',
  },
  {
    question: 'What is the Sunday Weekly Scan?',
    answer: "Every Sunday, Bracco publishes a full market breakdown covering sector rotation, top watchlist for the coming week, key levels, and macro context. This is available free, even if your membership is paused. It's how you walk into Monday with a plan instead of reacting to the market.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-ut-amber tracking-widest uppercase mb-3">Got Questions?</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
            FAQ
          </h2>
          <p className="text-white/50 text-sm">
            Everything you need to know before joining Uncharted Territory
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/20 transition-colors"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/5 transition-colors [list-style:none] [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-white text-sm pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-ut-amber/15 border border-ut-amber/30 flex items-center justify-center transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                  <svg className="w-4 h-4 text-ut-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-4 border-t border-white/5">
                <p className="text-white/70 text-sm leading-relaxed pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
