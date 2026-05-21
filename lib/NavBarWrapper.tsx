import {sanityFetch} from '@/sanity/lib/fetch'
import Navbar from '@/lib/NavBar'
import type {NavbarCapstone} from '@/lib/navBarTypes'

export default async function NavBarWrapper() {
  const rows = await sanityFetch<{title?: string | null; href?: string | null}[]>(
    `*[_type == "capstoneProject"] | order(sortOrder asc, title asc) {
      title,
      href
    }`,
  )

  const capstones: NavbarCapstone[] = rows
    .map((r) => ({
      title: (r.title ?? '').trim(),
      href: (r.href ?? '').trim(),
    }))
    .filter((r) => r.title.length > 0 && r.href.length > 0)

  return <Navbar capstones={capstones} />
}
