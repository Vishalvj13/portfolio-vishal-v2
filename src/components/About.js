import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import DynamicTerminal from './DynamicTerminal';
import { User, ShieldCheck, Layers3, Sparkles } from 'lucide-react';

const focusPoints = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Secure-by-default mindset',
    text: 'I enjoy building systems that are not just functional, but reliable, auditable, and easier to operate in real environments.',
  },
  {
    icon: <Layers3 size={20} />,
    title: 'Backend depth with product awareness',
    text: 'My strongest foundation is in Java and cloud workflows, but I also care about how users experience the product in the browser.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Practical execution',
    text: 'I like solving actual engineering problems: API design, validation flows, debugging, automation, performance, and clean code structure.',
  },
];

const About = () => {
  return (
    <section className="about-section section-card" id="about">
      <div className="section-heading left-aligned">
        <p className="section-kicker">About</p>
        <h2 className="about-title">
          <User size={28} className="iconA" />
          The Engineer Behind the Work
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-story"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="about-text">
            I’m <strong>Vishal Junghare</strong>, a software engineer with{' '}
            <strong>4+ years of experience</strong> across backend development, cloud security,
            automation, and modern application delivery. My core strength is building scalable
            services with <strong>Java</strong>, <strong>Spring Boot</strong>, and
            <strong> AWS</strong>, while also contributing to frontend experiences using{' '}
            <strong>React</strong> when the product needs it.
          </p>

          <p className="about-text">
            A lot of my recent work has focused on <strong>governance</strong>,{' '}
            <strong>security automation</strong>, <strong>policy-driven engineering</strong>, and{' '}
            <strong>production-grade workflows</strong> — the kind of work where performance,
            clarity, and reliability matter just as much as writing code that works.
          </p>

          <p className="about-text">
            What excites me most is solving engineering problems that sit between systems and
            product experience: reducing repetitive manual work, improving validation flows,
            tightening integrations, and making technical decisions that feel thoughtful to both
            users and teams.
          </p>

          <p className="about-text">
            Outside work, I’m a cricket enthusiast, wanderluster, and foodie on a quest for the
            perfect bite. Give me spontaneous road trips, binge-worthy TV shows, and a never-ending
            stream of chai — and you’ve got the perfect mix of code, cloud, and chaos. Fun fact: I
            have more browser tabs open than AWS regions.
          </p>
        </motion.div>

        <motion.div
          className="about-highlight-column"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about-highlights">
            {focusPoints.map((point) => (
              <article className="about-focus-card" key={point.title}>
                <div className="about-focus-icon">{point.icon}</div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="terminal-panel">
            <div className="terminal-panel-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <p>terminal — mindset.sh</p>
            </div>
            <DynamicTerminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
