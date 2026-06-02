"use client";
import { Button } from "@/shared/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl px-8 py-4 rounded-full bg-black backdrop-blur-md border border-white/20 flex items-center justify-between  text-white font-serif">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8">
          <Image
            src="/images/logo.png"
            alt="SplashScreen Logo"
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
        <span className="text-xl font-serif font-bold ">SplashScreen</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium ">
        <a
          href="/#story"
          className="hover:text-brand-primary transition-colors"
        >
          Story
        </a>
        <a
          href="/#features"
          className="hover:text-brand-primary transition-colors"
        >
          Features
        </a>
        <a
          href="/#gallery"
          className="hover:text-brand-primary transition-colors"
        >
          Gallery
        </a>
        <a href="/#team" className="hover:text-brand-primary transition-colors">
          Team
        </a>
        <a href="/#faq" className="hover:text-brand-primary transition-colors">
          FAQ
        </a>
      </div>

      <Button variant="secondary" size="md">
        <IoLogoGooglePlaystore size={16} /> Download App
      </Button>
    </nav>
  );
};

export default Navbar;
