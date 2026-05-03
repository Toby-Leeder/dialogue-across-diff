import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import HeroVideo from '@/lib/HeroVideo' // adjust path as needed

type InterviewCard = {
  _id: string
  title: string
  guest?: string
  summary?: string
  slug: {current: string}
  publishedAt?: string
}

type PostCard = {
  _id: string
  title: string
  excerpt?: string
  slug: {current: string}
  publishedAt?: string
}

export default async function HomePage() {
  const [interviews, posts] = await Promise.all([
    client.fetch<InterviewCard[]>(
      `*[_type=="interview" && defined(slug.current)] | order(publishedAt desc)[0...6]{_id,title,guest,summary,slug,publishedAt}`
    ),
    client.fetch<PostCard[]>(
      `*[_type=="post" && defined(slug.current)] | order(publishedAt desc)[0...4]{_id,title,excerpt,slug,publishedAt}`
    ),
  ])

  return (
    <div className="space-y-24">
      {/* HERO / MISSION STATEMENT */}
      <section className="mx-auto space-y-6"> 
        {/* mx-auto centers the entire section on the screen */}
        <HeroVideo videoId="dQw4w9WgXcQ" />
      </section>

{/* CONTEXT BLOCKS */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 border-t border-zinc-200 pt-12">
        
        {/* Our Approach Block - Text Left, Image Right on Desktop */}
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Text: Left on Desktop, Bottom on Mobile */}
          <div className="order-2 space-y-3 md:order-1">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">Our Approach</h3>
            <p className="leading-relaxed text-zinc-600">
              We center our methodology on the deliberate practice of bridging. By prioritizing active, empathetic listening over persuasion, we seek to affirm shared humanity rather than confirm competing facts. Through structured engagement with students, faculty, and community leaders, we navigate the complex landscape of disagreement to cultivate mutual respect and identify common ground across profound societal cleavages.
            </p>
          </div>
          
          {/* Image: Right on Desktop, Top on Mobile */}
          <div className="order-1 lg:order-2">
            {/* Updated Image Component */}
            <div className="relative flex aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image 
                src="/assets/images/grouptalking2.png" 
                alt="Two individuals engaged in active listening" 
                fill
                className="object-cover"
              />
            </div>
          </div>        
        </div>

        {/* The Cohort Block - Image Left, Text Right on Desktop */}
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Image: Left on Desktop, Top on Mobile */}
          <div className="order-1 lg:order-2">
            {/* Updated Image Component */}
            <div className="relative flex aspect-[4/3] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image 
                src="/assets/images/network.webp" 
                alt="Two individuals engaged in active listening" 
                fill
                className="object-cover"
              />
            </div>
          </div>        

          {/* Text: Right on Desktop, Bottom on Mobile */}
          <div className="order-2 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-zinc-900">The Cohort</h3>
            <p className="leading-relaxed text-zinc-600">
              This platform serves as a digital commons for the multi-disciplinary capstone projects developed by the current Berkeley Bridging Fellowship cohort. Ranging from data-driven research to narrative journalism, these diverse academic initiatives are unified by a singular social imperative: to bridge divides, reduce polarization, and foster a culture of enduring belonging.
            </p>
          </div>
        </div>

      </section>
      
      {/* LATEST INTERVIEWS */}
      <section className="space-y-8 border-t max-w-5xl mx-auto border-zinc-200 pt-12">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold text-zinc-900">Recent Interviews</h2>
          <Link href="/interviews" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((i) => (
            <Link
              key={i._id}
              href={`/interviews/${i.slug.current}`}
              className="group flex flex-col justify-between border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-sm"
            >
              <div>
                <div className="font-serif text-lg font-bold leading-snug text-zinc-900 group-hover:underline decoration-1 underline-offset-4">{i.title}</div>
                {i.guest ? <div className="mt-2 text-sm font-medium text-zinc-500 uppercase tracking-wider">{i.guest}</div> : null}
                {i.summary ? <div className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-600">{i.summary}</div> : null}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}