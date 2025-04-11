import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
    const { isDarkMode, language } = useContext(ThemeContext);
    return (
        <section className={`
            px-20
            snap-start 
            flex flex-col items-center h-screen
            w-full
            pt-64
            ${isDarkMode ? 'bg-dark text-lightMode-200' : 'bg-light text-lightMode-100'}
        `}>
            <h2 className="text-2xl text-center md:text-5xl font-bold leading-relaxed mb-8 max-w-5xl bg-gradient-to-r from-darkMode-500 to-lightMode-100/90 bg-clip-text text-transparent">
                {language === 'en' ? 'About me' : 'Sobre mim'}
            </h2>

            <div className="flex flex-col items-center justify-center">
                
                {/* Uncomment and update your content paragraph */}
                <p className="text-lg text-center max-w-4xl mb-8">
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vitae autem laboriosam rerum ipsam pariatur non nam ut molestiae maxime, velit est illum esse ratione mollitia doloribus! Assumenda, similique quisquam.
                </p>
            </div>
        </section>
    );
};

export default About;