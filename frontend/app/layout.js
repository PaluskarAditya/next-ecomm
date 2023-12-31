import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from './components/ProviderWrapper'
import Navbar from './components/Navbar'
import { Toaster } from 'sonner'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "LuxeCart - Ecommerce Simplified",
  description: "Explore LuxeCart, your exclusive gateway to a world of opulence. Discover curated collections of high-end fashion, accessories, and lifestyle products that redefine elegance. Elevate your lifestyle with each click at LuxeCart - where luxury meets convenience."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  )
}
