const FAQ = () => {
  const faqs = [
    {
      q: "Is SplashScreen only for Android?",
      a: "Currently SplashScreen is available as an Android APK. iOS support is planned for a future release. Download the APK directly from this site to get started.",
    },
    {
      q: "How does Bubbles AI know about my pool?",
      a: "Bubbles draws on your pool's registered characteristics, water quality logs, local weather, and load shedding schedules to provide advice tailored to your exact situation.",
    },
    {
      q: "How do service providers get verified?",
      a: "All business account registrations are manually reviewed by the SplashScreen team before approval to ensure only legitimate businesses appear in the marketplace.",
    },
    {
      q: "Can I manage multiple pools?",
      a: "Yes, pool owners can register and manage multiple pools from a single account, ideal for property managers or holiday home owners.",
    },
    {
      q: "What data do you use for load shedding alerts?",
      a: "SplashScreen integrates with load shedding schedule APIs to deliver real-time outage alerts based on your location, helping you time pump operations and dosing.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Common questions.
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-black text-xl mb-2">{item.q}</h3>
              <p className="text-gray-600 text-md leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
