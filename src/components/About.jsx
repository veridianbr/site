import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
    const { isDarkMode, language } = useContext(ThemeContext);
    const [activeItem, setActiveItem] = useState(0);
    
    // Timeline data
    const timelineItems = [
        {
            year: '2023 - Presente',
            title: language === 'en' ? 'AI Development' : 'Desenvolvimento de IA',
            description: language === 'en' 
                ? 'Focusing on AI and chatbot development, building intelligent conversational agents for enterprise solutions.'
                : 'Focado em desenvolvimento de IA e chatbots, construindo agentes conversacionais inteligentes para soluções empresariais.'
        },
        {
            year: '2020 - 2023',
            title: language === 'en' ? 'Full Stack Engineer' : 'Engenheiro Full Stack',
            description: language === 'en'
                ? 'Developed end-to-end web applications using modern frameworks like React, Node.js, and cloud technologies.'
                : 'Desenvolvi aplicações web completas utilizando frameworks modernos como React, Node.js e tecnologias em nuvem.'
        },
        {
            year: '2018 - 2020',
            title: language === 'en' ? 'Software Developer' : 'Desenvolvedor de Software',
            description: language === 'en'
                ? 'Started my career as a software developer working with front-end technologies and learning back-end development.'
                : 'Iniciei minha carreira como desenvolvedor de software trabalhando com tecnologias front-end e aprendendo desenvolvimento back-end.'
        },
        {
            year: '2014 - 2018',
            title: language === 'en' ? 'Computer Science Degree' : 'Graduação em Ciência da Computação',
            description: language === 'en'
                ? 'Obtained my Bachelor\'s degree in Computer Science, focusing on software engineering and artificial intelligence.'
                : 'Obtive meu diploma de Bacharel em Ciência da Computação, com foco em engenharia de software e inteligência artificial.'
        }
    ];
    
    // Animate timeline items as they become visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setActiveItem(index);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        document.querySelectorAll('.timeline-item').forEach((item) => {
            observer.observe(item);
        });
        
        return () => {
            observer.disconnect();
        };
    }, []);
    
    return (
        <section className={`
             px-10 md:px-20
            snap-start 
            flex flex-col items-center 
            min-h-screen w-full
            pt-20 pb-24
            mt-16
            ${isDarkMode ? 'bg-dark text-lightMode-200' : 'bg-light text-lightMode-100'}
        `}>
            <h2 className={` 
            
            text-2xl text-center md:text-5xl font-bold mb-12 bg-gradient-to-r
            ${isDarkMode 
                ? 'from-darkMode-400 to-darkMode-500' // Gradiente mais claro para modo escuro
                : 'from-darkMode-500 to-lightMode-100/90' // Gradiente original para modo claro
                }
            bg-clip-text text-transparent
            `}>
                {language === 'en' ? 'My Journey' : 'Minha Trajetória'}
            </h2>

            <div className="relative w-full max-w-4xl">
                {/* Linha vertical central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-lightMode-300"></div>
                
                {/* Timeline items */}
                {timelineItems.map((item, index) => (
                    <div 
                        key={index}
                        data-index={index}
                        className={`
                            timeline-item 
                            relative 
                            flex 
                            mb-12
                            transition-all duration-700
                            ${activeItem >= index ? 'opacity-100' : 'opacity-20'}
                        `}
                    >
                        {/* Lado esquerdo ou direito baseado no índice */}
                        <div className={`
                            flex w-full items-center
                            ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                        `}>
                            {/* Conteúdo */}
                            <div className={`
                                w-5/12 
                                p-6 
                                rounded-lg
                                transition-all duration-500 transform
                                ${activeItem >= index ? 'translate-y-0' : index % 2 === 0 ? '-translate-y-8' : 'translate-y-8'}
                                ${isDarkMode ? 'bg-darkMode-800' : 'bg-lightMode-200/40'}
                                
                            `}>
                                <span className="text-lightMode-500 font-light block mb-2">{item.year}</span>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm md:text-base opacity-80">{item.description}</p>
                            </div>
                            
                            {/* Espaço central */}
                            <div className="w-2/12 flex justify-center relative">
                                {/* Círculo na linha do tempo */}
                                <div className={`
                                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                    w-5 h-5 rounded-full z-10
                                    ${activeItem >= index ? 'bg-lightMode-500' : 'bg-lightMode-300'}
                                    transition-colors duration-500
                                `}></div>
                            </div>
                            
                            {/* Lado oposto vazio */}
                            <div className="w-5/12"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;