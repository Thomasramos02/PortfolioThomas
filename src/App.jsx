import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';   
import ProjectDashboard from './components/ProjectDashBoard';
import Books from './components/BookSection';
import Contact from './components/Contact';
import './styles/App.css';
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {  
  const [activeSection, setActiveSection] = useState('about');
  const [view, setView] = useState('portfolio');
  const { i18n } = useTranslation();

  const toggleTranslation = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (section) => {
    setActiveSection(section);

    if (section === 'books') {
      setView('books');
    } else if (section === 'contact') {
      setView('contact');
    } else {
      setView('portfolio');
    }
  };

  return (
    <>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <div className="portfolio">
        <main>
          {view === 'books' ? (
            <Books />
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
                </>
              )}
            </>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
