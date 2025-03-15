import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bookDescription',
      title: 'Book Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
    }),
    /*   defineField({
      name: 'purchaseLinks',
      title: 'Purchase links',
      type: 'array',
      of: [{type: 'buyLink'}],
    }), */
    defineField({
      name: 'purchaseLocations',
      title: 'Purchase links locations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'buyLinkLocation'}}],
    }),
    /*   defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }), */
  ],
})
