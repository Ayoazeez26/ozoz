import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'foodRegion',
  title: 'Food Region',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Region Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Northern', value: 'northern'},
          {title: 'Southern', value: 'southern'},
          {title: 'Eastern', value: 'eastern'},
          {title: 'Western', value: 'western'},
        ],
      },
    }),
  ],
})
