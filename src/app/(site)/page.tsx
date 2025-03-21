import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { client } from "@/sanity/lib/client";
import { Faq } from "@/sections/Faq";


export const revalidate = 3



export default async function Home() {

  const Testimonialquery = `*[_type == "videoTestimonial"] {
    _id,
    companyName,
    clientName,
    "videoUrl": video.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    transcript,
  }`;


  const CaseStudyQuery : any = `*[_type == "caseStudy"] {
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt
  }`;

  const testimonial : any = await client.fetch(Testimonialquery);
  const caseStudy : any = await client.fetch(CaseStudyQuery);


  return (
    <>
      <Hero />
      <LogoTicker caseStudy={caseStudy} />
      <Features  />
      <Testimonials testimonials={testimonial} />
      <Faq />
    </>
  );
}
