import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode, language } = useContext(ThemeContext);
    
    return (
        <section className={`flex items-center justify-center h-screen ${
            isDarkMode ? 'bg-primary-100 text-white' : 'bg-primary-300 text-primary-100'
        }`}>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">
                    {language === 'en' ? 'Welcome to My Portfolio' : 'Bem-vindo ao Meu Portfólio'}
                </h1>
                <p className="text-2xl mb-8">
                    {language === 'en' 
                        ? "I'm a passionate developer with a love for creating beautiful and functional web applications."
                        : "Sou um desenvolvedor apaixonado por criar aplicações web bonitas e funcionais."}
                </p>
                <a 
                    href="#projects" 
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                        isDarkMode 
                            ? 'bg-primary-500 text-white hover:bg-primary-500' 
                            : 'bg-primary-500 text-white hover:bg-primary-500'
                    }`}
                >
                    {language === 'en' ? 'View My Work' : 'Ver Meus Projetos'}
                </a>
            </div>
        </section>
    );
};

export default Hero;