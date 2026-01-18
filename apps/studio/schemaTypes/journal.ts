import {defineField, defineType} from 'sanity'// schemaTypes/documents/chimneyPiece.js

export const journalType = defineType ({
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
   defineField( {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
   defineField(
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short preview text',
      validation: Rule => Rule.required()
    }
   ),
   
    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField( {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Inspiration', value: 'inspiration' },
          { title: 'History', value: 'history' },
          { title: 'Restoration', value: 'restoration' },
          { title: 'Design', value: 'design' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display in "Our Latest furniture" section',
      initialValue: false
    }),
    
  ],
 preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage'
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `By ${author}` : 'No author',
        media
      }
    }
  }
})