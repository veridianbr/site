import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode, language } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-0 pb-20 -mt-1
        ${isDarkMode ? "bg-darkMode-100 text-darkMode-300" : "bg-lightMode-100 text-lightMode-300"}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`
            text-2xl text-center 
            md:text-5xl
            font-bold
            leading-relaxed
            mb-20
            bg-gradient-to-r 
            ${isDarkMode 
                ? 'from-darkMode-400 to-darkMode-500' // Gradiente mais claro para modo escuro
                : 'from-lightMode-400/80 to-lightMode-300/50' // Gradiente original para modo claro
            }
            bg-clip-text text-transparent
            transition-all transform `}
        >
          {language === "en" ? "About Me" : "Sobre Mim"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className={`text-lg mb-6 leading-relaxed
              ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
            >
              {language === "en" 
                ? "I'm a passionate full-stack developer and AI enthusiast with a strong background in building modern web applications and machine learning solutions. With several years of professional experience, I've developed a comprehensive skill set that allows me to tackle complex problems and deliver efficient, scalable solutions."
                : "Sou um desenvolvedor full-stack apaixonado e entusiasta de IA com uma forte experiência na construção de aplicações web modernas e soluções de machine learning. Com vários anos de experiência profissional, desenvolvi um conjunto abrangente de habilidades que me permite enfrentar problemas complexos e entregar soluções eficientes e escaláveis."}
            </p>
            
            <p className={`text-lg mb-6 leading-relaxed
              ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
            >
              {language === "en"
                ? "My journey in technology began with a curiosity about how things work, which evolved into a passion for creating intuitive and impactful digital experiences. I constantly strive to stay updated with the latest industry trends and technologies, ensuring that my work is both innovative and relevant."
                : "Minha jornada na tecnologia começou com uma curiosidade sobre como as coisas funcionam, que evoluiu para uma paixão por criar experiências digitais intuitivas e impactantes. Busco constantemente me manter atualizado com as últimas tendências e tecnologias do setor, garantindo que meu trabalho seja inovador e relevante."}
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className={`p-6 rounded-lg shadow-md h-full
              ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
            >
              <h3 className={`text-xl font-semibold mb-4
                ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
              >
                {language === "en" ? "Quick Facts" : "Fatos Rápidos"}
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className={`mr-2 text-xl
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
                  >•</span>
                  <span>
                    {language === "en" 
                      ? "Based in São Paulo, Brazil" 
                      : "Localizado em São Paulo, Brasil"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-xl
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
                  >•</span>
                  <span>
                    {language === "en" 
                      ? "MSc in Computer Science" 
                      : "Mestrado em Ciência da Computação"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-xl
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
                  >•</span>
                  <span>
                    {language === "en" 
                      ? "5+ years of professional experience" 
                      : "5+ anos de experiência profissional"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 text-xl
                    ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
                  >•</span>
                  <span>
                    {language === "en" 
                      ? "Remote work enthusiast" 
                      : "Entusiasta do trabalho remoto"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 p-6 rounded-lg
          ${isDarkMode ? "bg-darkMode-200" : "bg-lightMode-200"}`}
        >
          <h3 className={`text-2xl font-semibold mb-4
            ${isDarkMode ? "text-darkMode-400" : "text-lightMode-400"}`}
          >
            {language === "en" ? "My Approach" : "Minha Abordagem"}
          </h3>
          
          <p className={`text-lg leading-relaxed
            ${isDarkMode ? "text-darkMode-300" : "text-lightMode-300"}`}
          >
            {language === "en"
              ? "I believe in creating technology that solves real problems and enhances people's lives. My approach combines technical expertise with a user-centered focus, ensuring that solutions are not only technically sound but also intuitive and accessible. I'm particularly interested in the intersection of web development and artificial intelligence, exploring how these fields can complement each other to create innovative applications."
              : "Acredito na criação de tecnologia que resolve problemas reais e melhora a vida das pessoas. Minha abordagem combina experiência técnica com foco no usuário, garantindo que as soluções sejam não apenas tecnicamente sólidas, mas também intuitivas e acessíveis. Estou particularmente interessado na interseção entre desenvolvimento web e inteligência artificial, explorando como esses campos podem se complementar para criar aplicações inovadoras."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;