import React, { useState, useEffect } from 'react';
import logo from '../assests/logoportfolio.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#stack", label: "Tech Stack" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        {/* Logo - Enhanced with glow effect */}
        <div className="flex items-center flex-shrink-0">
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <img 
              src={logo} 
              alt="Syed Abdullah" 
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-green-500 object-cover transition-all duration-300 group-hover:scale-110" 
              style={{ borderColor: 'var(--accent-primary)' }}
            />
          </div>
          <span className="ml-3 font-poppins font-bold text-lg text-white hidden sm:block">
            SA
          </span>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex space-x-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="relative group text-gray-300 hover:text-white font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="flex items-center flex-shrink-0">
          <a
            href="#bookacall"
            className="hidden md:block bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            Start Your Project
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-gray-300 hover:text-green-500 transition-colors duration-300 ml-4" 
            onClick={toggleDropdown}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isDropdownOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isDropdownOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isDropdownOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Enhanced Design */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-md border-b border-gray-800 md:hidden">
          <div className="flex flex-col items-center space-y-6 p-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative group text-gray-300 hover:text-green-500 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsDropdownOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
              </a>
            ))}
            <a 
              href="#bookacall" 
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-bold transform transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => setIsDropdownOpen(false)}
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;