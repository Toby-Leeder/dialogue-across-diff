import Link from 'next/link'
import {client} from '@/sanity/lib/client'

type InterviewListItem = {
  _id: string
  title: string
  guest?: string
  summary?: string
  slug: {current: string}
  publishedAt?: string
}

export default async function InterviewsPage() {
  const interviews = await client.fetch<InterviewListItem[]>(
    `*[_type=="interview" && defined(slug.current)] | order(publishedAt desc){
      _id,title,guest,summary,slug,publishedAt
    }`
  )

  return (
    <div className="space-y-12">
      <header className="border-b border-zinc-200 pb-8">
        <h1 className="font-serif text-4xl font-bold text-zinc-900">Interviews</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Conversations mapping the landscape of disagreement and mutual understanding.
        </p>
      </header>

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
    </div>
  )
}