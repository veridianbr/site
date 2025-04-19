import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode, MdDarkMode, MdLightMode } from "react-icons/md";

const Sidebar = () => {
  const { isDarkMode, toggleTheme, language, changeLanguage } = useContext(ThemeContext);
  const [isHovering, setIsHovering] = useState(false);
  const [isLangHovering, setIsLangHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); // Default to about
  

    
  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'pt' : 'en');
  };
  
  const getLiClass = (sectionId) => `
    px-2 py-1 inline-block transition-all duration-200 
    pl-4 relative
    ${activeSection === sectionId 
      ? (isDarkMode ? 'text-darkMode-400' : 'text-lightMode-400') 
      : (isDarkMode ? 'text-darkMode-300 hover:text-darkMode-400' : 'text-lightMode-300 hover:text-lightMode-400')}`;

  // Add smooth scroll handler
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <aside
      className={`select-none fixed top-0 left-0 h-full w-64 z-10 flex flex-col  ${
        isDarkMode ? "border-darkMode-500" : "border-lightMode-200"
      }
        ${isDarkMode ? "bg-darkMode-200 text-darkMode-300" : "bg-lightMode-200 text-lightMode-300"}`}
    >
      <div className="p-6">
        <h1
          className={`text-4xl font-bona inline-block ${
            isDarkMode
              ? "bg-darkMode-300 text-darkMode-400"
              : "bg-lightMode-200 text-lightMode-100"
          } px-2 py-1 rounded`}
        >
          Lucas.
        </h1>
      </div>

      <nav className="flex-grow px-6 font-light">
        <ul className="space-y-6 text-lg ">
          <li>
            <a
              href="#about"
              onClick={handleNavClick}
              className={getLiClass('about')}
            >
              {language === "en" ? "About" : "Sobre"}
            </a>
          </li>
          
          <li>
            <a
              href="#projects"
              onClick={handleNavClick}
              className={getLiClass('projects')}
            >
              {language === "en" ? "Projects" : "Projetos"}
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={handleNavClick}
              className={getLiClass('skills')}
            >
              {language === "en" ? "CV" : "CV"}
            </a>
          </li>
        </ul>
        <hr
          className={`my-6 ${
            isDarkMode ? "border-darkMode-500" : "border-lightMode-200"
          }`}
        />

        {/* Skill categories */}
        <div className="space-y-6">
          <div>
          <h3 className={`
              text-sm font-light mb-3 px-2  
              ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}>
              {language === "en" ? "FULLSTACK SKILLS" : "HABILIDADES FULLSTACK"}
            </h3>
            <ul className="space-y-2 text-base">
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="#frontend"
                  onClick={handleNavClick}
                  className={getLiClass('frontend')}
                >
                  {language === "en" ? "Frontend" : "Frontend"}
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="#backend"
                  onClick={handleNavClick}
                  className={getLiClass('backend')}
                >
                  {language === "en" ? "Backend" : "Backend"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-sm font-light mb-3 px-2 tracking-wider
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}>
              
              {language === "en" ? "AI SKILLS" : "HABILIDADES EM IA"}
            </h3>
            <ul className="space-y-2 text-base ">
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="#ml"
                  onClick={handleNavClick}
                  className={getLiClass('ml')}
                >
                  {language === "en"
                    ? "Machine Learning"
                    : "Machine Learning"}
                </a>
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">
                <a
                  href="#nlp"
                  onClick={handleNavClick}
                  className={getLiClass('nlp')}
                >
                  {language === "en" ? "NLP" : "PLN"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr
          className={`my-6 ${
            isDarkMode ? "border-darkMode-500" : "border-lightMode-200"
          }`}
        />

        <div>
          <h3 className={`text-sm font-light mb-3 px-2 tracking-wider
          ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}
            `}>
            {language === "en" ? "CONTACT ME" : "CONTATO"}
          </h3>
          <ul className="space-y-2 text-base">
            <li className="opacity-80 hover:opacity-100 transition-opacity ">
              <a
                href="#email"
                onClick={handleNavClick}
                className={getLiClass('email')}
              >
                {language === "en" ? "Email" : "Email"}
              </a>
            </li>
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a
                href="#form"
                onClick={handleNavClick}
                className={getLiClass('form')}
              >
                {language === "en" ? "Contact Form" : "Formulário"}
              </a>
            </li>
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={getLiClass('linkedin')}
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
  );
};

export default Sidebar;