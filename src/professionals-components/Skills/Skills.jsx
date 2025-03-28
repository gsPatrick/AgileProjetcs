    // Skills.jsx
    import React from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // ✅ Importe FontAwesomeIcon
    import './Skills.css'; // Importe o arquivo CSS


    function Skills({ skills }) { // Aceita 'skills' como props

        return (
            <div className="skills-container-geral">
                <div className="skills-section animated-element" style={{ animationDelay: '0s' }}>
                    <div className="skills-header animated-element" style={{ animationDelay: '0.2s' }}>
                        <span className="skills-tag">Habilidades</span>
                        <h2 className="skills-title">Ferramentas que darão vida ao seu projeto!</h2>
                    </div>
                    <div className="skills-grid">
                        {/* Usando a skills prop agora */}
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-item animated-element"
                                style={{ animationDelay: `${0.4 + index * 0.05}s` }} // Animação individual com delay progressivo
                            >
                                {/* Renderização condicional do ícone - Mais robusta */}
                                {skill.icon && (
                                    // ✅ Verifique se é um objeto Font Awesome (tem 'iconName')
                                    typeof skill.icon === 'object' && skill.icon.iconName ? (
                                        <span className="skill-logo">
                                            <FontAwesomeIcon icon={skill.icon} /> {/* ✅ Renderize com FontAwesomeIcon */}
                                        </span>
                                    ) : React.isValidElement(skill.icon) ? ( // Se não for Font Awesome, verifique se é elemento React
                                        skill.icon // Renderiza elemento React diretamente
                                    ) : (
                                        <span className="skill-logo">
                                            {skill.icon} {/* Renderiza outros tipos (string, etc. - se necessário) */}
                                        </span>
                                    )
                                )}
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default Skills;