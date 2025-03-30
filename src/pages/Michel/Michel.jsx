// Patrick.jsx
import React from "react";
import ShowPro from "../../professionals-components/HeroSection/ShowPro";
import Skills from "../../professionals-components/Skills/Skills";
import Header from "../../components/Header/Header";
import AboutMe from "../../professionals-components/AboutMe/AboutMe";
import Pro from "../../professionals-components/AnotherProfessionals/Pro";
import '../../App.css';

import {
    faCalculator,  // Para modelagem matemática
    faChartLine,   // Para análise de probabilidades e viabilidade
    faLightbulb,   // Para projetos inovadores e insights
    faBrain,       // Para lógicas complexas e abordagem analítica
    faDiceD6,      // Para criação de jogos
    faBalanceScale, // Para avaliação de riscos
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


const MichelPage = () => {

    const professional = {
        name: 'Michel Lombardi',
        primaryTag: 'Físico e Matemático',
        primaryTagIcon: faUserGraduate,
        description: 'Físico e matemático, mestre em Física, com expertise em modelagem matemática, análise de probabilidades e viabilidade de negócios. Atua no desenvolvimento de lógicas complexas para projetos inovadores, desde a criação e validação matemática de jogos até estudos de mercado financeiro e avaliação de riscos. Com uma abordagem analítica e estratégica, oferece insights valiosos para a tomada de decisões fundamentadas, contribuindo para o sucesso de projetos em diversas áreas.',
        imageSrc: 'https://i.imgur.com/gqGHDF8.jpeg',
        imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
        imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
        imageSrcSenior: 'https://placehold.co/300x300/555/fff?text=Senior',
        defaultImageSrc: 'https://i.imgur.com/gqGHDF8.jpeg',
        tags: [
            { name: 'Modelagem Matemática', icon: faCalculator },
            { name: 'Análise de Probabilidades', icon: faChartLine },
            { name: 'Viabilidade de Negócios', icon: faChartLine },
            { name: 'Lógica Complexa', icon: faBrain },
            { name: 'Criação de Jogos', icon: faDiceD6 },
            { name: 'Mercado Financeiro', icon: faBalanceScale },
            { name: 'Avaliação de Riscos', icon: faBalanceScale },
            { name: 'Projetos Inovadores', icon: faLightbulb },
        ],
        portfolioButtonText: 'Entre em Contato',
        portfolioButtonLink: 'https://wa.me/5518998184907'
    };

    const professionalSkills = [
        { name: 'Modelagem Estatística', icon: faChartLine },
        { name: 'Análise de Dados', icon: faChartLine },
        { name: 'Matemática Aplicada', icon: faCalculator },
        { name: 'Simulação', icon: faDiceD6 },
        { name: 'Otimização', icon: faLightbulb },
        { name: 'Análise Financeira', icon: faBalanceScale },
        { name: 'Consultoria Estratégica', icon: faBrain },
        { name: 'Estatística', icon: faChartLine },
        { name: 'Probabilidade', icon: faChartLine },
        { name: 'Física Aplicada', icon: faCalculator },
        { name: 'Modelagem Computacional', icon: faDiceD6 },
        { name: 'Inovação', icon: faLightbulb },
    ];

    // Dados para o componente AboutMe
    const aboutMeData = {
        tag: 'Sobre Mim',
        title: 'Minha Expertise Técnica',
        description: `Físico e matemático, mestre em Física, com expertise em modelagem matemática, análise de probabilidades e viabilidade de negócios. Atua no desenvolvimento de lógicas complexas para projetos inovadores, desde a criação e validação matemática de jogos até estudos de mercado financeiro e avaliação de riscos. Com uma abordagem analítica e estratégica, oferece insights valiosos para a tomada de decisões fundamentadas, contribuindo para o sucesso de projetos em diversas áreas.`,
        buttonText: 'Entre em Contato',
        buttonLink: 'https://wa.me/5518998184907',
        imageSrc: 'https://i.imgur.com/gqGHDF8.jpeg',
        icon: faBrain,
    };

    const primeirosProfissionais = [
        {
            name: 'Renan Bueno',
            image: 'https://i.imgur.com/FQDlTGh.jpeg',
            tags: ['Design UX/UI', 'Figma', 'Prototipagem', 'Design Thinking'],
            link: '/renan'
        },
        {
            name: 'João Vitor',
            image: ' https://i.imgur.com/Z0uI1bB.jpeg',
            tags: ['Desenvolvedor Full-Stack'],
            link: '/joao'
        },
        { // Alteração aqui
          name: 'Ana Caroline Gomes',
          image: 'https://i.imgur.com/w4W9Lbf.jpeg', // Mantenha a imagem
          tags: ['Telemarketing', 'Prospecção de Leads', 'Administração', 'Secretaria'], // Atualize as tags
          link: '/carol' // Mantenha o link
      },
      { // Adicione a Wildilene aqui
        name: 'Wildilene Pereira Moreira',
        image: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua pela URL da imagem dela
        tags: ['Revisão de Textos', 'Tradução (Inglês)', 'Criação de Conteúdo'],
        link: '/wildilene'
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

export default MichelPage;