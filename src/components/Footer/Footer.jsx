// Footer.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate

function Footer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fireworksActive, setFireworksActive] = useState(false);
  const navigate = useNavigate(); // Inicialize useNavigate

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleFireworksClick = () => {
    setFireworksActive(true);

    setTimeout(() => {
      setFireworksActive(false);
    }, 1500);
  };

  const scrollToTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleAgileProjectsClick = (event) => {
    event.preventDefault();
    scrollToTop('/');
  };

  const handleServiceClick = (path, event) => {
    event.preventDefault();
    scrollToTop(path);
  };

  const handleCompanyClick = (path, event) => {
    event.preventDefault();
    scrollToTop(path);
  };

  const whatsappNumber = '+55954728628';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className={`footer-section ${isVisible ? 'footer-section-visible' : ''}`} ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-column company">
          <div className="footer-logo-container">
            <img src={Logo} alt="Agile Projects Logo" className="footer-logo" />
            <a href="/" className="footer-company-name-link" onClick={handleAgileProjectsClick}>
              <span
                className={`footer-company-name ${fireworksActive ? 'fireworks-active' : ''}`}
                onClick={handleFireworksClick}
              >
                Agile Projects
                <span /> <span />
              </span>
            </a>
          </div>
          <p className="company-description">Especialistas em desenvolvimento de software, transformando ideias em realidade digital com tecnologia e inovação.</p>
          <div className="social-icons">
            <a href="#" aria-label="linkedin"><FaLinkedin className="social-icon" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp className="social-icon" /></a>
          </div>
        </div>

        <div className="footer-column services">
          <h4 className="footer-column-title">SERVIÇOS</h4>
          <ul className="footer-links">
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Landing Page</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Aplicativo</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Web Site Personalizado</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Desenvolvimento Web</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Marketing Digital</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Automação</a></li>
            <li><a href="/projects" className="footer-link" onClick={(e) => handleServiceClick('/projects', e)}>Design Que Marca</a></li>
          </ul>
        </div>

        <div className="footer-column company-links">
          <h4 className="footer-column-title">EMPRESA</h4>
          <ul className="footer-links">
            <li><a href="/sobre" className="footer-link" onClick={(e) => handleCompanyClick('/sobre', e)}>Sobre Nós</a></li>
            <li><a href="/professionals" className="footer-link" onClick={(e) => handleCompanyClick('/professionals', e)}>Nossos Profissionais</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h4 className="footer-column-title">CONTATO</h4>
          <ul className="footer-contact-info">

            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-contact-link">
              <FaWhatsapp className="contact-icon whatsapp-icon" /> +55 11 95472-8628 </a></li>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <p className="copyright-text">Copyright 2025 © Agile Projects - Todos Direitos Reservados</p>
        <p className="developer-text">Desenvolvido com <span role="img" aria-label="heart">❤️</span> por <Link to="/patrick" className="developer-link">Patrick.Developer</Link></p>
      </div>
    </footer>
  );
}

export default Footer;