import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'otherWork',
  title: 'Other Work',
  type: 'object',
  fields: [
    defineField({
      name: 'otherWorks',
      title: 'Other Works',
      type: 'array',
      of: [{type: 'pictureText'}],
    }),
  ],
})
