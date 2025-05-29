import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex w-full">
      {/* Mobile Header */}
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main
        className={`
                w-full md:ml-32
                flex-1
                min-h-screen
                h-screen overflow-y-scroll
                snap-y snap-mandatory
                pt-16 md:pt-0
                ${
                  isDarkMode
                    ? "bg-darkMode-100 text-lightMode-200"
                    : "bg-light text-lightMode-100"
                }
            `}
      >
        {React.Children.map(children, (child) => (
          <section className="min-h-screen snap-start">{child}</section>
        ))}
      </main>
    </div>
  );
};

export default Layout;
