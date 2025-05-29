import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Assuming you use ThemeContext

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { isDarkMode } = useContext(ThemeContext); // Example usage of context

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Apply responsive visibility classes here:
  // 'hidden' makes it hidden by default (on small screens)
  // 'md:block' (or md:flex, md:inline-block, etc.) makes it visible from 'md' breakpoint upwards
  return (
    <div
      className={`
        hidden md:block text-sm p-2 
        ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}
        // ... any other existing classes for the clock ...
      `}
    >
      {time.toLocaleTimeString()}
      {/* Or your preferred time/date formatting */}
    </div>
  );
};

export default Clock;
