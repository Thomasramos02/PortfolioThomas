import React from 'react';
import { useTranslation } from 'react-i18next';
import techIcons from '../techIcons';
import styles from '../styles/ProjectDashboard.module.css';

const ProjectDashBoard = () => {
  const { t } = useTranslation();
  const projects = t("projectsDashboard.projects", { returnObjects: true });

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.creativeWorkHero}>
        <div className={styles.heroContent}>
          <h1>{t("projectsDashboard.heroTitle")}</h1>
          <p className={styles.heroSubtitle}>{t("projectsDashboard.heroSubtitle")}</p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>{t("projectsDashboard.featuredProjects")}</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {/* Imagem lateral */}
              <div
                className={styles.projectImageContainer}
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Conteúdo */}
              <div className={styles.projectDetails}>
                <h2 className={styles.projectTitle}>
                  {project.title}
                  <span className={styles.projectAccent}>.</span>
                </h2>

                <p className={styles.projectDescription}>{project.description}</p>

                {/* Tecnologias */}
                <div className={styles.projectTags}>
                  {project.technologies?.map((tech, idx) => {
                    const IconComponent = techIcons[tech];
                    return (
                      <span key={idx} className={styles.tag}>
                        {IconComponent && <IconComponent size={14} />} {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Botões */}
                <div className={styles.projectButtons}>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.demoBtn}`}
                    >
                      Ver Projeto
                    </a>
                  )}
                  {project.sourceCodeUrl && (
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.codeBtn}`}
                    >
                      Código Fonte
                    </a>
                  )}
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
