import React, { useRef, useEffect, useState } from 'react';
import './Pro.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pro({ professionals, title }) { // Aceita props 'professionals' e 'title'
  console.log("Componente Pro está renderizando...");

  const [developersData, setDevelopersData] = useState([]);
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  // Função de embaralhamento Fisher-Yates
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (professionals && professionals.length > 0) {
      const shuffledData = shuffleArray(professionals);
      setDevelopersData(shuffledData);
      console.log("Dados embaralhados e setados via props:", shuffledData);
    } else {
      console.log("Nenhum dado de profissionais passado via props.");
      setDevelopersData([]);
    }
  }, [professionals]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            cardRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('pro-component-card-visible');
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


  useEffect(() => {
    if (isAutoScrolling) {
      const intervalId = setInterval(() => {
        if (carouselRef.current) {
          const cardWidth = 280;
          const scrollAmount = cardWidth;
          const totalCardsWidth = developersData.length * cardWidth;
          const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;


          setScrollPosition(prevPosition => {
            let nextPosition = prevPosition + scrollAmount;
            if (nextPosition >= totalCardsWidth ) {
                nextPosition = 0;
            }

            carouselRef.current.scrollLeft = nextPosition;
            return nextPosition;
          });
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isAutoScrolling, developersData.length]);

  const scrollCarousel = (direction) => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      const cardWidth = 280;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      setScrollPosition(prevPosition => {
        let nextPosition = prevPosition + scrollAmount;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (nextPosition < 0) {
          nextPosition = maxScroll;
        } else if (nextPosition > maxScroll) {
          nextPosition = 0;
        }
        carouselRef.current.scrollLeft = nextPosition;
        return nextPosition;
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <section className={`pro-component-section ${isVisible ? 'pro-component-section-visible' : ''}`} ref={sectionRef}>
      <div className="pro-component-container">
        <h2>{title}</h2> {/* Título dinâmico via prop 'title' */}
        <div className="pro-component-carousel-wrapper">
          {/* Container de botões MOBILE - TOPO */}
          <div className="pro-component-carousel-buttons-mobile pro-component-carousel-buttons-mobile-top">
            <button className="pro-component-carousel-button pro-component-carousel-button-prev" onClick={() => scrollCarousel('left')} aria-label="Previous Developer"><FaChevronLeft /></button>
            <button className="pro-component-carousel-button pro-component-carousel-button-next" onClick={() => scrollCarousel('right')} aria-label="Next Developer"><FaChevronRight /></button>
          </div>

          <button className="pro-component-carousel-button pro-component-carousel-button-prev pro-component-carousel-button-desktop" onClick={() => scrollCarousel('left')} aria-label="Previous Developer"><FaChevronLeft /></button>
          <div className="pro-component-carousel" ref={carouselRef}>
            {console.log("Dados para renderizar os cards:", developersData)}
            {developersData.map((developer, index) => {
               console.log("Renderizando card para:", developer.name);
              return (
                <div
                  key={index}
                  className="pro-component-card"
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <div className="pro-component-image-container">
                    <img src={developer.image} alt={developer.name} className="pro-component-image" />
                  </div>
                  <h3 className="pro-component-name">{developer.name}</h3>
                  <div className="pro-component-tags">
                    {developer.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="pro-component-tag">{tag}</span>
                    ))}
                  </div>
                  {/* Botão "Conhecer Mais" transformado em link */}
                  <a
                    href={developer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-component-button"
                  >
                    Conhecer Mais
                  </a>
                </div>
              )
            })}
          </div>
          <button className="pro-component-carousel-button pro-component-carousel-button-next pro-component-carousel-button-desktop" onClick={() => scrollCarousel('right')} aria-label="Next Developer"><FaChevronRight /></button>

          {/* Container de botões MOBILE - BASE */}
          <div className="pro-component-carousel-buttons-mobile pro-component-carousel-buttons-mobile-bottom">
            <button className="pro-component-carousel-button pro-component-carousel-button-prev" onClick={() => scrollCarousel('left')} aria-label="Previous Developer"><FaChevronLeft /></button>
            <button className="pro-component-carousel-button pro-component-carousel-button-next" onClick={() => scrollCarousel('right')} aria-label="Next Developer"><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pro;