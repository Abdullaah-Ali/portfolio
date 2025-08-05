import React, { useState } from 'react';
import { Code, Layers, Zap, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, technologies, pricing, deliveryTime, clientResults }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card-hover bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transition-all duration-500 border border-gray-800 hover:border-green-500 w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: isHovered ? 'var(--accent-primary)' : '' }}
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon Container with Glow Effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
          <div className="relative p-6 rounded-full bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30" style={{ borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}>
            <Icon size={48} strokeWidth={1.5} className="text-green-500" style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
          {title}
        </h3>

        {/* Key Metrics */}
       
         
         

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 w-full">
          <p className="font-bold text-green-500 text-sm mb-3" style={{ color: 'var(--accent-primary)' }}>Tech Stack:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="text-xs px-3 py-1.5 bg-green-500 bg-opacity-10 text-green-500 rounded-full border border-green-500 border-opacity-30 font-medium"
                style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#bookacall"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-green-500/25"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "MERN Stack Development",
      description: "Complete web applications built with MongoDB, Express.js, React, and Node.js. I handle everything from database design to responsive frontend, delivering scalable solutions that generate measurable ROI.",
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'AWS'],
      
    },
    {
      icon: Layers,
      title: "Design to Code",
      description: "Transform your Figma designs into pixel-perfect, high-converting React applications. I bridge the gap between design and development, ensuring your vision drives real business results.",
      technologies: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
     
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development including database architecture, RESTful APIs, user authentication, payment integration, and deployment. Complete business solutions that scale.",
      technologies: ['REST APIs', 'JWT Auth', 'Stripe', 'AWS/Vercel', 'Git', 'CI/CD'],
      
    },
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Technologies We <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>Work On</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Specialized in high-value MERN development that delivers <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>real business results</span>. 
            From concept to deployment, I create complete solutions that scale with your growth.
          </p>

          {/* Value Proposition Banner */}
          <div className="inline-flex items-center gap-6 bg-gray-900 bg-opacity-50 px-8 py-4 rounded-full border border-gray-800 mb-12">
            <div className="text-center">
              <div className="text-xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>99%</div>
              <div className="text-xs text-gray-400">On-Time Delivery</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>5X</div>
              <div className="text-xs text-gray-400">ROI Average</div>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl font-black text-green-500" style={{ color: 'var(--accent-primary)' }}>24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>
        
        {/* Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              pricing={service.pricing}
              deliveryTime={service.deliveryTime}
              clientResults={service.clientResults}
            />
          ))}
        </div>

        

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>Profitable?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Let's discuss your project requirements and create a solution that drives real results.
            </p>
            <a
              href="#bookacall"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg transform transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              Get Your Quote
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;