import { Button } from "@/shared/button";
import { BsGithub } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Download = () => {
  return (
    <section
      id="download"
      className="py-32 px-6 bg-white text-center font-serif"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Download
          <br />
          <span className="bg-brand-primary">SplashScreen</span> today.
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Smarter pool care for South Africa starts with a single tap. Free to
          download on Android.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="https://github.com/LRedpathZA/IT-Project/releases/download/alpha_1.3/splashscreen.apk"
            icon={<IoLogoGooglePlaystore />}
          >
            Download App
          </Button>
          <Button
            icon={<BsGithub />}
            href="https://github.com/LRedpathZA/IT-Project"
            variant="outline"
            target="_blank"
          >
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Download;
