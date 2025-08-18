import React from 'react';
import { useTranslation } from 'react-i18next';

const DegreeDetails = ({ onBack }) => {
  const { t } = useTranslation();

  // Array de semestres
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  // Pega os cursos do i18n
  const coursesData = t('degreeDetails.courses', { returnObjects: true });

  return (
    <div className="degree-details-container">
      <main className="degree-main-content">
        <div className="degree-intro">
          <h2>{t('degreeDetails.overviewTitle')}</h2>
          <h1>{t('degreeDetails.degreeName')}</h1>
          <p>{t('degreeDetails.description')}</p>
        </div>
        <div className="semesters-grid">
          {semesters.map(semester => (
            <div key={semester} className="semester-card">
              <h3>{semester}º {t('degreeDetails.semester')}</h3>
              <table>
                <thead>
                  <tr>
                    <th>{t('degreeDetails.course')}</th>
                    <th>{t('degreeDetails.hours')}</th>
                    <th>{t('degreeDetails.modality')}</th>
                    <th>{t('degreeDetails.grade')}</th>
                    <th>{t('degreeDetails.status')}</th>
                  </tr>
                </thead>
                <tbody>
                  {coursesData.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.hours}h</td>
                      <td>{course.modality}</td>
                      <td>{course.grade.toFixed(1)}</td>
                      <td>{course.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="semester-average">
                {t('degreeDetails.average')}: 9.4/10.0
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DegreeDetails;
