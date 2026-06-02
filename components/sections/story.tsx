import Image from "next/image";

const Story = () => {
  return (
    <section className="py-24 bg-white" id="story">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-black">
            Pool ownership, <br />
            reclaimed for the modern era.
          </h2>

          <div className="space-y-4 text-black leading-relaxed font-sans text-lg">
            <p>
              In South Africa, a pool is more than a luxury. It’s a
              responsibility. Water is one of our country's most precious
              resources, and maintaining a pool should never mean wasting it.
            </p>

            <p>
              From recurring droughts to the threat of Day Zero, South Africans
              understand the importance of using water wisely. Yet pool care
              remains unnecessarily complicated, often resulting in preventable
              water loss, inefficient chemical use, and costly maintenance
              mistakes.
            </p>

            <p>
              SplashScreen was born from a simple belief: pool ownership should
              be smarter. By combining personalized guidance, intelligent water
              chemistry tools, and proactive maintenance tracking, we help pool
              owners protect both their pools and the resources that matter
              most.
            </p>
          </div>
        </div>

        <div className="relative h-125 w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/story-pool.jpg"
            alt="Modern pool in South African landscape"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
