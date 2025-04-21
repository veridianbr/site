import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div className="flex w-full">
            {/* Fixed width sidebar */}
            <aside className="fixed top-0 left-0 h-full z-10">
                <Sidebar />
            </aside>
            
            <main className={`
                ml-32
                flex-1
                min-h-screen
                h-screen overflow-y-scroll
                snap-y snap-mandatory
                ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-lightMode-100'}
            `}>
                {React.Children.map(children, (child) => (
                    <section className="h-screen snap-start">
                        {child}
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Layout;