import React, { useEffect } from 'react';
import './App.css';
import syed from './assests/syed.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header';
import Projects from './components/projects';
import ClientReviews from './components/reviews';
import Stack from './components/stack';
import ServicesSection from './components/services'
import Footer from './components/footer';

function App() {
  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="App">
      <Header />
      <h1 className="header">Hi Syed Abdullah here, Helping Companies Scale
      </h1>
      <img src={syed} alt="Syed Abdullah" className="image" />


      <p className="description">
       <span>Howdy!</span>
       <br></br>
       It's Syed Abdullah, Web Developer and aspiring Machine Learning Engineer, aspiring to learn new skills  in the digital age. 
       I have worked with many Several clients in growing their businesses and am always ready to work for you. Working in different environments using different practices fuels my passion, still thriving to face challenges and grow.       </p>
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
      <ServicesSection />

      <Projects />
      <ClientReviews />
      
      <Stack />
      <div id = 'info'className='text-2xl font-bold'>
          <p>Lets discuss your project details </p>

      </div>

  
      <div 
id="bookacall"
        className="calendly-inline-widget" 
        data-url="https://calendly.com/abdullahaliquadri?hide_gdpr_banner=1" 
        style={{
          minWidth: '500px', 
          height: '600px',
          marginTop : '34px'
        }}
      />
    <Footer />
 
    </div>


  );
}

export default App;