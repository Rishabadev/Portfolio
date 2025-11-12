import React from 'react';
// 1. IMPORT LINK HERE
import { Link } from 'react-router-dom'; 
import TECH from "../assets/images/TECHR.png";
import web from "../assets/images/logo-pf.png";
// TODO: Import your main design poster image here
// import DESIGN_POSTER from "../assets/images/design_poster.png"; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Review Website",
      description: "A full-stack electronic products review platform with HTML/CSS/JS frontend and Django backend. Features user authentication, product filtering, review system, and rating aggregation.",
      technologies: ["Python", "Django", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/Rishabadev/Tech-talks",
      liveUrl: "#",
      image: TECH,
      accentColor: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS featuring smooth animations, modern design, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Vite", "GitHub Pages"],
      githubUrl: "https://github.com/Rishabadev/Portfolio",
      liveUrl: "https://rishabadev.github.io/Portfolio/",
      image: web,
      accentColor: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Digital Arts & Design",
      description: "A snapshot of my skills across digital art. Click 'View Designs' to see a gallery of my posters and creative work.",
      technologies: ["Figma", "Canva", "Photoshop"],
      isDesignProject: true,
      galleryUrl: "/design-gallery", // This must match the path in App.jsx
      image: web, // TODO: Replace this with your design image
      accentColor: "from-pink-500 via-red-500 to-yellow-500"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents my passion for creating innovative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700 overflow-hidden 
             hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform 
             hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Project Image/Icon */}
              <div className="rounded-2xl shadow-lg bg-white overflow-hidden">
                {/* ... (image rendering logic) ... */}
                {typeof project.image === "string" && (project.image.startsWith("http") || project.image.endsWith(".jpg") || project.image.endsWith(".png")) ? (
                  <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-t-2xl"/>
                ) : typeof project.image === "string" ? (
                  <div className="flex justify-center items-center h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 text-6xl">{project.image}</div>
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover rounded-t-2xl"/>
                )}
              </div>

              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-700/50 text-gray-200 text-sm px-4 py-2 rounded-full border border-gray-600 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- PROJECT LINKS SECTION --- */}
                <div className="flex space-x-5 border-t border-gray-700 pt-6">
                  {project.isDesignProject ? (
                    // 2. THIS MUST BE A <Link> COMPONENT WITH A 'to' PROP
                    <Link 
                      to={project.galleryUrl} 
                      className="flex items-center text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-105 font-semibold group/link"
                    >
                      <div className="bg-gray-700/50 p-2 rounded-lg mr-3 group-hover/link:bg-pink-500/30 transition-colors duration-300 group-hover/link:scale-110 border border-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1-1m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      View Designs
                    </Link>
                  ) : (
                    // --- Default Links ---
                    <>
                      <a 
                        href={project.githubUrl}
                        target="_blank" rel="noopener noreferrer" // Good practice for external links
                        className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 font-semibold group/link"
                      >
                        <div className="bg-gray-700/50 p-2 rounded-lg mr-3 group-hover/link:bg-blue-500/30 transition-colors duration-300 group-hover/link:scale-110 border border-gray-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </div>
                        Source Code
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank" rel="noopener noreferrer" // Good practice for external links
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-105 font-semibold group/link"
                      >
                        <div className="bg-gray-700/50 p-2 rounded-lg mr-3 group-hover/link:bg-purple-500/30 transition-colors duration-300 group-hover/link:scale-110 border border-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </div>
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105 font-semibold disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden border border-purple-500/30"
            disabled
          >
            <span className="relative z-10">View More Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <p className="text-sm text-gray-400 mt-4 animate-pulse">
            More innovative projects related to robotics and embedded systems coming soon! 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
