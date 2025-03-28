import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/Logo.png'; // Ajuste o caminho se necessário
import './Header.css';
import { FiMenu, FiX } from 'react-icons/fi'; // Importe o ícone FiX
import { Link, useLocation } from 'react-router-dom'; // Importe Link e useLocation do react-router-dom

function Header() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile
  const mobileMenuRef = useRef(null); // Referência para o menu mobile
  const mobileButtonRef = useRef(null); // Referência para o botão mobile
  const location = useLocation(); // Hook para obter a localização atual

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
        setIsMobileMenuOpen(false); // Fecha o menu se clicar fora
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Dependência em isMobileMenuOpen

  return (
    <div className="header-container">
      <header className={`header ${isTransparent ? 'header-transparent' : ''}`}>
        <div className="logo-container">
          <Link to="/" className="logo-link"> {/* Adicionado Link para o logo-container */}
            <img src={Logo} alt="Agile Projects Logo" className="logo" />
            <span className="company-name">Agile Projects</span>
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          ref={mobileButtonRef} // Adiciona ref ao botão
        >
          {isMobileMenuOpen ? (
            <FiX size={24} color="#eff3f5" /> // Ícone de 'X' quando o menu está aberto
          ) : (
            <FiMenu size={24} color="#eff3f5" /> // Ícone de menu sanduíche quando fechado
          )}
        </button>

        <nav className="navigation"> {/* Navegação desktop (oculta em mobile) */}
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
          <button className="contact-button">Contate-nos</button>
        </div>
      </header>

      {/* Menu Mobile (aparece quando isMobileMenuOpen é true) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}> {/* Adiciona ref ao menu */}
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
            <li className="mobile-nav-item"><a href="#contact" className="mobile-nav-link contact-button">Contate-nos</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;