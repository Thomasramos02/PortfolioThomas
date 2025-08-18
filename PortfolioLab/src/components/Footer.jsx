import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#resources">{t("footer.resources")}</a>
          <a href="#legal">{t("footer.legal")}</a>
          <a href="#contact">{t("footer.contact")}</a>
        </div>

        <div className="footer-social">
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

        <div className="copyright">
          © {new Date().getFullYear()} Thomás Ramos Oliveira. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
