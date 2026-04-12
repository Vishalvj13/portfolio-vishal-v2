import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, ArrowUpRight, NotebookText } from 'lucide-react';
import '../styles/WritingSection.css';

const articles = [
  {
    title: 'What They Asked Me — Real Interview Questions as a Backend Developer',
    type: 'Interview Series',
    description: 'A practical series breaking down the real backend interview questions I faced across multiple companies.',
    href: 'https://medium.com/@vishal_13_',
  },
  {
    title: 'AWS learning notes and project-backed explorations',
    type: 'Cloud Notes',
    description: 'Concepts, certifications, and hands-on reflections that connect cloud theory with actual implementation thinking.',
    href: 'https://medium.com/@vishal_13_',
  },
  {
    title: 'Frontend and React interview preparation notes',
    type: 'Preparation',
    description: 'Scenario-based learning notes around state handling, debugging, performance, and component design.',
    href: 'https://medium.com/@vishal_13_',
  },
];

const WritingSection = () => {
  return (
    <section className="writing-section section-card" id="writing">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Writing</p>
        <h2 className="writing-title">
          <BookOpenText size={28} className="iconWriting" />
          Notes, Articles, and Interview Breakdowns
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="writing-intro">
        <p>
          I like turning real preparation, project learning, and interview experience into written content. It helps me learn faster and also shows how I think, not just what I build.
        </p>
      </div>

      <div className="writing-grid">
        {articles.map((article, index) => (
          <motion.a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            key={article.title}
            className="writing-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="writing-topline">
              <span>{article.type}</span>
              <ArrowUpRight size={16} />
            </div>
            <NotebookText size={20} className="writing-card-icon" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default WritingSection;
