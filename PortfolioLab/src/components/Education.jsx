import React from 'react';
import { useTranslation } from 'react-i18next';

function Education({ onNavigateToDegreeDetails }) {
  const { t } = useTranslation();

  // Pega o array de forma dinâmica usando o i18n
  const education = t('educationDashboard.degrees', { returnObjects: true });

  return (
    <section id="education" className="education-certifications">
      <h2>{t('educationDashboard.sectionTitle')}</h2>
      {education.map((degree, idx) => (
        <div key={idx} className="education-card">
          <h3>{degree.title}</h3>
          <p>{degree.institution}</p>
          {degree.details && <p className="education-detail">{degree.details}</p>}
          {degree.buttonText && (
            <button
              className="view-project-btn"
              style={{ marginTop: '1.5rem' }}
              onClick={onNavigateToDegreeDetails}
            >
              {degree.buttonText}
            </button>
          )}
        </div>
      ))}
    </section>
  );
}

export default Education;
