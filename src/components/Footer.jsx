import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { language } = useContext(ThemeContext);
    
    return (
        <footer className="text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Lucas Gontijo de Moraes. 
                   {language === 'en' 
                    ? ' All rights reserved.' 
                    : ' Todos os direitos reservados.'}
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/Luucasgontijo" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/lucas-gontijo-6887b92b3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:lucas.gontijo04@gmail.com">
                        {language === 'en' ? 'Email' : 'E-mail'}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;