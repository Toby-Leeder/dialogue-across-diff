import type {QueryParams} from 'next-sanity'

import {client} from './client'

/** Next.js cache tag; invalidated by POST /api/revalidate (Sanity webhook). */
export const SANITY_CACHE_TAG = 'sanity'

export function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  options: {tags?: string[]} = {},
) {
  return client.fetch<T>(query, params, {
    next: {
      tags: options.tags ?? [SANITY_CACHE_TAG],
    },
  })
}
