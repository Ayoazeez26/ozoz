import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'foodItem',
  title: 'Food',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    /*   defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'foodCategory'},
    }), */
    defineField({
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: {type: 'foodRegion'},
    }),
    defineField({
      name: 'letter',
      title: 'Starting Letter',
      type: 'string',
      validation: (Rule) => Rule.required().length(1).uppercase(),
    }),

    /*   defineField({
      name: 'image',
      title: 'Food image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }), */
  ],
})
