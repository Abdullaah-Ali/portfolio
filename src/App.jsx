import React, { useEffect, useState } from "react";
import syed from "./assests/syed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";
import Projects from "./components/projects";
import ClientReviews from "./components/reviews";
import Stack from "./components/stack";
import ServicesSection from "./components/services";
import Footer from "./components/footer";
import ProjectCTA from "./components/projectcta";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

// Floating CTA Button
const FloatingCTA = () => (
  <div className="floating-cta">
    <a
      href="#projects"
      className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-bold shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2"
      style={{ backgroundColor: 'var(--accent-primary)' }}
    >
      <span>View My Work</span>
      <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
    </a>
  </div>
);

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />;
};

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = false;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter animated-gradient">
      <ScrollProgress />
      <Header />
      
      {/* REVOLUTIONARY HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-6xl mx-auto">
          {/* Massive Name Display */}
          <div className="mb-8">
            <h1 className="font-poppins font-black text-6xl md:text-8xl lg:text-9xl mb-4 leading-none">
              <span className="block text-white">SYED</span>
              <span className="block text-green-500 typewriter" style={{ color: 'var(--accent-primary)' }}>
                ABDULLAH
              </span>
            </h1>
            <p className="font-inter font-semibold text-xl md:text-3xl lg:text-4xl text-gray-400 mb-8">
              Full-Stack Developer Who Ships Products That Matter
            </p>
          </div>

          {/* Profile Image with Glow Effect */}
          <div className="relative mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
              <img 
                src={syed} 
                alt="Syed Abdullah" 
                className="w-full h-full rounded-full border-4 border-green-500 object-cover relative z-10 shadow-2xl" 
                style={{ borderColor: 'var(--accent-primary)' }}
              />
            </div>
          </div>

          {/* Animated Metrics Counter */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-900 bg-opacity-50 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-green-500 mb-2" style={{ color: 'var(--accent-primary)' }}>
                <AnimatedCounter target={10} suffix="+" />
              </div>
              <p className="text-gray-400 font-medium">Projects Delivered</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 bg-opacity-50 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-green-500 mb-2" style={{ color: 'var(--accent-primary)' }}>
                <AnimatedCounter target={99} suffix="%" />
              </div>
              <p className="text-gray-400 font-medium">Client Satisfaction</p>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              <span className="text-4xl font-black text-green-500 block mb-4" style={{ color: 'var(--accent-primary)' }}>HOWDY!</span>
              I'm a <span className="font-bold text-white">Full-Stack Developer</span> and aspiring <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>Machine Learning Engineer</span> who transforms ideas into 
              <span className="font-bold text-white"> profitable digital products</span>. I've helped <span className="font-bold text-green-500" style={{ color: 'var(--accent-primary)' }}>3+ companies</span> scale their businesses 
              through cutting-edge web applications that drive real results.
            </p>
          </div>

          {/* Social Links with Enhanced Design */}
          <div className="flex justify-center gap-8 mb-12">
            <a 
              href="https://github.com/Abdullaah-Ali" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/syed-abdullah-ali/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
            </a>
            <a 
              href="mailto:abdullahaliquadri@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-4 bg-gray-900 bg-opacity-50 rounded-full border border-gray-800 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
            </a>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-full text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/25"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <span>Let's Build Something</span>
              <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} className="text-green-500 text-2xl" style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>
      </section>

      <FloatingCTA />
      <ServicesSection />
      <Projects />
      <ClientReviews />
      <Stack />

      <div id="info" className="text-center my-16 px-4">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Ready to <span className="text-green-500" style={{ color: 'var(--accent-primary)' }}>Scale Your Business?</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let's discuss how I can help you build the digital product your business needs to thrive in 2024.
        </p>
      </div>

      <div className="flex justify-center items-center mx-auto w-full max-w-5xl px-4 bg-black">
        <div
          id="bookacall"
          className="calendly-inline-widget w-full h-96 border-none overflow-hidden rounded-lg border border-gray-800"
          data-url="https://calendly.com/abdullahaliquadri?hide_gdpr_banner=1"
        ></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

