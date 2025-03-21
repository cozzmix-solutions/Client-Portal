"use client";

import acmeLogo from "@/assets/logo-acme.png";
import icsaLogo from "@/assets/logo-icsa.png";
import pulseLogo from "@/assets/logo-pulse.png";
import convrtLogo from "@/assets/logo-convrt.png";
import { motion } from "framer-motion";
import CaseStudies from "@/components/ui/casestudies";
import {Button } from "@heroui/button";


export const LogoTicker = ({caseStudy}: any) => {

  const displayedCards = caseStudy.slice(0, 2);

  return (
    <section className="py-12 md:py-20 md:py-24 ">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
          Trusted by Visionaries
          </div>
          <div className="flex  flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex flex-none gap-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                icsaLogo,
                pulseLogo,
                convrtLogo,
                acmeLogo,
                icsaLogo,
                pulseLogo,
                convrtLogo,
              ].map((logo, index) => (
                <img
                  src={logo.src}
                  key={index}
                  className="h-6 w-auto"
                  alt="Logo"
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mt-10 md:mt-16 xl:mt-24 flex flex-row w-full flex-wrap justify-around">
        {displayedCards.map((data : any) => (
          <CaseStudies data={data} key={data.slug}  />
          ))}
        </div>
        <div className="m-4 md:m-8 w-full flex justify-center items-center">
        <Button radius="full" color="default">SHOW MORE</Button>
        </div>
      </div>
    </section>
  );
};
