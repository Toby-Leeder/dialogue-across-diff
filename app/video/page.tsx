import type {Metadata} from 'next'
import Link from 'next/link'

import YouTubeEmbed from '@/lib/YouTubeEmbed'
import {getHeroVideoId} from '@/lib/heroVideoId'

const siteTitle = 'Dialogue Across Differences'

export const metadata: Metadata = {
  title: `Intro video · ${siteTitle}`,
  description: 'Opening video for Dialogue Across Differences.',
}

export default function VideoPage() {
  const videoId = getHeroVideoId()

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
      <div className="space-y-2">
        <Link href="/" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900">
          ← Back to home
        </Link>
        <h1 className="font-serif text-3xl font-bold text-zinc-900 md:text-4xl">Intro video</h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          Full-width player for the cohort&apos;s opening message. You can still watch from the home page hero as
          well.
        </p>
      </div>
      <YouTubeEmbed videoId={videoId} title="Intro video" />
    </div>
  )
}
