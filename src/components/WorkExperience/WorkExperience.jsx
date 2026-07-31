import React from 'react';
import data from '../../data.json';
import './WorkExperience.css';

function techTags(coreTech) {
  return coreTech.flatMap((line) => {
    const [, rest] = line.includes(' - ') ? line.split(' - ') : [null, line];
    return rest.split(',').map((t) => t.trim());
  });
}

export default function WorkExperience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="section-num mono">02 / experience</span>
        <span className="section-rule" />
      </div>
      <h2>Where I've worked</h2>
      <p className="experience__intro">Internships and leadership roles that shaped my development and teamwork skills.</p>

      <div className="experience__list">
        {data.workExperience.map((job) => (
          <div key={job.id} className="experience__card card">

            {/* ── Left: all text content ── */}
            <div className="experience__content">

              {/* Company header */}
              <div className="experience__header">
                <div className="experience__top-row">
                  <span className="experience__company">{job.company}</span>
                  {job.type && <span className="experience__type-badge">{job.type}</span>}
                  {job.visitLink && job.visitLink !== 'N/A' && (
                    <a className="experience__link" href={job.visitLink} target="_blank" rel="noreferrer">
                      Visit ↗
                    </a>
                  )}
                </div>
                <div className="experience__tenure">
                  <span className="experience__duration mono">{job.duration}</span>
                  {job.location && <span className="experience__location mono">{job.location}</span>}
                </div>
              </div>

              {/* Timeline of roles */}
              <div className="experience__timeline">
                {job.progression.map((step, i) => (
                  <div key={i} className="experience__step">
                    <div className="experience__step-marker">
                      <div className="experience__dot" />
                      {i < job.progression.length - 1 && <div className="experience__stem" />}
                    </div>
                    <div className="experience__step-content">
                      <div className="experience__role-header">
                        <strong>{step.role}</strong>
                        <span className="experience__step-period mono">{step.period}</span>
                      </div>
                      <ul className="experience__bullets">
                        {step.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech used — de-emphasised */}
              <div className="experience__skills">
                <p className="experience__skills-label">Tech used</p>
                <div className="experience__tags">
                  {techTags(job.coreTech).map((tag) => (
                    <span key={tag} className="pill experience__pill">{tag}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Right: company image placeholder ── */}
            <div className="experience__img-placeholder">
              <span>{job.company}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
