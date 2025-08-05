import React from 'react';
import { Rocket, ArrowRight, Zap } from 'lucide-react';

const ProjectCTA = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-gray-800 hover:border-green-500 transition-all duration-500 shadow-2xl hover:shadow-green-500/10 my-12">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:mr-8">
        {/* Icon */}
        <div className="flex justify-center md:justify-start mb-4">
          <div className="p-4 bg-green-500 bg-opacity-20 rounded-full border border-green-500 border-opacity-30" style={{ borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}>
            <Rocket className="w-8 h-8 text-green-500" style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-poppins">
          Ready to Build Something
          <span className="block text-green-500" style={{ color: 'var(--accent-primary)' }}>Epic?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Let's transform your idea into a <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>revenue-generating</span> digital product. 
          I'll handle the tech while you focus on growing your business.
        </p>

        {/* Value Points */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="w-4 h-4 text-green-500" style={{ color: 'var(--accent-primary)' }} />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="w-4 h-4 text-green-500" style={{ color: 'var(--accent-primary)' }} />
            <span>Modern Tech Stack</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="w-4 h-4 text-green-500" style={{ color: 'var(--accent-primary)' }} />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Right CTA */}
      <div className="flex flex-col items-center">
        <a 
          href="#bookacall"
          className="group bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 font-bold text-lg mb-4"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          <span>Let's Build Something</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        
        {/* Secondary Info */}
        <p className="text-sm text-gray-500 text-center">
          Free consultation • No commitment required
        </p>
      </div>
    </div>
  );
};

export default ProjectCTA;