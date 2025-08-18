import React, { useState, useEffect } from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import DegreeDetails from './components/DegreeDetails';
import ProjectDashboard from './components/ProjectDashBoard';
import Contact from './components/Contact';
import './styles/App.css';
import './styles/DegreeDetails.css';
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [view, setView] = useState('portfolio');
  const {i18n} = useTranslation();
  const toggleTranslation = () =>{
    i18n.changeLanguage(i18n.language == "pt" ? "en" : "pt");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (section) => {
    setActiveSection(section);
    if (section === 'education') {
      setView('degreeDetails');
    } else if(section == 'contact'){
      setView('contact')
    }else {
      setView('portfolio');
    }
  };

  const handleBackToPortfolio = () => {
    // Ao voltar para o portfólio, define a seção ativa como 'about' 
    // ou outra seção padrão que você preferir.
    setActiveSection('about');
    setView('portfolio');
  }

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>

        {}
        {view === 'degreeDetails' ? (
          <DegreeDetails />

        ) : view === 'contact' ? (
          <Contact />

        ) : (
          <>
            {activeSection === 'projects' ? (
              <ProjectDashboard />
            ) : (
              <>
                <Hero />
                <WorkExperience />
                {}
                <Education onNavigateToDegreeDetails={() => {
                    setActiveSection('education'); 
                    setView('degreeDetails');
                }} />
              </>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
