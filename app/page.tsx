import Image from 'next/image'
import Link from 'next/link'
import {client} from '@/sanity/lib/client'
import HeroVideo from '@/lib/HeroVideo'
import CapstoneCarousel, {type CapstoneCarouselItem} from '@/lib/CapstoneCarousel'
import {getHeroVideoId} from '@/lib/heroVideoId'
import {urlFor} from '@/sanity/lib/image'

type CapstoneDoc = {
  _id: string
  title: string
  summary?: string | null
  href: string
  coverImage?: {
    asset?: {_ref?: string} | null
    alt?: string | null
  } | null
}

export default async function HomePage() {
  const capstones = await client.fetch<CapstoneDoc[]>(
    `*[_type == "capstoneProject"] | order(sortOrder asc, title asc) {
      _id,
      title,
      summary,
      href,
      coverImage {
        asset,
        alt
      }
    }`,
  )

  const carouselItems: CapstoneCarouselItem[] = capstones.map((c) => {
    const hasAsset = Boolean(c.coverImage?.asset?._ref)
    const imageUrl = hasAsset
      ? urlFor(c.coverImage!).width(700).height(525).fit('crop').auto('format').url()
      : null
    return {
      id: c._id,
      title: c.title,
      summary: c.summary ?? null,
      href: (c.href ?? '').trim(),
      imageUrl,
      imageAlt: (c.coverImage?.alt && c.coverImage.alt.trim()) || c.title,
    }
  })

  const heroVideoId = getHeroVideoId()

  return (
    <div className="space-y-24">
      {/* HERO / MISSION STATEMENT */}
      <section className="mx-auto space-y-4">
        <HeroVideo videoId={heroVideoId} />
        <p className="text-center text-sm text-zinc-500">
          <Link href="/video" className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-900">
            Open full video page
          </Link>
        </p>
      </section>

      {/* CONTEXT BLOCKS */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 border-t border-zinc-200 pt-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-2 space-y-3 md:order-1">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">Our Approach</h3>
            <p className="leading-relaxed text-zinc-600">
              We center our methodology on the deliberate practice of bridging. By prioritizing active, empathetic listening over persuasion, we seek to affirm shared humanity rather than confirm competing facts. Through structured engagement with students, faculty, and community leaders, we navigate the complex landscape of disagreement to cultivate mutual respect and identify common ground across profound societal cleavages.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative flex aspect-[4/3] w-full overflow-hidden border border-zinc-200 bg-zinc-100">
              <Image
                src="/assets/images/grouptalking2.png"
                alt="Two individuals engaged in active listening"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-1 lg:order-2">
            <div className="relative flex aspect-[4/3] w-full overflow-hidden border border-zinc-200 bg-zinc-100">
              <Image
                src="/assets/images/network.webp"
                alt="Two individuals engaged in active listening"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-2 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">The Cohort</h3>
            <p className="leading-relaxed text-zinc-600">
              This platform serves as a digital commons for the multi-disciplinary capstone projects developed by the current Berkeley Bridging Fellowship cohort. Ranging from data-driven research to narrative journalism, these diverse academic initiatives are unified by a singular social imperative: to bridge divides, reduce polarization, and foster a culture of enduring belonging.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-5xl space-y-8 border-t border-zinc-200 pt-12"
        aria-labelledby="capstone-projects-heading"
      >
        <h2 id="capstone-projects-heading" className="font-serif text-2xl font-bold text-zinc-900">
          Capstone projects
        </h2>
        <CapstoneCarousel items={carouselItems} />
      </section>
    </div>
  )
}
