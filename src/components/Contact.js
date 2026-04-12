import React, { useMemo, useState } from 'react';
import '../styles/Contact.css';
import { Mail, Linkedin, Github, ArrowRight, Copy, Check, CalendarDays, Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const resumeFileId = '1RsoWIo2fpRE1joYaiEC6AuJeWnMZi8gj';
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

const contactMethods = [
  {
    title: 'Email',
    description: 'For opportunities, collaborations, or technical conversations.',
    href: 'mailto:moodyjester35@gmail.com',
    label: 'moodyjester35@gmail.com',
    icon: <Mail />,
  },
  {
    title: 'LinkedIn',
    description: 'Best place to connect professionally and view my profile updates.',
    href: 'https://www.linkedin.com/in/vishal-junghare-vj',
    label: 'Connect on LinkedIn',
    icon: <Linkedin />,
  },
  {
    title: 'GitHub',
    description: 'Explore personal projects, experiments, and implementation work.',
    href: 'https://github.com/Vishalvj13',
    label: 'View GitHub profile',
    icon: <Github />,
  },
];

const Contact = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'Opportunity', message: '' });
  const [toast, setToast] = useState('');

  const subject = useMemo(() => `${form.topic} from ${form.name || 'portfolio visitor'}`, [form.name, form.topic]);
  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    return `mailto:moodyjester35@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.email, form.message, form.name, subject]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('moodyjester35@gmail.com');
      setCopied(true);
      setToast('Email copied to clipboard');
      setTimeout(() => setCopied(false), 1800);
      setTimeout(() => setToast(''), 2200);
    } catch (error) {
      setToast('Copy failed on this browser');
      setTimeout(() => setToast(''), 2200);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section section-card" id="contact">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Contact</p>
        <h2 className="contact-title">
          <Mail size={28} className="iconC" />
          Let’s Build Something Meaningful
        </h2>
        <div className="title-underline"></div>
      </div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="contact-copy">
          <div className="contact-availability">
            <CalendarDays size={16} /> Open to backend, cloud, and full-stack opportunities
          </div>
          <p className="contact-message">
            I’m always open to opportunities where strong backend engineering, cloud thinking, and product-focused execution matter.
            If you’d like to discuss a role, collaboration, or interesting idea, I’d love to connect.
          </p>

          <div className="contact-action-row">
            <a className="contact-primary-btn" href={mailtoHref}>
              Start a conversation <ArrowRight size={18} />
            </a>
            <button className="contact-secondary-btn" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <button className="contact-secondary-btn" onClick={onOpenResume}>
              <Download size={16} /> View resume
            </button>
          </div>

          <div className="contact-grid">
            {contactMethods.map((item) => (
              <a key={item.title} href={item.href} className="contact-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Quick contact form</h3>
          <p>This uses your email app for now, so it works without needing a backend form service.</p>

          <div className="contact-form-grid">
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
            <label className="full-width">
              <span>Topic</span>
              <select name="topic" value={form.topic} onChange={handleChange}>
                <option>Opportunity</option>
                <option>Collaboration</option>
                <option>Networking</option>
                <option>Freelance</option>
              </select>
            </label>
            <label className="full-width">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me a little about the role, project, or reason for reaching out"
              />
            </label>
          </div>

          <a className="contact-form-submit" href={mailtoHref}>
            <Send size={16} /> Send via email app
          </a>

          <a className="contact-download-link" href={resumeDownloadUrl} download>
            Prefer reviewing first? Download resume directly
          </a>
        </div>
      </motion.div>

      {toast && <div className="contact-toast">{toast}</div>}
    </section>
  );
};

export default Contact;
