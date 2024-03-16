import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'longDescription',
      title: 'Long Description',
      type: 'localeString',
  }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'preview',
      title: 'Preview image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'category',
      type: 'object',
      fields: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'projectCategory'}]
        }
      ]
    }),
    defineField({
      name: 'urlCode',
      title: 'Url Code',
      type: 'string',
    }),
    defineField({
      name: 'urlLive',
      title: 'Url Live',
      type: 'string',
    }),
    /*
    defineField({
      title: 'Info',
      name: 'info',
      type: 'reference',
      to: [{type: 'projectInfo'}]
    }),
    */
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
      media: 'mainImage',
    },
  },
})
