import React from "react";
import {
  HiHome,
  HiShoppingBag,
  HiChatBubbleLeftRight,
  HiUserGroup,
} from "react-icons/hi2";

const MobileNav = () => {
  return (
    <div className="cursor-pointer md:hidden fixed bottom-6 left-4 right-4 z-50  bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 flex justify-between items-center text-white shadow-2xl">
      <NavIcon icon={<HiHome size={24} />} label="Home" />
      <NavIcon icon={<HiShoppingBag size={24} />} label="Market" />
      <NavIcon icon={<HiChatBubbleLeftRight size={24} />} label="Bubbles" />
      <NavIcon icon={<HiUserGroup size={24} />} label="Team" />
    </div>
  );
};

const NavIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex flex-col items-center gap-1 text-[10px] opacity-70 hover:opacity-100 transition-opacity">
    {icon}
    <span>{label}</span>
  </button>
);

export default MobileNav;
