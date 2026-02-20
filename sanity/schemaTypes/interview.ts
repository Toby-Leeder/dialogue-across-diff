import {defineType, defineField} from 'sanity'

export const interview = defineType({
  name: 'interview',
  title: 'Interview',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({name: 'guest', title: 'Guest', type: 'string'}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
    defineField({name: 'youtubeUrl', title: 'YouTube URL', type: 'url'}),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
  ],
})
