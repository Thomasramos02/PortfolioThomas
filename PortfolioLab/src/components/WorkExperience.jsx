import React from 'react';
import { useTranslation } from 'react-i18next';
import techIcons from '../techIcons';

function WorkExperience() {
  const { t } = useTranslation();
  const experiences = t('workExperience', { returnObjects: true });

  return (
    <section id="work" className="work-experience">
      <h2 className="section-title">{t('workExperienceSectionTitle', 'My Work & Experience')}</h2>

      {experiences.map(exp => (
        <div key={exp.title} className="project-card">
          <h3>{exp.title}</h3>
          <p className="project-info">{exp.info}</p>
          <p>{exp.description}</p>

          <div className="project-tags">
            {exp.tags.map(tag => (
              <span key={tag} className="tag">
                {techIcons[tag] ? techIcons[tag]() : null} {tag}
              </span>
            ))}
          </div>

          {/* Apenas adicionando o link ao botão */}
          <button 
            className="view-project-btn" 
            onClick={() => window.open(exp.buttonLink, "_blank")}
          >
            {exp.buttonText}
          </button>
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
