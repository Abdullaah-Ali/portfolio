import React from 'react';
import './App.css';
import syed from './assests/syed.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header';
import Projects from './components/projects';
import ClientReviews from './components/reviews';
import Stack from './components/stack';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="header">Syed Abdullah - Full Stack Developer</h1>
      <img src={syed} alt="Syed Abdullah" className="image" />
      <h2 className="subtitle">Helping Companies Scale</h2>
      <p className="description">
        I'm Syed Abdullah Ali, a full-stack MERN developer passionate about building innovative digital products.<br />
        I’ve worked with teams across various industries to turn ideas into market-ready web applications.
      </p>
      <div className="icon">
        <a href="https://github.com/Abdullaah-Ali" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/syed-abdullah-ali/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:abdullahaliquadri@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <Projects />
      <ClientReviews />
      <Stack />
    </div>
  );
}

export default App;
