import { Merriweather, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/lib/NavBar'

// Configure our new fonts
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif' 
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
})

export const metadata: Metadata = {
  title: 'Dialogue Across Differences',
  description: 'Interviews and writing.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans min-h-screen bg-white text-zinc-900 antialiased`}>
        
        <Navbar />

        <main className="mx-auto max-w-100% px-0 py-0">{children}</main>

        <footer className="border-t border-zinc-200 mt-20">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
            © {new Date().getFullYear()} Dialogue Across Differences. Berkeley Bridging Fellowship.
          </div>
        </footer>
      </body>
    </html>
  )
}