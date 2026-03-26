"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        
        <div className="footer-row">
          
          {/* Left section */}
          <div className="footer-left">
            <p className="copyright">
              © {year} Rishabadev P. All rights reserved.
            </p>
            <p className="tagline">
              Crafted with passion and precision
            </p>
          </div>

          {/* Social icons */}
          <div className="footer-socials">

            <a
              href="https://github.com/Rishabadev"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn github"
              aria-label="GitHub"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="tooltip">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/rishabadev-p-205837312"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn linkedin"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
              </svg>
              <span className="tooltip">LinkedIn</span>
            </a>

            <a
              href="mailto:rishabadevp@gmail.com"
              className="icon-btn email"
              aria-label="Email"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="tooltip">Email</span>
            </a>

          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with Next.js & Three.js</p>
          <p>Designed & developed by Rishabadev P</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg,#0b0b0b,#000);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 3rem 0;
          color: #e5e7eb;
        }

        .footer-wrapper {
          max-width: 1100px;
          margin: auto;
          padding: 0 1.5rem;
        }

        .footer-row {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        @media(min-width:768px){
          .footer-row{
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .copyright{
          font-size:0.9rem;
          color:#9ca3af;
        }

        .tagline{
          font-size:0.75rem;
          color:#6b7280;
          margin-top:0.35rem;
        }

        .footer-socials{
          display:flex;
          gap:1.4rem;
        }

        .icon-btn{
          position:relative;
          width:46px;
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background:#111;
          color:#9ca3af;
          transition:all .35s ease;
        }

        .icon-btn:hover{
          transform:translateY(-3px);
          color:white;
        }

        .github:hover{
          background:linear-gradient(135deg,#2563eb,#9333ea);
          box-shadow:0 10px 20px rgba(37,99,235,.25);
        }

        .linkedin:hover{
          background:linear-gradient(135deg,#3b82f6,#1d4ed8);
        }

        .email:hover{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .tooltip{
          position:absolute;
          top:-28px;
          font-size:.7rem;
          background:#000;
          padding:2px 8px;
          border-radius:4px;
          opacity:0;
          pointer-events:none;
          transition:.3s;
        }

        .icon-btn:hover .tooltip{
          opacity:1;
        }

        .footer-bottom{
          text-align:center;
          margin-top:2rem;
          padding-top:1.5rem;
          border-top:1px solid rgba(255,255,255,0.08);
          font-size:.75rem;
          color:#6b7280;
        }

        .footer-bottom p:first-child{
          margin-bottom:0.3rem;
          .icon-btn:hover{
box-shadow:0 0 18px rgba(251,191,36,0.45);
}
        }
      `}</style>
    </footer>
  );
};

export default React.memo(Footer);