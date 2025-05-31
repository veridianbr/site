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
          {language === "en" ? "About Veridian" : "Sobre a Veridian"}
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-3">
            <p
              className={`text-base sm:text-lg mb-6 leading-relaxed
                ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
            >
              {language === "en" ? (
                <>
                  Veridian was established in 2024 by two visionary young
                  entrepreneurs with a passion for transformative technology. We
                  specialize in developing bespoke{" "}
                  <strong>AI-powered automations</strong>, with a primary focus
                  on enhancing business communications through{" "}
                  <strong>WhatsApp</strong>. Our solutions are designed to
                  optimize workflows, improve customer engagement, and drive
                  growth. In just the past year, we've proudly delivered over{" "}
                  <strong>20 innovative automation projects</strong> for diverse
                  clients. At Veridian, we combine technical expertise with a
                  deep understanding of business needs to create intelligent,
                  scalable, and user-friendly automation tools.
                </>
              ) : (
                <>
                  A Veridian foi fundada em 2024 por dois jovens empreendedores
                  visionários com paixão por tecnologia transformadora. Somos
                  especializados no desenvolvimento de{" "}
                  <strong>
                    automações personalizadas com Inteligência Artificial
                  </strong>
                  , com foco principal em aprimorar a comunicação empresarial
                  através do <strong>WhatsApp</strong>. Nossas soluções são
                  projetadas para otimizar fluxos de trabalho, melhorar o
                  engajamento do cliente e impulsionar o crescimento. Apenas no
                  último ano, entregamos com orgulho mais de{" "}
                  <strong>20 projetos de automação inovadores</strong> para
                  diversos clientes. Na Veridian, combinamos expertise técnica
                  com um profundo entendimento das necessidades de negócios para
                  criar ferramentas de automação inteligentes, escaláveis e
                  fáceis de usar.
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
                {language === "en"
                  ? "Company Highlights"
                  : "Destaques da Empresa"}
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Founded in 2024"
                      : "• Fundada em 2024"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Based in Brazil"
                      : "• Sediada no Brasil"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• 20+ AI automations developed"
                      : "• Mais de 20 automações de IA desenvolvidas"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• WhatsApp automation specialists"
                      : "• Especialistas em automação para WhatsApp"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span>
                    {language === "en"
                      ? "• Founders: 2 entrepreneurial prodigies"
                      : "• Fundadores: 2 jovens prodígios empreendedores"}
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
            {language === "en" ? "Our Approach" : "Nossa Abordagem"}
          </h3>

          <p
            className={`text-base sm:text-lg leading-relaxed
            ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
          >
            {language === "en"
              ? "At Veridian, we believe in harnessing the power of Artificial Intelligence to solve real-world business challenges and create tangible value. Our approach is client-centric, focusing on understanding unique operational needs to deliver tailored automation solutions. We are committed to innovation, efficiency, and building long-term partnerships with our clients to support their journey towards digital transformation."
              : "Na Veridian, acreditamos em aproveitar o poder da Inteligência Artificial para resolver desafios de negócios do mundo real e criar valor tangível. Nossa abordagem é centrada no cliente, focando na compreensão das necessidades operacionais únicas para entregar soluções de automação personalizadas. Estamos comprometidos com a inovação, eficiência e construção de parcerias de longo prazo com nossos clientes para apoiar sua jornada em direção à transformação digital."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
