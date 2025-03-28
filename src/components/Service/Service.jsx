// Service.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Service.css';
import { FaGlobe, FaRocket, FaCode, FaBullhorn, FaPencilRuler } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importe Link

function Service() {
    const servicos = [
        {
        titulo: 'Web Design',
        descricao: 'Nosso serviço de Web Design é totalmente sobre criar websites visualmente impressionantes e amigáveis que deixam uma impressão duradoura no seu público. Nós misturamos criatividade com funcionalidade para entregar websites que mostram a identidade da sua marca enquanto garantem navegação perfeita e experiência de usuário ideal.',
        icone: <FaGlobe className="servico-icone" />,
        botaoProjetos: true, // Adicionando uma flag para indicar que este serviço tem botão de projetos
        classificationTag: 'Web Design' // Adicione classificationTag
        },
        {
        titulo: 'DevOps',
        descricao: 'A agência pode fornecer serviços DevOps para ajudar empresas a otimizar seu desenvolvimento de software.',
        icone: <FaRocket className="servico-icone" />,
        botaoProjetos: true,
        classificationTag: 'DevOps' // Adicione classificationTag
        },
        {
        titulo: 'Desenvolvimento',
        descricao: 'A agência pode fornecer serviços de desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.',
        icone: <FaCode className="servico-icone" />,
        botaoProjetos: true,
        classificationTag: 'Desenvolvimento' // Adicione classificationTag
        },
        {
        titulo: 'Marketing Digital',
        descricao: 'Estratégias de marketing digital eficazes para aumentar a visibilidade online e alcançar seu público-alvo.',
        botaoTexto: 'Explore Agora',
        icone: <FaBullhorn className="servico-icone" />,
        botaoProjetos: true,
        classificationTag: 'Marketing Digital' // Adicione classificationTag
        },
        {
        titulo: 'Design Gráfico',
        descricao: 'Serviços de design gráfico criativos para fortalecer a identidade visual da sua marca.',
        icone: <FaPencilRuler className="servico-icone" />,
        botaoProjetos: true,
        classificationTag: 'Design Gráfico' // Adicione classificationTag
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
                <button className="servico-botao servico-botao-contato">Entre em Contato</button>
                {servico.botaoProjetos && ( // Renderiza o Link apenas se botaoProjetos for true
                    <Link
                        to={`/projects-${servico.titulo.toLowerCase().replace(/ /g, '-')}`}
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