// Projects.jsx
import React, { useState } from 'react';
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact, faHtml5, faCss3Alt, faNodeJs, faPython, faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faEye, faLink, faCube } from '@fortawesome/free-solid-svg-icons';

function Projects({ initialClassificationFilter, initialSeniorityFilter, developerNameFilter }) {
    // Mock de dados para projetos
    const projectsData = [
        {
            title: 'Landing Page de Portfolio + 3 projetos para repositorio',
            description: 'Uma página de portfolio com 3 projetos para repositorio inclusos',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Web Design',
            skillTags: [{ icon: faReact }, { icon: faHtml5 }, { icon: faCss3Alt }, { icon: faNodeJs }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/LpPortfolio-Cp9b4PXe.png',
            siteLink: 'https://alexandre-diogenes-pereira-ygd6.vercel.app/',
            detailsLink: '#rastreio-details',
            seniority: 'Senior'
        },
        {
            title: 'Robo - Corretora Ebinex',
            description: 'Um robo que analisa a vela anterior e faz uma ação de compra ou venda baseado no algoritmo criado.',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Automação',
            skillTags: [{ icon: faPython }, { icon: faNodeJs }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/EbinexRobo-Da6UP6kr.png',
            siteLink: '#robo-site',
            detailsLink: '#robo-details',
            seniority: 'Senior'
        },
        {
            title: 'Wordpress - Óticas Perci',
            description: 'Uma pagina de oculos com Pop-Up para mudanças nos itens dos óculos',
            developer: 'Patrick Siqueira', // Projeto do Patrick
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faNodeJs }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/OticaPerci-Cf-OOEmd.png',
            siteLink: 'https://otica.rodriguezbusiness.com.br/',
            detailsLink: '#patrick1-details',
            seniority: 'Pleno'
        },
        {
            title: 'Landing Page - LArmure Confecções',
            description: 'Landing page institucional para LArmure Confecções, empresa com a missão de transformar a forma como você veste sua equipe. Uniformes que são mais do que simples peças de roupa, representando visualmente a essência da sua empresa, escola ou propósito. Qualidade, personalização e compromisso com a satisfação do cliente, desde uniformes escolares até administrativos.',
            developer: 'Patrick Siqueira', // Projeto do Patrick
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/Larmure-DJMHD9Sl.png',
            siteLink: 'https://larmure.com.br/',
            detailsLink: '#patrick2-details',
            seniority: 'Senior'
        },
        {
            title: 'Landing Page - Psicóloga Erika Corrêa',
            description: 'Desenvolvimento de uma landing page profissional e elegante para psicóloga, utilizando a plataforma Wix para otimizar a presença online e a captação de pacientes.',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/ErikaPsicologa-DPpfjRTv.png',
            siteLink: '#websenior-site',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Quiz de Astrologia - AstroQuiz',
            description: 'Página web interativa para um quiz de astrologia personalizado. Descubra previsões astrológicas poderosas respondendo a um teste rápido e intuitivo.',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/AstroQuiz-BNSiuOyj.png',
            siteLink: 'https://www.astroquiz.online/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Landing Page - Unime - E-book "Dia Mundial da Alimentação"',
            description: 'Uma página para divulgar um E-book de uma equipe de estudantes de nutrição da Faculdade UNIME',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://patrick-siqueira-portifolio.vercel.app/assets/LpEbook-BpITc2MN.png',
            siteLink: 'https://equipe-aipim.vercel.app/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Landing Page - Reparolar"',
            description: 'Uma página para a empresa ReparoLar Especialistas em limpeza de estofados, transformando ambientes com tecnologia e inovação.',
            developer: 'Patrick Siqueira',
            developerLink: '/professionals/patrick',
            classificationTag: 'Desenvolvimento Web',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://i.imgur.com/CPS8251.png',
            siteLink: 'https://www.higienizalar.com.br/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },


        // Giovanni

        {
            title: 'Let´s Deliver',
            description: 'A plataforma Lets Deliver conecta entregadores e motoristas a clientes que precisam de serviços de entrega na região, permitindo que visualizem os pontos de entrega no mapa e aceitem serviços disponíveis.',
            developer: 'Giovani Appezzato N. Rosa',
            developerLink: '/professionals/giovani',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://giovani-appezzato.vercel.app/assets/images/lets-deliver.png',
            siteLink: '#',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },
        {
            title: 'Writeflow',
            description: 'Sistema low-code/no-code que proporciona autonomia na implementação de fluxos de trabalho com a notação BPMN, desde a criação de processos até a execução e geração de relatórios para análise de resultados.',
            developer: 'Giovani Appezzato N. Rosa',
            developerLink: '/professionals/giovani',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://giovani-appezzato.vercel.app/assets/images/writeflow.jpg',
            siteLink: '#',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },
        {
            title: 'Lovekar Automotive',
            description: 'Plataforma de agendamento de horários com oficinas da região, com o objetivo de facilitar a comunicação entre proprietários de veículos, lojas de autopeças e oficinas.',
            developer: 'Giovani Appezzato N. Rosa',
            developerLink: '/professionals/giovani',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://giovani-appezzato.vercel.app/assets/images/lovekar.png',
            siteLink: '#',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },
        {
            title: 'SAIC (Solução de atendimento integrado ao cidadão)',
            description: 'Sistema de gestão 156 para cidades, projetado para aprimorar a comunicação entre a população e a prefeitura, com integração a um modelador BPMN que possibilita a criação e automação de processos municipais sem a necessidade de codificação.',
            developer: 'Giovani Appezzato N. Rosa',
            developerLink: '/professionals/giovani',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://giovani-appezzato.vercel.app/assets/images/saic.png',
            siteLink: 'https://www.higienizalar.com.br/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        // Mateus

        {
            title: 'IHelp',
            description: 'O iHelp é um software CRM por meio do WhatsApp. O projeto existe desde 2022 e, quando eu ingressei em julho de 2023, pude perceber várias oportunidades de negócios para o produto, como: desenvolvimento de funcionalidades que agregariam valor ao usuário, redesign do produto como um todo e otimizações no produto com base em feedbacks do usuário e acessibilidade digital. Fui peça-chave no desenvolvimento do produto da empresa, desde pesquisas com usuários, desenvolvimento da interface e boas práticas na consolidação do processo interno de desenvolvimento do produto.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faFigma } ],
            imageSrc: 'https://mateustr.com/portfolio/ihelp/cover.jpg',
            siteLink: 'https://ihelpchat.com/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'CBCM (Congresso Brasileiro de Cannabis Medicinal)',
            description: 'O Congresso Brasileiro de Cannabis Medicinal (CBCM) é o principal congresso da América Latina de caráter científico e profissional que busca trazer inovação e avanços relacionados à utilização medicinal da cannabis. O CBCM promove palestras, comitês e uma feira sobre a cannabis medicinal.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://mateustr.com/portfolio/cbcm/cover.jpg',
            siteLink: 'https://congressocannabis.com.br/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Duopen',
            description: 'A Duopen é uma fintech em etapa de growth. É um software B2B com o objetivo de ajudar instituições educacionais a otimizar seu processo de negociação de bolsa de estudos. O core do projeto é um dashboard com a vida financeira completa de um aluno por meio do open finance que avalia automaticamente a situação do aluno para receber uma bolsa de estudos.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://mateustr.com/portfolio/duopen/cover.jpg',
            siteLink: 'https://useduopen.com.br/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Aiba',
            description: 'Aiba é um software híbrido com foco em negócios locais. O software mede a satisfação dos consumidores dos negócios e fornece um dashboard sobre a satisfação dos consumidores.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://mateustr.com/portfolio/aiba/cover.jpg',
            siteLink: 'https://www.figma.com/file/9SAplfrVQEMaGSQ2LMkyUT/Aiba?type=design&t=2AwMlEdSI3hhlInH-6',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Ou',
            description: 'A oU é um e-commerce de vestuário com uma pegada sustentável. O core do projeto é comunicar o propósito da marca: Sustentável, goodvibe e elegante. Para isso, desenvolvemos a home-page do e-commerce da oU.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://mateustr.com/portfolio/ou/cover.jpg',
            siteLink: 'https://lojadaou.com/',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },

        {
            title: 'Youbee',
            description: 'O Youbee é um aplicativo mobile que auxilia na gestão de salões de cabelereiros e profissionais autônomos do setor. O objetivo é ser como um parceiro na gestão dos negócios. O aplicativo atua no dia a dia dos profissionais e salões, registrando os serviços prestados, fornecendo facilidade para receber pagamentos, carteira digital, organizando a contabilidade dos negócios (como pagamento de comissões para seus funcionários) e fornecendo um dashboard com informações importantes. Youbee resolve um problema muito recorrente no setor, a negligência e/ou desorganização administrativa.',
            developer: 'Mateus Texeira',
            developerLink: '/professionals/mateus',
            classificationTag: 'Aplicativo',
            skillTags: [{ icon: faReact }, { icon: faCss3Alt }],
            imageSrc: 'https://mateustr.com/portfolio/youbee/cover.jpg',
            siteLink: 'https://www.figma.com/file/vKDMIqE9UYYQllO9Zn1tVV/Youbee?type=design&t=2AwMlEdSI3hhlInH-6',
            detailsLink: '#websenior-details',
            seniority: 'Senior'
        },



    ];

    const [languageFilter, setLanguageFilter] = useState('Todos');
    const [developerFilter, setDeveloperFilter] = useState('Todos'); // Removido do HTML, mas mantido no state caso precise para outra funcionalidade futura
    const [classificationFilter, setClassificationFilter] = useState(initialClassificationFilter || 'Todos');
    const [seniorityFilter, setSeniorityFilter] = useState(initialSeniorityFilter || 'Todos');


    const uniqueLanguages = ['Todos', ...Array.from(new Set(projectsData.flatMap(project => project.skillTags.map(tag => {
        if (tag.icon === faReact) return 'React';
        if (tag.icon === faHtml5) return 'HTML5';
        if (tag.icon === faCss3Alt) return 'CSS3';
        if (tag.icon === faNodeJs) return 'Node.js';
        if (tag.icon === faPython) return 'Python';
        if (tag.icon === faCube) return 'Outra';
        return 'Outra';
    }))))];
    const uniqueDevelopers = ['Todos', ...Array.from(new Set(projectsData.map(project => project.developer)))]; // Mantido caso precise para outra funcionalidade futura
    const uniqueClassifications = ['Todos', ...Array.from(new Set(projectsData.map(project => project.classificationTag)))];
    const uniqueSeniorities = ['Todos', 'Junior', 'Pleno', 'Senior'];


    const filteredProjects = projectsData.filter(project => {
        const languageMatch = languageFilter === 'Todos' || project.skillTags.some(tag => {
            if (languageFilter === 'React' && tag.icon === faReact) return true;
            if (languageFilter === 'HTML5' && tag.icon === faHtml5) return true;
            if (languageFilter === 'CSS3' && tag.icon === faCss3Alt) return true;
            if (languageFilter === 'Node.js' && tag.icon === faNodeJs) return true;
            if (languageFilter === 'Python' && tag.icon === faPython) return true;
            if (languageFilter === 'Outra' && tag.icon === faCube) return true;
            return false;
        });
        const developerMatch = developerFilter === 'Todos' || project.developer === developerFilter; // Mantido caso precise para outra funcionalidade futura
        const classificationMatch = classificationFilter === 'Todos' || project.classificationTag === classificationFilter;
        const seniorityMatch = seniorityFilter === 'Todos' || project.seniority === seniorityFilter;
        const developerNameMatch = !developerNameFilter || project.developer === developerNameFilter; // ADICIONANDO FILTRO POR NOME DO DESENVOLVEDOR


        return languageMatch && developerMatch && classificationMatch && seniorityMatch && developerNameMatch; // INCLUINDO developerNameMatch NA CONDIÇÃO
    });


    return (
        <div className="projects-container-geral">
            <div className="projects-section">
                <h2 className="projects-title">Projetos</h2>

                {/* REMOVENDO FILTRO DE DESENVOLVEDOR DO COMPONENTE Projects, pois agora filtramos por prop */}
                <div className="projects-filters">
                    <div className="filter-group">
                        <label htmlFor="languageFilter">Linguagem/Tecnologia:</label>
                        <select
                            id="languageFilter"
                            value={languageFilter}
                            onChange={(e) => setLanguageFilter(e.target.value)}
                        >
                            {uniqueLanguages.map((lang, index) => (
                                <option key={index} value={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="classificationFilter">Classificação:</label>
                        <select
                            id="classificationFilter"
                            value={classificationFilter}
                            onChange={(e) => setClassificationFilter(e.target.value)}
                        >
                            {uniqueClassifications.map((classif, index) => (
                                <option key={index} value={classif}>{classif}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="seniorityFilter">Senioridade:</label>
                        <select
                            id="seniorityFilter"
                            value={seniorityFilter}
                            onChange={(e) => setSeniorityFilter(e.target.value)}
                        >
                            {uniqueSeniorities.map((seniority, index) => (
                                <option key={index} value={seniority}>{seniority}</option>
                            ))}
                        </select>
                    </div>
                </div>


                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card animated-element" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                            <div className="project-image-container">
                                <img src={project.imageSrc} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-developer-info">
                                    <a
                                        href={project.developerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-developer-link"
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

                                    <button className="project-button view-more-button" onClick={() => window.location.href = project.siteLink}>
                                        <FontAwesomeIcon icon={faEye} className="button-icon" />
                                        Ver pagina
                                    </button>
                                </div>
                            </div>
                            <div className="project-availability-container">
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