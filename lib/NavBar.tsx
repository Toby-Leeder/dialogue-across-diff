'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // 1. Import usePathname

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/' // 2. Check if we are on the Home Page
  const isStudioPage = pathname.slice(0,7) === '/studio' 

  const { scrollY } = useScroll()
  
  // 3. Start hidden ONLY if we are on the home page
  const [hidden, setHidden] = useState(isHomePage)

  // This handles the scrolling logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    // If we are NOT on the home page, ignore scrolling completely
    if (!isHomePage) return
    
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800
    if (latest > screenHeight * 0.8) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  })

  // Ensure state resets properly if the user clicks back and forth between pages
  useEffect(() => {
    if (!isHomePage) setHidden(false)
    else setHidden(true) // Reset to hidden when they go back to Home
  }, [isHomePage])

  // 4. We save the inner links as a variable so we don't have to write them twice
  const navContent = (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
      <Link href="/" className="font-serif text-xl font-bold text-zinc-900">
        Dialogue Across Differences
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <Link href="/pamphlet" className="hover:text-zinc-900 transition-colors">Pamphlet</Link>
        <Link href="/interviews" className="hover:text-zinc-900 transition-colors">Interviews</Link>
        <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
      </nav>
    </div>
  )

  // SCENARIO A: The user is on the Home Page -> Show the animated fixed version
  if (isHomePage) {
    return (
      <motion.header
        initial="hidden"
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-0 right-0 top-0 z-[200] border-b border-zinc-200 bg-white py-5 shadow-sm"
      >
        {navContent}
      </motion.header>
    )
  }

    if (isStudioPage) {
      return 
    }


  // SCENARIO B: The user is on any other page -> Show the normal, always-visible version
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white py-5 shadow-sm">
      {navContent}
    </header>
  )
}