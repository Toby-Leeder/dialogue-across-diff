/** YouTube video id for the hero / full video page; override with NEXT_PUBLIC_HERO_VIDEO_ID in .env.local */
export function getHeroVideoId(): string {
  return process.env.NEXT_PUBLIC_HERO_VIDEO_ID?.trim() || 'I_I-mB4V61o'
}
