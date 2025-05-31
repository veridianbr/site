import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode, language } = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [buttonVisible, setButtonVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Animation for text and button appearance with different timing
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300); // Show text first

    // Animation for button appearance
    const animationTimer = setTimeout(() => {
      setButtonVisible(true);
    }, 1600);

    // Clean up intervals on unmount
    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  // Format date based on language
  const formatDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return currentTime.toLocaleDateString(
      language === "en" ? "en-US" : "pt-BR",
      options
    );
  };

  // Format time
  const formatTime = () => {
    return currentTime.toLocaleTimeString(
      language === "en" ? "en-US" : "pt-BR"
    );
  };

  return (
    <section
      className={`
            min-h-screen
            w-full
            flex
            justify-center
            items-center
            relative
            px-4 sm:px-8 md:px-16 lg:px-24
            snap-start
            ${
              isDarkMode
                ? "bg-darkMode-100 text-lightMode-200"
                : "bg-light text-lightMode-100"
            }
        `}
      id="hero"
    >
      <div className="absolute top-4 sm:top-8 right-4 sm:right-10 text-right select-none text-lightMode-300">
        <p className="text-xs sm:text-sm opacity-75">{formatDate()}</p>
        <p className="text-lg sm:text-2xl font-light">{formatTime()}</p>
      </div>

      <div className="flex flex-col items-center justify-center max-w-5xl">
        <p
          className={`
                    text-lg sm:text-2xl md:text-4xl lg:text-5xl 
                    text-center font-bold leading-relaxed mb-8
                    bg-gradient-to-r 
                    ${
                      isDarkMode
                        ? "from-darkMode-400 to-darkMode-500"
                        : "from-lightMode-400/80 to-lightMode-300/50"
                    }
                    bg-clip-text text-transparent
                    transition-all transform 
                    ${
                      textVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-12"
                    }
                `}
          style={{ transitionDuration: "1800ms" }}
        >
          {language === "en"
            ? "Veridian, founded in 2024 by two entrepreneurial prodigies, specializes in cutting-edge AI automations, primarily for WhatsApp. We've successfully developed over 20 automations in the past year, helping businesses streamline communication and enhance efficiency."
            : "A Veridian, fundada em 2024 por dois jovens empreendedores prodígios, é especializada em automações de IA de ponta, principalmente para WhatsApp. Desenvolvemos com sucesso mais de 20 automações no último ano, ajudando empresas a otimizar a comunicação e aumentar a eficiência."}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#about" // Changed from #projects to #about
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById("about"); // Target "about" section
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className={`
                            px-6 sm:px-8 py-2 sm:py-3 
                            font-extralight text-sm sm:text-base
                            bg-lightMode-500 
                            text-white 
                            rounded-md 
                            transition-all 
                            transform
                            ${buttonVisible ? "opacity-100" : "opacity-0"}
                            hover:opacity-80 
                        `}
            style={{ transitionDuration: "2300ms" }}
          >
            {language === "en" ? "Learn More About Us" : "Saiba Mais Sobre Nós"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
