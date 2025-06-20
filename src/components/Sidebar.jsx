import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import logo from "../assets/b.png"


const Sidebar = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme, language, changeLanguage } =
    useContext(ThemeContext);
  const [isHovering, setIsHovering] = useState(false);
  const [isLangHovering, setIsLangHovering] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Monitor scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "frontend", "backend", "ml", "nlp", "contact"]; // Removed 'projects', 'skills', 'email', 'form' and added 'contact'
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      let currentSection = "about";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleCVDownload = () => { // Removed CV download functionality
  //   const link = document.createElement('a');
  //   link.href = CV_DOWNLOAD_URL;
  //   link.download = 'CV-LUCASGONTIJO.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "pt" : "en");
  };

  const getLiClass = (sectionId) => `
    px-2 py-1 inline-block transition-all duration-200 
    pl-4 relative
    ${
      isDarkMode
        ? "text-darkMode-300 hover:text-darkMode-400"
        : "text-lightMode-300 hover:text-lightMode-400"
    }`;

  // Add smooth scroll handler
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      // Close sidebar on mobile after navigation
      if (window.innerWidth < 768) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          select-none fixed top-0 left-0 h-full w-64 z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:z-10
          ${
            isDarkMode
              ? "border-darkMode-500 bg-darkMode-200 text-darkMode-300"
              : "border-lightMode-200 bg-lightMode-200 text-lightMode-300"
          }
        `}
      >
        <div className="p-6 pt-16 md:pt-6">
          <h1
            className={`text-4xl font-bona inline-block ${
              isDarkMode
                ? "bg-lightMode-100 text-darkMode-200"
                : "bg-lightMode-100 text-lightMode-300"
            } px-2 py-1 rounded`}
          >
            <img src={logo} alt=""></img>
          </h1>
        </div>

        <nav className="flex-grow px-6 font-light overflow-y-auto">
          <ul className="space-y-6 text-lg">
            <li>
              <a
                href="#about"
                onClick={handleNavClick}
                className={getLiClass("about")}
              >
                {language === "en" ? "About Us" : "Sobre Nós"}
              </a>
            </li>

            {/* Removed Projects Link */}
            {/* 
            <li>
              <a
                href="#projects"
                onClick={handleNavClick}
                className={getLiClass('projects')}
              >
                {language === "en" ? "Projects" : "Projetos"}
              </a>
            </li>
            */}

            {/* Removed CV Link */}
            {/*
            <li>
              <a
                href="#skills" 
                onClick={handleCVDownload}
                className={getLiClass('skills')}
              >
                {language === "en" ? "CV" : "CV"}
              </a>
            </li>
            */}
          </ul>


     
          <hr
            className={`my-6 ${
              isDarkMode ? "border-darkMode-500" : "border-lightMode-200"
            }`}
          />

          <div>
            <h3
              className={`text-sm font-light mb-3 px-2 tracking-wider
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
              `}
            >
              {language === "en" ? "CONTACT ME" : "CONTATO"}
            </h3>
            <ul className="space-y-2 text-base">
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className={getLiClass("contact")} // Changed from 'email' to 'contact'
                >
                  {language === "en" ? "Contact" : "Contato"}
                </a>
              </li>

              {/* Removed GitHub personal link, Veridian's GitHub can be added if available */}
              {/* 
               <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="https://github.com/Luucasgontijo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getLiClass('github')}
                >
                  Github
                </a>
              </li>
              */}

              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="https://www.linkedin.com/company/veridianbr" // Updated LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getLiClass("linkedin")}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="p-6 flex flex-row justify-start items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center ${
              isDarkMode
                ? "bg-dark hover:bg-lightMode-200/50"
                : "bg-light hover:bg-lightMode-200/50"
            }`}
          >
            {isDarkMode ? (
              isHovering ? (
                <MdLightMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )
            ) : isHovering ? (
              <MdDarkMode size={20} />
            ) : (
              <MdOutlineDarkMode size={20} />
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            onMouseEnter={() => setIsLangHovering(true)}
            onMouseLeave={() => setIsLangHovering(false)}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              isDarkMode
                ? "bg-dark hover:bg-lightMode-200/50"
                : "bg-light hover:bg-lightMode-200/50"
            }`}
          >
            {language === "en"
              ? isLangHovering
                ? "🇧🇷"
                : "🇺🇸"
              : isLangHovering
              ? "🇺🇸"
              : "🇧🇷"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
