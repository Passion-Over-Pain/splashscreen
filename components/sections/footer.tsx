const Footer = () => {
  const navigation = [
    { label: "Story", href: "#how-it-works" },
    { label: "Build", href: "#marketplace" },
    { label: "Features", href: "#bubbles" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-gray-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">SplashScreen</h3>

            <p className="text-md text-gray-400 leading-relaxed max-w-md">
              Making pool maintenance simple, one tap at a time.
            </p>
          </div>

          <div>
            <div className="text-lg tracking-widest text-gray-500 mb-4">
              Navigation
            </div>

            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-md text-gray-300 hover:text-brand-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-md  tracking-widest text-gray-500 mb-4">
              Legal
            </div>

            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-md text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="text-md text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-lg text-gray-500">
          <p>© 2026 SplashScreen. All rights reserved.</p>

          <p>Built with 🤍 by The Ripple Effect</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
