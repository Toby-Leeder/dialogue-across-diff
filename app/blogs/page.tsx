import Link from 'next/link'
import {client} from '@/sanity/lib/client'

type BlogListItem = {
  _id: string
  title: string
  author?: string
  excerpt?: string
  slug: {current: string}
  publishedAt?: string
}

export default async function BlogsPage() {
  const blogs = await client.fetch<BlogListItem[]>(
    `*[_type=="post" && defined(slug.current)] | order(publishedAt desc){
      _id,title,author,excerpt,slug,publishedAt
    }`
  )

  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-8">
        <h1 className="font-serif text-4xl font-bold text-zinc-900">Fellowship Writing</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Essays, reflections, and research from the bridging cohort.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b) => (
          <Link
            key={b._id}
            href={`/blogs/${b.slug.current}`}
            className="group flex flex-col justify-between border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-900 hover:shadow-sm"
          >
            <div>
              <div className="font-serif text-lg font-bold leading-snug text-zinc-900 group-hover:underline decoration-1 underline-offset-4">{b.title}</div>
              {b.author ? <div className="mt-2 text-sm font-medium text-zinc-500 uppercase tracking-wider">{b.author}</div> : null}
              {b.excerpt ? <div className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-600">{b.excerpt}</div> : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}