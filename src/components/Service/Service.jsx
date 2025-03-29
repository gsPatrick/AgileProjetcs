// Service.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Service.css';
import { FaGlobe, FaRocket, FaCode, FaBullhorn, FaPencilRuler,FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Service() {
    const whatsappNumber = '5518998184907'; // Número do WhatsApp
    const servicos = [
        {
            titulo: 'Landing Page',
            descricao: 'Criação de Landing Pages impactantes e focadas em conversão. Design visual atraente e navegação intuitiva para maximizar resultados.',
            icone: <FaGlobe className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Landing Page'
        },
        {
            titulo: 'Aplicativo',
            descricao: 'Desenvolvimento de aplicativos personalizados para iOS e Android. Soluções inovadoras para otimizar processos e engajar seus usuários.',
            icone: <FaRocket className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Aplicativo'
        },
        {
            titulo: 'Web Site Personalizado',
            descricao: 'Desenvolvimento de Web Sites Personalizados para impulsionar sua marca. Design exclusivo, funcionalidades sob medida e hospedagem otimizada para o seu sucesso online.',
            icone: <FaGlobe className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Site Personalizado'
        },
        
        {
            titulo: 'Marketing Digital',
            descricao: 'Estratégias de Marketing Digital para aumentar a visibilidade online e gerar leads qualificados. Alcance seu público-alvo de forma eficaz.',
            botaoTexto: 'Explore Agora',
            icone: <FaBullhorn className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Marketing Digital'
        },
        {
            titulo: 'Automação',
            descricao: 'Automação de processos para otimizar sua operação e aumentar a produtividade. Reduza custos e foque no que realmente importa.',
            icone: <FaPencilRuler className="servico-icone" />,
            botaoProjetos: true,
            classificationTag: 'Automacao'
        },
        {
            titulo: 'Design Que Marca',
            descricao: 'Criamos identidades visuais únicas e memoráveis para sua marca se destacar. Logotipos, paletas de cores, tipografia e tudo o que você precisa para construir uma imagem forte e profissional.',
            icone: <FaPalette className="servico-icone" />, // Substitua pelo ícone apropriado
            botaoProjetos: true,
            classificationTag: 'Design'
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