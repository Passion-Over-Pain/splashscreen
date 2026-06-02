import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Line Redpath",
    role: "Cybersecurity Specialist",
    github: "https://github.com/LRedpathZA",
    img: "/images/Line.png",
  },
  {
    name: "Juanette Viljoen",
    role: "UI/UX Designer",
    github: "https://github.com/JuanetteRViljoen",
    img: "/images/Juanette.JPG",
  },
  {
    name: "Tino Mhedziso",
    role: "Software Developer",
    github: "https://github.com/Passion-Over-Pain",
    img: "/images/Tino.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white text-black font-sans">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            <span className="bg-brand-primary">SplashScreen</span> team.
          </h2>
          <p className="text-black/60 max-w-md mx-auto text-sm leading-relaxed">
            The builders, designers, and specialists behind South Africa's
            modern pool care ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col">
              <div className="relative aspect-square w-full bg-neutral-50 rounded-2xl mb-5 overflow-hidden border border-black/10 shadow-sm">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex justify-between items-start mt-1 px-1">
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-base text-black tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-black/50">{member.role}</p>
                </div>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-black/40 hover:text-black transition-colors duration-200"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
