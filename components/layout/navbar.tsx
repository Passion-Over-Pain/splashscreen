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
      </div>

      <button className="bg-brand-navy text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-primary transition-all">
        Download App
      </button>
    </nav>
  );
};

export default Navbar;
