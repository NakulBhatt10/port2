import React from 'react';
import data from '../../data.json';
import './WorkExperience.css';

import wood from '../../assets/images/nakul-assets/wood.png';
import mudra from '../../assets/images/nakul-assets/mudra.png';
import s4ds from '../../assets/images/nakul-assets/s4ds.png';

function techTags(coreTech) {
  return coreTech.flatMap((line) => {
    const [, rest] = line.includes(' - ') ? line.split(' - ') : [null, line];
    return rest.split(',').map((t) => t.trim());
  });
}

export default function WorkExperience() {
  const getCompanyImage = (company) => {
    switch (company) {
      case 'PuzzleWood':
        return wood;

      case 'OM Solutions':
        return mudra;

      case 'S4DS Club':
        return s4ds;

      default:
        return null;
    }
  };

  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="section-num mono">02 / experience</span>
        <span className="section-rule" />
      </div>

      <h2>Where I've worked</h2>

      <p className="experience__intro">
        Internships and leadership roles that shaped my development and teamwork
        skills.
      </p>

      <div className="experience__list">
        {data.workExperience.map((job) => {
          const image = getCompanyImage(job.company);

          return (
            <div key={job.id} className="experience__card card">
              {/* Left Side */}
              <div className="experience__content">
                <div className="experience__header">
                  <div className="experience__top-row">
                    <span className="experience__company">
                      {job.company}
                    </span>

                    {job.type && (
                      <span className="experience__type-badge">
                        {job.type}
                      </span>
                    )}

                    {job.visitLink && job.visitLink !== 'N/A' && (
                      <a
                        className="experience__link"
                        href={job.visitLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit ↗
                      </a>
                    )}
                  </div>

                  <div className="experience__tenure">
                    <span className="experience__duration mono">
                      {job.duration}
                    </span>

                    {job.location && (
                      <span className="experience__location mono">
                        {job.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="experience__timeline">
                  {job.progression.map((step, i) => (
                    <div key={i} className="experience__step">
                      <div className="experience__step-marker">
                        <div className="experience__dot" />

                        {i < job.progression.length - 1 && (
                          <div className="experience__stem" />
                        )}
                      </div>

                      <div className="experience__step-content">
                        <div className="experience__role-header">
                          <strong>{step.role}</strong>

                          <span className="experience__step-period mono">
                            {step.period}
                          </span>
                        </div>

                        <ul className="experience__bullets">
                          {step.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="experience__skills">
                  <p className="experience__skills-label">
                    Tech used
                  </p>

                  <div className="experience__tags">
                    {techTags(job.coreTech).map((tag) => (
                      <span
                        key={tag}
                        className="pill experience__pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Image */}
              {image ? (
                <div className="experience__image-wrapper">
                  <img
                    src={image}
                    alt={job.company}
                    className="experience__img"
                  />
                </div>
              ) : (
                <div className="experience__img-placeholder">
                  <span>{job.company}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}