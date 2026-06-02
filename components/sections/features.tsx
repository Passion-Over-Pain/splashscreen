"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineHomeModern,
  HiOutlineBriefcase,
  HiBolt,
  HiOutlineCloud,
  HiOutlineArrowUp,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

const features = [
  {
    id: "intelligence",
    title: "Pool Intelligence",
    desc: "Stay ahead of maintenance with weather-aware recommendations, load shedding alerts, and precise chemical tracking.",
    image: "/images/maintain.png",
    audience: "owners",
  },
  {
    id: "marketplace",
    title: "The Marketplace",
    desc: "Connect with verified local pool professionals and purchase high-quality supplies in a single, transparent ecosystem.",
    image: "/images/marketplace.png",
    audience: "providers",
  },
  {
    id: "bubbles",
    title: "Meet Bubbles AI",
    desc: "Your intelligent pool assistant, trained on industry-leading data to provide instant, accurate, and actionable water care advice.",
    image: "/images/bubbles.png",
    audience: "both",
  },
];

const Features = () => {
  const [active, setActive] = useState(features[0]);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Built for <em className="bg-brand-primary not-italic">everyone</em>{" "}
            in the water.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto font-sans">
            Whether you own a pool or run a pool service business, SplashScreen
            has the tools you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-4">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f)}
                className={`cursor-pointer w-full text-left p-6 rounded-2xl transition-all border ${
                  active.id === f.id
                    ? "bg-white border-brand-primary shadow-lg"
                    : "bg-transparent border-transparent hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-serif text-brand-navy">
                    {f.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-sans text-md leading-relaxed">
                  {f.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="relative h-96 md:h-175 w-full rounded-3xl flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-black/10 shadow-xl transition-all hover:border-brand-primary/3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-primary/10 text-brand-primary">
                <HiOutlineHomeModern size={24} />
              </div>
              <span className="text-md font-semibold tracking-wider text-black/40">
                For Pool Owners
              </span>
            </div>
            <h3 className="font-serif text-2xl text-brand-navy mb-3">
              Your pool, always in balance.
            </h3>
            <p className="text-slate-600 text-md leading-relaxed mb-6">
              Log readings, get smart chemical recommendations, and track your
              pool's health over time all in one place.
            </p>
            <ul className="space-y-3">
              {[
                "Monitor water quality: pH, chlorine, alkalinity",
                "Track maintenance tasks & custom schedules",
                "Load shedding & water restriction alerts",
                "Browse & book local service providers",
                "Purchase chemicals & equipment in-app",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-center text-md text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/10 shadow-xl transition-all hover:border-brand-primary/3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-primary/10 text-brand-primary">
                <HiOutlineBriefcase size={24} />
              </div>
              <span className="text-md font-semibold tracking-wider text-black/40">
                For Service Providers
              </span>
            </div>
            <h3 className="font-serif text-2xl text-brand-navy mb-3">
              Grow your pool business.
            </h3>
            <p className="text-slate-600 text-md leading-relaxed mb-6">
              List services, manage bookings, track inventory, and build an
              unshakeable digital reputation.
            </p>
            <ul className="space-y-3">
              {[
                "Showcase your services & expertise",
                "Manage bookings & client history",
                "Inventory & product management",
                "Verified business badge builds trust",
                "Ratings & client reviews system",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-center text-md text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: HiBolt,
              title: "Load Shedding",
              desc: "SA-specific outage alerts",
            },
            {
              icon: HiOutlineCloud,
              title: "Weather",
              desc: "Rainfall & evaporation",
            },
            {
              icon: HiOutlineArrowUp,
              title: "Restrictions",
              desc: "Municipal water alerts",
            },
            {
              icon: HiOutlineShoppingCart,
              title: "Marketplace",
              desc: "Chemicals & equipment",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center border border-black/5 bg-white shadow-md"
            >
              <div className="text-brand-primary mb-3 flex justify-center">
                <item.icon size={28} />
              </div>
              <div className="text-md font-semibold text-brand-navy mb-1">
                {item.title}
              </div>
              <div className="text-md text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
