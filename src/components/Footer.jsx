import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              &copy; {currentYear} Rishabadev P. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Crafted with passion and precision
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-8">
            <a 
              href="https://github.com/Rishabadev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 bg-gray-800 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/rishabadev-p-205837312" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 bg-gray-800 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </div>
            </a>
            
            <a 
              href="mailto:rishabadevp@gmail.com" 
              className="group relative p-3 bg-gray-800 rounded-2xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </div>
            </a>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Designed and developed by Rishabadev P
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;