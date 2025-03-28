"use client";

import { Button } from "@/components/button";
import StartsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { RefObject, useRef, useEffect } from "react";
import Link from "next/link";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const setionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: setionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className="py-20 md:py-24" ref={setionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: StartsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${StartsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[#282CFC] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#282CFC] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl max-w-sm mx-auto tracking-tighter text-center font-medium">
            Stop scrolling! Let’s turn your big idea into reality. 
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5">
            Ready to take action? Press that Button below Now
            </p>
            <div className="flex justify-center mt-8">
              <Button>
              <Link href={`https://cal.com/cozzmix-solutions-j2dycm/30min`} passHref>
                Book a Call
                </Link>
                </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};