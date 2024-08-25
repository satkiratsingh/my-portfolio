import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  link: string;
  badge?: number;
  showBadge?: boolean;
}

const NavButton = ({ children, link, badge, showBadge }: NavButtonProps) => {
  return (
    <a
      href={link}
      className="p-4 leading-none gap-2 group flex flex-row items-center transition-all duration-200 rounded-full hover:bg-white hover:text-black"
    >
      {showBadge && (
        <div className="h-5 w-5 flex flex-row items-center justify-center rounded-full group-hover:bg-[#141414] bg-[#C4C4C4]">
          <p className="text-[12px] group-hover:text-white text-black font-extrabold">
            {badge}
          </p>
        </div>
      )}
      {children}
    </a>
  );
};

export default NavButton;
