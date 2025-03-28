// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const location = useLocation();
  const whatsappNumber = '5518998184907';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen &&
          mobileMenuRef.current &&
          mobileButtonRef.current &&
          !mobileMenuRef.current.contains(event.target) &&
          !mobileButtonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleContactClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="header-container">
      <header className={`header ${isTransparent ? 'header-transparent' : ''}`}>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Agile Projects Logo" className="logo" />
            <span className="company-name">Agile Projects</span>
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          ref={mobileButtonRef}
        >
          {isMobileMenuOpen ? (
            <FiX size={24} color="#eff3f5" />
          ) : (
            <FiMenu size={24} color="#eff3f5" />
          )}
        </button>

        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/sobre" className={`nav-link ${location.pathname === '/sobre' ? 'active-nav-link' : ''}`}>Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/professionals" className={`nav-link ${location.pathname === '/professionals' ? 'active-nav-link' : ''}`}>Nossos Profissionais</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active-nav-link' : ''}`}>Projetos</Link>
            </li>
          </ul>
        </nav>
        <div className="contact-button-container">
          <button className="contact-button" onClick={handleContactClick}>Contate-nos</button>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
        <nav className="mobile-navigation">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/sobre" className={`mobile-nav-link ${location.pathname === '/sobre' ? 'active-nav-link' : ''}`}>Sobre</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/professionals" className={`mobile-nav-link ${location.pathname === '/professionals' ? 'active-nav-link' : ''}`}>Nossos Profissionais</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/projects" className={`mobile-nav-link ${location.pathname === '/projects' ? 'active-nav-link' : ''}`}>Projetos</Link>
            </li>
            <li className="mobile-nav-item">
              <button className="mobile-nav-link contact-button" onClick={handleContactClick}>Contate-nos</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;