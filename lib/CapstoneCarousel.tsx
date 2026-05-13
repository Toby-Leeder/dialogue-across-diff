'use client'

import Autoplay from 'embla-carousel-autoplay'
import type {EmblaCarouselType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures'
import Image from 'next/image'
import Link from 'next/link'
import {useCallback, useEffect, useMemo, useRef} from 'react'

import {usePrefersReducedMotion} from '@/lib/usePrefersReducedMotion'

export type CapstoneCarouselItem = {
  id: string
  title: string
  summary?: string | null
  href: string
  /** When missing in Sanity (no upload on cover image), carousel shows a placeholder tile. */
  imageUrl: string | null
  imageAlt: string
}

function isExternalHref(href: string) {
  const t = href.trim()
  return t.startsWith('http://') || t.startsWith('https://')
}

function CardLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function CapstoneCardFace({item}: {item: CapstoneCarouselItem}) {
  return (
    <>
      <div className="relative aspect-[4/3] w-full bg-zinc-100">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 85vw, 22rem"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-1 bg-zinc-200 px-4 text-center"
            aria-label={`${item.imageAlt} (add an image file in Sanity)`}
          >
            <span className="font-serif text-3xl font-bold text-zinc-400" aria-hidden>
              {item.title.slice(0, 1).toUpperCase()}
            </span>
            <span className="text-xs font-medium text-zinc-500">Add cover image in Studio</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-zinc-900 group-hover:underline decoration-1 underline-offset-4">
          {item.title}
        </h3>
        {item.summary ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600">{item.summary}</p>
        ) : null}
      </div>
    </>
  )
}

/** Original horizontal snap strip (used when `prefers-reduced-motion: reduce`). */
export function CapstoneCarouselSimple({items}: {items: CapstoneCarouselItem[]}) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const distance = Math.min(el.clientWidth * 0.85, 360) * dir
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({left: distance, behavior: reduced ? 'auto' : 'smooth'})
  }, [])

  if (items.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        Capstone projects will appear here once they are added in Sanity Studio.
      </p>
    )
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll capstone projects left"
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded border border-zinc-200 bg-white/90 px-2 py-6 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-zinc-900 md:block"
        onClick={() => scrollByDir(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Scroll capstone projects right"
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded border border-zinc-200 bg-white/90 px-2 py-6 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-zinc-900 md:block"
        onClick={() => scrollByDir(1)}
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        role="list"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:px-8 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2"
      >
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="w-[min(100%,22rem)] shrink-0 snap-start sm:w-[22rem]"
          >
            <CardLink
              href={item.href}
              className="group flex h-full flex-col overflow-hidden border border-zinc-200 bg-white outline-none transition hover:border-zinc-900 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              <CapstoneCardFace item={item} />
            </CardLink>
          </article>
        ))}
      </div>
    </div>
  )
}

/**
 * Embla `loop` needs enough scroll runway vs viewport. Repeat the real capstones with
 * synthetic ids (React keys only) so loop stays seamless for small cohorts too.
 */
function repeatSlidesForStableLoop(items: CapstoneCarouselItem[]): CapstoneCarouselItem[] {
  if (items.length === 0) return []
  const minSlides = Math.max(12, items.length * 4)
  const out: CapstoneCarouselItem[] = []
  for (let i = 0; i < minSlides; i++) {
    const src = items[i % items.length]
    out.push({...src, id: `${src.id}__rep${i}`})
  }
  return out
}

function tweenCoverflow(embla: EmblaCarouselType) {
  const root = embla.rootNode()
  const rootRect = root.getBoundingClientRect()
  const centerX = rootRect.left + rootRect.width / 2
  const norm = Math.max(rootRect.width * 0.36, 200)

  embla.slideNodes().forEach((slide) => {
    const target = slide.querySelector<HTMLElement>('[data-coverflow-tween]')
    if (!target) return

    const r = slide.getBoundingClientRect()
    const slideCenter = r.left + r.width / 2
    const p = Math.max(-1, Math.min(1, (slideCenter - centerX) / norm))
    const abs = Math.abs(p)
    const falloff = Math.pow(abs, 0.92)

    const scaleMin = 0.7
    const scaleMax = 1.27
    const scale = scaleMin + Math.pow(1 - abs, 1.2) * (scaleMax - scaleMin)

    const rotateY = p * -38
    const translateZ = -92 * falloff
    const opacity = 0.56 + Math.pow(1 - abs, 1.05) * (1 - 0.56)

    target.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`
    target.style.opacity = String(opacity)
    target.style.zIndex = String(Math.round(100 - falloff * 45))
  })
}

/**
 * Infinite loop + center-highlight Cover Flow. Embla duplicates DOM nodes for `loop`;
 * multiple tiles may share the same `href` — acceptable tradeoff for seamless scrolling.
 */
function CapstoneCarouselCoverFlow({items}: {items: CapstoneCarouselItem[]}) {
  const slides = useMemo(() => repeatSlidesForStableLoop(items), [items])
  const slidesKey = useMemo(() => slides.map((s) => s.id).join('|'), [slides])

  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 4500,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        playOnInit: true,
        stopOnFocusIn: false,
      }),
      WheelGesturesPlugin({
        forceWheelAxis: 'x',
        wheelDraggingClass: 'is-wheel-dragging',
      }),
    ],
    [],
  )

  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      // Coast during drag/wheel, then settle on nearest snap (better trackpad momentum).
      dragFree: true,
      skipSnaps: true,
      duration: 48,
    },
    plugins,
  )

  const onTween = useCallback(() => {
    if (!emblaApi) return
    tweenCoverflow(emblaApi)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('scroll', onTween)
    emblaApi.on('select', onTween)
    emblaApi.on('reInit', onTween)
    onTween()

    return () => {
      emblaApi.off('scroll', onTween)
      emblaApi.off('select', onTween)
      emblaApi.off('reInit', onTween)
    }
  }, [emblaApi, onTween])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
    tweenCoverflow(emblaApi)
  }, [emblaApi, slidesKey])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    emblaApi?.plugins().autoplay?.reset()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    emblaApi?.plugins().autoplay?.reset()
  }, [emblaApi])

  if (items.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        Capstone projects will appear here once they are added in Sanity Studio.
      </p>
    )
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Capstone projects"
    >
      <button
        type="button"
        aria-label="Previous capstone project"
        className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded border border-zinc-200 bg-white/95 px-2 py-6 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-zinc-900 md:block"
        onClick={scrollPrev}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next capstone project"
        className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded border border-zinc-200 bg-white/95 px-2 py-6 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-zinc-900 md:block"
        onClick={scrollNext}
      >
        ›
      </button>

      <div className="[perspective:1100px] [perspective-origin:50%_50%]">
        <div
          ref={viewportRef}
          className="touch-pan-x overflow-hidden py-12 pl-5 pr-5 md:pl-14 md:pr-14"
        >
          <div className="flex [transform-style:preserve-3d]">
            {slides.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 pl-2 pr-2"
                style={{flex: '0 0 min(85vw, 22rem)'}}
              >
                <div
                  data-coverflow-tween
                  className="origin-center will-change-transform [transform-style:preserve-3d]"
                >
                  {/*
                    Embla `loop` duplicates slide nodes in the DOM; several tiles may share the same href.
                    All links stay focusable (pragmatic a11y tradeoff for infinite scroll).
                  */}
                  <CardLink
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden border border-zinc-200 bg-white outline-none transition hover:border-zinc-900 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                  >
                    <CapstoneCardFace item={item} />
                  </CardLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CapstoneCarousel({items}: {items: CapstoneCarouselItem[]}) {
  const reducedMotion = usePrefersReducedMotion()

  if (items.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        Capstone projects will appear here once they are added in Sanity Studio.
      </p>
    )
  }

  if (reducedMotion) {
    return <CapstoneCarouselSimple items={items} />
  }

  return <CapstoneCarouselCoverFlow items={items} />
}
