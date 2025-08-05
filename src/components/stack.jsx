import React, { useState } from 'react';
import { DollarSign, TrendingUp, Star, Code } from 'lucide-react';
import node from '../assests/node.jpeg';
import download from '../assests/download.png';
import html from '../assests/html.png';
import python from '../assests/python.jpeg';
import react from '../assests/react.png';
import django from '../assests/django.png';
import figma from '../assests/figma.png';
import express from '../assests/express.png';
import mongo from '../assests/mongo.jpeg';
import git from '../assests/git.png';

const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-40 h-32 overflow-hidden transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-800 rounded-2xl bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg flex flex-col items-center justify-center hover:border-green-500 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderColor: isHovered ? 'var(--accent-primary)' : '',
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
      
      {/* Tech icon/image */}
      <div className="relative z-10 mb-2">
        {tech.image ? (
          <img 
            src={tech.image} 
            alt={tech.name} 
            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        ) : (
          <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center border border-green-500 border-opacity-30" style={{ borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}>
            <Code className="w-6 h-6 text-green-500" style={{ color: 'var(--accent-primary)' }} />
          </div>
        )}
      </div>

      {/* Tech name */}
      <h3 className="text-white font-semibold text-sm text-center relative z-10">
        {tech.name}
      </h3>

      {/* Proficiency level */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="bg-gray-800 bg-opacity-50 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-700 ease-out"
            style={{ 
              width: isHovered ? `${tech.proficiency}%` : '0%',
              backgroundColor: 'var(--accent-primary)'
            }}
          ></div>
        </div>
      </div>

      {/* Salary indicator */}
      
    </div>
  );
};

const Stack = () => {
  const techStack = [
    {
      name: 'React.js',
      image: react,
      proficiency: 95,
      category: 'Frontend',
      demandLevel: 'High'
    },
    {
      name: 'Node.js',
      image: node,
      proficiency: 92,
      category: 'Backend',
      demandLevel: 'High'
    },
    {
      name: 'Express.js',
      image: express,
      proficiency: 90,
      category: 'Backend',

      demandLevel: 'High'
    },
    {
      name: 'MongoDB',
      image: mongo,
      proficiency: 88,
      category: 'Database',
      demandLevel: 'High'
    },
    {
      name: 'Python',
      image: python,
      proficiency: 85,
      category: 'Backend/ML',
      demandLevel: 'Very High'
    },
    {
      name: 'HTML/CSS',
      image: html,
      proficiency: 98,
      category: 'Frontend',
      demandLevel: 'Medium'
    },
    {
      name: 'Django',
      image: django,
      proficiency: 82,
      category: 'Backend',
      demandLevel: 'High'
    },
    {
      name: 'Figma',
      image: figma,
      proficiency: 90,
      category: 'Design',
      demandLevel: 'High'
    },
    {
      name: 'Git',
      image: git,
      proficiency: 95,
      category: 'Tools',
      demandLevel: 'Essential'
    },
    {
      name: 'TypeScript',
      image: null,
      proficiency: 88,
      category: 'Frontend',
      demandLevel: 'Very High'
    },
    {
      name: 'AWS',
      image: null,
      proficiency: 80,
      category: 'Cloud',
      demandLevel: 'Very High'
    },
    {
      name: 'Next.js',
      image: null,
      category: 'Frontend',
      demandLevel: 'High'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Tools', 'Cloud'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTech = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  const totalAvgSalary = Math.round(techStack.reduce((sum, tech) => sum + tech.avgSalary, 0) / techStack.length);
  const highDemandTech = techStack.filter(tech => tech.demandLevel === 'Very High' || tech.demandLevel === 'High').length;

  return (
    <section id="stack" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Technologies That <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>We Work On</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            My arsenal of <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>high-value technologies</span> that companies are actively hiring for. 
            Each skill represents market demand and earning potential.
          </p>

          
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-green-500 text-black shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-green-500'
              }`}
              style={{ 
                backgroundColor: selectedCategory === category ? 'var(--accent-primary)' : '',
                borderColor: selectedCategory !== category ? '' : 'var(--accent-primary)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center mb-16">
          {filteredTech.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>




     

      
      </div>
    </section>
  );
};

export default Stack;