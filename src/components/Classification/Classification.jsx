// Classification.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Classification.css';
import { FaStar, FaAward, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importe Link

function Classification() {
  const classificationLevels = [
    {
      titulo: 'Júnior',
      descricao: 'Freelancers Júnior, para que o cliente escolha entre um serviço mais acessível.',
      icone: <FaStar className="classification-icone" />,
      botaoTexto: 'Veja Desenvolvedores Juniores',
      seniorityFilterValue: 'Junior' // Valor para filtro de senioridade
    },
    {
      titulo: 'Pleno',
      descricao: 'Freelancers Pleno, para que o cliente escolha entre um serviço com um ótimo custo-benefício.',
      icone: <FaAward className="classification-icone" />,
      botaoTexto: 'Veja Desenvolvedores Plenos',
      seniorityFilterValue: 'Pleno' // Valor para filtro de senioridade
    },
    {
      titulo: 'Sênior',
      descricao: 'Freelancers Sênior, para que o cliente escolha entre um serviço mais premium.',
      icone: <FaCrown className="classification-icone" />,
      botaoTexto: 'Veja Desenvolvedores Seniores',
      seniorityFilterValue: 'Senior' // Valor para filtro de senioridade
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            cardRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('card-visible');
                }, index * 200);
              }
            });
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

  return (
    <section className={`classification-section ${isVisible ? 'classification-section-visible' : ''}`} ref={sectionRef}>
      <h2>Níveis de Serviço</h2>
      <p className="classification-section-subtitle">Freelancers Júnior, Pleno e Sênior, para que o cliente escolha entre um serviço mais acessível ou um mais premium. Diferenciação por prazo: entregas normais, urgentes e expressas com preços ajustáveis.</p>
      <div className="classification-grid">
        {classificationLevels.map((level, index) => (
          <div
            key={index}
            className="classification-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="classification-icone-container">
              {level.icone}
            </div>
            <h3 className="classification-titulo">{level.titulo}</h3>
            <p className="classification-descricao">{level.descricao}</p>
            <div className="classification-button-container">
     
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classification;