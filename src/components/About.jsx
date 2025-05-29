import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-0 pb-20 -mt-1
        ${
          isDarkMode
            ? "bg-darkMode-100 text-darkMode-300"
            : "bg-lightMode-100 text-lightMode-300"
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
          {language === "en" ? "About Me" : "Sobre Mim"}
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-3">
            <p
              className={`text-base sm:text-lg mb-6 leading-relaxed
                ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
            >
              {language === "en" ? (
                <>
                  I'm a software engineer with a strong interest in artificial
                  intelligence and solid experience building chatbots and
                  automation workflows using low-code tools like{" "}
                  <strong>N8n</strong>, integrated with various APIs. On the
                  back end, I work primarily with <strong>C++</strong>,{" "}
                  <strong>Go</strong>, and <strong>Python</strong> to develop
                  robust and scalable solutions. I also have front-end expertise
                  with <strong>React</strong>, combining efficient API
                  consumption with a strong focus on usability and design.
                  Additionally, I excel in{" "}
                  <strong>requirements elicitation</strong>, creating detailed{" "}
                  <strong>technical diagrams</strong>, and facilitating
                  productive conversations with <strong>stakeholders</strong> to
                  ensure project alignment and success. This website, for
                  instance, was fully designed and developed by me, reflecting
                  my attention to performance, aesthetics, and user experience.
                </>
              ) : (
                <>
                  Sou engenheiro de software com forte interesse em inteligência
                  artificial e sólida experiência na criação de chatbots e
                  automações por meio de ferramentas low-code, como{" "}
                  <strong>N8n</strong>, integradas a diversas APIs. No back-end,
                  trabalho com linguagens como <strong>C++</strong>,{" "}
                  <strong>Go</strong> e <strong>Python</strong>, desenvolvendo
                  soluções robustas e escaláveis. Também atuo no front-end com{" "}
                  <strong>React</strong>, unindo consumo eficiente de APIs a uma
                  forte atenção à usabilidade e design. Este site, por exemplo,
                  foi inteiramente projetado e desenvolvido por mim, refletindo
                  minha preocupação com performance, estética e experiência do
                  usuário. Além disso, possuo forte habilidade em{" "}
                  <strong>levantamento de requisitos</strong>, elaboração de{" "}
                  <strong>diagramas técnicos</strong> detalhados e facilitação
                  de conversas produtivas com <strong>stakeholders</strong> para
                  garantir o alinhamento e sucesso dos projetos.{" "}
                </>
              )}
            </p>
          </div>

          <div className="xl:col-span-2">
            <div
              className={`p-4 sm:p-6 rounded-lg h-full 
              ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
            >
              <h3
                className={`text-lg sm:text-xl font-semibold mb-4
                ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
              >
                {language === "en" ? "Quick Facts" : "Fatos Rápidos"}
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Based in Brazil"
                      : "• Localizado no Brasil"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Graduating in Software Engineering"
                      : "• Graduando em Engenharia de Software"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• 2+ years of experience"
                      : "• 2+ anos de experiência"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Remote work enthusiast"
                      : "• Entusiasta do trabalho remoto"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• English fluent"
                      : "• Fluente em inglês"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg
          ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
        >
          <h3
            className={`text-lg sm:text-2xl font-semibold mb-4
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
          >
            {language === "en" ? "My Approach" : "Minha Abordagem"}
          </h3>

          <p
            className={`text-base sm:text-lg leading-relaxed
            ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
          >
            {language === "en"
              ? "I believe in creating technology that solves real problems and enhances people's lives. My approach combines technical expertise with a user-centered focus, ensuring that solutions are not only technically sound but also intuitive and accessible. I'm particularly interested in the intersection of web development and artificial intelligence, exploring how these fields can complement each other to create innovative applications."
              : "Acredito em criar tecnologia que resolve problemas reais e melhora a vida das pessoas. Minha abordagem une experiência técnica e foco no usuário, resultando em soluções sólidas, intuitivas e acessíveis. Tenho interesse especial na interseção entre desenvolvimento web e inteligência artificial, explorando como essa combinação pode gerar aplicações inovadoras."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
