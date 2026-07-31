import React from 'react';
import data from '../../data.json';
import './Certificate.css';

export default function Certificate() {
  return (
    <section id="certificates" className="section">
      <div className="section-head">
        <span className="section-num mono">07 / certificates</span>
        <span className="section-rule" />
      </div>
      <h2>Certificates</h2>

      <div className="certs__grid">
        {data.certificates.map((cert) => (
          <a key={cert.id} className="certs__card card" href={cert.link} target="_blank" rel="noreferrer">
            {/* Badge image placeholder — will be filled later */}
            <div className="certs__badge-placeholder">
              <span>Badge</span>
            </div>
            <div className="certs__score">{cert.score}</div>
            <h4 className="certs__name">{cert.name}</h4>
            <p className="certs__desc">{cert.description}</p>
            <span className="certs__view-link">View Certificate →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
