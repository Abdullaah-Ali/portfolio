import React, { useState } from 'react';
import './header.css'; // Make sure you import the CSS file

const Header = () => {
  // State to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility on mobile
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home1" className="link">Services</a>
        <a href="#home2" className="link">Projects</a>
        <a href="#home3" className="link">Experience</a>
        <a href="#home4" className="link">Client Reviews</a>
        <a href="#home5" className="link">Blogs</a>
        <a href="#home3" className="link">Book A Call</a>
      </nav>

      {/* Mobile menu button */}
      <button className="menu-btn" onClick={toggleDropdown}>
        &#9776; {/* Hamburger menu icon */}
      </button>

      {/* Dropdown menu for mobile */}
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <a href="#home1" className="link">Services</a>
        <a href="#home2" className="link">Projects</a>
        <a href="#home3" className="link">Experience</a>
        <a href="#home4" className="link">Client Reviews</a>
        <a href="#home5" className="link">Blogs</a>
        <a href="#home3" className="link">Book A Call</a>
      </div>
    </header>
  );
};

export default Header;
