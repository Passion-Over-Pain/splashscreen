const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[url('/images/hero-pool.jpg')] bg-cover bg-bottom filter blur-xxs opacity-70"></div>

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
          <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-medium ">
            Built for Android
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
