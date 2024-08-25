"use client";

import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 426) {
      setIsMobile(true);
    }

    const handleResize = () => {
      if (window.innerWidth < 426) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="navbar"
      className="flex flex-col max-sm:flex-row items-center max-sm:p-4 p-6"
    >
      <div className="flex w-full items-center flex-row justify-between sm:justify-center">
        <h1 className="text-3xl font-bold">Satkirat Singh</h1>

        <div
          id="menu_button"
          onClick={handleClick}
          className="sm:hidden bg-white items-center flex flex-row justify-center p-2 rounded-full"
        >
          <span className="material-symbols-outlined text-black">
            {navbarOpen ? "menu_open" : "menu"}
          </span>
        </div>
      </div>

      <nav
        className="mt-8 max-sm:bg-white max-sm:shadow-md max-sm:shadow-[#2e6b8c] max-sm:dark:bg-black max-sm:text-black max-sm:dark:text-white max-sm:flex-col max-sm:overflow-hidden max-sm:absolute max-sm:top-10 max-sm:left-0 max-sm:w-full max-sm:rounded-none z-20 dark:bg-[#141414] hover:shadow-md hover:shadow-[#2e6b8c] bg-black text-white rounded-full flex items-center p-1 transition-all duration-200 hover:px-2 gap-x-4"
        style={
          isMobile
            ? {
                maxHeight: navbarOpen ? "200px" : "0px",
                padding: navbarOpen ? "4px" : "0px",
              }
            : {}
        }
      >
        <NavButton onClick={() => setNavbarOpen(false)} link="#">
          Home
        </NavButton>
        <NavButton
          onClick={() => setNavbarOpen(false)}
          link="#projects"
          showBadge
          badge={4}
        >
          Projects
        </NavButton>
        <NavButton onClick={() => setNavbarOpen(false)} link="#about">
          About
        </NavButton>
        <NavButton onClick={() => setNavbarOpen(false)} link="#contact">
          Contact
        </NavButton>
      </nav>
    </div>
  );
};

export default Navbar;
