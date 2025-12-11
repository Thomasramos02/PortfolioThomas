import React from 'react';
import { useTranslation } from "react-i18next";
import { Code } from 'lucide-react';

const NavLink = ({ section, activeSection, onNavigate, children }) => (
  <li>
    <a
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(section);
      }}
      className={activeSection === section ? 'active' : ''}
    >
      {children}
    </a>
  </li>
);

function Header({ activeSection, onNavigate }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <header className="header">
      <div className="logo">
        <Code size={21} />
        <span className="Dev">
          Thomás<span className="colorido">Dev</span>
        </span>
      </div>


      {/* Menu de navegação */}
      <nav>
        <ul>
          <NavLink section="about" activeSection={activeSection} onNavigate={onNavigate}>
            {t("header.about")}
          </NavLink>
          <NavLink section="projects" activeSection={activeSection} onNavigate={onNavigate}>
            {t("header.projects")}
          </NavLink>
          <NavLink section="books" activeSection={activeSection} onNavigate={onNavigate}>
            {t("header.books")}
          </NavLink>
          <NavLink section="contact" activeSection={activeSection} onNavigate={onNavigate}>
            {t("header.contact")}
          </NavLink>
        </ul>
      </nav>

      {/* Botão de troca de idioma */}
      <button 
        onClick={toggleLanguage} 
        style={{ marginLeft: "20px", padding: "5px 10px" }}
      >
        {i18n.language === "pt" ? "EN" : "PT"}
      </button>
    </header>
  );
}

export default Header;
