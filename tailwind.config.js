/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        ut: {
          bg: '#0a0b0e',
          deep: '#0c0e12',
          card: '#10121a',
          border: '#1c1f2e',
          borderl: '#252840',
          amber: '#f59e0b',
          amberl: '#fbbf24',
          amberd: '#d97706',
          orange: '#ea580c',
          red: '#ef4444',
          green: '#10b981',
          blue: '#3b82f6',
          muted: '#6b7280',
          text: '#c4c8d8',
          white: '#eef0f8',
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'ticker': 'ticker 28s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'float-y': 'floatY 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
