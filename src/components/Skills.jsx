import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'Tailwind CSS',
        'Git',
        'TypeScript'
    ];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <li key={index} className="m-2 p-4 border rounded-lg shadow-md">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;