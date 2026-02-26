import {client} from '@/sanity/lib/client'
import {notFound} from 'next/navigation'
import {toYouTubeEmbed} from '@/lib/video'

type Interview = {
  title: string
  guest?: string
  summary?: string
  youtubeUrl?: string
}

export default async function InterviewPage({params}: {params: any}) {
  // handle both sync and async params without guessing Next version behavior
  const resolved = typeof params?.then === 'function' ? await params : params
  const slug = resolved?.slug as string | undefined
  if (!slug) return notFound()

  const interview = await client.fetch<Interview | null>(
    `*[_type=="interview" && slug.current == $slug][0]{title,guest,summary,youtubeUrl}`,
    {slug}
  )

  if (!interview) return notFound()

  const embed = interview.youtubeUrl ? toYouTubeEmbed(interview.youtubeUrl) : null

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{interview.title}</h1>
        {interview.guest ? <p className="text-zinc-600">{interview.guest}</p> : null}
      </header>

      {embed ? (
        <div className="overflow-hidden rounded-lg border">
          <iframe
            className="aspect-video w-full"
            src={embed}
            title={interview.title}
            allowFullScreen
          />
        </div>
      ) : interview.youtubeUrl ? (
        <p className="text-sm">
          Video link:{' '}
          <a className="underline" href={interview.youtubeUrl}>
            {interview.youtubeUrl}
          </a>
        </p>
      ) : null}

      {interview.summary ? <p className="max-w-3xl text-zinc-700">{interview.summary}</p> : null}
    </article>
  )
}