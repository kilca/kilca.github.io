import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'localeString',
    }),
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'localeString',
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'localeString',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'localeString',
    }),

  ],
  preview: {
    select: {
      title: 'about.en',
    },
  },
})
