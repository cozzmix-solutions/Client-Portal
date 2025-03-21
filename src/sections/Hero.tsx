"use client";
import { motion } from "framer-motion";
import React from "react";
import { Badge } from "@/components/badge";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";

export const Hero = () => {

  return (
    <motion.section className=" relative top-[-30px] min-h-[75vh] flex content-start items-start overflow-hidden">

<div className="absolute top-[20vh] inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgba(40,44,252,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

{/* mobile start planet */}

<div className="blur-2xl absolute block md:hidden top-[250px] inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgba(40,44,252,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]">
  <div className="absolute h-32 w-32 md:h-96 md:w-96 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm bg-[radial-gradient(50%_50%_at_16.8%_16.3%,white,rgba(40,44,252,0.5)_37.7%,rgba(40,44,252,0.8))] shadow-[-20px_-20px_50px_rgba(40,44,252,0.5),-20px_-20px_80px_rgba(40,44,252,0.3),0_0_50px_rgba(40,44,252,0.7)]"></div>
</div>
{/* end planet  */}

{/* pc start planet */}


<div className="blur-2xl absolute hidden md:block top-[250px] inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgba(40,44,252,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]">
  <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm bg-[radial-gradient(50%_50%_at_16.8%_16.3%,white,rgba(40,44,252,0.5)_37.7%,rgba(40,44,252,0.8))] shadow-[-20px_-20px_50px_rgba(40,44,252,0.5),-20px_-20px_80px_rgba(40,44,252,0.3),0_0_50px_rgba(40,44,252,0.7)]"></div>
</div>
{/* end planet  */}


<div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center  max-w-4xl mx-auto">
        <Badge />
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-1 md:mb-2">
          From Idea to Scalable Product  
  <span className="block text-xl md:text-3xl xl:text-4xl font-bold font-Bricolage text-white leading-[1.1] tracking-tight mt-1 md:mt-3 mb-4 md:mb-6">
  5x Faster & 3x Cheaper Than Traditional Teams
  </span>
</h1>


          {/* Description */}
          <p  className="text-xs hidden md:block  text-blue-100/80 max-w-2xl leading-relaxed px-4">
          Ready to bring your creative ideas to life? We’re a top nearshore software development company that simplifies the process. Specializing in web apps, mobile apps, AI systems, and Web3 solutions, we deliver high-quality, cost-effective solutions that drive growth. Let’s build something amazing together!
          </p>

          <p style={{fontSize:"10px"}} className="block md:hidden  text-blue-100/80 max-w-2xl leading-relaxed px-4">
          Ready to bring your creative ideas to life? We’re a top nearshore software development company that simplifies the process. Specializing in web apps, mobile apps, AI systems, and Web3 solutions, we deliver high-quality, cost-effective solutions that drive growth. Let’s build something amazing together!
          </p>

          <div className="flex justify-center mt-5">
          <Link href={`https://cal.com/cozzmix-solutions-j2dycm/30min`} passHref>
            <ShinyButton>
              Book a Call Now
              </ShinyButton>
              </Link>
          </div>
               <div className="relative mt-8 md:mt-10 w-full flex justify-center items-center">
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/A6pMMchEUp0?si=Op0pljjuCLwGXdCc"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
        </div>
      </div>
    </motion.section>
  );
};