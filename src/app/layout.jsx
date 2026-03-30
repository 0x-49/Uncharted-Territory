import './globals.css'

export const metadata = {
  title: 'Uncharted Territory — Where Serious Traders Come to Learn & Earn',
  description: 'Join thousands of traders learning to master the markets with daily Zoom sessions, live alerts, and expert workshops.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
