import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode, language } = useContext(ThemeContext);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [buttonVisible, setButtonVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    
    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Animation for text and button appearance with different timing
        const textTimer = setTimeout(() => {
            setTextVisible(true);
        }, 300); // Show text first
        
        // Animation for button appearance
        const animationTimer = setTimeout(() => {
            setButtonVisible(true);
        }, 1600);
        
        // Clean up intervals on unmount
        return () => {
            clearInterval(timer);
            clearTimeout(textTimer);
            clearTimeout(animationTimer);
        };
    }, []);
    
    // Format date based on language
    const formatDate = () => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        
        return currentTime.toLocaleDateString(
            language === 'en' ? 'en-US' : 'pt-BR', 
            options
        );
    };
    
    // Format time
    const formatTime = () => {
        return currentTime.toLocaleTimeString(
            language === 'en' ? 'en-US' : 'pt-BR'
        );
    };
    
    return (
        <section className={`
            min-h-screen
            w-full
            flex
            justify-center
            items-center
            relative
            px-8 md:px-16 lg:px-24
            snap-start
            ${isDarkMode ? 'bg-darkMode-100 text-lightMode-200' : 'bg-light text-lightMode-100'}
        `} id='hero'>
            <div className="absolute top-8 right-10 text-right select-none text-lightMode-300">
                <p className="text-sm opacity-75">{formatDate()}</p>
                <p className="text-2xl font-light">{formatTime()}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center max-w-5xl">
                <p className={`
                    text-2xl text-center md:text-5xl font-bold leading-relaxed mb-8
                    bg-gradient-to-r 
                    ${isDarkMode 
                        ? 'from-darkMode-400 to-darkMode-500' // Gradiente mais claro para modo escuro
                        : 'from-lightMode-400/80 to-lightMode-300/50'// Gradiente original para modo claro
                    }
                    bg-clip-text text-transparent
                    transition-all transform 
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}
                `}
                style={{ transitionDuration: '1800ms' }}>
                    {language === 'en' 
                        ? 'Lucas is a Software Engineer with a strong focus on Artificial Intelligence and chatbot development. He also brings solid experience in full-stack development, allowing him to build robust and scalable applications from end to back end.' 
                        : 'Lucas é um Engenheiro de Software com forte foco em Inteligência Artificial e desenvolvimento de chatbots. Ele também possui sólida experiência em desenvolvimento fullstack, o que lhe permite construir aplicações robustas e escaláveis de ponta a ponta.'}
                </p>
                
                <div className="mt-6 flex justify-center">
                    <a 
                        href="#projects" 
                        onClick={(e) => {
                            e.preventDefault();
                            // Find the next section that's a snap point
                            const sections = document.querySelectorAll('section');
                            const currentSection = e.target.closest('section');
                            let nextSection = null;
                            
                            // Find the current section's index
                            let foundCurrent = false;
                            for (const section of sections) {
                                if (foundCurrent) {
                                    nextSection = section;
                                    break;
                                }
                                if (section === currentSection) {
                                    foundCurrent = true;
                                }
                            }
                            
                            // Scroll to the next section
                            if (nextSection) {
                                nextSection.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }}
                        className={`
                            px-8 py-3 
                            font-extralight 
                            bg-lightMode-500 
                            text-white 
                            rounded-md 
                            transition-all 
                            transform
                            ${buttonVisible ? 'opacity-100' : 'opacity-0'}
                            hover:opacity-80 
                        `}
                        style={{ transitionDuration: '2300ms' }}
                    >
                        {language === 'en' ? 'Get to know me' : 'Conheça-me'}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;