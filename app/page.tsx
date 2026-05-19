import Image from 'next/image'
import {sanityFetch} from '@/sanity/lib/fetch'
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
  const capstones = await sanityFetch<CapstoneDoc[]>(
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
      {/* HERO */}
      <section className="mx-auto space-y-4">
        <HeroVideo videoId={heroVideoId} />
      </section>

      {/* CAPSTONES — above context blocks, slightly wider than body copy */}
      <section
        className="mx-auto w-full max-w-6xl space-y-8 border-t border-zinc-200 pt-12"
        aria-labelledby="capstone-projects-heading"
      >
        <h2 id="capstone-projects-heading" className="font-serif text-2xl font-bold text-zinc-900">
          Capstone projects
        </h2>
        <CapstoneCarousel items={carouselItems} />
      </section>

      {/* CONTEXT BLOCKS */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 border-t border-zinc-200 pt-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-2 space-y-3 md:order-1">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">Our Approach</h3>
            <p className="leading-relaxed text-zinc-600">
                The topic of Israel and Palestine is intrinsically difficult to approach. We center our methodology on the deliberate practice of bridging. By prioritizing active, empathetic listening over persuasion, we seek to affirm shared humanity rather than confirm competing facts. Through structured engagement with students, faculty, and experts on the various topics surrounding Israel and Palestine, we navigate the complex landscape of disagreement to cultivate mutual respect and identify common ground across differences. 
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
            <h3 className="font-serif text-2xl font-bold text-zinc-900">This Website</h3>
            <p className="leading-relaxed text-zinc-600">
                This platform serves as a digital commons for the multi-disciplinary Capstone Projects developed by the current Berkeley Bridging Fellowship cohort. These projects represent the cultivation of our learnings surrounding dialogue about Israel and Palestine. The goal of these projects is to carry forward the work of the fellowship, maximizing the tangible impact of our experiences. This website is itself a Capstone Project with the goal of further disseminating and sharing our learnings in the fellowship. 
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
