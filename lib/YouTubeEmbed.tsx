type YouTubeEmbedProps = {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({videoId, title = 'YouTube video'}: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden border border-zinc-200 bg-zinc-50">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
