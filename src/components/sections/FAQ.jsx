'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is included in the membership?',
    answer: 'Your membership includes access to our daily pre-market Zoom sessions, live trading alerts, nightly workshops, Deepvue AI tools, and our community of 5,000+ verified traders. Plus weekly market analysis and exclusive educational content.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a 7-day money-back guarantee. If you\'re not satisfied within the first week, you can request a full refund — no questions asked.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Results vary based on experience and dedication. Many members see improvements within their first month, but becoming consistently profitable takes time and practice. We provide the tools and education — you bring the commitment.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! There are no long-term contracts. You can cancel your subscription at any time through your Whop account. You\'ll retain access until the end of your current billing period.',
  },
  {
    question: 'Do you offer 1-on-1 coaching?',
    answer: 'Yes, our VIP plan includes 1-on-1 coaching sessions where you\'ll work directly with our expert traders to develop and refine your personal trading strategy.',
  },
  {
    question: 'Is this suitable for beginners?',
    answer: 'Absolutely! We welcome traders of all experience levels. Our content ranges from foundational concepts for beginners to advanced strategies for experienced traders. You\'ll learn at your own pace with support from our community.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-ut-deep">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-ut-white mb-4">
            FAQ
          </h2>
          <p className="text-lg text-ut-muted">
            Frequently asked questions about Uncharted Territory
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-ut-border rounded-xl overflow-hidden bg-ut-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-ut-border/30 transition-colors"
              >
                <span className="font-medium text-ut-white">{faq.question}</span>
                <span className={`text-ut-amber text-xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-ut-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
