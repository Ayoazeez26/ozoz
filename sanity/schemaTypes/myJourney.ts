import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'myJourney',
  title: 'My Journey',
  type: 'object',
  fields: [
    defineField({
      name: 'journeys',
      title: 'Journeys',
      type: 'array',
      of: [{type: 'pictureText'}],
    }),
  ],
})
