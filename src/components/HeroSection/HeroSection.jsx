// HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
  const titles = [
    "Inovação, Qualidade e Resultados: O Marketplace para Seu Projeto",
    "Sua Solução Digital, Conectada a Talentos em Diversas Áreas.",
    "Encontre Especialistas de Qualidade para Cada Projeto Sem Complicação."
  ];
  const subtitle = "A Plataforma que Seu Projeto Merece.";
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('fade-in');
  const titleInnerRef = useRef(null);
  const whatsappNumber = '5518998184907';

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
        <p className="hero-subtitle">
          {subtitle}
        </p>
        <button className="hero-button" onClick={handleContactClick}>ENTRE EM CONTATO</button>
      </div>
    </section>
  );
}

export default HeroSection;