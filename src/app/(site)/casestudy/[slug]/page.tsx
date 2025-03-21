import React from 'react'
import { client } from '@/sanity/lib/client'
import type { Metadata } from "next";
import { Image } from "@heroui/react";
import { PortableText } from "@portabletext/react"


export const revalidate = 3
  

async function getData(slug: string) {

    const query = `*[_type == "caseStudy" && slug.current == "${slug}"]{
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "alt": mainImage.alt,
        "body" : body,
         secondaryImages[] {"url": asset->url,alt,caption},
         additionalBody
    }[0]`

    const data = await client.fetch(query)
    console.log(data)
    return data
}




export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

  const data = await getData(params.slug);

  return {
    title: `${data.title} | Case Study - Cozzmix Solutions`,
    description: data.summary || "Discover how Cozzmix Solutions helped transform ideas into successful products.",
    openGraph: {
      title: data.title,
      description: data.summary,
      url: `https://cozzmixsolutions.agency/casestudy/${data.slug}`,
      images: [
        {
          url: data.mainImage,
          width: 1200,
          height: 630,
          alt: data.alt || data.title
        }
      ],
      type: "article",
      publishedTime: data.publishedAt
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.summary,
      images: [data.mainImage]
    }
  };
}

export default async function CaseStudyPage ({params}: {params: {slug: string}}) {

  const data = await getData(params.slug) ;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": data.title,
      "url": `https://cozzmixsolutions.agency/casestudy/${data.slug}`,
      "description": `A detailed case study on ${data.title}, showcasing our approach and results.`,
      "image": data.mainImage,
      "datePublished": data.publishedAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://cozzmixsolutions.agency/casestudy/${data.slug}`
      },
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
      },
      "hasPart": data.secondaryImages.map((image: any) => ({
        "@type": "ImageObject",
        "contentUrl": image.url,
        "caption": image.caption || "Product showcase image",
        "description": image.alt || "Additional project image"
      }))
    };

  return (
    <div  className='h-fit w-full flex flex-col px-8 py-8 m items-center justify-center'>

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

<div className='mb-8 md:mb-12 xl:mb-16'>
<h1 className='text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[1.1] tracking-tight '>{data.title}</h1>
        </div>

        <Image
        alt={data.alt}
        className="object-cover block md:hidden w-[80vw] "
        src={data.mainImage}
        removeWrapper  
      />
      
      <Image
        alt={data.alt}
        className="object-cover hidden md:block w-[70vw] h-[450px]"
        src={data.mainImage}
        removeWrapper  
      />

      <div className='mt-12 md:mt-24 xl:mt-32 my-4 mx-1 md:my-12 md:mx-4 xl:my-16 xl:mx-8 prose 
  prose-headings:!text-white 
  prose-a:!text-gray-400
  prose-li:!text-blue-600
  prose-strong:!text-white 
  prose-md md:prose-lg xl:prose-xl 
  !text-gray-400'>
  <PortableText value={data.body} />
  </div>


          {/* Image Gallery */}
          <div className="space-y-6 md:space-y-8 mb-16 w-[80vw] md:w-[70vw] xl:w-[60vw]">
            <h2 className='text-xl md:text-3xl xl:text-5xl font-medium text-white text-center pt-4 md:pt-8 xl:pt-12 pb-4 md:pb-12 xl:pb-16'>
              Product Showcase
              </h2>
          {/* Top two square images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {data.secondaryImages.slice(0, 2).map((image : any, index : any) => (
              <div 
                key={index} 
                className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg "
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom wide image */}
          {data.secondaryImages.length > 2 && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg ">
              <img
                src={data.secondaryImages[2].url}
                alt={data.secondaryImages[2].alt}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>


        <div className='my-4 mx-1 md:my-12 md:mx-4 xl:my-16 xl:mx-8 prose 
  prose-headings:!text-white 
  prose-a:!text-gray-400
  prose-li:!text-blue-600
  prose-strong:!text-white 
  prose-md md:prose-lg xl:prose-xl 
  !text-gray-400'>
  <PortableText value={data.additionalBody} />
  </div>

        </div>
  )
}