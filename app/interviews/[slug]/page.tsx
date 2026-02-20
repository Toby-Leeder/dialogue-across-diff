import {client} from '@/sanity/lib/client'
import {notFound} from 'next/navigation'

type Interview = {
  title: string
  guest?: string
  summary?: string
  youtubeUrl?: string
}

function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url)
    // youtu.be/<id>
    if (u.hostname === 'youtu.be') return `https://www.youtube.com/embed/${u.pathname.slice(1)}`
    // youtube.com/watch?v=<id>
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
    }
    return null
  } catch {
    return null
  }
}

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ slug: string }>; 
}) {
  // Await the params before using them
  const { slug } = await params;

  console.log('slug RESULT:', slug);

  const interview: Interview | null = await client.fetch(
    `*[_type == "interview" && slug.current == $slug][0]{
      title,
      guest,
      summary,
      youtubeUrl
    }`,
    { slug } // Now slug is a string, not undefined
  );

  if (!interview) return notFound();
  const embed = interview.youtubeUrl ? toYouTubeEmbed(interview.youtubeUrl) : null

  return (
    <div style={{padding: 24, maxWidth: 900}}>
      <h1>{interview.title}</h1>
      {interview.guest ? <p><strong>Guest:</strong> {interview.guest}</p> : null}

      {embed ? (
        <div style={{marginTop: 24}}>
          <iframe
            width="100%"
            height="500"
            src={embed}
            title={interview.title}
            allowFullScreen
          />
        </div>
      ) : interview.youtubeUrl ? (
        <p>
          Video link: <a href={interview.youtubeUrl}>{interview.youtubeUrl}</a>
        </p>
      ) : null}
    {interview.summary ? <p>{interview.summary}</p> : null}
    </div>
  )
}
