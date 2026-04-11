import React, { useMemo, useState } from 'react';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import { Brain, Cloud, Database, LayoutGrid, Wrench, ShieldCheck } from 'lucide-react';

const skillGroups = {
  backend: {
    title: 'Backend',
    icon: <Brain size={18} />,
    intro: 'My strongest hands-on foundation is in backend engineering, APIs, service design, and enterprise-style delivery.',
    items: [
      { name: 'Java', detail: 'Core backend language used across enterprise services and problem solving.' },
      { name: 'Spring Boot', detail: 'REST APIs, service layers, validation flows, configuration, and backend application delivery.' },
      { name: 'Hibernate / JPA', detail: 'Persistence mapping, repository-driven development, and relational data handling.' },
      { name: 'Microservices', detail: 'Service decomposition, integration, API gateway concepts, and scalable backend thinking.' },
      { name: 'REST APIs', detail: 'Request/response design, status handling, integration, and API debugging.' },
    ],
  },
  frontend: {
    title: 'Frontend',
    icon: <LayoutGrid size={18} />,
    intro: 'I use frontend development to build polished interfaces that connect clearly with backend functionality and product needs.',
    items: [
      { name: 'React', detail: 'Components, hooks, controlled forms, API integration, state handling, and interactive UI flows.' },
      { name: 'JavaScript', detail: 'State updates, async logic, event handling, array transformations, and browser behavior.' },
      { name: 'HTML / CSS', detail: 'Semantic layout, responsive design, spacing systems, and recruiter-friendly presentation.' },
      { name: 'Framer Motion', detail: 'Subtle motion for section reveals, cards, and premium interactive feel.' },
      { name: 'UI State Handling', detail: 'Loading, error, empty states, filters, and user feedback patterns.' },
    ],
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: <Cloud size={18} />,
    intro: 'Cloud engineering is a strong differentiator in my profile, especially where deployment, security, and automation meet.',
    items: [
      { name: 'AWS', detail: 'Strong familiarity across EC2, S3, CloudFront, RDS, IAM, and architecture patterns.' },
      { name: 'CI/CD', detail: 'Practical exposure to release flows, Jenkins, and deployment-aware engineering.' },
      { name: 'Docker', detail: 'Container-oriented understanding for local consistency and deployment workflows.' },
      { name: 'Cloud Security', detail: 'Governance, policy alignment, and automation-oriented secure-by-default thinking.' },
      { name: 'Deployment Architecture', detail: 'Connecting frontend, backend, and managed services in a production-like setup.' },
    ],
  },
  data: {
    title: 'Databases',
    icon: <Database size={18} />,
    intro: 'I am comfortable working with relational data models and practical query-aware backend design.',
    items: [
      { name: 'MySQL', detail: 'Relational schema work, joins, CRUD-backed services, and query-driven application behavior.' },
      { name: 'MongoDB', detail: 'Basic exposure to document-oriented data modeling and flexible storage use cases.' },
      { name: 'Data Mapping', detail: 'Connecting backend entities cleanly to service and UI needs.' },
    ],
  },
  tools: {
    title: 'Tools & Collaboration',
    icon: <Wrench size={18} />,
    intro: 'Good delivery is not just coding, it is also debugging, communication, and reliable collaboration tooling.',
    items: [
      { name: 'Git / GitHub / Bitbucket', detail: 'Version control, branching, collaboration, and code review flow.' },
      { name: 'Jira', detail: 'Sprint-based planning, task tracking, and issue movement through delivery stages.' },
      { name: 'Postman', detail: 'API validation, request testing, debugging, and contract verification.' },
      { name: 'VS Code / IDE Workflow', detail: 'Productive day-to-day development, debugging, and refactoring support.' },
    ],
  },
  practices: {
    title: 'Engineering Practices',
    icon: <ShieldCheck size={18} />,
    intro: 'These are the practical habits that shape how I implement features and fix issues in real systems.',
    items: [
      { name: 'Debugging', detail: 'Tracing issues across API calls, rendering flow, environment behavior, and service integrations.' },
      { name: 'Secure Coding', detail: 'Attention to XSS, secrets, validation, and safer defaults across applications.' },
      { name: 'Code Quality', detail: 'Readable structure, modular thinking, maintainable components, and clean API boundaries.' },
      { name: 'Problem Solving', detail: 'Breaking down real issues into reproducible causes and practical fixes.' },
    ],
  },
};

const Skills = () => {
  const tabs = useMemo(() => Object.keys(skillGroups), []);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeGroup = skillGroups[activeTab];

  return (
    <section className="skills-section section-card" id="skills">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Skills</p>
        <h2 className="skills-title">
          <Brain size={28} className="iconS" />
          Interactive map of what I work with
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="skill-tab-icon">{skillGroups[tab].icon}</span>
            {skillGroups[tab].title}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        className="skills-showcase"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="skills-showcase-copy">
          <h3>{activeGroup.title}</h3>
          <p>{activeGroup.intro}</p>
        </div>

        <div className="skills-grid">
          {activeGroup.items.map((skill) => (
            <article className="skill-detail-card" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.detail}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
