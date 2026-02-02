import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Page document – now powered by a page builder array.
 * Existing fields are kept so your current queries don't instantly break,
 * but the recommended way to build pages is via the `content` array.
 */
export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    /**
     * PAGE BUILDER
     *  - heroBlock: top hero with flexible aspect ratios
     *  - featureBlock: split image/text section
     *  - collectionBlock: grids pulling from your existing content types
     */
    defineField({
      name: "content",
      title: "Page builder",
      type: "array",
      of: [
        defineArrayMember({ type: "heroBlock" }),
        defineArrayMember({ type: "featureBlock" }),
        defineArrayMember({ type: "collectionBlock" }),
      ],
    }),
    // Legacy fields (can be migrated away from later)
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "Image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contentType",
      title: "Content Type",
      type: "string",
      options: {
        list: [
          { title: "Furniture", value: "furniture" },
          { title: "Lighting", value: "lighting" },
          { title: "Journal", value: "journal" },
          { title: "Fire Places", value: "fireplace" },
        ],
        layout: "radio",
      },
    }),
  ],
});

/**
 * HERO BLOCK
 * Supports multiple aspect ratios – the frontend will map these values
 * to CSS `aspect-ratio` when rendering with Next/Image.
 */
export const heroBlockType = defineType({
  name: "heroBlock",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aspectRatio",
      title: "Image aspect ratio",
      type: "string",
      options: {
        list: [
          { title: "16:9 – Wide", value: "16/9" },
          { title: "3:2", value: "3/2" },
          { title: "4:3", value: "4/3" },
          { title: "1:1 – Square", value: "1/1" },
          { title: "3:4 – Portrait", value: "3/4" },
          { title: "9:16 – Tall", value: "9/16" },
        ],
        layout: "radio",
      },
      initialValue: "16/9",
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary CTA label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "Primary CTA link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Hero",
        subtitle: "Hero block",
        media,
      };
    },
  },
});

/**
 * SPLIT FEATURE BLOCK – text + image, used for sections
 * like Lighting / Furniture intros.
 */
export const featureBlockType = defineType({
  name: "featureBlock",
  title: "Feature section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imagePosition",
      title: "Image position",
      type: "string",
      options: {
        list: [
          { title: "Image left", value: "left" },
          { title: "Image right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    }),
    defineField({
      name: "aspectRatio",
      title: "Image aspect ratio",
      type: "string",
      options: {
        list: [
          { title: "16:9 – Wide", value: "16/9" },
          { title: "3:2", value: "3/2" },
          { title: "4:3", value: "4/3" },
          { title: "1:1 – Square", value: "1/1" },
          { title: "3:4 – Portrait", value: "3/4" },
          { title: "9:16 – Tall", value: "9/16" },
        ],
        layout: "radio",
      },
      initialValue: "3/4",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Feature section",
        subtitle: "Split feature block",
        media,
      };
    },
  },
});

/**
 * COLLECTION BLOCK – grids of items pulled from your existing
 * Fireplaces / Lighting / Furniture / Journal document types.
 */
export const collectionBlockType = defineType({
  name: "collectionBlock",
  title: "Collection grid",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "collectionType",
      title: "Collection type",
      type: "string",
      options: {
        list: [
          { title: "Fireplaces", value: "fireplaces" },
          { title: "Lighting", value: "lighting" },
          { title: "Furniture", value: "furniture" },
          { title: "Journal", value: "journal" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "itemsToShow",
      title: "Items to show",
      type: "number",
      initialValue: 4,
    }),
  ],
  preview: {
    select: {
      title: "title",
      collectionType: "collectionType",
    },
    prepare({ title, collectionType }) {
      return {
        title: title || "Collection grid",
        subtitle: collectionType ? `Collection: ${collectionType}` : "Collection grid",
      };
    },
  },
});
