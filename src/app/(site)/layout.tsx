import { Inter } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CallToAction } from "@/sections/CallToAction";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cozzmix Solutions | Nearshore Software Development Company",
  description: "Cozzmix Solutions offers mobile, web, and custom software and AI solutions to help you achieve your digital vision efficiently and effectively.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://cozzmixsolutions.agency/#organization",
  "logo": "https://cozzmixsolutions.agency/logo.png",
  "legalName": "Cozzmix Solutions LLC",
  "name": "Cozzmix Solutions",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1600 Saratoga Ave",
    "addressLocality": "San Jose",
    "addressRegion": "CA",
    "postalCode": "95129",
    "addressCountry": "US"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-9620964210",
    "contactType": "customer service",
    "email": "cozzmixsolutions@protonmail.com",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish", "French"]
  }],
  "sameAs": ["https://cozzmixsolutions.agency"],
  "url": "https://cozzmixsolutions.agency/"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}


/**


export const metadata: Metadata = {
  title: "Cozzmix Solutions | Nearshore Software Development Company",
  description: "Cozzmix Solutions offers mobile, web, and custom software and AI solutions to help you achieve your digital vision efficiently and effectively.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};



      <OrganizationJsonLd
  type="Corporation"
  id="https://cozzmixsolutions.agency/#organization"
  logo="https://cozzmixsolutions.agency/logo.png"
  legalName="Cozzmix Solutions LLC"
  name="Cozzmix Solutions"
  address={{
    streetAddress: '1600 Saratoga Ave',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    postalCode: '95129',
    addressCountry: 'US',
  }}
  contactPoint={[
    {
      telephone: '+91-9620964210',
      contactType: 'customer service',
      email: 'cozzmixsolutions@protonmail.com',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish', 'French'],
    },
  ]}
  sameAs={['https://cozzmixsolutions.agency']}
  url="https://cozzmixsolutions.agency/"
/>


 */