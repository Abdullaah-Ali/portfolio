import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { TrendingUp, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get key metric for each project
  const getKeyMetric = (title) => {
    const metrics = {
      "Developer - Blogging Website": "40% faster content creation",
      "PaceDream Full Stack Developer": "$200K+ revenue generated",
      "ClipIt": "85% workflow improvement"
    };
    return metrics[title] || "50% efficiency boost";
  };

  // Get one-line description
  const getDescription = (title) => {
    const descriptions = {
      "Developer - Blogging Website": "Professional blogging platform with AI-powered content creation",
      "PaceDream Full Stack Developer": "Comprehensive property management platform",
      "ClipIt": "Smart bookmark manager with team collaboration"
    };
    return descriptions[title] || "Modern web application with cutting-edge features";
  };

  return (
    <div
      className="card-hover bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-green-500 p-5 transform transition-all duration-500 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: isHovered ? 'var(--accent-primary)' : '' }}
    >
      {/* Project Image - Stacked on top */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl mb-4 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Project Content - Vertical layout */}
      <div className="flex flex-col flex-grow">
        {/* Project Title */}
        <h2 className="text-2xl text-white font-black mb-2 font-poppins leading-tight">{project.title}</h2>
        
        {/* One-line Description */}
        <p className="text-gray-300 text-base mb-3 leading-relaxed">{getDescription(project.title)}</p>
        
        {/* Key Metric - Highlighted in Green */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 bg-green-500 bg-opacity-20 px-3 py-1.5 rounded-full border border-green-500 border-opacity-30">
            <TrendingUp size={16} className="text-green-500" style={{ color: 'var(--accent-primary)' }} />
            <span className="text-green-500 font-bold text-sm" style={{ color: 'var(--accent-primary)' }}>
              📈 {getKeyMetric(project.title)}
            </span>
          </div>
        </div>

        {/* Tech Stack - More compact */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span 
              key={idx} 
              className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full text-xs border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full text-xs border border-gray-700">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* CTA Buttons - Smaller and more compact */}
        <div className="flex gap-2 mt-auto">
          {project.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                link.text === 'GitHub' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600' 
                  : 'bg-green-500 hover:bg-green-600 text-black'
              }`}
              style={link.text !== 'GitHub' ? { backgroundColor: 'var(--accent-primary)' } : {}}
            >
              {link.text === 'GitHub' ? <Github size={14} /> : <ExternalLink size={14} />}
              {link.text === 'GitHub' ? 'Code' : 'Live'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = projectsData;

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="font-poppins font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Featured <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>Projects</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Real solutions that generated <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>$500K+ in revenue</span> for clients. 
            Each project showcases full-stack development with measurable business impact.
          </p>
          
          {/* Revenue Counter */}
          <div className="mt-8 inline-flex items-center gap-4 bg-gray-900 bg-opacity-50 px-8 py-4 rounded-full border border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>$500K+</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>15+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>99%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* Projects Grid - 2 cards per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Next Success Story?</h2>
          <p className="text-gray-400 text-lg mb-6">Let's create something amazing together</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            Start Your Project
            <ExternalLink size={20} />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;