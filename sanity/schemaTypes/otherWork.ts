import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'otherWork',
  title: 'Other Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'otherWorks',
      title: 'Other Works',
      type: 'array',
      of: [{type: 'pictureText'}],
    }),
  ],
})
