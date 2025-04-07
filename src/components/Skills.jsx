import React from 'react';
import { FaPython, FaJs, FaReact, FaGit } from "react-icons/fa";
import {  SiN8N, SiLangchain, SiTailwindcss, SiTypescript} from "react-icons/si";
import { SiCplusplus } from "react-icons/si";


const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython className="text-2xl mb-2" /> },
        { name: 'N8n', icon: <SiN8N className="text-2xl mb-2" /> },
        { name: 'C-like', icon: <SiCplusplus className="text-2xl mb-2" /> }, // Using the Devicons version
        { name: 'Langchain', icon: <SiLangchain className="text-2xl mb-2" /> },
        { name: 'Javascript', icon: <FaJs className="text-2xl mb-2" /> },
        { name: 'React', icon: <FaReact className="text-2xl mb-2" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl mb-2" /> },
        


        { name: 'Git', icon: <FaGit className="text-2xl mb-2" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-2xl mb-2" /> }
    ];

    return (
        <section id="skills" className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <li key={index} className="m-2 p-4 border rounded-lg shadow-md flex flex-col items-center">
                        {skill.icon}
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;