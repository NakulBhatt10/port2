import React from 'react';
import data from '../../data.json';
import './Education.css';

import mum from '../../assets/images/nakul-assets/mum.png';
import mith from '../../assets/images/nakul-assets/mith.png';

export default function Education() {

  const getEducationImage = (id) => {
    switch (id) {
      case 1:
        return mum;

      case 2:
        return mith;

      default:
        return null;
    }
  };

  return (
    <section id="education" className="section">
      <div className="section-head">
        <span className="section-num mono">03 / education</span>
        <span className="section-rule" />
      </div>

      <h2>Education</h2>

      <div className="education__grid">
        {data.education.map((edu) => {
          const image = getEducationImage(edu.id);

          return (
            <div key={edu.id} className="education__card card">

              {image ? (
                <div className="education__image-wrapper">
                  <img
                    src={image}
                    alt={edu.university}
                    className="education__img"
                  />
                </div>
              ) : (
                <div className="education__img-placeholder">
                  <span>{edu.university}</span>
                </div>
              )}

              <div className="education__body">

                <div className="education__duration-row">
                  <span className="education__duration mono">
                    {edu.duration}
                  </span>
                </div>

                <h3>{edu.degree}</h3>

                <p className="education__university">
                  {edu.university}
                </p>

                {edu.course && (
                  <p className="education__course">
                    {edu.course}
                  </p>
                )}

                <div className="education__score-wrap">
                  <span className="education__score">
                    {edu.score}
                  </span>

                  {edu.scoreDetail &&
                    edu.scoreDetail !== 'N/A' && (
                      <span className="education__score-detail">
                        {edu.scoreDetail}
                      </span>
                    )}
                </div>

                <div className="education__subjects">
                  {edu.coreSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="pill"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <a
                  className="education__link"
                  href={edu.visitLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit University Site →
                </a>

              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}