import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'purchaseLocations',
      title: 'Purchase links locations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'buyLinkLocation'}}],
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sneakPeek',
      title: 'Sneak Peek',
      type: 'array',
      of: [{type: 'pictureText'}],
    }),

    defineField({
      name: 'bookAbout',
      title: 'Book About',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
