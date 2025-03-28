// AboutMe.jsx
import React from 'react';
import './AboutMe.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Importação do faCode ainda aqui, mas vamos usar o prop agora

// Recebendo props diretamente na função, incluindo o novo prop 'icon'
function AboutMe({ tag, title, description, buttonText, buttonLink, imageSrc, icon }) {

    // Usando o prop 'icon' para o FontAwesomeIcon. Se 'icon' for fornecido, use-o, senão, use faCode como padrão.
    const displayIcon = icon ? icon : faCode;

    return (
        <div className="aboutme-container-geral">
            <div className="aboutme-section animated-element" style={{ animationDelay: '0s' }}>
                <div className="aboutme-header animated-element" style={{ animationDelay: '0.2s' }}>
                    <span className="aboutme-tag">{tag}</span>
                    <h2 className="aboutme-title">
                        <FontAwesomeIcon icon={displayIcon} className="aboutme-title-icon" />
                        {title}
                    </h2>
                </div>
                <div className="aboutme-content">
                    <div className="aboutme-text-content">
                        <div className="aboutme-description animated-element" style={{ animationDelay: '0.4s' }}>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                        <button className="aboutme-contact-button animated-element" style={{ animationDelay: '0.6s' }} onClick={() => window.location.href = buttonLink}>
                            {buttonText}
                        </button>
                    </div>
                    <div className="aboutme-image-container animated-element" style={{ animationDelay: '0.8s' }}>
                        <img src={imageSrc} alt="Imagem Sobre Mim Placeholder" className="aboutme-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;