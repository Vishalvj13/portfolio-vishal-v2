import React from 'react';
import '../styles/Home.css';
import profileImg1 from '../assets/photo_primary2.png';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowDownToLine,
  Sparkles,
  BadgeCheck,
  BriefcaseBusiness,
  FileSearch,
  Command,
} from 'lucide-react';
import awsPractitioner from '../assets/aws-practitioner.png';
import awsSAA from '../assets/aws-saa.png';
import awsDVA from '../assets/aws-dva.png';
import isc2CC from '../assets/isc2CC.png';
import githubFoundation from '../assets/githubFoundation.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { SiCredly, SiMedium } from 'react-icons/si';
import { Link } from 'react-scroll';

const resumeFileId = '1RsoWIo2fpRE1joYaiEC6AuJeWnMZi8gj';
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

const certifications = [
  {
    src: awsPractitioner,
    alt: 'AWS Cloud Practitioner',
    href: 'https://www.credly.com/badges/0b298bc1-6a33-45f2-9882-18abf4f931fc/public_url',
  },
  {
    src: awsSAA,
    alt: 'AWS Solutions Architect Associate',
    href: 'https://www.credly.com/badges/a3f78562-dc4d-4cfd-8ad6-353e1c2c7e18/public_url',
  },
  {
    src: awsDVA,
    alt: 'AWS Developer Associate',
    href: 'https://www.credly.com/badges/3d8c0290-02a1-4998-b922-5c0b74e1b819/public_url',
  },
  {
    src: isc2CC,
    alt: 'ISC2 Certified in Cybersecurity',
    href: 'https://www.credly.com/users/vishal-junghare',
  },
  {
    src: githubFoundation,
    alt: 'GitHub Foundations',
    href: 'https://learn.microsoft.com/en-us/users/vishaljunghare-5555/credentials/e69e282efd095b2a?ref=https%3A%2F%2Fwww.credly.com%2F',
  },
];

const socialLinks = [
  {
    href: 'https://github.com/Vishalvj13',
    icon: <FaGithub />,
    label: 'GitHub',
    className: 'github-social',
  },
  {
    href: 'https://linkedin.com/in/vishal-junghare-vj',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    className: 'linkedin-social',
  },
  {
    href: 'https://www.instagram.com/vishal_13_?igsh=MWc5eWdpdGFhanBpNw==',
    icon: <FaInstagram />,
    label: 'Instagram',
    className: 'instagram-social',
  },
  {
    href: 'https://www.credly.com/users/vishal-junghare',
    icon: <SiCredly />,
    label: 'Credly',
    className: 'credly-social',
  },
  {
    href: 'https://medium.com/@vishal_13_',
    icon: <SiMedium />,
    label: 'Medium',
    className: 'medium-social',
  },
];

const heroStats = [
  {
    value: '4',
    label: 'Years building production systems',
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    value: '5',
    label: 'Industry certifications',
    icon: <BadgeCheck size={18} />,
  },
  {
    value: 'Java + AWS',
    label: 'Core engineering focus',
    icon: <Sparkles size={18} />,
  },
];

const Home = ({ onOpenResume, onOpenCommandPalette }) => {
  return (
    <section className="home" id="home">
      <Navbar onOpenResume={onOpenResume} onOpenCommandPalette={onOpenCommandPalette} />

      <ul className="blob-background" aria-hidden="true">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="home-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow-badge">
            <Sparkles size={16} /> Backend-first engineer with cloud and frontend versatility
          </div>

          <h1 className="hero-text">
            Vishal Junghare
            <span className="hero-role">
              Software Engineer building{' '}
              <span className="gradient-text">scalable backend systems</span> and polished product
              experiences.
            </span>
          </h1>

          <p className="hero-subtext">
            I work across <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>AWS</strong>
            , and <strong>React</strong> to build secure, reliable, and user-focused applications.
            <span className="typewriter-line">
              <Typewriter
                words={[
                  'Cloud Security Engineer',
                  'Backend Developer',
                  'AWS-Certified Builder',
                  'Modern Web Explorer',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={68}
                deleteSpeed={42}
                delaySpeed={1600}
              />
            </span>
          </p>

          <div className="hero-pill-row">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>AWS</span>
            <span>React</span>
            <span>Microservices</span>
          </div>

          <motion.div
            className="action-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <Link to="projects" smooth duration={500} offset={-80} className="primary-btn">
              View Projects
            </Link>

            <button type="button" className="secondary-btn" onClick={onOpenResume}>
              <FileSearch size={18} className="btn-icon" /> View Resume
            </button>

            <a href={resumeDownloadUrl} className="ghost-btn" download>
              <Download size={18} className="btn-icon" /> Download Resume
            </a>
          </motion.div>

          <div className="utility-row">
            <button type="button" className="palette-btn" onClick={onOpenCommandPalette}>
              <Command size={15} /> Quick actions <span>⌘K / Ctrl+K</span>
            </button>
          </div>

          <div className="social-strip">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${item.className}`}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="hero-stats-grid">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <div className="hero-stat-icon">{stat.icon}</div>
                <div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="profile-frame">
            <div className="profile-orbit profile-orbit-one"></div>
            <div className="profile-orbit profile-orbit-two"></div>
            <img src={profileImg1} alt="Vishal Junghare" className="profile-img" />
            <div className="profile-glass-card bottom-card">
              <span>Open to</span>
              <strong>Impactful engineering roles</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="certification-rail">
        <div className="certification-rail-copy">
          <span className="rail-label">Certifications</span>
          <p>Recognitions across cloud, security, and developer tooling.</p>
        </div>
        <div className="certifications">
          {certifications.map((cert) => (
            <a href={cert.href} target="_blank" rel="noopener noreferrer" key={cert.alt} className="cert-card">
              <img src={cert.src} alt={cert.alt} />
            </a>
          ))}
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-70} className="scroll-down" aria-label="Scroll to about section">
        <ArrowDownToLine size={20} />
        <span>Explore more</span>
      </Link>
    </section>
  );
};

export default Home;
