import React from 'react';
import data from '../../data.json';
import './About.css';

export default function About() {
  const { name, handle, linkedIn, github, leetcode, coursera, bio, location } = data.about;

  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-num mono">01 / about</span>
        <span className="section-rule" />
      </div>

      <div className="about__grid">
        <div className="about__text">
          <h2>About me</h2>
          <p className="about__bio">{bio}</p>
          <div className="about__meta">
            <span className="mono">@{handle}</span>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="pill">
              LinkedIn ↗
            </a>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="pill">
                GitHub ↗
              </a>
            )}
            {leetcode && (
              <a href={leetcode} target="_blank" rel="noreferrer" className="pill">
                LeetCode ↗
              </a>
            )}
            {coursera && (
              <a href={coursera} target="_blank" rel="noreferrer" className="pill">
                Coursera ↗
              </a>
            )}
          </div>
        </div>

        <div className="about__portrait card">
          {/* Profile photo placeholder — will be filled later */}
          <div className="about__img-placeholder">
            <span>{name}</span>
          </div>
          <span className="about__tag pill">📍 {location}</span>
        </div>
      </div>
    </section>
  );
}
