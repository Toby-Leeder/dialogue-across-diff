import Link from 'next/link'
import {client} from '@/sanity/lib/client'

type InterviewListItem = {
  _id: string
  title: string
  slug?: {current?: string}
  guest?: string
}

export default async function InterviewsPage() {
  const interviews: InterviewListItem[] = await client.fetch(`
    *[_type == "interview" && defined(slug.current)]
    | order(publishedAt desc) {
      _id,
      title,
      slug,
      guest
    }
  `)

  return (
    <div style={{padding: 24}}>
      <h1>Interviews</h1>
      <ul>
        {interviews.map((i) => (
          <li key={i._id}>
            <Link href={`/interviews/${i.slug?.current}`}>{i.title}</Link>
            {i.guest ? <div>{i.guest}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
