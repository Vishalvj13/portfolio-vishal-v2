import React, { useEffect, useMemo, useState } from 'react';
import { Search, ArrowRight, Moon, Sun, FileText, Mail, FolderKanban, BookOpenText, Sparkles } from 'lucide-react';
import { scroller } from 'react-scroll';
import '../styles/CommandPalette.css';

const CommandPalette = ({ isOpen, onClose, onOpenResume, onOpenContact, onToggleTheme, isDark }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const actions = useMemo(() => {
    const scrollTo = (target) => {
      scroller.scrollTo(target, { smooth: true, duration: 500, offset: -78 });
      onClose();
    };

    return [
      { id: 'projects', title: 'Jump to Projects', desc: 'Open the most important work first', icon: <FolderKanban size={16} />, run: () => scrollTo('projects') },
      { id: 'writing', title: 'Jump to Writing', desc: 'See interview notes and technical posts', icon: <BookOpenText size={16} />, run: () => scrollTo('writing') },
      { id: 'now', title: 'Jump to Now', desc: 'See what I am currently focusing on', icon: <Sparkles size={16} />, run: () => scrollTo('now') },
      { id: 'resume', title: 'Open Resume Preview', desc: 'Preview resume in a modal', icon: <FileText size={16} />, run: () => { onOpenResume(); onClose(); } },
      { id: 'contact', title: 'Open Contact Section', desc: 'Go directly to the contact card', icon: <Mail size={16} />, run: () => { onOpenContact(); onClose(); } },
      { id: 'theme', title: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', desc: 'Toggle the portfolio theme instantly', icon: isDark ? <Sun size={16} /> : <Moon size={16} />, run: () => { onToggleTheme(); onClose(); } },
    ];
  }, [isDark, onClose, onOpenContact, onOpenResume, onToggleTheme]);

  const filtered = actions.filter((action) => `${action.title} ${action.desc}`.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <div className="command-overlay" onClick={onClose} role="presentation">
      <div className="command-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="command-input-wrap">
          <Search size={18} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search actions like projects, resume, theme, contact..."
          />
          <span className="command-hint">Esc</span>
        </div>
        <div className="command-results">
          {filtered.map((action) => (
            <button key={action.id} className="command-result" onClick={action.run}>
              <span className="command-result-icon">{action.icon}</span>
              <span className="command-result-copy">
                <strong>{action.title}</strong>
                <small>{action.desc}</small>
              </span>
              <ArrowRight size={16} />
            </button>
          ))}
          {!filtered.length && (
            <div className="command-empty">
              <p>No command matched that search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
