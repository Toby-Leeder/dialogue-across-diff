import Link from 'next/link'
import { client } from '@/sanity/lib/client'

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
      <section className="max-w-3xl space-y-6">
        <h1 className="font-serif text-4xl leading-tight font-bold text-zinc-900 md:text-5xl">
          Conversations across difference.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          [Placeholder Mission Statement]: The Berkeley Bridging Fellowship explores how communities holding deeply opposing views can engage in constructive dialogue. This platform hosts interviews, research, and reflections on navigating the complexities of the Israel-Palestine conflict with academic rigor and profound empathy.
        </p>
        <div className="pt-4">
          <Link
            href="/interviews"
            className="inline-block bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Explore the Interviews
          </Link>
        </div>
      </section>

      {/* CONTEXT BLOCKS */}
      <section className="grid gap-8 border-t border-zinc-200 pt-12 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold text-zinc-900">Our Approach</h3>
          <p className="text-zinc-600 leading-relaxed">
            [Placeholder]: We prioritize listening over persuading. By sitting down with students, faculty, and community leaders, we aim to map the landscape of disagreement and find the fragile threads of mutual understanding.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold text-zinc-900">The Cohort</h3>
          <p className="text-zinc-600 leading-relaxed">
            [Placeholder]: This space will soon host multiple projects from the current fellowship cohort, ranging from data-driven research to narrative journalism, all unified by the goal of bridging divides.
          </p>
        </div>
      </section>

      {/* LATEST INTERVIEWS */}
      <section className="space-y-8 border-t border-zinc-200 pt-12">
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

      {/* LATEST POSTS */}
      {posts.length > 0 && (
        <section className="space-y-8 border-t border-zinc-200 pt-12">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl font-bold text-zinc-900">Fellowship Writing</h2>
            <Link href="/blogs" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p._id}
                href={`/blogs/${p.slug.current}`}
                className="group border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-sm"
              >
                <div className="font-serif text-xl font-bold text-zinc-900 group-hover:underline decoration-1 underline-offset-4">{p.title}</div>
                {p.excerpt ? <div className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600">{p.excerpt}</div> : null}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}