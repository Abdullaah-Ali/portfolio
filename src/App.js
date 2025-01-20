import React, { useEffect } from "react";
import "./App.css";
import syed from "./assests/syed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";
import Projects from "./components/projects";
import ClientReviews from "./components/reviews";
import Stack from "./components/stack";
import ServicesSection from "./components/services";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import ProjectCTA from "./components/projectcta";
function App() {
  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement("script");
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
      <h1 className="zoro font-quicksand"><span style={{fontSize:"6rem"}}>Hi</span> <br></br> <span style={{color:"#DAA520", }}>Syed Abdullah here</span>,<br></br> Helping Companies Scale</h1>
      <img src={syed} alt="Syed Abdullah" className="image" />

      <p className="description text-gray-800">
  <span className="bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text font-bold text-4xl">Howdy!</span>
  <br />
  It's <span className="font-semibold text-blue-800">Syed Abdullah</span>, a <span className="font-semibold text-blue-700">Web Developer</span> and aspiring <span className="font-semibold text-blue-700">Machine Learning Engineer</span>, eager to learn new skills in the digital age. I’ve collaborated with several clients to grow their businesses and am always ready to help you do the same. My passion thrives in dynamic environments, and I’m constantly looking for new challenges to overcome and grow.
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
      <ProjectCTA />
      <ServicesSection />
      
      <Projects />
      <ClientReviews />
      <Stack />
      <Blogs />

      {/* Calendly Widget */}
      <div id="info" className="text-2xl font-bold text-center my-8 font-quicksand">
        <p>Let's discuss your Project details</p>
      </div>

<div className="calendly-container">
  <div
    id="bookacall"
    className="calendly-inline-widget"
    data-url="https://calendly.com/abdullahaliquadri?hide_gdpr_banner=1"
   
  />
</div>

      <Footer />
    </div>
  );
}

export default App;
