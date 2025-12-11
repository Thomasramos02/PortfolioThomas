import React from 'react';


const AcademicDashboard = () => {
  const semesters = [
    {
      name: "1st Semester",
      courses: [
        { subject: "Artificial Intelligence", hours: 90, modality: "Hybrid", grade: 90, rating: "9/10" },
        { subject: "Object-Oriented Programming", hours: 90, modality: "Online", grade: 85, rating: "8/10" },
        { subject: "Data Structures", hours: 90, modality: "Hybrid", grade: 92, rating: "9/10" },
        { subject: "Calculus I", hours: 90, modality: "On-site", grade: 78, rating: "7/10" },
        { subject: "Introduction to Computer Science", hours: 90, modality: "Hybrid", grade: 95, rating: "10/10" }
      ],
      totalHours: "450/450",
      average: "90/100"
    },
    {
      name: "2nd Semester",
      courses: [
        { subject: "Database Systems", hours: 90, modality: "Hybrid", grade: 91, rating: "9/10" },
        { subject: "Web Development Fundamentals", hours: 90, modality: "Online", grade: 88, rating: "9/10" },
        { subject: "Linear Algebra", hours: 90, modality: "On-site", grade: 80, rating: "7/10" },
        { subject: "Computer Networks", hours: 90, modality: "Hybrid", grade: 93, rating: "9/10" },
        { subject: "Discrete Mathematics", hours: 90, modality: "On-site", grade: 87, rating: "8/10" }
      ],
      totalHours: "450/450",
      average: "88/100"
    },
    {
      name: "3rd Semester",
      courses: [
        { subject: "Operating Systems", hours: 90, modality: "Hybrid", grade: 89, rating: "8/10" },
        { subject: "Algorithms Design", hours: 90, modality: "On-site", grade: 94, rating: "10/10" },
        { subject: "Software Engineering I", hours: 90, modality: "Hybrid", grade: 90, rating: "9/10" },
        { subject: "Computer Architecture", hours: 90, modality: "On-site", grade: 82, rating: "8/10" },
        { subject: "Probability and Statistics", hours: 90, modality: "Hybrid", grade: 85, rating: "8/10" }
      ],
      totalHours: "450/450",
      average: "89/100"
    },
    {
      name: "4th Semester",
      courses: [
        { subject: "Machine Learning", hours: 90, modality: "Hybrid", grade: 96, rating: "10/10" },
        { subject: "Distributed Systems", hours: 90, modality: "Online", grade: 92, rating: "9/10" },
        { subject: "Software Engineering II", hours: 90, modality: "Hybrid", grade: 91, rating: "9/10" },
        { subject: "Cybersecurity Basics", hours: 90, modality: "On-site", grade: 88, rating: "9/10" },
        { subject: "Human-Computer Interaction", hours: 90, modality: "Hybrid", grade: 90, rating: "9/10" }
      ],
      totalHours: "450/450",
      average: "91/100"
    },
    {
      name: "5th Semester",
      courses: [
        { subject: "Cloud Computing", hours: 90, modality: "Hybrid", grade: 94, rating: "10/10" },
        { subject: "Big Data Analytics", hours: 90, modality: "Online", grade: 90, rating: "9/10" },
        { subject: "Microservices Architecture", hours: 90, modality: "Hybrid", grade: 92, rating: "9/10" },
        { subject: "Project Management", hours: 90, modality: "On-site", grade: 87, rating: "8/10" },
        { subject: "Ethical Hacking", hours: 90, modality: "Hybrid", grade: 89, rating: "9/10" }
      ],
      totalHours: "450/450",
      average: "90/100"
    },
    {
      name: "6th Semester",
      courses: [
        { subject: "DevOps Practices", hours: 90, modality: "Hybrid", grade: 95, rating: "10/10" },
        { subject: "Computer Graphics", hours: 90, modality: "On-site", grade: 85, rating: "8/10" },
        { subject: "Mobile App Development", hours: 90, modality: "Hybrid", grade: 93, rating: "9/10" },
        { subject: "Natural Language Processing", hours: 90, modality: "Online", grade: 91, rating: "9/10" },
        { subject: "Blockchain Technologies", hours: 90, modality: "Hybrid", grade: 88, rating: "8/10" }
      ],
      totalHours: "450/450",
      average: "90/100"
    },
    {
      name: "7th Semester",
      courses: [
        { subject: "Advanced AI", hours: 90, modality: "Hybrid", grade: 97, rating: "10/10" },
        { subject: "Quantum Computing Concepts", hours: 90, modality: "Online", grade: 90, rating: "9/10" },
        { subject: "IoT Development", hours: 90, modality: "Hybrid", grade: 92, rating: "9/10" },
        { subject: "Computer Vision", hours: 90, modality: "On-site", grade: 94, rating: "10/10" },
        { subject: "Game Development", hours: 90, modality: "Hybrid", grade: 87, rating: "8/10" }
      ],
      totalHours: "450/450",
      average: "92/100"
    },
    {
      name: "8th Semester",
      courses: [
        { subject: "Capstone Project", hours: 120, modality: "Hybrid", grade: 98, rating: "10/10" },
        { subject: "Professional Ethics in Tech", hours: 60, modality: "Online", grade: 95, rating: "9/10" },
        { subject: "Startup & Innovation", hours: 60, modality: "On-site", grade: 90, rating: "9/10" },
        { subject: "Elective 1", hours: 90, modality: "Hybrid", grade: 91, rating: "9/10" },
        { subject: "Elective 2", hours: 90, modality: "Hybrid", grade: 89, rating: "8/10" }
      ],
      totalHours: "420/420", // Ajuste os totais de horas se necessário
      average: "94/100"
    }
  ];

  return (
    <> {/* Fragmento para não adicionar um div extra aqui */}
      <section className="academic-hero">
        <p className="academic-category">ACADEMICS</p>
        <h1>Software Engineering Degree</h1>
        <p className="academic-description">A detailed list of all courses and grades from my Software Engineering degree at PUC Minas, demonstrating my progress and expertise in various technical domains.</p>
        
        <div className="progress-section">
          <div className="progress-dates">
            <p className="start-date">January 2023</p>
            <p className="end-date">December 2027</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
          <div className="progress-details">
            <p className="completion-percent">64% complete.</p>
            <p className="time-remaining">~18 months remaining</p>
          </div>
        </div>
      </section>

      <section className="semesters-grid">
        {semesters.map((semester, index) => (
          <div key={index} className="semester-card">
            <h3>{semester.name}</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hours</th>
                  <th>Modality</th>
                  <th>Grade</th>
                  <th>Personal Rating</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, courseIndex) => (
                  <tr key={courseIndex}>
                    <td>{course.subject}</td>
                    <td>{course.hours}</td>
                    <td>{course.modality}</td>
                    <td className="grade-score">{course.grade}</td>
                    <td className="rating-score">{course.rating}</td>
                  </tr>
                ))}
                <tr className="summary-row">
                  <td className="summary-label">Hours</td>
                  <td colSpan="2">{semester.totalHours}</td>
                  <td className="summary-label">Average</td>
                  <td className="average-score">{semester.average}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </>
  );
};

export default AcademicDashboard;