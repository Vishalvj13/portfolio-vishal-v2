import React, { useMemo, useState } from 'react';
import '../styles/Skills.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Blocks,
  Code2,
  Cloud,
  Database,
  Wrench,
  ShieldCheck,
  Coffee,
  Leaf,
  Network,
  Webhook,
  FileJson,
  Palette,
  MonitorSmartphone,
  Layers3,
  CloudCog,
  Container,
  ServerCog,
  KeyRound,
  GitBranch,
  GitPullRequest,
  Bug,
  TestTube2,
  LockKeyhole,
  Gauge,
  Users,
} from 'lucide-react';

const skillCategories = [
  {
    key: 'backend',
    label: 'Backend',
    icon: <Brain size={18} />,
    title: 'Backend',
    description:
      'My strongest hands-on foundation is in backend engineering, APIs, service design, and enterprise-style delivery.',
    skills: [
      {
        title: 'Java',
        icon: <Coffee size={18} />,
        description:
          'Core backend language used across enterprise services, business logic, and problem solving.',
      },
      {
        title: 'Spring Boot',
        icon: <Leaf size={18} />,
        description:
          'REST APIs, service layers, validation flows, configuration, and backend application delivery.',
      },
      {
        title: 'Hibernate / JPA',
        icon: <Database size={18} />,
        description:
          'Persistence mapping, repository-driven development, and relational data handling.',
      },
      {
        title: 'Microservices',
        icon: <Network size={18} />,
        description:
          'Service decomposition, integration, API gateway concepts, and scalable backend thinking.',
      },
      {
        title: 'REST APIs',
        icon: <Webhook size={18} />,
        description:
          'Request/response design, status handling, integration patterns, and API debugging.',
      },
      {
        title: 'JSON & Payload Design',
        icon: <FileJson size={18} />,
        description:
          'Working with structured request models, contract consistency, and backend-to-frontend data flow.',
      },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    icon: <Blocks size={18} />,
    title: 'Frontend',
    description:
      'I contribute where product polish matters — building clear interfaces, responsive layouts, and user-friendly engineering experiences.',
    skills: [
      {
        title: 'React',
        icon: <Code2 size={18} />,
        description:
          'Component-driven UI building, reusable sections, interactive layouts, and portfolio/product interfaces.',
      },
      {
        title: 'JavaScript',
        icon: <Code2 size={18} />,
        description:
          'Dynamic UI behavior, event handling, state updates, and frontend integration logic.',
      },
      {
        title: 'HTML / CSS',
        icon: <Palette size={18} />,
        description:
          'Responsive layouts, visual polish, spacing systems, typography, and theme-aware styling.',
      },
      {
        title: 'Theme Systems',
        icon: <MonitorSmartphone size={18} />,
        description:
          'Building light/dark experiences, component consistency, and cleaner visual interaction states.',
      },
      {
        title: 'State-driven UI',
        icon: <Layers3 size={18} />,
        description:
          'Using component state and conditional rendering to keep interfaces interactive and intuitive.',
      },
      {
        title: 'UX-minded Delivery',
        icon: <Users size={18} />,
        description:
          'Thinking beyond implementation to ensure features are understandable, useful, and polished for users.',
      },
    ],
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    icon: <Cloud size={18} />,
    title: 'Cloud & DevOps',
    description:
      'AWS is a major part of my profile, especially around security, automation, infrastructure awareness, and production-grade workflows.',
    skills: [
      {
        title: 'AWS Core Services',
        icon: <CloudCog size={18} />,
        description:
          'Hands-on understanding of services like EC2, S3, IAM, CloudWatch, and related cloud building blocks.',
      },
      {
        title: 'Cloud Security',
        icon: <ShieldCheck size={18} />,
        description:
          'Governance, policy-driven workflows, remediation thinking, and secure-by-default engineering practices.',
      },
      {
        title: 'CI/CD Awareness',
        icon: <GitPullRequest size={18} />,
        description:
          'Exposure to release workflows, deployment thinking, automation, and safer delivery pipelines.',
      },
      {
        title: 'Docker',
        icon: <Container size={18} />,
        description:
          'Understanding containerized application flow, packaging concepts, and deployment portability.',
      },
      {
        title: 'Automation Workflows',
        icon: <ServerCog size={18} />,
        description:
          'Building or improving repetitive engineering tasks through validations, remediation flows, and process automation.',
      },
      {
        title: 'IAM / Access Control',
        icon: <KeyRound size={18} />,
        description:
          'Security-aware thinking around permissions, roles, controlled access, and enterprise cloud environments.',
      },
    ],
  },
  {
    key: 'databases',
    label: 'Databases',
    icon: <Database size={18} />,
    title: 'Databases',
    description:
      'I work comfortably with relational data models, backend persistence layers, and database-backed enterprise systems.',
    skills: [
      {
        title: 'MySQL',
        icon: <Database size={18} />,
        description:
          'Schema-based backend persistence, query handling, and structured application data storage.',
      },
      {
        title: 'SQL',
        icon: <Database size={18} />,
        description:
          'Writing queries, joins, filters, aggregations, and debugging database-related application issues.',
      },
      {
        title: 'Entity Mapping',
        icon: <Layers3 size={18} />,
        description:
          'Connecting application models with persistent storage through JPA and relational mapping.',
      },
      {
        title: 'Repository Patterns',
        icon: <Database size={18} />,
        description:
          'Using repository abstractions for cleaner data access and backend service integration.',
      },
    ],
  },
  {
    key: 'tools',
    label: 'Tools & Collaboration',
    icon: <Wrench size={18} />,
    title: 'Tools & Collaboration',
    description:
      'Along with coding, I rely on practical tools for debugging, API testing, source control, and team-based delivery.',
    skills: [
      {
        title: 'Git & GitHub',
        icon: <GitBranch size={18} />,
        description:
          'Version control, branch-based workflows, collaboration, and maintaining project history cleanly.',
      },
      {
        title: 'Postman',
        icon: <Webhook size={18} />,
        description:
          'API testing, payload validation, response checking, and service-level debugging.',
      },
      {
        title: 'Jira / Agile Delivery',
        icon: <Users size={18} />,
        description:
          'Working in sprint-based teams, managing tasks, and contributing to structured delivery cycles.',
      },
      {
        title: 'IntelliJ / VS Code',
        icon: <Code2 size={18} />,
        description:
          'Daily development environments for backend logic, frontend iteration, and troubleshooting.',
      },
      {
        title: 'Documentation & Writeups',
        icon: <FileJson size={18} />,
        description:
          'Translating hands-on learning into notes, breakdowns, and portfolio-friendly technical communication.',
      },
    ],
  },
  {
    key: 'practices',
    label: 'Engineering Practices',
    icon: <ShieldCheck size={18} />,
    title: 'Engineering Practices',
    description:
      'I care about how software behaves in real environments — not just whether it runs, but whether it is reliable, secure, and maintainable.',
    skills: [
      {
        title: 'Debugging',
        icon: <Bug size={18} />,
        description:
          'Tracing issues through code, APIs, configs, environments, and connected services.',
      },
      {
        title: 'Testing Mindset',
        icon: <TestTube2 size={18} />,
        description:
          'Thinking in terms of validation, edge cases, confidence, and reducing regressions during delivery.',
      },
      {
        title: 'Secure Coding',
        icon: <LockKeyhole size={18} />,
        description:
          'Awareness of vulnerabilities, safer implementation choices, and defensive engineering practices.',
      },
      {
        title: 'Performance Awareness',
        icon: <Gauge size={18} />,
        description:
          'Looking for cleaner logic, lower noise, better validation paths, and production-grade efficiency.',
      },
      {
        title: 'API & Service Design',
        icon: <Webhook size={18} />,
        description:
          'Designing services that are understandable, scalable, and easier to integrate with.',
      },
      {
        title: 'Collaborative Delivery',
        icon: <Users size={18} />,
        description:
          'Working effectively with QA, DevOps, security, and product-facing teams to improve outcomes.',
      },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const activeCategory = useMemo(
    () => skillCategories.find((item) => item.key === activeTab) || skillCategories[0],
    [activeTab]
  );

  return (
    <section className="skills-section section-card" id="skills">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Skills</p>
        <h2 className="skills-title">
          <Brain size={28} className="iconS" />
          Interactive Map of What I Work With
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-tab-row" role="tablist" aria-label="Skill categories">
        {skillCategories.map((category) => {
          const isActive = activeTab === category.key;
          return (
            <button
              key={category.key}
              type="button"
              className={`skills-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(category.key)}
              role="tab"
              aria-selected={isActive}
            >
              <span className="skills-tab-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeCategory.key + '-summary'}
        className="skills-summary-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="skills-summary-title-row">
          <span className="skills-summary-icon">{activeCategory.icon}</span>
          <h3>{activeCategory.title}</h3>
        </div>
        <p>{activeCategory.description}</p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.key}
          className="skills-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          {activeCategory.skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-card-title-row">
                <span className="skill-card-icon">{skill.icon}</span>
                <h4>{skill.title}</h4>
              </div>
              <p>{skill.description}</p>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
