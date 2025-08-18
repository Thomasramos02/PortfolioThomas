import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectDashboard.module.css';

const ProjectDashBoard = () => {
  const { t } = useTranslation();
  const projects = t("projectsDashboard.projects", { returnObjects: true });

  return (
    <div className="dashboard-container">
      <section className="creative-work-hero">
        <div className="hero-content">
          <h1>{t("projectsDashboard.heroTitle")}</h1>
          <p className="hero-subtitle">{t("projectsDashboard.heroSubtitle")}</p>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">{t("projectsDashboard.featuredProjects")}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-date">{project.date}</span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.technologies?.map((tech, idx) => (
                      <span key={idx} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={project.liveDemoUrl} className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                      {t("projectsDashboard.liveDemo")}
                    </a>
                    <a href={project.sourceCodeUrl} className="action-btn code-btn" target="_blank" rel="noopener noreferrer">
                      {t("projectsDashboard.sourceCode")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDashBoard;