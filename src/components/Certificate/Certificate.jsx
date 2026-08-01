import React from 'react';
import data from '../../data.json';
import './Certificate.css';

import ibm from '../../assets/images/nakul-assets/ibm.png';
import michigan from '../../assets/images/nakul-assets/michigan.png';
import coursera from '../../assets/images/nakul-assets/cousera.png';

export default function Certificate() {

  const getBadgeImage = (name) => {
    const title = name.toLowerCase();

    if (title.includes('react')) return coursera;

    if (title.includes('javascript')) return michigan;

    if (title.includes('python')) return ibm;

    if (title.includes('data analysis')) return ibm;

    return coursera;
  };

  return (
    <section id="certificates" className="section">
      <div className="section-head">
        <span className="section-num mono">07 / certificates</span>
        <span className="section-rule" />
      </div>

      <h2>Certificates</h2>

      <div className="certs__grid">
        {data.certificates.map((cert) => (
          <a
            key={cert.id}
            className="certs__card card"
            href={cert.link}
            target="_blank"
            rel="noreferrer"
          >

            <div className="certs__badge-wrapper">
              <img
                src={getBadgeImage(cert.name)}
                alt={cert.name}
                className="certs__badge"
              />
            </div>

            <div className="certs__score">
              {cert.score}
            </div>

            <h4 className="certs__name">
              {cert.name}
            </h4>

            <p className="certs__desc">
              {cert.description}
            </p>

            <span className="certs__view-link">
              View Certificate →
            </span>

          </a>
        ))}
      </div>
    </section>
  );
}