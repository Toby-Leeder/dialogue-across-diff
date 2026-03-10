import Link from 'next/link'
import {client} from '@/sanity/lib/client'

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
  const [featured, interviews, posts] = await Promise.all([
    client.fetch<InterviewCard | null>(
      `*[_type=="interview" && defined(slug.current)] | order(publishedAt desc)[0]{_id,title,guest,summary,slug,publishedAt}`
    ),
    client.fetch<InterviewCard[]>(
      `*[_type=="interview" && defined(slug.current)] | order(publishedAt desc)[0...6]{_id,title,guest,summary,slug,publishedAt}`
    ),
    client.fetch<PostCard[]>(
      `*[_type=="post" && defined(slug.current)] | order(publishedAt desc)[0...4]{_id,title,excerpt,slug,publishedAt}`
    ),
  ])

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Conversations across difference.
        </h1>
        <p className="max-w-2xl text-zinc-600">
          Interviews and writing exploring how people disagree, connect, and build trust.
        </p>
        <div className="flex gap-3">
          <Link
            href="/interviews"
            className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-50"
          >
            Explore interviews
          </Link>
          <Link
            href="/blogs"
            className="rounded-md border px-4 py-2 text-sm hover:bg-zinc-50"
          >
            Read the blog
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      {featured ? (
        <section className="rounded-lg border p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-zinc-500">Featured</div>
              <h2 className="mt-1 text-xl font-semibold">
                <Link href={`/interviews/${featured.slug.current}`} className="hover:underline">
                  {featured.title}
                </Link>
              </h2>
              {featured.guest ? <p className="mt-1 text-zinc-600">{featured.guest}</p> : null}
              {featured.summary ? <p className="mt-3 max-w-2xl text-sm text-zinc-600">{featured.summary}</p> : null}
            </div>

            <Link
              href={`/interviews/${featured.slug.current}`}
              className="shrink-0 rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              Watch
            </Link>
          </div>
        </section>
      ) : null}

      {/* LATEST INTERVIEWS */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Latest interviews</h2>
          <Link href="/interviews" className="text-sm text-zinc-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((i) => (
            <Link
              key={i._id}
              href={`/interviews/${i.slug.current}`}
              className="rounded-lg border p-4 hover:bg-zinc-50"
            >
              <div className="font-medium">{i.title}</div>
              {i.guest ? <div className="mt-1 text-sm text-zinc-600">{i.guest}</div> : null}
              {i.summary ? <div className="mt-2 line-clamp-3 text-sm text-zinc-600">{i.summary}</div> : null}
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Latest writing</h2>
          <Link href="/blog" className="text-sm text-zinc-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p._id}
              href={`/blogs/${p.slug.current}`}
              className="rounded-lg border p-4 hover:bg-zinc-50"
            >
              <div className="font-medium">{p.title}</div>
              {p.excerpt ? <div className="mt-2 line-clamp-3 text-sm text-zinc-600">{p.excerpt}</div> : null}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}