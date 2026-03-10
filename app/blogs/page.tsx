import Link from 'next/link'
import {client} from '@/sanity/lib/client'

type BlogListItem = {
  _id: string
  title: string
  guest?: string
  summary?: string
  slug: {current: string}
  publishedAt?: string
}

export default async function BlogsPage() {
  const blogs = await client.fetch<BlogListItem[]>(
    `*[_type=="post" && defined(slug.current)] | order(publishedAt desc){
      _id,title,guest,summary,slug,publishedAt
    }`
  )

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Blogs</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((i) => (
          <Link
            key={i._id}
            href={`/blogs/${i.slug.current}`}
            className="rounded-lg border p-4 hover:bg-zinc-50"
          >
            <div className="font-medium">{i.title}</div>
            {i.guest ? <div className="mt-1 text-sm text-zinc-600">{i.guest}</div> : null}
            {i.summary ? <div className="mt-2 line-clamp-3 text-sm text-zinc-600">{i.summary}</div> : null}
          </Link>
        ))}
      </div>
    </div>
  )
}