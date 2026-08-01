import React from 'react';
import { PaperSword } from '../OrigamiWorld/PaperShapes';
import data from '../../data.json';
import './Footer.css';

export default function Footer() {
  const { linkedIn, github, location } = data.about;

  return (
    <footer id="contact" className="section footer">
      <PaperSword
        className="footer__plane"
        width="36"
        height="70"
        style={{ color: 'var(--accent)' }}
      />

      <h2>Let's fold something together.</h2>

      <p>
        Have a project in mind, or just want to say hi? My inbox is always open.
      </p>

      <div className="footer__cta">
        <a
          className="btn btn-primary"
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a
          className="btn btn-ghost"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>

      <p className="footer__copy mono">
        © {new Date().getFullYear()} {data.about.name} · Made with ❤️ in {location}
      </p>
    </footer>
  );
}