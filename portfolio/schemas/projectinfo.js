import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectInfo',
  title: 'ProjectInfo',
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
      name: 'images',
      title: 'Images',
      type:'array',
        of: [{
            type: 'image',
        }],
        options: {
            hotspot: true,
        }
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
