import React from 'react';
import { Link } from 'react-router-dom';
import POSTER_1 from "../assets/images/poster1.png";
import POSTER_2 from "../assets/images/poster2.png";
import POSTER_3 from "../assets/images/poster3.png";

const DesignGallery = () => {
  const designs = [
    {
      id: 1,
      title: "Event Poster: 'Sky Watch event poster'",
      description: "A poster for a sky watching event.",
      image: POSTER_1,
    },
    {
      id: 2,
      title: "Game landing page",
      description: "landing page design for the fictional fantasy video game 'Velvet Dawn.'",
      image: POSTER_2,
    },
    {
      id: 3,
      title: "pinterest login page",
      description: "A mock-up of a mobile-first sign-up / onboarding screen for Pinterest.",
      image: POSTER_3,
    }
  ];

  return (
    <section id="design-gallery" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Digital Arts Gallery
          </h2>
          {/* You were missing this <p> tag */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's a closer look at my creative work.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6 rounded"></div>
        </div>

        {/* Designs Grid */}
        {/* --- THE FIX IS HERE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {designs.map((design) => (
            <div 
              key={design.id}
              className="bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700 overflow-hidden 
                         shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group"
            >
              {/* Poster Image */}
              <img 
                src={design.image}
                alt={design.title}
                className="w-full h-auto object-cover rounded-t-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Poster Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {design.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-20">
          <Link 
            to="/#projects" // Links back to the projects section
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3 rounded-xl 
                       hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-500 
                       transform hover:scale-105 font-semibold group relative overflow-hidden"
          >
            <span className="relative z-10">← Back to All Projects</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DesignGallery;