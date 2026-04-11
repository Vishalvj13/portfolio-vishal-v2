import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import {
  Menu,
  X,
  Home,
  User,
  Brain,
  FolderKanban,
  GraduationCap,
  Mail,
  Briefcase,
  NotebookText,
  Sparkles,
  Moon,
  Sun,
  Command,
  FileText,
} from 'lucide-react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: 'home', icon: <Home size={16} />, label: 'Home' },
  { to: 'about', icon: <User size={16} />, label: 'About' },
  { to: 'now', icon: <Sparkles size={16} />, label: 'Now' },
  { to: 'experience', icon: <Briefcase size={16} />, label: 'Experience' },
  { to: 'skills', icon: <Brain size={16} />, label: 'Skills' },
  { to: 'projects', icon: <FolderKanban size={16} />, label: 'Projects' },
  { to: 'writing', icon: <NotebookText size={16} />, label: 'Writing' },
  { to: 'education', icon: <GraduationCap size={16} />, label: 'Education' },
  { to: 'contact', icon: <Mail size={16} />, label: 'Contact' },
];

const Navbar = ({ onOpenResume, onOpenCommandPalette }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="home"
          smooth
          duration={500}
          className="brand-mark brand-mark--compact"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <span className="brand-badge">VJ</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className={activeSection === link.to ? 'active' : ''}
                onClick={closeMenu}
              >
                <span className="icon">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}

          <li className="nav-mobile-utilities">
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>Theme</span>
            </button>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                onOpenResume?.();
                closeMenu();
              }}
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                onOpenCommandPalette?.();
                closeMenu();
              }}
            >
              <Command size={16} />
              <span>Quick actions</span>
            </button>
          </li>
        </ul>

        <div className="nav-actions-desktop">
          <button
            type="button"
            className="nav-icon-btn"
            onClick={() => onOpenCommandPalette?.()}
            aria-label="Open command palette"
          >
            <Command size={18} />
          </button>

          <button
            type="button"
            className="nav-icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
