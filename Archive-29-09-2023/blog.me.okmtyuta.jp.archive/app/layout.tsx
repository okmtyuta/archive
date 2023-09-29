import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

import './reset.css'
import './global.css'
import '@okmtyuta/amatelas/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'okmtyuta',
  description: 'N/A'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}