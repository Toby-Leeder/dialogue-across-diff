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
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Interviews</h1>
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
    </div>
  )
}