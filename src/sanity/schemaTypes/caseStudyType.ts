import {DocumentTextIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO & Metadata',
    },
  ],
  fields: [
    // Content Fields
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the case study (50-60 characters recommended).',
      validation: Rule => Rule.required().min(10).max(60),
      group: 'content',
    }),
    
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      description: 'URL-friendly identifier (auto-generated from title)',
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
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'This date will be used for SEO and article schema markup',
      group: 'content',
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      description: 'The primary image (recommended: 1200x630px for social sharing)',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Descriptive text for accessibility and SEO (required)',
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
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Brief summary (will be used as meta description if none provided)',
      validation: Rule => Rule.max(160),
      group: 'content',
    }),

    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Body Text',
      description: 'Main content of the case study',
      group: 'content',
    }),

    defineField({
      name: 'secondaryImages',
      type: 'array',
      title: 'Secondary Images',
      description: 'Additional images (max 3)',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ]
        })
      ],
      validation: Rule => Rule.max(3),
      group: 'content',
    }),

    defineField({
      name: 'additionalBody',
      type: 'blockContent',
      title: 'Additional Body Text',
      group: 'content',
    }),

    // SEO Fields
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          description: 'Override the default title for SEO (50-60 characters)',
          validation: Rule => Rule
            .max(60)
            .warning('Meta titles should be between 50-60 characters')
            .min(50)
            .warning('Meta titles should be at least 50 characters'),
        }),
        
        defineField({
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          description: 'Override the default excerpt for SEO (150-160 characters)',
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
          name: 'socialShareImage',
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
      subtitle: 'seo.metaTitle',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle || 'No SEO title set',
        media: media,
      };
    },
  },
});