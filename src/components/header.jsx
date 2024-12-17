import React, { useState } from 'react';
import './header.css'; // Make sure you import the CSS file
import logo from '../assests/logoportfolio.png'

const Header = () => {
  // State to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility on mobile
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (

     
    <header className="header">
      
      <div id="logogo" className="logogo">
  <img src={logo} alt="Syed Abdullah" className="headerimagelogo" />
</div>


      <nav className="nav">
        <a href="#home1" className="link">Services</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#home3" className="link">Experience</a>
        <a href="#reviews" className="link">Client Reviews</a>
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
        <a href="#reviews" className="link">Client Reviews</a>
        <a href="#home5" className="link">Blogs</a>
        <a href="#home3" className="link">Book A Call</a>
      </div>
    </header>
  );
};

export default Header;
