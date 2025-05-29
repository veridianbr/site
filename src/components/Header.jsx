import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <header
      className={`
            md:hidden fixed top-0 left-0 right-0 z-50 
            flex items-center justify-between px-4 py-3
            ${
              isDarkMode
                ? "bg-darkMode-200 border-darkMode-500"
                : "bg-lightMode-200 border-lightMode-300"
            }
            border-b
        `}
    >
      {/* Logo/Brand */}
      <h1
        className={`
                text-2xl font-bona
                ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}
      >
        Lucas.
      </h1>

      {/* Hamburger Menu Button */}
      <button
        onClick={onToggleSidebar}
        className={`
                    p-2 rounded-lg transition-colors
                    ${
                      isDarkMode
                        ? "text-darkMode-400 hover:bg-darkMode-100"
                        : "text-lightMode-400 hover:bg-lightMode-300"
                    }
                `}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
    </header>
  );
};

export default Header;
