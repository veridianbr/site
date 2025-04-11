import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Set false as the default value to start with light mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Check if there's a saved preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        // Only apply saved theme if it exists and equals 'dark'
        // Otherwise default to light mode
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }

        // Load saved language preference if available
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        // Save preference to localStorage whenever it changes
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        // Save language preference
        localStorage.setItem('language', language);
    }, [language]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, language, changeLanguage }}>
            {children}
        </ThemeContext.Provider>
    );
};