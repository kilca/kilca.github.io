import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectCategory',
  title: 'ProjectCategory',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeString',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'project'}
          ]
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
