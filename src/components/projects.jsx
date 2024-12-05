import React from 'react';
import projectsData from '../data/projects.json'; // Adjust the path if needed

const Projects = () => {
  const { projects } = projectsData;

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-40 overflow-hidden rounded-t-lg mb-4">
              {/* Image Container with object-cover */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.bodyText}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
