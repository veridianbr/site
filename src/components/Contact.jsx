import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  const contactInfo = [
    // {
    //   icon: <FaWhatsapp size={24} />,
    //   label: "WhatsApp",
    //   value: "+55 (XX) XXXXX-XXXX", // Placeholder, update with Veridian's WhatsApp if available
    //   link: "https://wa.me/55XXXXXXXXXXX", // Placeholder
    //   color: "text-green-500",
    // },
    {
      icon: <FaEnvelope size={24} />,
      label: language === "en" ? "Email" : "Email",
      value: "contato@veridian.com", // Placeholder, update with Veridian's email
      link: "mailto:contact@veridian.com", // Placeholder
      color: "text-blue-500",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      value: "/company/veridianbr",
      link: "https://www.linkedin.com/company/veridianbr", // Updated LinkedIn
      color: "text-blue-600",
    },
    // Removed GitHub, can be added if Veridian has a company GitHub
    // {
    //   icon: <FaGithub size={24} />,
    //   label: "GitHub",
    //   value: "@VeridianHub", // Example
    //   link: "https://github.com/VeridianHub", // Example
    //   color: isDarkMode ? "text-white" : "text-gray-800",
    // },
  ];

  return (
    <section
      id="contact"
      className={`p-4 sm:p-8 min-h-screen flex flex-col justify-center
            overflow-y-auto custom-scrollbar ${
              /* Added overflow-y-auto and custom-scrollbar */ ""
            }
            ${
              isDarkMode
                ? "bg-darkMode-100 text-lightMode-400"
                : "bg-lightMode-100 text-darkMode-300"
            }`}
    >
      <div className="max-w-4xl mx-auto">
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
          {language === "en" ? "Get In Touch" : "Entre em Contato"}
        </h2>

        <p
          className={`text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
        >
          {language === "en"
            ? "Interested in our AI automation solutions? Let's connect! Feel free to reach out through any of these channels."
            : "Interessado em nossas soluções de automação com IA? Vamos nos conectar! Sinta-se à vontade para entrar em contato através destes canais."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:scale-105
                               ${
                                 isDarkMode
                                   ? "bg-darkMode-200 border-darkMode-500 hover:border-darkMode-400/70"
                                   : "bg-white text-black border-lightMode-200 shadow-lg hover:border-lightMode-300/15"
                               }  hover:shadow-lg`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`${contact.color} group-hover:scale-110 transition-transform`}
                >
                  {contact.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold text-base sm:text-lg
                                        ${
                                          isDarkMode
                                            ? "text-white"
                                            : "text-darkMode-300"
                                        }`}
                  >
                    {contact.label}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      isDarkMode ? "text-darkMode-400" : "text-lightMode-400"
                    }`}
                  >
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p
            className={`text-xs sm:text-sm
                        ${
                          isDarkMode
                            ? "text-darkMode-400"
                            : "text-lightMode-400"
                        }`}
          >
            {language === "en"
              ? "We typically respond within 24 business hours."
              : "Geralmente respondemos em até 24 horas úteis."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
