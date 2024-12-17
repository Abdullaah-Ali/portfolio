import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, languages }) => {
  return (
    <div id="services" className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 border border-gray-200 w-full">
      <div className="flex flex-col items-center text-center">
        {/* Icon Container */}
        <div className="mb-4 p-4 rounded-full bg-blue-100 text-blue-600">
          <Icon size={40} strokeWidth={1.5} />
        </div>
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 font-montserrat">
          {title}
        </h3>
        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed font-quicksand">
          {description}
        </p>
        {/* Languages */}
        <div className="mt-4 text-gray-600 text-sm font-open-sans">
          <span className="font-bold">Languages:</span> {languages.join(', ')}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "I build engaging websites with beautiful designs, ensuring they are user-friendly and responsive across all devices. On the server side, I focus on making websites run efficiently, handling data seamlessly, and integrating with other services to ensure smooth and reliable performance.",
      languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "I create visually stunning and user-friendly interfaces, focusing on seamless interactions and intuitive design to enhance the overall user experience.",
      languages: ['Figma', 'Sketch', 'Adobe XD'],
    },
    {
      icon: Brain,
      title: "Machine Learning Engineering",
      description:
        "Developing and deploying intelligent solutions using machine learning models. Driving innovation with advanced AI technologies.",
      languages: ['Python', 'TensorFlow', 'PyTorch'],
    },
  ];

  return (
    <section className="bg-[#F2F5F9] py-16">
      <div className="container mx-auto px-4">
        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              languages={service.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
