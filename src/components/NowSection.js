import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Radar, BookOpenCheck, Blocks } from 'lucide-react';
import '../styles/NowSection.css';

const focusCards = [
  {
    icon: <Radar size={20} />,
    title: 'Using AI to Improve Engineering Productivity',
    text: 'I’m actively exploring how AI can improve engineering productivity through tools like ChatGPT and Claude — from faster debugging and cleaner code generation to better documentation, idea validation, and development workflow support.',
  },
  {
    icon: <Blocks size={20} />,
    title: 'Connecting backend strength with frontend clarity',
    text: 'My current focus is building interfaces that explain complex backend or cloud work more clearly to end users and interviewers.',
  },
  {
    icon: <BookOpenCheck size={20} />,
    title: 'Learning Through Building, Writing, and Security Automation',
    text: 'I’m actively learning through hands-on building, writeups, and real experimentation — especially across security, automation, and cloud governance. I regularly turn that learning into portfolio improvements, practical breakdowns, and stronger engineering workflows.',
  },
];

const NowSection = () => {
  return (
    <section className="now-section section-card" id="now">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Now</p>
        <h2 className="now-title">
          <Sparkles size={28} className="iconNow" />
          What I’m Actively Sharpening Right Now
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="now-grid">
        {focusCards.map((card, index) => (
          <motion.article
            key={card.title}
            className="now-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="now-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default NowSection;
