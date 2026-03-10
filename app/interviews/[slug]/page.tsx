import {client} from '@/sanity/lib/client'
import {notFound} from 'next/navigation'
import {toYouTubeEmbed} from '@/lib/video'
import Link from 'next/link'

type Interview = {
  title: string
  guest?: string
  summary?: string
  youtubeUrl?: string
}

export default async function InterviewPage({params}: {params: any}) {
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
    <article className="mx-auto max-w-4xl space-y-10">
      <div className="mb-8">
        <Link href="/interviews" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          ← Back to Interviews
        </Link>
      </div>

      <header className="space-y-4 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-zinc-900">{interview.title}</h1>
        {interview.guest ? <p className="text-lg font-medium text-zinc-600 uppercase tracking-widest">{interview.guest}</p> : null}
      </header>

      {embed ? (
        <div className="overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm">
          <iframe
            className="aspect-video w-full"
            src={embed}
            title={interview.title}
            allowFullScreen
          />
        </div>
      ) : interview.youtubeUrl ? (
        <p className="text-sm text-center">
          Watch the full interview here:{' '}
          <a className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900" href={interview.youtubeUrl}>
            {interview.youtubeUrl}
          </a>
        </p>
      ) : null}

      {interview.summary ? (
        <div className="mx-auto max-w-2xl border-t border-zinc-200 pt-8">
          <p className="text-lg leading-relaxed text-zinc-700">{interview.summary}</p>
        </div>
      ) : null}
    </article>
  )
}