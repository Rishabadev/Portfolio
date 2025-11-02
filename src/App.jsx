import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DesignGallery from './components/DesignGallery';

function PortfolioHome() {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Home/Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-bounce-slow delay-1000"></div>
        
        <div className="text-center relative z-10 px-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Rishabadev P
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light tracking-wide">
            Electronics & Communication Engineering Student
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Passionate about embedded systems, robotics, and creating innovative 
            solutions that bridge hardware and software.
          </p>

          {/* CTA Button - Glass Morphism Style */}
          <button 
            onClick={scrollToProjects}
            className="group relative bg-gray-800/40 backdrop-blur-md text-white px-10 py-4 rounded-full font-semibold text-lg border border-white/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm"></div>
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/design-gallery" element={<DesignGallery />} />
    </Routes>
  );
}

export default App;