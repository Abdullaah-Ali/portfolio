import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assests/logoportfolio.png';

const Footer = () => {
  return (
    <div className="w-full">
<footer className="text-black py-12[2-rem] text-center w-full bottom-0 left-0 right-0 rem">
<div className="container mx-auto px-4">

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center">

            {/* Logo Positioned Above Tagline */}
            <div className="mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full"
              />
            </div>

            {/* Tagline */}
            <span className="text-3xl sm:text-4xl font-extrabold mb-4">
              Developing your solutions.
            </span>

            {/* Your Name */}
            <div className="flex justify-center items-center mb-6">
              <span className="text-lg sm:text-2xl font-semibold">
                Syed
              </span>
              <span className="ml-2 text-lg sm:text-2xl font-semibold">
                Abdullah
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mb-4 text-black">
              <a
                href="https://github.com/Abdullaah-Ali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-abdullah-ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </a>
              <a
                href="mailto:abdullahaliquadri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-black">© 2024 All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
