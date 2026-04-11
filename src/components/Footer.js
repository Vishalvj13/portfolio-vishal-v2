import React from 'react';
import '../styles/Footer.css';
import { Command, FileText } from 'lucide-react';

const Footer = ({ onOpenResume, onOpenCommandPalette }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-name">Vishal Junghare</h3>
          <p className="footer-tagline">Backend-focused engineer crafting cloud-ready systems and modern interfaces.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Vishalvj13" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vishal-junghare-vj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:moodyjester35@gmail.com">Email</a>
        </div>

        <div className="footer-actions">
          <button onClick={onOpenResume}><FileText size={15} /> Resume preview</button>
          <button onClick={onOpenCommandPalette}><Command size={15} /> Quick actions</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vishal Junghare · Built with React, motion, and intentional UX improvements.</p>
      </div>
    </footer>
  );
};

export default Footer;
