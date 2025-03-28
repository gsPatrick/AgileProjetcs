
// Projects.jsx
import React from 'react';
import './Projects.css'; // Importe o arquivo CSS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact, faHtml5, faCss3Alt, faNodeJs, faPython
} from '@fortawesome/free-brands-svg-icons'; // Importe ícones de marcas
import { faEye, faLink, faCube } from '@fortawesome/free-solid-svg-icons'; // Importe ícones sólidos

function Projects() {
    // Mock de dados para projetos
    const projectsData = [
        {
            title: 'Sistema de Rastreios de pedido',
            description: 'Sistema de rastreamento que gera imagens com o status dos pedidos e o envio via WhatsApp',
            developer: 'Alexandre Diógenes Pereira',
            developerLink: 'https://www.linkedin.com/in/alexandre-diogenes-pereira/', // Adicionado link do desenvolvedor
            classificationTag: 'Software de Gestão',
            skillTags: [{ icon: faReact }, { icon: faHtml5 }, { icon: faCss3Alt }],
            imageSrc: 'https://placehold.co/400x250/777/eee?text=Rastreio', // Placeholder image
            siteLink: '#rastreio-site', // Substitua com o link real
            detailsLink: '#rastreio-details', // Substitua com o link real
        },
        {
            title: 'Landing page - portfolio',
            description: 'Uma página de portfolio com 3 projetos para repositorio inclusos',
            developer: 'Alexandre Diógenes Pereira',
            developerLink: 'https://github.com/alexandredp', // Adicionado link do desenvolvedor
            classificationTag: 'Desenvolvedor Full-Stack',
            skillTags: [{ icon: faReact }, { icon: faHtml5 }, { icon: faCss3Alt }, { icon: faNodeJs }],
            imageSrc: 'https://placehold.co/400x250/888/ddd?text=Portfolio', // Placeholder image
            siteLink: '#portfolio-site', // Substitua com o link real
            detailsLink: '#portfolio-details', // Substitua com o link real
        },
        {
            title: 'Robo - Corretora Ebinex',
            description: 'Um robo que analisa a vela anterior e faz uma ação de compra ou venda baseado no algoritmo criado. Esta descrição é um pouco maior para testar a altura dos cards e garantir que os botões fiquem alinhados mesmo com conteúdos diferentes.',
            developer: 'Alexandre Diógenes Pereira',
            developerLink: '#', // Adicionado link do desenvolvedor (placeholder ou link real)
            classificationTag: 'Robo de Investimento',
            skillTags: [{ icon: faPython }, { icon: faCube }], // Cube para um ícone genérico
            imageSrc: 'https://placehold.co/400x250/999/ccc?text=Robo', // Placeholder image
            siteLink: '#robo-site', // Substitua com o link real
            detailsLink: '#robo-details', // Substitua com o link real
        },
        // Adicione mais projetos aqui...
    ];

    return (
        <div className="projects-container-geral">
            <div className="projects-section">
                <h2 className="projects-title">Projetos</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card animated-element" style={{animationDelay: `${0.2 + index * 0.15}s`}}> {/* Animação em cada card */}
                            <div className="project-image-container">
                                <img src={project.imageSrc} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-developer-info">
                                    <a
                                        href={project.developerLink} // Link do desenvolvedor
                                        target="_blank" // Abrir em nova aba
                                        rel="noopener noreferrer" // Segurança para links externos
                                        className="project-developer-link" // Nova classe para o link
                                    >
                                        <span className="project-developer-name">{project.developer}</span>
                                    </a>
                                    <span className="project-classification-tag">{project.classificationTag}</span>
                                </div>
                                <div className="project-skill-tags">
                                    {project.skillTags.map((tag, tagIndex) => (
                                        <FontAwesomeIcon key={tagIndex} icon={tag.icon} className="skill-tag-icon" />
                                    ))}
                                </div>
                                <div className="project-buttons">
                                    <button className="project-button view-page-button" onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')}>
                                        <FontAwesomeIcon icon={faLink} className="button-icon" />
                                        Ver página
                                    </button>
                                    <button className="project-button view-more-button" onClick={() => window.location.href = project.detailsLink}>
                                        <FontAwesomeIcon icon={faEye} className="button-icon" />
                                        Ver mais
                                    </button>
                                </div>
                            </div>
                            <div className="project-availability-container"> {/* Container para alinhar na parte inferior */}
                                <span className="project-availability">{project.availability}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;