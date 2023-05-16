import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'url',
    }),
    defineField({
      name: 'cv',
      title: 'Cv',
      type: 'file'
    }),
    defineField({
      name: 'mail',
      title: 'Mail',
      type: 'localeString',
    }),
  ]
})
