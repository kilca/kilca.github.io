import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillCategory',
  title: 'SkillCategory',
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'skill'}
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
