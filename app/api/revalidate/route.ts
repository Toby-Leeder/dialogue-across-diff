import {revalidateTag} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'

import {SANITY_CACHE_TAG} from '@/sanity/lib/fetch'

/**
 * Sanity webhook target: invalidate cached CMS data so the site refetches on the next request.
 *
 * In Sanity Manage → API → Webhooks, add a POST URL:
 *   https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET
 * Trigger on Create / Update / Delete for relevant document types.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({message: 'SANITY_REVALIDATE_SECRET is not configured'}, {status: 500})
  }

  const provided =
    request.nextUrl.searchParams.get('secret') ??
    request.headers.get('x-sanity-revalidate-secret')

  if (!provided || provided !== secret) {
    return NextResponse.json({message: 'Invalid secret'}, {status: 401})
  }

  revalidateTag(SANITY_CACHE_TAG, 'max')

  return NextResponse.json({
    revalidated: true,
    tag: SANITY_CACHE_TAG,
    now: Date.now(),
  })
}
