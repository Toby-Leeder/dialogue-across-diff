'use client'

import {useEffect} from 'react'
import {usePathname} from 'next/navigation'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function scrollToId(id: string, smooth: boolean) {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({behavior: smooth ? 'smooth' : 'auto', block: 'start'})
  return true
}

/**
 * Native `scroll-behavior: smooth` on html is unreliable in some browsers / with
 * Next.js; this delegates same-page # link clicks to scrollIntoView.
 */
export default function SmoothScrollAnchors() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const anchor = (e.target as Element).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#')) return

      const id = decodeURIComponent(href.slice(1))
      if (!id) return
      if (!document.getElementById(id)) return

      e.preventDefault()
      scrollToId(id, !prefersReducedMotion())
      history.pushState(null, '', `${pathname}${href}`)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [pathname])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = decodeURIComponent(hash.slice(1))
    if (!id) return

    const run = () => {
      scrollToId(id, !prefersReducedMotion())
    }

    // Wait for layout after client navigation / paint
    const frame = requestAnimationFrame(run)
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
