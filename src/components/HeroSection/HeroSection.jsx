// HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
  const titles = [
    "Criamos Softwares, Apps e Sites Sob Medida para o Seu Negócio"
    // "Sua Solução Digital, Conectada a Talentos em Diversas Áreas.",
    // "Encontre Especialistas de Qualidade para Cada Projeto Sem Complicação."
  ];
  const subtitle = "Desenvolvimento Personalizado de Sotfware e Aplicativos";
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('fade-in');
  const titleInnerRef = useRef(null);
  const whatsappNumber = '11954728628';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass('fade-out');

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setAnimationClass('fade-in');
      }, 800);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  const handleContactClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={titleInnerRef} className={`hero-title-inner ${animationClass}`}>
            {titles[currentTitleIndex]}
          </span>
        </h1>
        <h2 className="hero-subtitle">
          {subtitle}
        </h2>
        <button className="hero-button" onClick={handleContactClick}>ENTRE EM CONTATO</button>
      </div>
    </section>
  );
}

export default HeroSection;