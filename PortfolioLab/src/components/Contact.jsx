import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const ContactInfoItem = ({ icon, label, value }) => (
  <div className="contact-item">
    <div className="contact-item-icon">{icon}</div>
    <div className="contact-item-text">
      <span className="contact-item-label">{label}</span>
      <span className="contact-item-value">{value}</span>
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Obter data e hora atual
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const year = now.getFullYear();

    // Detectar tipo de dispositivo
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const deviceType = isMobile ? 'Dispositivo Móvel' : 'Computador';

    // Configurações do EmailJS
    const serviceID = 'service_jjas9nd';
    const templateID = 'template_ux3bxdf';
    const userID = 'dJk1QF2LoylWb9s2B';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Sem assunto",
      message: formData.message,
      date: `${date} às ${time}`,
      year: year,
      device: deviceType,
      initial: formData.name.charAt(0).toUpperCase()
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (error) => {
      console.log('FAILED...', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <p className="contact-super-title">{t('contactSection.sectionTitle')}</p>
        <h1>{t('contactSection.headerTitle')}</h1>
        <p className="contact-subtitle">{t('contactSection.headerSubtitle')}</p>
      </header>

      <div className="contact-grid">
        {/* Informações */}
        <div className="info-panel">
          <ContactInfoItem 
            icon={<FaEnvelope />} 
            label={t('contactSection.emailLabel')} 
            value="viniciusgomes2202@gmail.com" 
          />
          <ContactInfoItem 
            icon={<FaWhatsapp />} 
            label={t('contactSection.whatsappLabel')} 
            value="+55 31 9 8598-4390" 
          />
          <ContactInfoItem 
            icon={<FaMapMarkerAlt />} 
            label={t('contactSection.locationLabel')} 
            value="Belo Horizonte, MG - Brasil" 
          />
          <div className="social-links">
            <a href="https://www.linkedin.com/in/viniciusgomesrod/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/viniciusgomesrod" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/*Formulário */}
        <div className="form-panel">
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              {t('contactSection.formSentAlert') || 'Mensagem enviada com sucesso!'}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert alert-error">
              {t('contactSection.formErrorAlert') || 'Erro ao enviar mensagem. Tente novamente mais tarde.'}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contactSection.nameLabel')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contactSection.placeholderName')} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contactSection.emailLabel')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contactSection.placeholderEmail')} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contactSection.subjectLabel')}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contactSection.placeholderSubject')} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contactSection.messageLabel')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contactSection.placeholderMessage')} 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                t('contactSection.submittingBtn') || 'Enviando...'
              ) : (
                t('contactSection.submitBtn') || 'Enviar Mensagem'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;