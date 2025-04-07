import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MdOutlineDarkMode, MdOutlineLightMode, MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
    const { isDarkMode, toggleTheme, language, changeLanguage } = useContext(ThemeContext);
    const [isHovering, setIsHovering] = useState(false);
    const [isLangHovering, setIsLangHovering] = useState(false);
    
    const toggleLanguage = () => {
        changeLanguage(language === 'en' ? 'pt' : 'en');
    };
    
    return (
        <header className={`flex select-none justify-between items-center p-4 ${isDarkMode ? 'bg-primary-100 text-white' : 'bg-primary-300 text-primary-100'}`}>
            <h1 className="text-4xl font-bold">Lucas 
                <span className="text-5xl bg-primary-500 text-transparent bg-clip-text transform -translate-y-1">.</span>
            </h1>
            
            <div className="flex items-center space-x-6">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#about" className="outline-hover-effect pb-1 block">
                            {language === 'en' ? 'About' : 'Sobre'}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="outline-hover-effect pb-1 block">
                            {language === 'en' ? 'Projects' : 'Projetos'}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="outline-hover-effect pb-1 block">
                            {language === 'en' ? 'Skills' : 'Habilidades'}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="outline-hover-effect pb-1 block">
                            {language === 'en' ? 'Contact' : 'Contato'}
                        </a>
                    </li>
                </ul>
            </nav>
                
                <div className="flex items-center space-x-3">
                    {/* Theme toggle */}
                    <button 
                        onClick={toggleTheme}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className={`p-2 rounded-full transition-colors ${
                            isDarkMode 
                                ? 'bg-primary-100 hover:bg-primary-400/50' 
                                : 'bg-primary-300 hover:bg-primary-400/50'
                        }`}
                    >
                        {isDarkMode 
                            ? (isHovering ? <MdLightMode size={20} /> : <MdOutlineLightMode size={20}/>)
                            : (isHovering ? <MdDarkMode size={20} /> : <MdOutlineDarkMode size={20} />)
                        }
                    </button>

                    {/* Language toggle */}
                    <button 
                        onClick={toggleLanguage}
                        onMouseEnter={() => setIsLangHovering(true)}
                        onMouseLeave={() => setIsLangHovering(false)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                            isDarkMode 
                                ? 'bg-primary-100 hover:bg-primary-400/50' 
                                : 'bg-primary-300 hover:bg-primary-400/50'
                        }`}
                    >
                        {language === 'en'
                            ? (isLangHovering ? '🇧🇷' : '🇺🇸')
                            : (isLangHovering ? '🇺🇸' : '🇧🇷')
                        }
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;