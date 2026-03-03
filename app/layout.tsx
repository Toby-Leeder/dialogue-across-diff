import './globals.css'
import Link from 'next/link'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Dialogue Across Differences',
  description: 'Interviews and writing.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Dialogue Across Differences
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/interviews" className="hover:underline">Interviews</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-600">
            © {new Date().getFullYear()} Dialogue Across Differences
          </div>
        </footer>
      </body>
    </html>
  )
}