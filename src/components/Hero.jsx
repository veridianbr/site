import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode, language } = useContext(ThemeContext);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [buttonVisible, setButtonVisible] = useState(false);
    
    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        // Animation for button appearance
        const animationTimer = setTimeout(() => {
            setButtonVisible(true);
        }, 900);
        
        // Clean up intervals on unmount
        return () => {
            clearInterval(timer);
            clearTimeout(animationTimer);
        };
    }, []);
    
    // Format date and time functions remain unchanged
    
    return (
        <section className={`
            px-20
            snap-start 
            flex-col items-center h-screen
            w-full
            pt-64
            ${isDarkMode ? 'bg-dark text-lightMode-200' : 'bg-light text-lightMode-100'}
          `}>
            {/* Date and time display unchanged */}
            
            <div className="mt-6 flex flex-col items-center justify-center">
                <p className="text-2xl text-center md:text-5xl font-bold leading-relaxed mb-8 max-w-5xl bg-gradient-to-r from-darkMode-500 to-lightMode-100/90 bg-clip-text text-transparent">
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
                        ${buttonVisible ? 'opacity-100' : 'opacity-0 translate-y-1'}
                        hover:opacity-80 
                    `}
                    style={{ transitionDuration: '1800ms' }}
                >
                    {language === 'en' ? 'See more' : 'Ver mais'}
                </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;