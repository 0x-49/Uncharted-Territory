'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#team', label: 'Team' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-ut-bg/90 backdrop-blur-xl border-b border-white/5' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <img src="/icon.avif" alt="Uncharted Territory" className="w-9 h-9 rounded-lg object-contain" />
            <span className="font-display text-lg tracking-widest text-white">UNCHARTED</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://whop.com/uncharted"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ut-amber text-ut-bg font-semibold text-sm rounded-lg hover:bg-ut-ambers transition-colors duration-200"
            >
              Join Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden bg-ut-bg/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://whop.com/uncharted"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 mt-3 px-4 py-3 bg-ut-amber text-ut-bg font-semibold text-sm rounded-lg text-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  )
}
