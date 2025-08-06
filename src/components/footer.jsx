import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assests/logoportfolio.png';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                <img
                  src={logo}
                  alt="Syed Abdullah Logo"
                  className="relative h-16 w-16 object-contain rounded-full border-2 border-green-500"
                  style={{ borderColor: 'var(--accent-primary)' }}
                />
              </div>
              <div className="ml-4">
                <h3 className="font-poppins font-black text-2xl text-white">SYED</h3>
                <h3 className="font-poppins font-black text-2xl text-green-500" style={{ color: 'var(--accent-primary)' }}>ABDULLAH</h3>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Full-Stack Developer building digital products that drive 
              <span className="text-green-500 font-semibold" style={{ color: 'var(--accent-primary)' }}> real business results</span>.
            </p>
          </div>

       

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl text-white mb-6">Let's Connect</h4>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:abdullahaliquadri@gmail.com"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-3"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                abdullahaliquadri@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Abdullaah-Ali"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" 
                />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-abdullah-ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" 
                />
              </a>
              <a
                href="mailto:abdullahaliquadri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="text-xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Syed Abdullah. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <FontAwesomeIcon icon={faHeart} className="text-red-500 text-sm" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
