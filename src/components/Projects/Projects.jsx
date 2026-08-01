import React from 'react';
import data from '../../data.json';
import './Projects.css';

import finquest from '../../assets/images/nakul-assets/parklink.png';
import sion from '../../assets/images/nakul-assets/sion.png';
import wood from '../../assets/images/nakul-assets/wood1.png';
import mudra from '../../assets/images/nakul-assets/mudra1.png';

export default function Projects() {

  const getProjectImage = (title) => {
    switch (title) {

      case 'ParkLink':
        return finquest;

      case 'SionDrop':
        return sion;

      case 'Puzzle Wood':
        return wood;

      case 'Mudra Loan':
        return mudra;

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-num mono">05 / projects</span>
        <span className="section-rule" />
      </div>

      <h2>Projects</h2>

      <div className="projects__grid">
        {data.projects.map((project) => {
          const image = getProjectImage(project.title);

          return (
            <div key={project.id} className="projects__card card">

              {image ? (
                <div className="projects__image-wrapper">
                  <img
                    src={image}
                    alt={project.title}
                    className="projects__img"
                  />
                </div>
              ) : (
                <div className="projects__img-placeholder">
                  <span>{project.title}</span>
                </div>
              )}

              <div className="projects__body">

                <div className="projects__meta">
                  {project.date && project.date !== 'N/A' && (
                    <span className="projects__date mono">
                      {project.date}
                    </span>
                  )}
                </div>

                <h3>{project.title}</h3>

                {project.description && (
                  <p className="projects__description">
                    {project.description}
                  </p>
                )}

                <div className="projects__categories">
                  {Object.entries(project.techCategories).map(([cat, tags]) => (
                    <div
                      key={cat}
                      className="projects__cat-row"
                    >
                      <span className="projects__cat-label mono">
                        {cat}
                      </span>

                      <div className="projects__tags">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="pill projects__pill"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website →
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo →
                  </a>
                </div>

              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}