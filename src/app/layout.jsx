import './globals.css'
import { Bebas_Neue, DM_Sans, Fira_Code } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Uncharted Territory - Where Serious Traders Come to Learn & Earn',
  description: 'Join thousands of traders learning to master the markets with daily Zoom sessions, live alerts, and expert workshops.',
  icons: {
    icon: '/icon.avif',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
