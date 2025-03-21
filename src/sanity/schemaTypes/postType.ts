import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'SEO & Metadata',
    },
  ],
  fields: [
    // Content Fields
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      description: 'Make it catchy and SEO-friendly (50-60 characters recommended)',
      validation: Rule => Rule.required().min(10).max(60),
      group: 'content',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      description: 'The unique URL-friendly identifier for this post',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '')
          .slice(0, 96)
      },
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A brief summary of the post (used for SEO if no meta description provided)',
      validation: Rule => Rule.max(160),
      group: 'content',
    }),

    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Featured Image',
      description: 'Recommended size: 1200x630px for optimal social sharing',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the image for SEO and accessibility',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption displayed below the image',
        }),
      ],
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Categorize your post for better organization and SEO',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      validation: Rule => Rule.required().min(1),
      group: 'content',
    }),



    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      description: 'Used for SEO and article schema markup',
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Post Content',
      group: 'content',
    }),

    // SEO & Metadata Fields
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'meta',
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          description: 'Override the default title for search results (50-60 characters)',
          validation: Rule => Rule
            .max(60)
            .warning('Meta titles should be between 50-60 characters')
            .min(50)
            .warning('Meta titles should be at least 50 and max 60 characters'),
        }),

        defineField({
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          description: 'Override the default excerpt for search results (150-160 characters)',
          validation: Rule => Rule
            .max(160)
            .warning('Meta descriptions should be between 150-160 characters')
            .min(150)
            .warning('Meta descriptions should be at least 150 characters'),
        }),


        defineField({
          name: 'socialShareTitle',
          type: 'string',
          title: 'Social Title',
          description: 'Custom title for social media sharing (Facebook, LinkedIn, etc.). Maximum 65 characters.',
          validation: Rule => Rule.max(65).warning('Social titles should be under 65 characters'),
        }),

        defineField({
          name: 'socialShareDescription',
          type: 'text',
          title: 'Social Description',
          description: 'Custom description for social media sharing. Optimal length is 125-200 characters.',
          validation: Rule => Rule
            .max(200)
            .warning('Social descriptions should be under 200 characters')
            .min(125)
            .warning('Social descriptions should be at least 125 characters'),
        }),



        defineField({
          name: 'socialImage',
          type: 'image',
          title: 'Social Share Image',
          description: 'Custom image for social sharing (defaults to main image)',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            })
          ]
        }),
      ]
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      seoTitle: 'seo.metaTitle',
    },
    prepare({title, author, media, seoTitle}) {
      return {
        title: title,
        subtitle: `${seoTitle ? '✓ SEO Title | ' : ''}by ${author || 'Unknown Author'}`,
        media: media,
      }
    },
  },
})