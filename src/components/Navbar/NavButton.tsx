import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  link: string;
}

const NavButton = ({ children, link }: NavButtonProps) => {
  return (
    <a
      href={link}
      className="p-4 leading-none transition-all duration-200 rounded-full hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
};

export default NavButton;
