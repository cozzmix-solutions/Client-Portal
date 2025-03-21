"use client";

import LogoIcon from "@/assets/logo.png";
import { Button } from "@/components/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div onClick={handleScrollToTop} className="cursor-pointer">
            <div className="border h-8 w-10 rounded-xl inline-flex justify-center items-center border-white/15">
           <a href="/">
            <img src={`${LogoIcon.src}`}  className="h-8 w-10 rounded-xl" />
            </a>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-white/70 text-sm">
              <a
                href="/services"
                className="hover:text-white transition"
                onClick={handleScrollToFeatures}
              >
                Services
              </a>
              <a href="/casestudy" className="hover:text-white transition">
                Case Studies
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button >
            <Link href={`https://cal.com/cozzmix-solutions-j2dycm/30min`} passHref>
              Book a Call
              </Link>
              </Button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="z-50 fixed inset-y-0 right-0 w-full max-w-sm bg-black shadow-xl md:hidden"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex flex-col gap-8 mt-16">
                <motion.a
                  custom={0}
                  variants={menuItemVariants}
                  href="/services"
                  className="text-white/70 text-lg font-medium hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  onClick={handleScrollToFeatures}
                >
                  Services
                </motion.a>
                <motion.a
                  custom={1}
                  variants={menuItemVariants}
                  href="/casestudy"
                  className="text-white/70 text-lg font-medium hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                >
                  Case Studies
                </motion.a>
                <motion.div
                  custom={2}
                  variants={menuItemVariants}
                  className="ml-4 mt-4"
                >
                  <Button>Book a Call</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};