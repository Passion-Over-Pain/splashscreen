import React from "react";
import { HiHome, HiBolt, HiPhoto, HiUserGroup } from "react-icons/hi2";

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 bg-black backdrop-blur-md border border-white/20 rounded-3xl p-4 flex justify-between items-center text-white shadow-2xl">
      <NavIcon icon={<HiHome size={24} />} label="Story" href="/#story" />
      <NavIcon icon={<HiBolt size={24} />} label="Features" href="/#features" />
      <NavIcon icon={<HiPhoto size={24} />} label="Gallery" href="/#gallery" />
      <NavIcon icon={<HiUserGroup size={24} />} label="Team" href="/#team" />
    </div>
  );
};

const NavIcon = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    className="cursor-pointer flex flex-col items-center gap-1 text-[10px] opacity-70 hover:opacity-100 transition-opacity"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default MobileNav;
