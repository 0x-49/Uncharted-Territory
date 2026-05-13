import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function BlogLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
