const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Real people. Real{" "}
              <em className="bg-brand-primary not-italic">pools</em>.
            </h2>
          </div>
          <p className="text-black/60 max-w-sm mt-4 md:mt-0 md:text-right text-sm leading-relaxed">
            South African pools where SplashScreen was developed and tested in
            the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:row-span-2 rounded-2xl overflow-hidden border border-black/10 bg-neutral-50 shadow-sm">
            <img
              src="/images/4.jpg"
              alt="Test Pool 1"
              className="w-full h-full object-cover"
            />
          </div>

          {[1, 2, 3, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-2xl overflow-hidden border border-black/10 bg-neutral-50 shadow-sm"
            >
              <img
                src={`/images/${i}.jpg`}
                alt={`Test Pool ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
