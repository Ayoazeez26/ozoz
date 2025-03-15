import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buyLink',
  title: 'Buy Link',
  type: 'object',
  fields: [
    defineField({
      name: 'retailer',
      title: 'Retailer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Purchase URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    /*   defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: {type: 'buyLinkLocation'},
      validation: (Rule) => Rule.required(),
    }), */
  ],
})
