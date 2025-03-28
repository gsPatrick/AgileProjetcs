// Service.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Service.css';
import { FaGlobe, FaRocket, FaCode, FaBullhorn, FaPencilRuler } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Service() {
    const whatsappNumber = '5518998184907'; // Número do WhatsApp
    const servicos = [
        {
            titulo: 'Web Design',
            descricao: 'Nosso serviço de Web Design é totalmente sobre criar websites visualmente impressionantes e amigáveis que deixam uma impressão duradoura no seu público. Nós misturamos criatividade com funcionalidade para entregar websites que mostram a identidade da sua marca enquanto garantem navegação perfeita e experiência de usuário ideal.',
            icone: <FaGlobe className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Web Design'
        },
        {
            titulo: 'DevOps',
            descricao: 'A agência pode fornecer serviços DevOps para ajudar empresas a otimizar seu desenvolvimento de software.',
            icone: <FaRocket className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'DevOps'
        },
        {
            titulo: 'Desenvolvimento',
            descricao: 'A agência pode fornecer serviços de desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.',
            icone: <FaCode className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Desenvolvimento'
        },
        {
            titulo: 'Marketing Digital',
            descricao: 'Estratégias de marketing digital eficazes para aumentar a visibilidade online e alcançar seu público-alvo.',
            botaoTexto: 'Explore Agora',
            icone: <FaBullhorn className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Marketing Digital'
        },
        {
            titulo: 'Design Gráfico',
            descricao: 'Serviços de design gráfico criativos para fortalecer a identidade visual da sua marca.',
            icone: <FaPencilRuler className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Design Gráfico'
        }
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

    const handleContactClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const getProjectsLink = (title) => {
        return `/projects?category=${encodeURIComponent(title)}`;
    };

    return (
        <section className={`nossos-servicos-section ${isVisible ? 'service-section-visible' : ''}`} ref={sectionRef}>
            <h2>Nossos Serviços</h2>
            <div className="servicos-grid">
                {servicos.map((servico, index) => (
                    <div
                        key={index}
                        className="servico-card"
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <div className="servico-icone-container">
                            {servico.icone}
                        </div>
                        <h3 className="servico-titulo">{servico.titulo}</h3>
                        <p className="servico-descricao">{servico.descricao}</p>
                        {servico.precoInicial && <p className="servico-preco">A partir de: <span>{servico.precoInicial}</span></p>}
                        <div className="servico-botoes">
                            <button className="servico-botao servico-botao-contato" onClick={handleContactClick}>Entre em Contato</button>
                            {servico.botaoProjetos && (
                                <Link
                                    to={getProjectsLink(servico.classificationTag)}
                                    className="servico-botao servico-botao-projetos-link"
                                >
                                    Veja os Projetos
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Service;