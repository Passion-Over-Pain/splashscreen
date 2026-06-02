import MobileNav from "@/components/layout/mobile-nav";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Story from "@/components/sections/story";
import Features from "@/components/sections/features";
import Gallery from "@/components/sections/gallery";
import Team from "@/components/sections/team";
import FAQ from "@/components/sections/faq";
import Download from "@/components/sections/download";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <Gallery />
      <Team />
      <FAQ />
      <Download />
      <Footer />
      <MobileNav />
    </>
  );
}
