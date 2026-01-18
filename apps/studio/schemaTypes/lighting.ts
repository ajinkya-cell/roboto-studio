import {defineField, defineType} from 'sanity'// schemaTypes/documents/chimneyPiece.js

export const lightingType = defineType ({
  name: 'lighting',
  title: 'Lighting',
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
   defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Reproduction', value: 'reproduction' },
          { title: 'Antique', value: 'antique' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list:  [
          { title: 'Chandelier', value: 'chandelier' },
          { title: 'Wall Sconce', value: 'wall_sconce' },
          { title: 'Table Lamp', value: 'table_lamp' },
          { title: 'Floor Lamp', value: 'floor_lamp' },
          { title: 'Pendant', value: 'pendant' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in_stock' },
          { title: 'Made to Order', value: 'made_to_order' },
          { title: 'Sold', value: 'sold' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display in "Our Latest Chimneys" section',
      initialValue: false
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      type: 'type',
      media: 'Image'
    },
    prepare({ title, category, type, media }) {
      return {
        title,
        subtitle: `${category} - ${type}`,
        media
      }
    }
  }
})