import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div id="navbar" className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold">Satkirat Singh</h1>

      <nav className="mt-8 dark:bg-[#141414] bg-black text-white rounded-full flex items-center p-1 gap-x-4">
        <NavButton link="#">Home</NavButton>
        <NavButton link="#projects">Projects</NavButton>
        <NavButton link="#about">About</NavButton>
        <NavButton link="#contact">Contact</NavButton>
      </nav>
    </div>
  );
};

export default Navbar;
