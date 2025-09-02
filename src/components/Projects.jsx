import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack electronic products review platform with Html,css,Js frontend and django backend. Features user authentication, product filtering,review system and Rating Aggregation.",
      technologies: ["Python", "Django", "Js", "Html/CSS"],
      githubUrl: "#",
      liveUrl: "#",
      image: "🛒"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS featuring smooth animations and modern design.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      githubUrl: "#",
      liveUrl: "#",
      image: "🚀"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents my passion for creating innovative solutions.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            disabled
          >
            View More Projects
          </button>
          <p className="text-sm text-gray-500 mt-2">More projects coming soon! </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;