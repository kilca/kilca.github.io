import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'presentation',
  title: 'Presentation',
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
    
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
