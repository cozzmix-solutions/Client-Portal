import { client } from '@/sanity/lib/client'

interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }

  export const revalidate = 3600
 
export default async function sitemap():  Promise<SitemapEntry[]> {

    const query = `*[_type == "caseStudy"]{
        "slug": slug.current
      }`;
    
      const caseStudies = await client.fetch(query);
    
      const baseUrl = 'http://cozzmixsolutions.agency';
    
      const dynamicRoutes = caseStudies.map((caseStudy: { slug: string }) => ({
        url: `${baseUrl}/casestudy/${caseStudy.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      }));


  return [
    {
      url: 'http://cozzmixsolutions.agency',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'http://cozzmixsolutions.agency/casestudy',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    {
      url: 'http://cozzmixsolutions.agency/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...dynamicRoutes
  ]
}