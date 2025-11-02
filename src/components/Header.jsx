import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div
            className={`text-2xl font-extrabold tracking-wide transition-all duration-500 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Welcome!
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className={`relative group font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-300' : 'text-gray-200'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Neon underline */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                    from-blue-500 via-purple-500 to-pink-500
                    group-hover:w-full transition-all duration-300"
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-3 overflow-hidden
          transition-all duration-500 ease-out
          ${
            isMenuOpen
              ? 'max-h-60 opacity-100 py-4 shadow-2xl'
              : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-3 px-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="group py-3 px-4 text-left text-gray-300 hover:text-white
                  transition-all duration-300 rounded-lg
                  hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
              >
                <span className="relative">
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      group-hover:w-full transition-all duration-300"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
