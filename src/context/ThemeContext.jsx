import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const changeLanguage = (lang) => setLanguage(lang);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, language, changeLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};