import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-100 flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hello! I'm Rishabadev</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate undergraduate student pursuing my degree in Electronics and Communication, passionate about electronics,embedded systems and technology. Exploring
              robotics and learning new tools and frameworks. 
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800">Name:</h4>
                <p className="text-gray-600">Rishabadev P</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email:</h4>
                <p className="text-gray-600">rishabadevp@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Age:</h4>
                <p className="text-gray-600">21</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">From:</h4>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Download CV
            </button>
          </div>

          {/* Right Side - Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800">HTML/CSS</span>
                  <span className="text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800">C</span>
                  <span className="text-gray-600">95%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800">C++</span>
                  <span className="text-gray-600">85%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800">Python</span>
                  <span className="text-gray-600">95%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800">Django</span>
                  <span className="text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;