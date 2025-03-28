// ShowPro.jsx
import React, { useEffect } from 'react';
import './ShowPro.css'; // Importe o arquivo CSS

// Importe os ícones de marcas separadamente (se precisar)
import { faReact as faReactBrandIcon, faCss3Alt as faCss3AltBrandIcon, faHtml5 as faHtml5BrandIcon } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCode, faLaptopCode, faBrush, faPalette, faMobileScreenButton, faBaby, faUserGraduate, faMedal } from '@fortawesome/free-solid-svg-icons'; // Importe ícones adicionais

import { faGlobe as faGlobeIcon } from '@fortawesome/free-solid-svg-icons'; // ou de free-solid-svg-icons se for um ícone sólido de globo


// Ícones Font Awesome React (necessário instalar: npm install @fortawesome/free-brands-svg-icons)
const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode; // Fallback if not imported
const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette; // Fallback if not imported
const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode; // Fallback if not imported
const faGlobe = faGlobeIcon ? faGlobeIcon : faRocket; // Fallback if not imported


// Recebendo props diretamente na função
function ShowPro({ name, primaryTag, primaryTagIcon, description, imageSrc, imageSrcJunior, imageSrcPleno, imageSrcSenior, defaultImageSrc, tags, portfolioButtonText, portfolioButtonLink }) { // ✅ Adicionados portfolioButtonText e portfolioButtonLink como props


    // Determina a imagem de perfil baseado na tag primária
    let profileImageSrc = defaultImageSrc; // ✅ Imagem padrão AGORA é defaultImageSrc
    if (primaryTag.toLowerCase().includes('junior')) {
        profileImageSrc = imageSrcJunior;
    } else if (primaryTag.toLowerCase().includes('pleno')) {
        profileImageSrc = imageSrcPleno;
    }
     else if (primaryTag.toLowerCase().includes('senior')) {
        profileImageSrc = imageSrcSenior;
    } else {
        profileImageSrc = defaultImageSrc; // ✅ Garante que defaultImageSrc seja usado explicitamente como fallback
    }


    return (
        <div className="container-1400"> {/* Container de 1400px */}
            <div className="showpro-container hero-section">
                <div className="showpro-image-container animated-element" style={{animationDelay: '0s'}}>
                    <img src={profileImageSrc} alt={`Foto de ${name} - ${primaryTag}`} className="showpro-image" />
                </div>
                <div className="showpro-text-content">
                    <h1 className="showpro-name animated-element" style={{animationDelay: '0.2s'}}>Ola, sou {name}</h1>
                    <div className="showpro-primary-tag animated-element" style={{animationDelay: '0.4s'}}> {/* Tag primária com ícone */}
                        <FontAwesomeIcon icon={primaryTagIcon} className="primary-tag-icon" />
                        <span className="primary-tag-text">{primaryTag}</span>
                    </div>
                    <p className="showpro-description animated-element" style={{animationDelay: '0.6s'}}>{description}</p>
                    <div className="showpro-tags animated-element" style={{animationDelay: '0.8s'}}>
                        {tags.map((tag, index) => (
                            <span key={index} className="showpro-tag">
                                <FontAwesomeIcon icon={tag.icon} className="tag-icon" />
                                {tag.name}
                            </span>
                        ))}
                    </div>
                    <button
                        className="showpro-portfolio-button animated-element"
                        style={{animationDelay: '1s'}}
                        onClick={() => window.location.href = portfolioButtonLink} // ✅ Adicionado onClick para redirecionar
                    >
                        {portfolioButtonText} {/* ✅ Usando portfolioButtonText como texto do botão */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShowPro;