// Patrick.jsx
import React from "react";
import ShowPro from "../../professionals-components/HeroSection/ShowPro";
import Skills from "../../professionals-components/Skills/Skills";
import Header from "../../components/Header/Header";
import AboutMe from "../../professionals-components/AboutMe/AboutMe";
import Pro from "../../professionals-components/AnotherProfessionals/Pro";
import '../../App.css';

import {
    faBook,         // Letras
    faLanguage,     // Inglês
    faCheckDouble,  // Revisão
    faGlobe,        // Tradução
    faPencilAlt,    // Criação de conteúdo
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
    faEnvelope,
    faShareAlt,
    faRobot,
    faMobileScreenButton,
    faBullhorn,
    faRocket
} from '@fortawesome/free-solid-svg-icons';


const WildilenePage = () => {

    const professional = {
        name: 'Wildilene Pereira Moreira',
        primaryTag: 'Letras/Inglês',
        primaryTagIcon: faUserGraduate,
        description: 'Olá eu sou Wildilene Pereira Moreira, sou formada em Letras com especialização em Inglês e acumulo mais de 15 anos de experiência no setor. Minha atuação destaca-se pela revisão de textos acadêmico-científicos e pela criação de uma variedade de projetos que envolvem a Língua Inglesa. Como intérprete e tradutora certificada pelo Cambridge TKT B3, desenvolvo conteúdos originais em inglês, elaborando textos diversos para diferentes finalidades. Minha carreira é marcada pela participação ativa em projetos de criação e desenvolvimento de materiais, além de colaborar em iniciativas voluntárias voltadas para o público jovem.',
        imageSrc: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua por uma imagem real
        imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
        imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
        imageSrcSenior: 'https://placehold.co/300x300/555/fff?text=Senior',
        defaultImageSrc: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua por uma imagem real
        tags: [
            { name: 'Revisão de Textos', icon: faCheckDouble },
            { name: 'Tradução (Inglês)', icon: faGlobe },
            { name: 'Interpretação (Inglês)', icon: faGlobe }, // Pode usar o mesmo ícone ou outro
            { name: 'Criação de Conteúdo (Inglês)', icon: faPencilAlt },
            { name: 'Desenvolvimento de Materiais Didáticos', icon: faBook },
            { name: 'Inglês Acadêmico', icon: faLanguage }, // Pode usar o mesmo ícone ou outro
        ],
        portfolioButtonText: 'Entre em Contato',
        portfolioButtonLink: 'https://wa.me/5518998184907' // Substitua pelo número dela
    };

    const professionalSkills = [
        { name: 'Revisão de Textos Acadêmicos', icon: faCheckDouble },
        { name: 'Tradução (Inglês/Português)', icon: faGlobe },
        { name: 'Interpretação (Inglês/Português)', icon: faGlobe },
        { name: 'Criação de Conteúdo para Redes Sociais (Inglês)', icon: faPencilAlt },
        { name: 'Desenvolvimento de Aulas de Inglês', icon: faBook },
        { name: 'Consultoria em Inglês', icon: faLanguage },
        { name: 'Elaboração de Projetos de Inglês', icon: faPencilAlt },
    ];

    // Dados para o componente AboutMe
    const aboutMeData = {
        tag: 'Sobre Mim',
        title: 'Minha Expertise em Língua Inglesa',
        description: 'Olá eu sou Wildilene Pereira Moreira, sou formada em Letras com especialização em Inglês e acumulo mais de 15 anos de experiência no setor. Minha atuação destaca-se pela revisão de textos acadêmico-científicos e pela criação de uma variedade de projetos que envolvem a Língua Inglesa. Como intérprete e tradutora certificada pelo Cambridge TKT B3, desenvolvo conteúdos originais em inglês, elaborando textos diversos para diferentes finalidades. Minha carreira é marcada pela participação ativa em projetos de criação e desenvolvimento de materiais, além de colaborar em iniciativas voluntárias voltadas para o público jovem.',
        buttonText: 'Entre em Contato',
        buttonLink: 'https://wa.me/5518998184907', // Substitua pelo número dela
        imageSrc: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua por uma imagem real
        icon: faLanguage,
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
        {
            name: 'Ana Caroline Gomes',
            image: 'https://i.imgur.com/w4W9Lbf.jpeg', // Mantenha a imagem
            tags: ['Telemarketing', 'Prospecção de Leads', 'Administração', 'Secretaria'], // Atualize as tags
            link: '/carol' // Mantenha o link
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

export default WildilenePage;