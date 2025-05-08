import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starfreut',
  description: 'Official website for Starfreut band',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/16favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/applefavicon.png" />
        <script src="https://js.stripe.com/v3/" async></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 