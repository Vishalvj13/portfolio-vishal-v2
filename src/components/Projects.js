import React, { useMemo, useState } from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, FolderKanban, Search, X, CheckCircle2 } from 'lucide-react';
import hmsImg from '../assets/hms1.jpg';
import sbmImg from '../assets/sbm1.jpg';
import awsdeployImg from '../assets/awsdeploy.png';
import websiteImg from '../assets/websiteImg.png';

const projects = [
  {
    title: 'Hospital Management System',
    category: 'Full Stack',
    tech: ['React', 'Spring Boot', 'JPA', 'MySQL', 'AWS'],
    description: 'A full-stack hospital workflow platform designed to organize patient, staff, and operational interactions through a cleaner digital flow.',
    highlights: [
      'Structured with a strong backend + frontend separation using Spring Boot and React.',
      'Focused on maintainability, modular design, and realistic CRUD-driven operations.',
      'Designed as a real-world style project rather than a simple UI demo.',
    ],
    image: hmsImg,
    github: 'https://github.com/Vishalvj13/hospital-management-system',
    role: 'Built both backend and frontend flows with an emphasis on clean structure and realistic module separation.',
    challenges: ['Keeping the flow modular instead of building it as one flat demo', 'Making the UI and backend responsibilities clearly separated'],
    impact: 'Demonstrates full-stack ownership and how I think about system structure beyond just screens.',
  },
  {
    title: 'Quiz Management Microservices',
    category: 'Backend / Microservices',
    tech: ['Spring Boot', 'Spring Cloud', 'Feign', 'Eureka', 'API Gateway'],
    description: 'A microservices-based quiz and question platform built to demonstrate service decomposition, gateway routing, and discoverable APIs.',
    highlights: [
      'Split responsibilities across services with Spring Cloud support for scale-ready architecture.',
      'Used Eureka and gateway routing for cleaner service communication patterns.',
      'Showcases practical backend architecture thinking beyond single-service applications.',
    ],
    image: sbmImg,
    github: 'https://github.com/Vishalvj13/microservices-spring-boot',
    role: 'Focused on service boundaries, communication flow, and architecture thinking rather than just CRUD implementation.',
    challenges: ['Managing service-to-service communication cleanly', 'Designing a project that shows backend architecture intent clearly'],
    impact: 'Useful as a proof point for distributed-system thinking and backend design maturity.',
  },
  {
    title: 'AWS Deployment for Employee Management System',
    category: 'Cloud / DevOps',
    tech: ['AWS', 'EC2', 'S3', 'CloudFront', 'RDS', 'React', 'Spring Boot'],
    description: 'An end-to-end deployment project showing how a React + Spring Boot application can be hosted reliably across core AWS services.',
    highlights: [
      'Frontend delivered through S3 and CloudFront for fast static hosting.',
      'Backend hosted on EC2 with MySQL on RDS to reflect production-style separation.',
      'Demonstrates hands-on deployment, environment ownership, and cloud integration skills.',
    ],
    image: awsdeployImg,
    github: 'https://github.com/Vishalvj13/reat.js-springboot-mysql-aws-deployment',
    role: 'Handled the deployment-oriented view of how application layers connect across AWS services.',
    challenges: ['Separating frontend, backend, and database infrastructure cleanly', 'Making the deployment reflect a more production-like setup'],
    impact: 'Shows cloud awareness beyond code alone and connects nicely with my AWS certifications.',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Frontend / Product UI',
    tech: ['React', 'JavaScript', 'CSS', 'Framer Motion'],
    description: 'A polished personal website created to present projects, certifications, engineering experience, and technical personality in one place.',
    highlights: [
      'Built with interactive sections, layered motion, and recruiter-friendly content flow.',
      'Designed to feel more premium than a plain resume-style portfolio.',
      'Continuously improved as a live representation of product sense and frontend growth.',
    ],
    image: websiteImg,
    github: 'https://github.com/Vishalvj13/portfolio-vishal',
    live: 'https://portfolio-vishal-beige.vercel.app/',
    role: 'Used as a live environment to improve frontend polish, interaction design, and storytelling.',
    challenges: ['Balancing premium motion with clarity', 'Making the site feel product-like instead of template-like'],
    impact: 'Acts as both a portfolio and a visible proof of frontend improvement over time.',
  },
];

const filters = ['All', 'Backend / Microservices', 'Cloud / DevOps', 'Full Stack', 'Frontend / Product UI'];

const Projects = () => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
      const haystack = `${project.title} ${project.description} ${project.category} ${project.tech.join(' ')}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section className="projects-section section-card" id="projects">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Projects</p>
        <h2 className="projects-title">
          <FolderKanban size={28} className="iconP" />
          Work that Proves How I Build
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-intro projects-toolbar-wrap">
        <p>
          Explore the projects by focus area, search by stack, and open any one of them for a deeper case-study style view.
        </p>
        <div className="projects-toolbar">
          <div className="project-search-box">
            <Search size={16} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by project, category, or tech"
            />
          </div>
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {filteredProjects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 150, damping: 18 }}
          >
            <button className="project-image-wrapper" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} className="carousel-image" />
            </button>

            <div className="project-info">
              <div className="project-meta-row">
                <span className="project-index">0{index + 1}</span>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${project.title}`}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${project.title} source`}>
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="project-tech-row">
                {project.tech.map((item) => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>

              <button className="project-case-btn" onClick={() => setSelectedProject(project)}>Open case study</button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {!filteredProjects.length && (
        <div className="project-empty-state">
          <p>No project matched that filter or search term. Try another keyword or reset to All.</p>
        </div>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)} role="presentation">
          <div className="project-modal-panel" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} details`}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close preview">
              <X size={18} />
            </button>

            <div className="project-modal-grid">
              <div className="project-modal-visual">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="project-modal-copy">
                <span className="project-category">{selectedProject.category}</span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="project-detail-block">
                  <h4>My role</h4>
                  <p>{selectedProject.role}</p>
                </div>

                <div className="project-detail-block">
                  <h4>Key highlights</h4>
                  <ul>
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight}><CheckCircle2 size={15} /> {highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-detail-block">
                  <h4>Interesting challenges</h4>
                  <ul>
                    {selectedProject.challenges.map((challenge) => (
                      <li key={challenge}><CheckCircle2 size={15} /> {challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-detail-block">
                  <h4>Impact</h4>
                  <p>{selectedProject.impact}</p>
                </div>

                <div className="project-tech-row">
                  {selectedProject.tech.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>

                <div className="project-modal-actions">
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="project-case-btn filled">
                      <ExternalLink size={16} /> Live demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-case-btn">
                    <FaGithub size={16} /> View source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
