import React from 'react';


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow px-4 md:px-8 lg:px-16 w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;