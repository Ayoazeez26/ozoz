import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buyLinkLocation',
  title: 'Buy Link Location',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'buyLinks',
      title: 'Buy links',
      type: 'array',
      of: [{type: 'buyLink'}],
    }),
  ],
})
