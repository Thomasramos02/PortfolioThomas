import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1>{t("hero.name")}</h1>
        <h2>{t("hero.title")}</h2>
        <p>{t("hero.description")}</p>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>{t("hero.email")}</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>{t("hero.phone")}</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>{t("hero.location")}</span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/thomasramoss/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Thomasramos02" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle"></div>
      </div>
    </section>
  );
}

export default Hero;
