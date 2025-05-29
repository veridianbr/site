import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/scrollbar.css";

// Updated projects with deploy links
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    githubLink: "https://github.com/yourusername/project-one",
    deployLink: "https://project-one-demo.vercel.app/",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    githubLink: "https://github.com/yourusername/project-two",
    deployLink: "https://project-two-demo.vercel.app/",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    githubLink: "https://github.com/yourusername/project-three",
    deployLink: "https://project-three-demo.vercel.app/",
  },
  // You can add more projects here
];

const Projects = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <section
      className={
        `py-12 sm:py-20 h-full flex flex-col` +
        ` ${
          isDarkMode
            ? "bg-darkMode-100 text-lightMode-200"
            : "bg-light text-lightMode-100"
        }`
      } 
      id="projects"
    >
      <h2
        className={`
        text-xl sm:text-2xl md:text-4xl lg:text-5xl
        text-center 
        font-bold
        leading-relaxed
        mb-12 sm:mb-20
        bg-gradient-to-r 
        ${
          isDarkMode
            ? "from-darkMode-400 to-darkMode-500"
            : "from-lightMode-400/80 to-lightMode-300/50"
        }
        bg-clip-text text-transparent
        transition-all transform `}
      >
        Projects
      </h2>

      {/* Horizontal scrolling container */}
      <div className="flex-1 flex items-center px-2 sm:px-4 md:px-10">
        <div className="scroll-container-wrapper relative">
          <div
            className={`
            w-full overflow-x-auto pb-2 snap-x snap-mandatory
            custom-scrollbar ${
              isDarkMode ? "dark-scrollbar" : "light-scrollbar"
            }
          `}
          >
            <div className="flex gap-4 sm:gap-6 min-w-max px-[5vw] sm:px-[calc(50vw-40vw)] md:px-[calc(50vw-33vw)] pb-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`
                    flex flex-col justify-between
                    w-[80vw] sm:w-[75vw] md:w-[66vw] 
                    h-[60vh] sm:h-[calc(66vw*0.6)] max-h-[500px] 
                    flex-shrink-0
                    rounded-xl p-4 sm:p-6
                     ${
                        isDarkMode
                          ? "bg-darkMode-200 border-darkMode-500 hover:border-darkMode-400/70"
                          : "bg-white text-black border-lightMode-200 shadow-lg hover:border-lightMode-300/10"
                      } 
                    border
                    cursor-pointer
                    transition-all duration-300 hover:shadow-lg
                    snap-center
                  `}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Button container */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 justify-center">
                    {/* Deploy button */}
                    <a
                      href={project.deployLink}
                      className={`
                        px-4 py-2 rounded-lg text-center text-sm sm:text-base
                        ${
                          isDarkMode
                            ? "bg-darkMode-200 text-white hover:bg-darkMode-500"
                            : "bg-lightMode-300 text-lightMode-800 hover:bg-lightMode-400"
                        }
                        transition-colors duration-200
                      `}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>

                    {/* GitHub button */}
                    <a
                      href={project.githubLink}
                      className={`
                        px-4 py-2 rounded-lg text-center border text-sm sm:text-base
                        ${
                          isDarkMode
                            ? "border-darkMode-400 text-gray-300 hover:bg-darkMode-300"
                            : "border-lightMode-400 text-gray-700 hover:bg-lightMode-300"
                        }
                        transition-colors duration-200
                      `}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
