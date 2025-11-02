import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    const serviceID = 'service_2awlsze'; 
    const templateID = 'template_wn388bl'; 
    const publicKey = 'mJ0Bug7mXtKd1arPd'; 
    
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Thank you for your message! I\'ll get back to you soon. 🚀');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Sorry, there was an error sending your message. Please try again or contact me directly at rishabadevp@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, innovative ideas, or opportunities to bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Have a project in mind? Want to collaborate on something amazing? Or just want to say hello? 
                I'd love to hear from you. Send me a message and I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl mr-6 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400 mb-1">EMAIL</h4>
                  <a href="mailto:rishabadevp@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    rishabadevp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl mr-6 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400 mb-1">LINKEDIN</h4>
                  <a href="https://linkedin.com/in/rishabadev-p-205837312" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                    linkedin.com/in/rishabadev-p-205837312
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl mr-6 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-400 mb-1">GITHUB</h4>
                  <a href="https://github.com/Rishabadev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                    github.com/Rishabadev
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-10 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-600 rounded-xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-300 bg-gray-700/50 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-600 rounded-xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-300 bg-gray-700/50 text-white placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-5 py-4 border border-gray-600 rounded-xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 transition-all duration-300 bg-gray-700/50 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, collaboration idea, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 font-semibold text-lg border border-purple-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;