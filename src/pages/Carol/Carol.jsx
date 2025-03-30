// Patrick.jsx
import React from "react";
import ShowPro from "../../professionals-components/HeroSection/ShowPro";
import Skills from "../../professionals-components/Skills/Skills";
import Header from "../../components/Header/Header";
import AboutMe from "../../professionals-components/AboutMe/AboutMe";
import Pro from "../../professionals-components/AnotherProfessionals/Pro";
import '../../App.css';

import {
    faPhone,         // Telemarketing
    faSearch,        // Prospecção de leads
    faBriefcase,    // Administração
    faFileAlt,      // Secretaria
    faUserGraduate,
    faBookOpen as faBookOpenSolid
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact as faReactBrandIcon,
    faCss3Alt as faCss3AltBrandIcon,
    faHtml5 as faHtml5BrandIcon,
    faJsSquare,
    faReact as faReactBrandSkillIcon,
    faNodeJs,
    faSass,
    faGitAlt,
    faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faServer,
    faBolt,
    faCheckSquare,
    faMobileScreenButton as faMobileScreenButtonSolid,
    faCube,
    faGlobe,
    faEnvelope,
    faShareAlt,
    faRobot,
    faPencilAlt,
    faMobileScreenButton,
    faBullhorn,
    faRocket
} from '@fortawesome/free-solid-svg-icons';


const CarolPage = () => {

    const professional = {
        name: 'Ana Caroline Gomes',
        primaryTag: 'Assistente Administrativa',
        primaryTagIcon: faUserGraduate,
        description: 'Olá, eu sou a Ana Caroline Gomes, da equipe Agile Projects! Tenho experiência nas áreas de telemarketing, prospecção de leads, administração e secretaria, ajudando empresas a crescer com organização e eficiência. Se precisar de suporte, estou à disposição!',
        imageSrc: 'https://i.imgur.com/w4W9Lbf.jpeg', // Substitua por uma imagem real
        imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
        imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
        imageSrcSenior: 'https://placehold.co/300x300/555/fff?text=Senior',
        defaultImageSrc: 'https://i.imgur.com/w4W9Lbf.jpeg', // Substitua por uma imagem real
        tags: [
            { name: 'Telemarketing', icon: faPhone },
            { name: 'Prospecção de Leads', icon: faSearch },
            { name: 'Administração', icon: faBriefcase },
            { name: 'Secretaria', icon: faFileAlt },
            { name: 'Organização', icon: faBriefcase }, // Pode usar o mesmo ícone ou outro
            { name: 'Atendimento ao Cliente', icon: faPhone }, // Pode usar o mesmo ícone ou outro
        ],
        portfolioButtonText: 'Entre em Contato',
        portfolioButtonLink: 'https://wa.me/SEU_NUMERO' // Substitua pelo número dela
    };

    const professionalSkills = [
        { name: 'Comunicação', icon: faPhone },
        { name: 'Organização', icon: faBriefcase },
        { name: 'Proatividade', icon: faSearch },
        { name: 'Atendimento Telefônico', icon: faPhone },
        { name: 'Redação', icon: faPencilAlt }, // Talvez não seja o ideal, mas é o que temos para escrita
        { name: 'Gerenciamento de Tempo', icon: faBriefcase }, // Pode usar o mesmo ícone ou outro
        { name: 'Pacote Office', icon: faFileAlt }, // Pode usar o mesmo ícone ou outro
        { name: 'CRM', icon: faSearch }, // Talvez não seja o ideal, mas pode representar gerenciamento de clientes
    ];

    // Dados para o componente AboutMe
    const aboutMeData = {
        tag: 'Sobre Mim',
        title: 'Minha Expertise Administrativa',
        description: `Minha missão é oferecer suporte administrativo completo e soluções personalizadas para os desafios da sua empresa. Com expertise em telemarketing, prospecção de leads, administração e organização secretarial, estou à disposição para ajudar você a construir um futuro de sucesso, com foco no cliente e no crescimento sustentável.`,
        buttonText: 'Entre em Contato',
        buttonLink: 'https://wa.me/SEU_NUMERO', // Substitua pelo número dela
        imageSrc: 'https://i.imgur.com/w4W9Lbf.jpeg', // Substitua por uma imagem real
        icon: faBriefcase,
    };

    const primeirosProfissionais = [
        {
            name: 'Renan Bueno',
            image: 'https://i.imgur.com/FQDlTGh.jpeg',
            tags: ['Design UX/UI', 'Figma', 'Prototipagem', 'Design Thinking'],
            link: '/renan'
        },
        { // Alteração aqui
            name: 'Ana Caroline Gomes',
            image: 'https://i.imgur.com/w4W9Lbf.jpeg', // Mantenha a imagem
            tags: ['Telemarketing', 'Prospecção de Leads', 'Administração', 'Secretaria'], // Atualize as tags
            link: '/carol' // Mantenha o link
        },
        {
            name: 'João Vitor',
            image: ' https://i.imgur.com/Z0uI1bB.jpeg',
            tags: ['Desenvolvedor Full-Stack'],
            link: '/joao'
        },
        {
            name: 'Mateus',
            image: 'https://i.imgur.com/UA4BQIt.jpeg',
            tags: ['Product Designer'],
            link: '/mateus'
        },
        {
            name: 'Giovani Appezzato N. Rosa',
            image: ' https://giovani-appezzato.vercel.app/assets/images/eu.webp',
            tags: ['Desenvolvedor de Sotfware'],
            link: '/giovani'
        },
        { // Adicione a Wildilene aqui
            name: 'Wildilene Pereira Moreira',
            image: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua pela URL da imagem dela
            tags: ['Revisão de Textos', 'Tradução (Inglês)', 'Criação de Conteúdo'],
            link: '/wildilene'
          },
        {
            name: 'Ranathan Henrique',
            image: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
            tags: ['Desenvolvedor Full-Stack', 'Desenvolvedor Web'],
            link: '/ranathan'
        },
        {
            name: 'Maria G. Silva',
            image: 'https://i.imgur.com/q7rfYQ5.jpeg',
            tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
            link: '/maria'
        },
        {
            name: 'Michel Lombardi',
            image: 'https://i.imgur.com/gqGHDF8.jpeg',
            tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
            link: '/michel'
          },
          {
            name: 'Patrick Siqueira',
            image: 'https://i.imgur.com/hsQLqCL.jpeg',
            tags: ['Desenvolvedor Full-Stack', 'Dev-Ops', 'Web-Design'],
            link: '/patrick'
          },
    ];



    return (
        <div className="app-container">
            <Header />
            <ShowPro
                name={professional.name}
                primaryTag={professional.primaryTag}
                primaryTagIcon={professional.primaryTagIcon}
                description={professional.description}
                imageSrc={professional.imageSrc}
                imageSrcJunior={professional.imageSrcJunior}
                imageSrcPleno={professional.imageSrcPleno}
                imageSrcSenior={professional.imageSrcSenior}
                defaultImageSrc={professional.defaultImageSrc}
                tags={professional.tags}
                portfolioButtonText={professional.portfolioButtonText}
                portfolioButtonLink={professional.portfolioButtonLink}
            />
            <Skills skills={professionalSkills} />
            <AboutMe
                tag={aboutMeData.tag}
                title={aboutMeData.title}
                description={aboutMeData.description}
                buttonText={aboutMeData.buttonText}
                buttonLink={aboutMeData.buttonLink}
                imageSrc={aboutMeData.imageSrc}
                icon={aboutMeData.icon}
            />
            <Pro
                professionals={primeirosProfissionais}
                title="Outros membros da Agile Projects"
            />
        </div>
    );
};

export default CarolPage;