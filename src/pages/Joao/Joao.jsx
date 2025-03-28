    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../professionals-components/Projects/Projects";
    import Pro from "../../professionals-components/AnotherProfessionals/Pro";

    // import Pro from "../../../professionals-components/AnotherProfessionals/Pro"; // Comente ou remova se não for usar
    import '../../../App.css';

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
    import AspNetIcon from '../../../assets/AspNetIcon.svg';
    import AwsIcon from '../../../assets/AwsIcon.svg';
    import AzureIcon from '../../../assets/AzureIcon.svg';
    import CSharpIcon from '../../../assets/CSharpIcon.svg';
    import DockerIcon from '../../../assets/DockerIcon.svg';
    import FigmaIcon from '../../../assets/FigmaIcon.svg';
    import GitHubIcon from '../../../assets/GitHubIcon.svg';
    import JavaIcon from '../../../assets/JavaIcon.svg';
    import JavascriptIcon from '../../../assets/JavascriptIcon.svg';
    import MariaDbIcon from '../../../assets/MariaDBIcon.svg';
    import MySqlIcon from '../../../assets/MySqlIcon.svg';

    import NetIcon from '../../../assets/NetIcon.svg';
    import NextJsIcon from '../../../assets/NextJsIcon.svg';
    import NginxIcon from '../../../assets/NginxIcon.svg';
    import NodeJsIcon from '../../../assets/NodeJsIcon.svg';
    import ReactIcon from '../../../assets/ReactIcon.svg'; // Usando Reacticon.svg conforme imagem destacada
    import SpringBootIcon from '../../../assets/SpringBoot.svg';
    import TypeScriptIcon from '../../../assets/TypeScript.svg';
    import ViteIcon from '../../../assets/ViteIcon.svg';
    import NestJsIcon from '../../../assets/NestJSIcon.svg'; // Importando o ícone do Nest.js - ASSUMINDO QUE VOCÊ TEM
    import VueIcon from '../../../assets/VueIcon.svg';
    import TaiwindCssIcon from '../../../assets/TailwindCss.svg'; // Importando o ícone do Taiwind CSS - ASSUMINDO QUE VOCÊ TEM
    import HtmlIcon from '../../../assets/HtmlIcon.svg'; // Importando o ícone do HTML - ASSUMINDO QUE VOCÊ TEM
    import CssIcon from '../../../assets/CssIcon.svg'; // Importando o ícone do CSS - ASSUMINDO QUE VOCÊ TEM

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const JoaoPage = () => {

      const professional = {
            name: 'JOÃO VITOR',
            primaryTag: 'Desenvolvedor Full Stack',
            primaryTagIcon: faCode,
            description: 'Sou um desenvolvedor Full Stack apaixonado por criar soluções web completas e inovadoras. Com experiência em tecnologias front-end e back-end, especialmente JavaScript e seus frameworks modernos, tenho a capacidade de desenvolver aplicações web do início ao fim. Minha expertise abrange desde a criação de interfaces responsivas e intuitivas até o desenvolvimento de APIs robustas e eficientes. Busco constantemente aprender novas tecnologias e melhores práticas para entregar produtos de alta qualidade que atendam às necessidades dos usuários e dos negócios.',
            imageSrc: 'https://i.imgur.com/Z0uI1bB.jpeg',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://i.imgur.com/Z0uI1bB.jpeg',
            tags: [
                { name: 'Desenvolvedor Full-Stack', icon: faLaptopCode }, // Título: Desenvolvedor Full-Stack
                // Removi os outros tags para simplificar conforme a nova copy, você pode readicionar ou ajustar se necessário
              ],
              portfolioButtonText: 'Entre em Contato', // ✅ Nome do botão
              portfolioButtonLink: 'https://aistudio.google.com/prompts/1IFd1A6R6Qi8Lkj0bG6Xurh8K8h0XOIVA' // ✅ Link do botão
          };


          const primeirosProfissionais = [
            {
              name: 'Maria G. Silva',
              image: 'https://i.imgur.com/q7rfYQ5.jpeg',
              tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
              link: '/professionals/maria'
            },
            {
              name: 'Renan Bueno',
              image: 'https://i.imgur.com/FQDlTGh.jpeg',
              tags: ['Design UX/UI', 'Figma', 'Prototipagem', 'Design Thinking'],
              link: '/professionals/renan'
            },
            {
              name: 'Mateus',
              image: 'https://i.imgur.com/UA4BQIt.jpeg',
              tags: ['Product Designer'],
              link: '/professionals/mateus'
            },
            {
              name: 'Giovani Appezzato N. Rosa',
              image: ' https://giovani-appezzato.vercel.app/assets/images/eu.webp',
              tags: ['Desenvolvedor de Sotfware'],
              link: '/professionals/giovani'
            },
            {
              name: 'Ranathan Henrique',
              image: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
              tags: ['Desenvolvedor Full-Stack', 'Desenvolvedor Web'],
              link: '/professionals/ranathan'
            },
            {
              name: 'Michel Lombardi',
              image: 'https://i.imgur.com/gqGHDF8.jpeg',
              tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
              link: '/professionals/michel'
            },
            {
              name: 'Patrick Siqueira',
              image: 'https://i.imgur.com/hsQLqCL.jpeg',
              tags: ['Desenvolvedor Full-Stack', 'Dev-Ops', 'Web-Design'],
              link: '/professionals/patrick'
            },
          ];

        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre mim', // Alterado para "Quem sou eu?"
            title: 'Minha Expertise Técnica', // Alterado para "Olá, Sou o JOÃO VITOR . Desenvolvedor Full Stack."
            description: `
               Tenho experiência em construir aplicações web completas, dominando tanto o front-end quanto o back-end. Especialista em JavaScript e seus frameworks, foco em criar soluções eficientes, escaláveis e de alta qualidade. Sempre em busca de evolução, meu objetivo é entregar produtos que atendam às reais necessidades dos usuários e dos negócios.
            `, // Nova descrição conforme fornecido
            buttonText: 'Entre em Contato',
            buttonLink: '#contact',
            imageSrc: 'https://i.imgur.com/Z0uI1bB.jpeg',
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
        const patrickSkillsList = [
            { name: "React", icon: <img src={ReactIcon} alt="React.js Icon" className="skill-logo" /> }, // Alterado para "React"
            { name: "Javascript" , icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" /> },
            { name: "Next.js", icon: <img src={NextJsIcon} alt="Next.js Icon" className="skill-logo" /> },
            { name: "Taiwind", icon:  <img src={TaiwindCssIcon} alt="CSS Icon" className="skill-logo" /> }, // "Taiwind" -  Usei um icone generico de CSS, caso queira um icone especifico do Tailwind, precisa importar e usar aqui.
            { name: "MongoDB", icon: <img src={ReactIcon} alt="MongoDB Icon" className="skill-logo" /> }, // "MongoDB" -  Precisa importar o icone do MongoDB e usar aqui.
            { name: "MySQL", icon: <img src={MySqlIcon} alt="MySQL Icon" className="skill-logo" /> },
            { name: "PostgresSQL", icon: <img src={ReactIcon} alt="PostgresSQL Icon" className="skill-logo" /> }, // "PostgresSQL" - Precisa importar o icone do PostgresSQL e usar aqui.
            { name: "Git", icon: <img src={GitHubIcon} alt="GitHub Icon" className="skill-logo" /> }, // "Git" - Usei o icone do GitHub, se tiver um icone especifico do Git, importe e use aqui.
            { name: "Figma", icon: <img src={FigmaIcon} alt="Figma Icon" className="skill-logo" /> },
            { name: "FireBase", icon: <img src={ReactIcon} alt="FireBase Icon" className="skill-logo" /> }, // "FireBase" - Precisa importar o icone do Firebase e usar aqui.
            { name: "MaterialUI", icon: <img src={ReactIcon} alt="MaterialUI Icon" className="skill-logo" /> }, // "MaterialUI" - Precisa importar o icone do MaterialUI e usar aqui.
            { name: "Nginx", icon: <img src={ReactIcon} alt="Nginx Icon" className="skill-logo" /> },
            { name: "Vue", icon: <img src={VueIcon} alt="Vue Icon" className="skill-logo" /> }, // "Vue" - Precisa importar o icone do Vue e usar aqui.
            { name: "Node.js", icon: <img src={NodeJsIcon} alt="Node.js Icon" className="skill-logo" /> },
            { name: "VuetifyJS", icon: <img src={ReactIcon} alt="VuetifyJS Icon" className="skill-logo" /> }, // "VuetifyJS" - Precisa importar o icone do VuetifyJS e usar aqui.
            { name: "HTML", icon: <img src={HtmlIcon} alt="HTML Icon" className="skill-logo" /> }, // "HTML" - Precisa importar o icone do HTML e usar aqui.
            { name: "Css", icon: <img src={CssIcon} alt="Css Icon" className="skill-logo" /> }, // "Css" - Usei um icone generico de CSS, caso queira um icone especifico de CSS3, pode usar o import faCss3AltIcon la em cima.
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
            icon={aboutMeData.icon}
          />
    {/* Primeiro componente Pro com dados e título específicos */}
    <Pro
        professionals={primeirosProfissionais}
        title="Outros membros da Agile Projects"
      />
          {/* <Projects />  */}
          {/* <Pro />  */}
       </div>
      );
    };

    export default JoaoPage;