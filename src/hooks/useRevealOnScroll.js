'use client'
import { useEffect, useRef } from 'react'

export function useRevealOnScroll(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const elements = Array.from(
      ref.current?.querySelectorAll('.reveal, .reveal-scale, .reveal-left') || []
    )
    if (elements.length === 0) return

    // Opt into hide-then-reveal animation only now that JS is running
    elements.forEach((el) => el.classList.add('reveal-init'))

    // Reveal anything already in the viewport on mount
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        requestAnimationFrame(() => el.classList.add('visible'))
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px', ...options }
    )

    elements.forEach((el) => {
      if (!el.classList.contains('visible')) observer.observe(el)
    })

    // Safety net: force-reveal after 1.5s regardless
    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add('visible'))
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return ref
}
