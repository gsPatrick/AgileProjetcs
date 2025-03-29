    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../professionals-components/Projects/Projects";
    // import Pro from "../../../professionals-components/AnotherProfessionals/Pro"; // Comente ou remova se não for usar
    import Pro from "../../professionals-components/AnotherProfessionals/Pro";

    import '../../App.css';

    import { faReact as faReactBrandIcon, faCss3Alt as faCss3AltBrandIcon, faHtml5 as faHtml5BrandIcon } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faRocket, faCode, faLaptopCode, faBrush, faPalette, faMobileScreenButton, faBaby, faUserGraduate, faMedal, faBullhorn, faChartBar, faPencilAlt, faGlobe, faEnvelope, faShareAlt, faRobot, faServer, faDatabase, faCogs, faCloud, faNetworkWired, faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Adicionando faLightbulb para Inovação
    import {
        faJsSquare,
        faReact as faReactBrandSkillIcon,
        faNodeJs,
        faSass,
        faGitAlt,
        faFigma,
        faDocker,
        faAws,
        faMicrosoft,
    } from '@fortawesome/free-brands-svg-icons';


    import {
        faBolt,
        faCheckSquare,
        faMobileScreenButton as faMobileScreenButtonSolid,
        faCube,
        faBookOpen as faBookOpenSolid
    } from '@fortawesome/free-solid-svg-icons';


    // Importando os icones do react-icons conforme solicitado
    import { SiTypescript, SiNestjs, SiVite, SiSpring, SiMariadb } from "react-icons/si";
    import { IoLogoJavascript } from "react-icons/io5";
    import { FaJava, FaReact } from "react-icons/fa";
    import { RiNextjsFill } from "react-icons/ri";
    import { TbBrandCSharp } from "react-icons/tb";
    import { VscAzure } from "react-icons/vsc";
    import { DiMysql, DiPostgresql, DiDotnet } from "react-icons/di";
    import { AiOutlineDotNet } from "react-icons/ai";


    // Importe os ícones SVG diretamente - IMPORTADOS AQUI
    import AspNetIcon from '../../assets/AspNetIcon.svg';

    import JavascriptIcon from '../../assets/JavascriptIcon.svg';



    import NextJsIcon from '../../assets/NextJsIcon.svg';
    import NodeJsIcon from '../../assets/NodeJsIcon.svg';
    import ReactIcon from '../../assets/ReactIcon.svg'; // Usando Reacticon.svg conforme imagem destacada
    import PhpIcon from '../../assets/PhpIcon.svg'
    import LaravelIcon from '../../assets/LaravelIcon.svg'; // Importando o í
    import RedisIcon from '../../assets/RedisIcon.svg'; // Importando o ícone do Redis - ASSUMINDO QUE VOCÊ TEM
    import VueIcon from '../../assets/VueIcon.svg';
    import IonicIcon from '../../assets/IonicIcon.svg'

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const Giovani = () => {

      const professional = {
            name: 'Giovani Appezzato N. Rosa',
            primaryTag: 'Desenvolvedor de Sotware', 
            primaryTagIcon: faCode,
            description: 'Sou desenvolvedor de software com quase 3 anos de experiência em criação de APIs REST e no desenvolvimento de aplicações web e mobile. Especialista em PHP, JavaScript, C# e frameworks como Laravel, React, Next.js, Ionic e outras, com foco em soluções escaláveis e de alta performance.',
            imageSrc: 'https://i.imgur.com/mICtXkO.jpeg',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://giovani-appezzato.vercel.app/assets/images/eu.webp',
            tags: [
                { name: 'Desenvolvedor Front-end', icon: faLaptopCode }, // Título: Desenvolvedor Full-Stack
                { name: 'Desenvolvedor Back-End', icon: faServer }, // Título: Arquiteto de Sistemas
                { name: 'Desenvolvedor Full-Stack', icon: faCogs }, // Título: Especialista DevOps
                { name: 'Inovação Tecnológica', icon: faLightbulb }, // Título/Área: Inovação (ícone de lâmpada para ideia/inovação)
                { name: 'Desenvolvedor Web', icon: faGlobe }, // Título: Desenvolvedor Web
            ],
            portfolioButtonText: 'Entre em Contato', // ✅ Nome do botão
            portfolioButtonLink: 'https://wa.me/5518998184907' // ✅ Link do botão
        };


        const primeirosProfissionais = [
            {
                name: 'Maria G. Silva',
                image: 'https://i.imgur.com/q7rfYQ5.jpeg',
                tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
                link: '/maria'
              },
              { // Alteração aqui
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
              {
                name: 'Renan Bueno',
                image: 'https://i.imgur.com/FQDlTGh.jpeg',
                tags: ['Design UX/UI', 'Figma', 'Prototipagem', 'Design Thinking'],
                link: '/renan'
              },
              {
                name: 'Mateus',
                image: 'https://i.imgur.com/UA4BQIt.jpeg',
                tags: ['Product Designer'],
                link: '/mateus'
              },
              {
                name: 'Ranathan Henrique',
                image: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
                tags: ['Desenvolvedor Full-Stack', 'Desenvolvedor Web'],
                link: '/ranathan'
              },
              {
                name: 'Michel Lombardi',
                image: 'https://i.imgur.com/gqGHDF8.jpeg',
                tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
                link: '/michel'
              },
              {
                name: 'João Vitor',
                image: ' https://i.imgur.com/Z0uI1bB.jpeg',
                tags: ['Desenvolvedor Full-Stack'],
                link: '/joao'
              },
          ];


        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre Mim',
            title: 'Minha Expertise Técnica',
            description: `
               Com domínio em frameworks como Laravel, React, Next.js e Ionic. Meu foco está em construir soluções escaláveis e de alto desempenho, sempre buscando otimizar processos e melhorar a experiência do usuário.

Apaixonado por tecnologia, estou sempre em busca de desafios que me permitam aplicar minhas habilidades e aprender novas soluções. Se você procura um profissional comprometido e orientado a resultados!
            `, // Ajustei a descrição para refletir os títulos nas tags e mencionar algumas skills
            buttonText: 'Entre em Contato',
            buttonLink: 'https://wa.me/5518998184907',
            imageSrc: 'https://giovani-appezzato.vercel.app/assets/images/eu.webp',
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
        const patrickSkillsList = [
            { name: 'Javascript', icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" /> },
            { name: "React.js", icon: <img src={ReactIcon} alt="React.js Icon" className="skill-logo" /> },
            { name: "React Native", icon: <img src={ReactIcon} alt="React.js Icon" className="skill-logo" /> },
            { name: 'Next.js' , icon: <img src={NextJsIcon} alt="Next.js Icon" className="skill-logo" /> },
            { name: 'Vue.js', icon: <img src={VueIcon} alt="Vue.js Icon" className="skill-logo" /> },
            {name: 'Ionic', icon: <img src={IonicIcon} alt="Ionic Icon" className="skill-logo" /> },
            {name: 'PHP', icon: <img src={PhpIcon} alt="PHP Icon" className="skill-logo" /> },
            {name: 'Laravel', icon: <img src={LaravelIcon} alt="Laravel Icon" className="skill-logo" /> },
            {name: 'Node.js', icon: <img src={NodeJsIcon} alt="Node.js Icon" className="skill-logo" /> },
            {name: 'ASP.NET', icon: <img src={AspNetIcon} alt="ASP.NET Icon" className="skill-logo" /> },
            {name: 'Redis', icon: <img src={RedisIcon} alt="Redis Icon" className="skill-logo" /> },


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
            portfolioButtonText={professional.portfolioButtonText} // ✅ Passando o texto do botão para ShowPro
            portfolioButtonLink={professional.portfolioButtonLink} // ✅ Passando o link do botão para ShowPro
          />
          <Skills skills={patrickSkillsList} /> {/* Passando a lista de habilidades como prop */}
          <AboutMe
            tag={aboutMeData.tag}
            title={aboutMeData.title}
            description={aboutMeData.description}
            buttonText={aboutMeData.buttonText}
            buttonLink={aboutMeData.buttonLink}
            imageSrc={aboutMeData.imageSrc}
          />

<Pro
        professionals={primeirosProfissionais}
        title="Outros membros da Agile Projects"
      />


          {/* <Projects />  */}
          {/* <Pro />  */} 
       </div>
      );
    };

    export default Giovani;