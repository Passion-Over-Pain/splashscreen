import { Button } from "@/shared/button";
import { FaGithub } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-pool.jpg')] bg-cover bg-bottom filter blur-xxs opacity-100"></div>
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">
          Pool care, <br />
          <span className="italic">beautifully simplified.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
          Experience a smarter way to manage your pool, designed for South
          African conditions.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={<IoLogoGooglePlaystore />}
            href="https://github.com/LRedpathZA/IT-Project/releases/download/alpha_1.3/splashscreen.apk"
          >
            Download
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={<FaGithub />}
            href="https://github.com/LRedpathZA/IT-Project"
            target="_blank"
          >
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
