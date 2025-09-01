import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Home/Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Rishabadev P</h1>
          <p className="text-xl md:text-2xl text-white mb-8">UG STUDENT</p>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Work
          </button>
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

export default App;