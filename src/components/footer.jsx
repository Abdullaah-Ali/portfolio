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

          {/* Services Section */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  MERN Stack Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  Design to Code
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <FontAwesomeIcon icon={faCode} className="text-sm" />
                  Full-Stack Solutions
                </a>
              </li>
            </ul>
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start gap-2">
                © 2024 Syed Abdullah. Built with 
                <FontAwesomeIcon icon={faHeart} className="text-red-500 text-sm" />
                and lots of caffeine.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-green-500 font-bold" style={{ color: 'var(--accent-primary)' }}>15+</div>
                <div>Projects</div>
              </div>
              <div className="w-px h-8 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-green-500 font-bold" style={{ color: 'var(--accent-primary)' }}>$500K+</div>
                <div>Generated</div>
              </div>
              <div className="w-px h-8 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-green-500 font-bold" style={{ color: 'var(--accent-primary)' }}>99%</div>
                <div>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8">
          <p className="text-2xl md:text-3xl font-bold text-gray-600">
            Developing solutions that <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>matter</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
