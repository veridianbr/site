import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: 'https://github.com/yourusername/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    link: 'https://github.com/yourusername/project-three',
  },
];

const Projects = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;