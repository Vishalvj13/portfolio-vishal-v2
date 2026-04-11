import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollProgressBar from './components/ScrollProgressBar';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import NowSection from './components/NowSection';
import WritingSection from './components/WritingSection';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { scroller } from 'react-scroll';

const AppContent = () => {
  const { isDark, toggleTheme } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (event.key === '/') {
        const targetTag = document.activeElement?.tagName?.toLowerCase();
        if (targetTag !== 'input' && targetTag !== 'textarea') {
          event.preventDefault();
          setPaletteOpen(true);
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="app-shell">
      <ScrollProgressBar />
      <div className="app-gradient app-gradient-one" />
      <div className="app-gradient app-gradient-two" />
      <div className="app-gradient app-gradient-three" />

      <main className="app-container">
        <Home
          onOpenResume={() => setResumeOpen(true)}
          onOpenCommandPalette={() => setPaletteOpen(true)}
        />
        <About />
        <NowSection />
        <Experience />
        <Skills />
        <Projects />
        <WritingSection />
        <Education />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setPaletteOpen(true)}
      />
      <ScrollToTopButton />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => scroller.scrollTo('contact', { smooth: true, duration: 500, offset: -78 })}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
