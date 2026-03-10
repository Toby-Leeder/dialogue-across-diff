import {client} from '@/sanity/lib/client'
import {notFound} from 'next/navigation'
import { PortableText } from '@portabletext/react'

type Blog = {
  title: string
  author?: string
  body: any[];
  categories?: string
}

export default async function BlogPage({params}: {params: any}) {
  // handle both sync and async params without guessing Next version behavior
  const resolved = typeof params?.then === 'function' ? await params : params
  const slug = resolved?.slug as string | undefined
  if (!slug) return notFound()

  const blog = await client.fetch<Blog | null>(
    `*[_type=="post" && slug.current == $slug][0]{title,author,categories,body}`,
    {slug}
  )

  if (!blog) return notFound()

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{blog.title}</h1>
        {blog.author ? <p className="text-zinc-600">{blog.author}</p> : null}
      </header>

      <div>
        {blog.body ? <PortableText value={blog.body} /> : <p>No content available.</p>}
      </div>

    </article>
  )
}