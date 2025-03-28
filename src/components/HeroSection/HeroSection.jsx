// HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import './HeroSection.css';

function HeroSection() {
  const titles = [
    "Inovação, Qualidade e Resultados: O Marketplace para Seu Projeto",
    "Sua Solução Digital, Conectada a Talentos em Diversas Áreas.",
    "Encontre Especialistas de Qualidade para Cada Projeto Sem Complicação."
  ];
  const subtitle = "A Plataforma que Seu Projeto Merece.";
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('fade-in'); // Estado para classe de animação do título
  const titleInnerRef = useRef(null); // Ref para o elemento hero-title-inner

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass('fade-out'); // Inicia o fade out

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setAnimationClass('fade-in'); // Inicia o fade in do novo título
      }, 800); // Espera o fade-out quase terminar antes de trocar o texto e iniciar o fade-in
    }, 5000);

    return () => clearInterval(intervalId);
  }, [titles.length]);


  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={titleInnerRef} className={`hero-title-inner ${animationClass}`}> {/* Aplica classe de animação e ref */}
         {titles[currentTitleIndex]}
          </span>
        </h1>
        <p className="hero-subtitle">
          {subtitle}
        </p>
        <button className="hero-button">ENTRE EM CONTATO</button>
      </div>
    </section>
  );
}

export default HeroSection;