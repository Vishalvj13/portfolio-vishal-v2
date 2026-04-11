import React from 'react';
import '../styles/Education.css';
import { GraduationCap } from 'lucide-react';
import { PiStudent } from 'react-icons/pi';
import { FaSchool, FaUserGraduate } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';

const educationData = [
  {
    degree: 'PG-DAC',
    fullDegree: 'Post Graduation Diploma in Advanced Computing (IT)',
    institution: 'SunBeam Institute of Information Technology, Pune-Karad',
    year: '2021 – 2022',
    grade: '74%',
    icon: <FaUserGraduate style={{ color: '#4A90E2', fontSize: '2.4rem' }} />,
  },
  {
    degree: 'Bachelor of Engineering',
    fullDegree: 'Bachelor of Engineering',
    institution: 'St. Vincent Pallotti College of Engineering & Technology, Nagpur',
    year: '2015 – 2019',
    grade: '77.7%',
    icon: <GiGraduateCap style={{ color: '#3F72AF', fontSize: '2.4rem' }} />,
  },
  {
    degree: 'HSC',
    fullDegree: 'Higher Secondary Certificate',
    institution: 'Janata College, Chandrapur (MSBHSE)',
    year: '2014 – 2015',
    grade: '76.31%',
    icon: <FaSchool style={{ color: '#112D4E', fontSize: '2.2rem' }} />,
  },
  {
    degree: 'SSC',
    fullDegree: 'Secondary School Certificate',
    institution: 'Lokmanya Tilak Vidyalaya, Chandrapur (MSBHSE)',
    year: '2013 – 2014',
    grade: '84.6%',
    icon: <PiStudent style={{ color: '#3F3D56', fontSize: '2.2rem' }} />,
  },
];

const Education = () => {
  return (
    <section className="education-section section-card" id="education">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Education</p>
        <h2 className="education-title">
          <GraduationCap size={28} className="iconEd" />
          Academic foundation
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="education-horizontal-stack">
        {educationData.map((edu) => (
          <article className="edu-card" key={edu.fullDegree + edu.year}>
            <div className="edu-front">
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-topline">{edu.degree}</div>
              <h3>{edu.fullDegree}</h3>
            </div>
            <div className="edu-details">
              <p className="institution">{edu.institution}</p>
              <div className="edu-meta-row">
                <span>{edu.year}</span>
                <span>{edu.grade}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
