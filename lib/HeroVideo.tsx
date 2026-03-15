'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

export default function HeroVideo({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // 1. Add a ref to directly target the YouTube iframe
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showText, setShowText] = useState(true)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 24])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

// Listen to the scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Ask Framer Motion what the value was a millisecond ago
    const previous = scrollYProgress.getPrevious()

    // ONLY pause if we just crossed the 99% mark going DOWNWARDS.
    // (Meaning the old value was less than 0.99, and the new value is 0.99 or higher)
    if (latest >= 0.99 && previous !== undefined && previous < 0.99) {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*'
        )
      }
    }
  })
  const handleScreenClick = () => {
    setShowText(false)

    if (iframeRef.current?.contentWindow) {
      // Just tell the video to play. It will automatically play with sound!
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*'
      )
    }
  }

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ scale, borderRadius }}
          className="relative aspect-video w-full overflow-hidden bg-white"
        >
          {/* YOUTUBE EMBED */}
          <iframe
            ref={iframeRef}
            // 3. IMPORTANT: Notice `enablejsapi=1` at the end! This allows our commands to work.
            // Also, we hardcode mute=1 so it never forces a React reload.
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&enablejsapi=1`}
            className="absolute inset-0 h-full w-full pointer-events-auto"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* INVISIBLE OVERLAY */}
          {showText && (
            <div 
              className="absolute inset-0 z-10 cursor-pointer" 
              onClick={handleScreenClick} 
            />
          )}
        </motion.div>

        {/* FLOATING TEXT */}
        {showText && (
          <motion.div 
            style={{ opacity }}
            className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white"
          >
            <h1 className="font-serif text-6xl font-bold drop-shadow-2xl md:text-8xl">
              What is BBF?
            </h1>
            
            {/* Added a more obvious "Play" button cue */}
            <div 
              className="pointer-events-auto mt-8 flex cursor-pointer items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
              onClick={handleScreenClick}
            >
              <span className="text-xl">▶</span>
              <span className="text-sm font-medium uppercase tracking-widest opacity-90">
                Click to Play
              </span>
            </div>

            
            <p className="font-serif text-1xl drop-shadow-2xl md:text-1xl py-2">
              Scroll down to see more
            </p>

          </motion.div>
        )}
      </div>
    </div>
  )
}