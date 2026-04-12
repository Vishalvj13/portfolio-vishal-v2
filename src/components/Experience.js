import React, { useState } from 'react';
import '../styles/Experience.css';
import amdocsLogo from '../assets/amdocsLogo.png';
import globalLogicLogo from '../assets/globalLogicLogo.png';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, ArrowUpRight, ShieldCheck, Layers3, Cpu } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Engineer - 2',
    company: 'GlobalLogic',
    logo: globalLogicLogo,
    date: 'Jun 2025 – Present',
    client: 'Leading iPaaS Provider',
    badge: 'Cloud Security & Governance',
    summary: 'Working on cloud security, governance, and automation workflows across enterprise AWS environments.',
    achievements: [
      'Built automated remediation modules and a validation engine that reduced unnecessary API calls by 95%.',
      'Designed and enforced policy-driven governance workflows for compliance and audit readiness.',
      'Partnered with cloud, security, and DevOps teams on IAM, network hardening, and CI/CD security integration.',
    ],
    details: [
      'Worked on secure-by-default backend logic where validation, traceability, and cloud policy alignment mattered as much as feature delivery.',
      'Handled automation-oriented flows where reducing duplicate checks and noisy API usage had direct operational value.',
      'Contributed to production-quality engineering improvements instead of only isolated feature development.',
    ],
    impactLine:
      'Focused on cloud security, automation, governance workflows, and improving production-grade validation and remediation systems.',
    tech: ['AWS', 'Cloud Security', 'CI/CD','Automation', 'Governance', 'Policy Creation'],
    icon: <ShieldCheck size={18} />,
  },
  {
    role: 'Software Developer',
    company: 'Amdocs',
    logo: amdocsLogo,
    date: 'Jan 2024 – Apr 2025',
    client: 'Telecom clients in UK and South Africa',
    badge: 'Backend Services & Security Hardening',
    summary: 'Contributed to backend engineering, security improvement, and large-scale enterprise integration work.',
    achievements: [
      'Resolved 100+ security vulnerabilities, including XSS and credential exposure related issues.',
      'Developed and enhanced backend services and REST APIs for CRM, order, and billing-related modules.',
      'Improved integrations and release stability across connected enterprise systems.',
    ],
    details: [
      'Worked closely with enterprise-style systems where stability and release coordination mattered across multiple connected modules.',
      'Handled bug fixing, API-related changes, and production-sensitive improvements rather than only greenfield work.',
      'Gained strong exposure to debugging issues across service, UI impact, and environment layers.',
    ],
    impactLine:
      'Focused on backend services, REST API development, debugging, and delivering scalable enterprise solutions for telecom platforms.',
    tech: ['Java', 'Spring', 'Hibernate/JPA','REST APIs', 'MySQL', 'Jenkins', 'Security', 'Enterprise Integration'],
    icon: <Layers3 size={18} />,
  },
  {
    role: 'Associate Software Engineer',
    company: 'Amdocs',
    logo: amdocsLogo,
    date: 'May 2022 – Dec 2023',
    client: 'Major telecom client in UK',
    badge: 'Foundation in Delivery & Debugging',
    summary: 'Built a strong foundation in enterprise systems, service integration, testing, and agile product delivery.',
    achievements: [
      'Worked on CRM-oriented development and contributed to scalable telecom service workflows.',
      'Collaborated closely with QA, DevOps, and Infra teams in sprint-based delivery cycles.',
      'Supported quality through unit testing, integration validation, and environment-level debugging.',
    ],
    details: [
      'Built practical engineering habits around issue analysis, release awareness, and collaborative delivery.',
      'Learned to work across debugging, validation, and incremental product enhancements in a structured enterprise setup.',
      'This phase shaped how I approach troubleshooting and implementation discipline today.',
    ],
    impactLine:
      'Focused on learning enterprise delivery, debugging across environments, and building a strong foundation in backend implementation and release quality.',
    tech: ['Java', 'CRM Systems', 'Testing', 'Agile', 'Debugging'],
    icon: <Cpu size={18} />,
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="timeline-section section-card">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Experience</p>
        <h2 className="timeline-title">
          <Briefcase size={28} className="iconE" />
          Where I’ve Created Impact
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experienceData.map((item, idx) => {
          const expanded = active === idx;
          return (
            <motion.article
              key={item.role + item.company}
              className={`timeline-item ${expanded ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <div className="timeline-badge">
                <img src={item.logo} alt={`${item.company} logo`} />
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <p className="experience-date">{item.date}</p>
                    <h3>{item.role}</h3>
                    <div className="company-row">
                      <span>{item.company}</span>
                      <span className="dot"></span>
                      <span>{item.client}</span>
                    </div>
                  </div>
                  <div className="experience-pill">
                    {item.icon}
                    {item.badge}
                  </div>
                </div>

                <p className="experience-summary">{item.summary}</p>

                <ul className="experience-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <div className="experience-tech-row">
                  {item.tech.map((tech) => (
                    <span key={tech} className="experience-chip">{tech}</span>
                  ))}
                </div>

                <button className="experience-toggle" onClick={() => setActive(expanded ? -1 : idx)}>
                  <span>{expanded ? 'Show less detail' : 'Expand role details'}</span>
                  <ChevronDown size={18} className={expanded ? 'rotated' : ''} />
                </button>

                {expanded && (
                  <div className="experience-expand-panel">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                    <div className="experience-impact-row">
                      <ArrowUpRight size={16} />
                      <span>{item.impactLine}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
