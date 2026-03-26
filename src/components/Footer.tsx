import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <style>{`
        .footer-container {
          background: linear-gradient(to bottom right, #1a202c, #000000);
          color: white;
          padding: 3rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .footer-layout {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .footer-text-center {
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer-text-center {
            text-align: left;
          }
        }
        .copy-text {
          font-size: 0.875rem;
          color: #9ca3af;
          transition: color 0.3s;
        }
        .copy-text:hover {
          color: white;
        }
        .crafted-text {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.5rem;
        }
        .social-links {
          display: flex;
          gap: 2rem;
        }
        .social-btn {
          position: relative;
          padding: 0.75rem;
          background: #1f2937;
          border-radius: 1rem;
          transition: all 0.5s;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-btn:hover {
          transform: scale(1.1);
          color: white;
        }
        .github-btn:hover {
          background: linear-gradient(to right, #2563eb, #9333ea);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(59, 130, 246, 0.25);
        }
        .linkedin-btn:hover {
          background: linear-gradient(to right, #3b82f6, #1d4ed8);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(59, 130, 246, 0.25);
        }
        .email-btn:hover {
          background: linear-gradient(to right, #ef4444, #dc2626);
          box-shadow: 0 20px 25px -5px rgba(239, 68, 68, 0.25), 0 8px 10px -6px rgba(239, 68, 68, 0.25);
        }
        .tooltip {
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          background: black;
          color: white;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .social-btn:hover .tooltip {
          opacity: 1;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #1f2937;
        }
        .built-text {
          font-size: 0.75rem;
          color: #6b7280;
        }
        .designed-text {
          font-size: 0.75rem;
          color: #4b5563;
          margin-top: 0.25rem;
        }
      `}</style>
      <div className="footer-content">
        <div className="footer-layout">
          {/* Copyright */}
          <div className="footer-text-center">
            <p className="copy-text">
              &copy; {currentYear} Rishabadev P. All rights reserved.
            </p>
            <p className="crafted-text">
              Crafted with passion and precision
            </p>
          </div>
          
          {/* Social Links */}
          <div className="social-links">
            <a 
              href="https://github.com/Rishabadev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github-btn"
              aria-label="GitHub"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div className="tooltip">GitHub</div>
            </a>
            
            <a 
              href="https://linkedin.com/in/rishabadev-p-205837312" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin-btn"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="tooltip">LinkedIn</div>
            </a>
            
            <a 
              href="mailto:rishabadevp@gmail.com" 
              className="social-btn email-btn"
              aria-label="Email"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div className="tooltip">Email</div>
            </a>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="footer-bottom">
          <p className="built-text">
            Built with React & Vanilla CSS
          </p>
          <p className="designed-text">
            Designed and developed by Rishabadev P
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
