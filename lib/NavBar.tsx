'use client'

import {motion, useScroll, useMotionValueEvent} from 'framer-motion'
import Link from 'next/link'
import {useCallback, useEffect, useId, useRef, useState} from 'react'
import {usePathname} from 'next/navigation'

import type {NavbarCapstone} from '@/lib/navBarTypes'

function isExternalHref(href: string) {
  const t = href.trim()
  return t.startsWith('http://') || t.startsWith('https://')
}

function CapstonesDropdown({items}: {items: NavbarCapstone[]}) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnId = useId()
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onPointerDown = (e: PointerEvent) => {
      const el = wrapRef.current
      if (el && !el.contains(e.target as Node)) close()
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown, true)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown, true)
    }
  }, [open, close])

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={btnId}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        className="inline-flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        onClick={() => setOpen((v) => !v)}
      >
        Capstones
        <span className="text-xs" aria-hidden>
          {open ? '▴' : '▾'}
        </span>
      </button>
      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-labelledby={btnId}
          className="absolute right-0 top-full z-[300] mt-2 min-w-[12rem] max-h-[min(70vh,22rem)] overflow-y-auto border border-zinc-200 bg-white py-1 text-left shadow-lg"
        >
          <li role="none">
            <Link
              role="menuitem"
              href="/#capstone-projects-heading"
              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              onClick={close}
            >
              All capstones (carousel)
            </Link>
          </li>
          <li className="my-1 border-t border-zinc-100" role="separator" />
          {items.map((c) => (
            <li key={`${c.href}-${c.title}`} role="none">
              {isExternalHref(c.href) ? (
                <a
                  role="menuitem"
                  href={c.href}
                  className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  {c.title}
                </a>
              ) : (
                <Link
                  role="menuitem"
                  href={c.href}
                  className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                  onClick={close}
                >
                  {c.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default function Navbar({capstones = []}: {capstones?: NavbarCapstone[]}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isStudioPage = pathname.startsWith('/studio')

  const {scrollY} = useScroll()

  const [hidden, setHidden] = useState(isHomePage)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!isHomePage) return

    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800
    if (latest > screenHeight * 0.8) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  })

  useEffect(() => {
    if (!isHomePage) setHidden(false)
    else setHidden(true)
  }, [isHomePage])

  const navContent = (
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
      <Link href="/" className="font-serif text-xl font-bold text-zinc-900">
        Dialogue Across Differences
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm font-medium text-zinc-600">
        <Link href="/pamphlet" className="hover:text-zinc-900 transition-colors">
          Pamphlet
        </Link>
        <Link href="/interviews" className="hover:text-zinc-900 transition-colors">
          Interviews
        </Link>
        <Link href="/video" className="hover:text-zinc-900 transition-colors">
          Video
        </Link>
        {capstones.length > 0 ? <CapstonesDropdown items={capstones} /> : null}
        <Link href="/about" className="hover:text-zinc-900 transition-colors">
          About
        </Link>
      </nav>
    </div>
  )

  if (isHomePage) {
    return (
      <motion.header
        initial="hidden"
        variants={{
          visible: {y: 0, opacity: 1},
          hidden: {y: '-100%', opacity: 0},
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{duration: 0.4, ease: 'easeInOut'}}
        className="fixed left-0 right-0 top-0 z-[200] border-b border-zinc-200 bg-white py-5 shadow-sm"
      >
        {navContent}
      </motion.header>
    )
  }

  if (isStudioPage) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white py-5 shadow-sm">
      {navContent}
    </header>
  )
}
