import {client} from '@/sanity/lib/client'
import {notFound} from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

type Blog = {
  title: string
  author?: string
  body: any[];
  categories?: string
}

// This tells PortableText how to style your paragraphs, headers, and links
const portableTextStyles = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 text-lg leading-relaxed text-zinc-800">{children}</p>,
    h2: ({ children }: any) => <h2 className="mt-12 mb-6 font-serif text-3xl font-bold text-zinc-900">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-8 mb-4 font-serif text-2xl font-bold text-zinc-900">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-4 border-zinc-900 pl-6 text-xl italic leading-relaxed text-zinc-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900">
        {children}
      </a>
    ),
  },
}

export default async function BlogPage({params}: {params: any}) {
  const resolved = typeof params?.then === 'function' ? await params : params
  const slug = resolved?.slug as string | undefined
  if (!slug) return notFound()

  const blog = await client.fetch<Blog | null>(
    `*[_type=="post" && slug.current == $slug][0]{title,author,categories,body}`,
    {slug}
  )

  if (!blog) return notFound()

  return (
    <article className="mx-auto max-w-3xl space-y-12">
      <div className="mb-8">
        <Link href="/blogs" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">
          ← Back to Writing
        </Link>
      </div>

      <header className="space-y-6 border-b border-zinc-200 pb-10">
        {blog.categories ? (
          <div className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            {blog.categories}
          </div>
        ) : null}
        <h1 className="font-serif text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">{blog.title}</h1>
        {blog.author ? <p className="text-lg text-zinc-600">By {blog.author}</p> : null}
      </header>

      <div className="pt-4">
        {blog.body ? (
          <PortableText value={blog.body} components={portableTextStyles} />
        ) : (
          <p className="italic text-zinc-500">No content available.</p>
        )}
      </div>
    </article>
  )
}