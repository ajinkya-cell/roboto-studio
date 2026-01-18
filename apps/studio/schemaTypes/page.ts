import { defineField, defineType } from "sanity";


export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields:[
    defineField( {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
     defineField( {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
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
  name: 'contentType',
  title: 'Content Type',
  type: 'string',
  options: {
    list: [
      { title: 'Furniture',  value: 'furniture' },
      { title: 'Lighting',   value: 'lighting' },
      { title: 'Journal',    value: 'journal' },
      { title: 'Fire Places', value: 'fireplace' }
    ],
    layout: 'radio' // ← gives you radio buttons
  },
  validation: Rule => Rule.required()
}),
   
  ]
})