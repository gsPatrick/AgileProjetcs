// Footer.jsx
import React, { useRef, useEffect, useState } from 'react'; // **ADD THIS IMPORT STATEMENT**
import './Footer.css';
import Logo from '../../assets/Logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // **MAKE SURE THIS LINE IS PRESENT**

function Footer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [fireworksActive, setFireworksActive] = useState(false); // ✅ ENSURE THIS LINE IS EXACTLY AS SHOWN

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

  const whatsappNumber = '+5518998184907'; // Define WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`; // Construct WhatsApp link

  return (
    <footer className={`footer-section ${isVisible ? 'footer-section-visible' : ''}`} ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-column company">
          <div className="footer-logo-container">
            <img src={Logo} alt="Agile Projects Logo" className="footer-logo" />
            <span
  className={`footer-company-name ${fireworksActive ? 'fireworks-active' : ''}`}
  onClick={handleFireworksClick}
>
              Agile Projects
              <span/> <span/>
            </span>
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
            <li><Link to="/projects" className="footer-link">Landing Page</Link></li>
            <li><Link to="/projects" className="footer-link">Aplicativo</Link></li>
            <li><Link to="/projects" className="footer-link">Web Site Personalizado</Link></li>
            <li><Link to="/projects" className="footer-link">Desenvolvimento Web</Link></li>
            <li><Link to="/projects" className="footer-link">Marketing Digital</Link></li>
            <li><Link to="/projects" className="footer-link">Automação</Link></li>
            <li><Link to="/projects" className="footer-link">Design Que Marca</Link></li>
          </ul>
        </div>

        <div className="footer-column company-links">
          <h4 className="footer-column-title">EMPRESA</h4>
          <ul className="footer-links">
            <li><Link to="/sobre" className="footer-link">Sobre Nós</Link></li>
            <li><Link to="/professionals" className="footer-link">Nossos Profissionais</Link></li>
            <li><Link to="https://wa.me/5518998184907" className="footer-link">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h4 className="footer-column-title">CONTATO</h4>
          <ul className="footer-contact-info">
            
            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-contact-link">
              <FaWhatsapp className="contact-icon whatsapp-icon" /> +55 18 99818-4907 </a></li>
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