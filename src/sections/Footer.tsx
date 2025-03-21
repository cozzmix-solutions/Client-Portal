import LogoImage from "@/assets/logo.png";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <img src={`${LogoImage.src}`} className="h-6 w-8 rounded-lg" />
            <div className="font-medium">Cozzmix Solutions</div>
          </div>
          <nav className="flex flex-col lg:flex-row lg:flex-1 lg:gap-7 gap-5 lg:justify-center">
            <div className="flex">
            <Mail className="w-5 h-5" />
            <a
              className="ml-4 text-white/70 hover:text-white text-xs  md:text-sm transition"
            >
            
              cozzmixsolutions@protonmail.com
            </a>
            </div>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <Link href={`https://x.com/CozzmixSolution`} passHref>
            <Twitter />
            </Link>
            <Link href={`https://www.linkedin.com/company/cozzmix-solutions/`} passHref>
            <Linkedin />
            </Link>
          <Link href={`https://www.youtube.com/@CozzmixSolutions`} passHref>
          <Youtube />
            </Link>
            <Link href={`https://www.instagram.com/cozzmixsolutions/`} passHref>
            <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
