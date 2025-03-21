import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const videoTestimonialType = defineType({
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'document',
  icon: PlayIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO & Accessibility',
    }
  ],
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      title: 'Company Name',
      description: 'The name of the company providing the testimonial',
      validation: Rule => Rule.required().min(2).max(60),
      group: 'content',
    }),

    defineField({
      name: 'clientName',
      type: 'string',
      title: 'Client Name',
      description: 'The name of the client representative',
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'video',
      type: 'file',
      title: 'Testimonial Video',
      description: 'Upload the testimonial video ( Compressed WEBM format recommended, max 10MB)',
      options: {
        accept: 'video/*',
        storeOriginalFilename: true,
      },
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Video Thumbnail',
      description: 'Upload a thumbnail image (16:9 ratio recommended)',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the thumbnail for accessibility',
          validation: Rule => Rule.required(),
        })
      ],
      validation: Rule => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'transcript',
      type: 'text',
      title: 'Video Transcript',
      description: 'Provide a transcript of the video for accessibility and SEO',
      validation: Rule => Rule.required(),
      group: 'seo',
    }),

    
  ],

  preview: {
    select: {
      title: 'companyName',
      subtitle: 'clientName',
      media: 'thumbnail',
    },
  },
})