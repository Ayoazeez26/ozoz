import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'summaryTitle',
      title: 'Summary Title',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'summaryImage',
      title: 'Summary image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'story1',
      title: 'Story 1',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'leftImage',
      title: 'Left image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'centerImage',
      title: 'Center image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rightImage',
      title: 'Right image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'title2',
      title: 'Title 2',
      type: 'string',
    }),
    defineField({
      name: 'story2',
      title: 'Story 2',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'story2Image',
      title: 'Story 2 image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // My jouney
    defineField({
      name: 'myjourney',
      title: 'My Journey',
      type: 'reference',
      to: {type: 'myJourney'},
    }),

    // Other Works
    defineField({
      name: 'otherWork',
      title: 'Other Works',
      type: 'reference',
      to: {type: 'otherWork'},
    }),
  ],
})
