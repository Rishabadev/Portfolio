import React from 'react';

const About = () => {
  const skills = [
    { name: 'C Programming', level: 95 },
    { name: 'Python', level: 95 },
    { name: 'C++', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'Embedded Systems', level: 90 },
    { name: 'PCB Design', level: 85 },
    { name: 'Robotics', level: 75 }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Electronics & Communication Engineering Student | Embedded Systems Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hello! I'm <span className="text-blue-400">Rishabadev</span></h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                I'm a passionate undergraduate student pursuing Electronics and Communication Engineering, 
                with a deep fascination for electronics, embedded systems, and cutting-edge technology. 
                My journey involves exploring the realms of robotics, IoT, and hardware-software integration.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-justify">
                I thrive on solving complex problems through innovative engineering solutions and enjoy 
                bridging the gap between hardware and software. When I'm not working on circuits or coding, 
                you can find me experimenting with new microcontrollers or staying updated with the latest 
                advancements in embedded technology.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400">NAME</h4>
                  <p className="text-white">Rishabadev P</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400">EMAIL</h4>
                  <p className="text-white">rishabadevp@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400">AGE</h4>
                  <p className="text-white">21 Years</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400">LOCATION</h4>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 font-semibold">
              Download CV
            </button>
          </div>

          {/* Right Side - Skills */}
          <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
