import { Merriweather, Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

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
        <header className="border-b border-zinc-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6">
            <Link href="/" className="font-serif text-lg font-bold tracking-tight text-zinc-900">
              Dialogue Across Differences
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-zinc-600">
              <Link href="/interviews" className="hover:text-zinc-900 transition-colors">Interviews</Link>
              <Link href="/blogs" className="hover:text-zinc-900 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-16">{children}</main>

        <footer className="border-t border-zinc-200 mt-20">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-500">
            © {new Date().getFullYear()} Dialogue Across Differences. Berkeley Bridging Fellowship.
          </div>
        </footer>
      </body>
    </html>
  )
}