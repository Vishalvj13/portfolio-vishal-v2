import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Radar, BookOpenCheck, Blocks } from 'lucide-react';
import '../styles/NowSection.css';

const focusCards = [
  {
    icon: <Radar size={20} />,
    title: 'Currently building depth in frontend product polish',
    text: 'Working on making React UIs feel more app-like through theme systems, interaction design, and better state-driven UX.',
  },
  {
    icon: <Blocks size={20} />,
    title: 'Connecting backend strength with frontend clarity',
    text: 'My current focus is building interfaces that explain complex backend or cloud work more clearly to end users and interviewers.',
  },
  {
    icon: <BookOpenCheck size={20} />,
    title: 'Learning through building + writing',
    text: 'I regularly turn hands-on learning into portfolio improvements, writeups, and interview-focused breakdowns.',
  },
];

const NowSection = () => {
  return (
    <section className="now-section section-card" id="now">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Now</p>
        <h2 className="now-title">
          <Sparkles size={28} className="iconNow" />
          What I’m actively sharpening right now
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
