import React from 'react'
import { Servicessection } from '@/sections/Services'
import type { Metadata } from "next";
import { FeaturesSectionDemo } from '@/components/features-section-demo-3';





const Services = () => {

  const ServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Cozzmix Solutions",
      "url": "https://cozzmixsolutions.agency/",
      "logo": "https://cozzmixsolutions.agency/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9620964210",
        "contactType": "customer service",
        "email": "cozzmixsolutions@protonmail.com",
        "areaServed": ["US"],
        "availableLanguage": ["English", "Spanish", "French"]
      }
    },
    "areaServed": ["US"],
    "description": "At Cozzmix Solutions, we offer top-notch Web3 development services, including custom dApps, DeFi platforms, and metaverse experiences. Our expertise ensures secure smart contracts, robust NFT marketplaces, and seamless Web3 integration.",
    "offers": {
      "@type": "Offer",
      "url": "https://cozzmixsolutions.agency/web3-development",
      "priceCurrency": "USD",
      "price": "Variable",
      "eligibleRegion": ["US"],
      "availability": "https://schema.org/InStock"
    }
  };
  
  


  return (
    <div>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceJsonLd) }}
        />
         <div className='my-8 md:my-12 xl:my-16 text-center'>
        <h1 className='text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[1.1] tracking-tight'>
          WHAT WE OFFER
        </h1>
    
      </div>
      <div className='max-w-[90vw] mx-auto'>
        <FeaturesSectionDemo />
        </div>
    </div>
  )
}


export const metadata: Metadata = {
  title: "Our Services",
  description: "We build secure, scalable digital products that drive business growth.",
};


export default Services