import React from 'react';

const ProjectDetail = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Project Title</h1>
            <img src="/path/to/project-image.jpg" alt="Project" className="mb-4" />
            <p className="mb-4">
                Detailed description of the project goes here. Explain the purpose, technologies used, and any other relevant information.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <p className="mb-4">List of technologies used in the project.</p>
            <a href="https://github.com/your-repo" className="text-blue-500 hover:underline">View on GitHub</a>
        </div>
    );
};

export default ProjectDetail;