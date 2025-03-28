// Benefits.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Benefits.css';
import { FaRegLightbulb, FaShieldAlt, FaLayerGroup, FaHandshake, FaUsers, FaChartLine, FaCode, FaSearch } from 'react-icons/fa';

function Benefits() {
  const benefitsData = [
    {
      title: 'Experiência Premium',
      points: [
        'Atendimento personalizado, com um gestor de projeto acompanhando cada cliente.',
        'Curadoria rigorosa dos freelancers para garantir qualidade.',
        'Suporte rápido e eficiente, com um canal exclusivo para tirar dúvidas.',
      ],
      icon: <FaRegLightbulb className="benefit-icon" />,
    },
    {
      title: 'Garantia de Qualidade',
      points: [
        'Sistema de avaliações e certificações para destacar os melhores profissionais.',
        'Política de revisão gratuita ou reembolso se o serviço não atender ao esperado.',
      ],
      icon: <FaShieldAlt className="benefit-icon" />,
    },
    {
      title: 'Níveis de Serviço',
      points: [
        'Freelancers Júnior, Pleno e Sênior, para que o cliente escolha entre um serviço mais acessível ou um mais premium.',
        'Diferenciação por prazo: entregas normais, urgentes e expressas com preços ajustáveis.',
      ],
      icon: <FaLayerGroup className="benefit-icon" />,
    },
    {
      title: 'Transparência e Confiança',
      points: [
        'Perfis completos de freelancers com portfólio, avaliações e certificados.',
        'Garantia de qualidade com revisão gratuita ou intermediação da agência em caso de problemas.',
      ],
      icon: <FaHandshake className="benefit-icon" />,
    },
    {
      title: 'Escalabilidade Flexível',
      points: [
        'Aumente ou diminua sua equipe de desenvolvimento conforme a demanda do projeto.',
        'Adapte-se rapidamente às mudanças e prioridades do seu negócio.',
      ],
      icon: <FaChartLine className="benefit-icon" />,
    },
    {
      title: 'Acesso a Talentos Diversificados',
      points: [
        'Conecte-se com uma vasta rede de freelancers especializados em diversas tecnologias e setores.',
        'Encontre o profissional ideal para cada necessidade específica do seu projeto.',
      ],
      icon: <FaUsers className="benefit-icon" />,
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
    <section className={`benefits-section ${isVisible ? 'benefits-section-visible' : ''}`} ref={sectionRef}>
      <div className="benefits-container">
        <h2>Por que escolher a Agile Projects?</h2>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="benefit-icon-container">
                {benefit.icon}
              </div>
              <div className="benefit-text-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <ul className="benefit-points">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="benefit-point">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;