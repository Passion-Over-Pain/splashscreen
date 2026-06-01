import { Button } from "@/shared/button";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">
      <div className="text-xl font-serif font-bold text-brand-navy">
        SplashScreen
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy/80">
        <a
          href="#how-it-works"
          className="hover:text-brand-primary transition-colors"
        >
          How it Works
        </a>
        <a
          href="#marketplace"
          className="hover:text-brand-primary transition-colors"
        >
          Marketplace
        </a>
        <a
          href="#bubbles"
          className="hover:text-brand-primary transition-colors"
        >
          Bubbles
        </a>
        <a
          href="#bubbles"
          className="hover:text-brand-primary transition-colors"
        >
          Bubbles
        </a>
        <a
          href="#bubbles"
          className="hover:text-brand-primary transition-colors"
        >
          Bubbles
        </a>
        <a
          href="#bubbles"
          className="hover:text-brand-primary transition-colors"
        >
          Bubbles
        </a>
      </div>

      <Button variant="secondary" size="md" icon={<FaDownload size={16} />}>
        Download App
      </Button>
    </nav>
  );
};

export default Navbar;
