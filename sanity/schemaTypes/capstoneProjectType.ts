import {SparklesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const kindOptions = [
  {title: 'Art installation', value: 'art_installation'},
  {title: 'Interviews hub', value: 'interviews_hub'},
  {title: 'Research', value: 'research'},
  {title: 'Pamphlet', value: 'pamphlet'},
  {title: 'Video', value: 'video'},
  {title: 'Website', value: 'website'},
] as const

export const capstoneProjectType = defineType({
  name: 'capstoneProject',
  title: 'Capstone project',
  type: 'document',
  icon: SparklesIcon,
  description:
    'Home page carousel tiles. Typical set: Pebbles (art), Interviews hub (/interviews), research paper, pamphlet, video, and this website (/).',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Short line shown under the title on the home carousel.',
    }),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: [...kindOptions],
        layout: 'radio',
      },
      initialValue: 'website',
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'string',
      description: 'Internal path (e.g. /interviews) or full URL (https://…).',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value || typeof value !== 'string') return true
          const v = value.trim()
          if (v.startsWith('/')) return true
          try {
            const u = new URL(v)
            return u.protocol === 'http:' || u.protocol === 'https:' ? true : 'Use http(s) URLs only'
          } catch {
            return 'Use a path starting with / or a full https URL'
          }
        }),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first in the carousel.',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sortOrder: 'sortOrder',
      media: 'coverImage',
    },
    prepare({title, sortOrder, media}) {
      return {
        title,
        subtitle: sortOrder !== undefined ? `Order: ${sortOrder}` : undefined,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
})
