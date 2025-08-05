import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ChevronDown, ChevronUp, Target, Code2, TrendingUp, ExternalLink, Github, BarChart3, Clock, Users } from 'lucide-react';

const MetricsDisplay = ({ project }) => {
  const projectMetrics = {
    "Developer - Blogging Website": {
      performance: "40% faster content creation",
      impact: "$50K+ annual savings",
      users: "5K+ monthly active users"
    },
    "PaceDream Full Stack Developer": {
      performance: "60% booking efficiency increase",
      impact: "$200K+ revenue generated",
      users: "2K+ property listings"
    },
    "ClipIt": {
      performance: "85% workflow improvement",
      impact: "10K+ links organized",
      users: "500+ active users"
    }
  };

  const metrics = projectMetrics[project.title] || {
    performance: "50% efficiency boost",
    impact: "$100K+ value delivered",
    users: "1K+ satisfied users"
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
        <BarChart3 className="w-5 h-5 text-green-500 mx-auto mb-1" style={{ color: 'var(--accent-primary)' }} />
        <p className="text-xs text-gray-400 mb-1">Performance</p>
        <p className="text-sm font-bold text-white">{metrics.performance}</p>
      </div>
      <div className="text-center p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
        <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-1" style={{ color: 'var(--accent-primary)' }} />
        <p className="text-xs text-gray-400 mb-1">Impact</p>
        <p className="text-sm font-bold text-white">{metrics.impact}</p>
      </div>
      <div className="text-center p-3 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800">
        <Users className="w-5 h-5 text-green-500 mx-auto mb-1" style={{ color: 'var(--accent-primary)' }} />
        <p className="text-xs text-gray-400 mb-1">Scale</p>
        <p className="text-sm font-bold text-white">{metrics.users}</p>
      </div>
    </div>
  );
};

const CaseStudy = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const caseStudies = {
    "Developer - Blogging Website": {
      challenge: "Client needed a professional blogging platform to establish thought leadership and drive organic traffic, but existing solutions were either too expensive or lacked the specific AI features they required.",
      approach: "Built a custom MERN stack application with JWT authentication, integrated OpenAI API for content assistance, implemented SEO optimization with auto-generated meta tags, and created a responsive design that works across all devices.",
      results: "Delivered a scalable blogging platform that reduced content creation time by 40% through AI assistance and improved SEO rankings with automated optimization features.",
      timeline: "6 weeks",
      techHighlights: ["AI Integration", "SEO Optimization", "Real-time Analytics"]
    },
    "PaceDream Full Stack Developer": {
      challenge: "Property management company struggled with managing multiple rental types through separate systems, leading to inefficiencies and poor user experience for both owners and renters.",
      approach: "Developed a unified MERN application with dynamic property listings, integrated payment processing, implemented advanced search filters, and built separate dashboards for property owners and renters.",
      results: "Created a comprehensive property management platform that increased booking efficiency by 60% and reduced administrative overhead by streamlining all rental operations into one system.",
      timeline: "10 weeks",
      techHighlights: ["Payment Integration", "Advanced Search", "Dashboard Analytics"]
    },
    "ClipIt": {
      challenge: "Users were losing important links in browser chaos and needed a better way to organize and access their saved content across devices and teams.",
      approach: "Built a React-based bookmark manager with Firebase backend, implemented smart categorization, added team collaboration features, and created browser extensions for seamless link saving.",
      results: "Launched a productivity tool that helped users organize 10,000+ links in the first month, with 85% of users reporting improved workflow efficiency.",
      timeline: "4 weeks",
      techHighlights: ["Browser Extension", "Team Collaboration", "Smart Categorization"]
    }
  };

  const caseStudy = caseStudies[project.title] || {
    challenge: "Custom business requirements needed a tailored technical solution.",
    approach: "Implemented modern web technologies following best practices and industry standards.",
    results: "Successfully delivered a solution that met all project objectives and client expectations.",
    timeline: "8 weeks",
    techHighlights: ["Modern Tech Stack", "Best Practices", "Quality Delivery"]
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-green-500 font-semibold border border-gray-700 hover:border-green-500"
        style={{ color: 'var(--accent-primary)', borderColor: isExpanded ? 'var(--accent-primary)' : '' }}
      >
        <span className="flex items-center gap-2">
          <Target size={18} />
          Deep Dive Case Study
        </span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-6 p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          {/* Timeline Badge */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-green-500" style={{ color: 'var(--accent-primary)' }}>
              <Clock size={16} />
              <span className="text-sm font-medium">Delivered in {caseStudy.timeline}</span>
            </div>
            <div className="flex gap-2">
              {caseStudy.techHighlights.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs px-2 py-1 bg-green-500 bg-opacity-20 text-green-500 rounded-full border border-green-500 border-opacity-30"
                  style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-red-500 bg-opacity-20 rounded-lg">
                <Target className="text-red-400 flex-shrink-0" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-red-400 mb-2 text-lg">🎯 The Challenge</h4>
                <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg">
                <Code2 className="text-blue-400 flex-shrink-0" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-400 mb-2 text-lg">⚡ My Technical Approach</h4>
                <p className="text-gray-300 leading-relaxed">{caseStudy.approach}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-500 bg-opacity-20 rounded-lg">
                <TrendingUp className="text-green-400 flex-shrink-0" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-green-400 mb-2 text-lg">📈 Measurable Results</h4>
                <p className="text-gray-300 leading-relaxed">{caseStudy.results}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-hover bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-green-500 p-8 transform transition-all duration-500 ${
        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: isHovered ? 'var(--accent-primary)' : '' }}
    >
      {/* Project Image with Overlay */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl mb-6 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-green-500 font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>Live Preview</p>
            <div className="flex gap-4">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  {link.text === 'GitHub' ? <Github size={16} /> : <ExternalLink size={16} />}
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div>
        <h2 className="text-2xl text-white font-bold mb-4 font-poppins">{project.title}</h2>
        
        {/* Metrics Display */}
        <MetricsDisplay project={project} />
        
        <p className="text-gray-300 mb-6 leading-relaxed text-base">{project.bodyText}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="bg-green-500 bg-opacity-10 text-green-500 px-3 py-1.5 rounded-full text-sm font-medium border border-green-500 border-opacity-30 hover:bg-opacity-20 transition-all duration-300"
              style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <CaseStudy project={project} />
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
        
        {/* Projects Grid - Asymmetrical Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default Projects;