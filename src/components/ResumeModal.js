import React from 'react';
import { Download, X } from 'lucide-react';
import '../styles/ResumeModal.css';

const resumeFileId = '1RsoWIo2fpRE1joYaiEC6AuJeWnMZi8gj';
const previewUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-overlay" onClick={onClose} role="presentation">
      <div className="resume-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume preview">
        <div className="resume-modal-header">
          <div>
            <p className="resume-modal-kicker">Resume Preview</p>
            <h3>View my latest resume without leaving the portfolio</h3>
          </div>
          <div className="resume-modal-actions">
            <a href={downloadUrl} className="resume-download-btn" download>
              <Download size={16} /> Download
            </a>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close resume preview">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="resume-frame-wrap">
          <iframe title="Vishal resume preview" src={previewUrl} className="resume-frame" />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
