import React from 'react'
import { client } from '@/sanity/lib/client'
import type { Metadata } from "next";
import CaseStudies from '@/components/ui/casestudies';

export const revalidate = 3

export const metadata: Metadata = {
    title: "CASE STUDY",
    description: "CASE STUDY FOR ALL",
  };
  

export default async function CaseStudiesPage () {



  const query = `*[_type == "caseStudy"]{
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt,
    summary
  }`

  const displayedCards = await client.fetch(query)


  const CasestudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Featured Success Stories",
    "description": "Discover how we've helped businesses transform their ideas into successful products.",
    "url": "https://cozzmixsolutions.agency/casestudy",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cozzmixsolutions.agency/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": "https://cozzmixsolutions.agency/casestudy"
        }
      ]
    },
    "hasPart": displayedCards.map((study: any) => ({
      "@type": "CreativeWork",
      "name": study.title,
      "url": `https://cozzmixsolutions.agency/casestudy/${study.slug}`,
      "description": study.summary,
      "image": study.mainImage,
      "datePublished": study.publishedAt
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Cozzmix Solutions",
      "url": "https://cozzmixsolutions.agency/",
      "logo": "https://cozzmixsolutions.agency/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "cozzmixsolutions@protonmail.com",
        "contactType": "customer service"
      }
    }
  };

  return (
    <div className='h-fit w-full flex flex-col px-8 py-8 items-center justify-center'>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CasestudyJsonLd) }}
        />
      <div className='mb-8 md:mb-12 xl:mb-16 text-center'>
        <h1 className='text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[1.1] tracking-tight'>
          FEATURED SUCCESS STORIES
        </h1>
        <p className='text-sm md:text-md xl:text-xl font-light text-white text-center pt-2 md:pt-4 xl:pt-8 pb-4 md:pb-12 xl:pb-16'>
          Discover how we've helped businesses transform their ideas into successful products
        </p>
      </div>

      <div className="max-w-[90vw] mt-2 md:mt-6 xl:mt-10  flex flex-wrap gap-4 md:gap-12 xl:gap-20 justify-center items-center">
  {displayedCards.map((data: any) => (
    <CaseStudies data={data} key={data.slug} />
  ))}
</div>



    </div>
  )
}
