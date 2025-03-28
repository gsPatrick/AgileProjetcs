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


const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
const globeIcon = faGlobe ? faGlobe : faRocket;
const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


const PatrickPage = () => {
  console.log("Componente PatrickPage renderizado!");


  const professional = {
        name: 'Patrick Siqueira',
        primaryTag: 'Desenvolvedor de Sistemas',
        primaryTagIcon: faCode,
        description: 'Sou Empresário e Desenvolvedor de Sistemas com experiência sólida em tecnologias modernas e ambientes desafiadores. Domino linguagens como Java, JavaScript, TypeScript e frameworks avançados, sempre focando em criar soluções inovadoras, escaláveis e alinhadas às reais necessidades do mercado. Minha missão é transformar ideias em sistemas eficientes e de alto impacto.',
        imageSrc: 'https://i.imgur.com/mICtXkO.jpeg',
        imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
        imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
        imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
        defaultImageSrc: 'https://i.imgur.com/mICtXkO.jpeg',
        tags: [
            { name: 'Desenvolvedor Full-Stack', icon: faLaptopCode }, // Título: Desenvolvedor Full-Stack
            { name: 'Arquiteto de Sistemas', icon: faServer }, // Título: Arquiteto de Sistemas
            { name: 'Especialista DevOps', icon: faCogs }, // Título: Especialista DevOps
            { name: 'Inovação Tecnológica', icon: faLightbulb }, // Título/Área: Inovação (ícone de lâmpada para ideia/inovação)
            { name: 'Desenvolvedor Web', icon: faGlobe }, // Título: Desenvolvedor Web
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
          name: 'João Vitor',
          image: ' https://i.imgur.com/Z0uI1bB.jpeg',
          tags: ['Desenvolvedor Full-Stack'],
          link: '/professionals/joao'
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
      ];

    // Dados para o componente AboutMe
    const aboutMeData = {
        tag: 'Sobre Mim',
        title: 'Minha Expertise Técnica',
        description: `
            Com experiência sólida como Desenvolvedor de Sistemas e Empresário, possuo expertise em diversas áreas da tecnologia.
            Atuo como Desenvolvedor Full-Stack, Arquiteto de Sistemas e Especialista DevOps, utilizando um vasto leque de ferramentas e tecnologias.
            Minha paixão é a Inovação Tecnológica, buscando sempre soluções eficientes e de alto impacto para transformar ideias em realidade.
            Domino linguagens como Java, JavaScript, TypeScript e frameworks como Spring Boot, Nest.js e .NET Core, entre outras.
        `, // Ajustei a descrição para refletir os títulos nas tags e mencionar algumas skills
        buttonText: 'Entre em Contato',
        buttonLink: '#contact',
        imageSrc: 'https://i.imgur.com/mICtXkO.jpeg',
    };

    // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
    const patrickSkillsList = [
        { name: "React.js", icon: <img src={ReactIcon} alt="React.js Icon" className="skill-logo" /> },
        { name: "Next.js", icon: <img src={NextJsIcon} alt="Next.js Icon" className="skill-logo" /> },
        { name: "Javascript" , icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" /> },
        { name: "Vite", icon: <img src={ViteIcon} alt="Vite Icon" className="skill-logo" /> },
        { name: "Figma", icon: <img src={FigmaIcon} alt="Figma Icon" className="skill-logo" /> },
        { name: "ASP.NET", icon: <img src={AspNetIcon} alt="ASP.NET Icon" className="skill-logo" /> },
        { name: "TypeScript", icon: <img src={TypeScriptIcon} alt="TypeScript Icon" className="skill-logo" /> },
        { name: "Java", icon: <img src={JavaIcon} alt="Java Icon" className="skill-logo" /> },
        { name: "C#", icon: <img src={CSharpIcon} alt="C# Icon" className="skill-logo" /> },
        { name: "Node.js", icon: <img src={NodeJsIcon} alt="Node.js Icon" className="skill-logo" /> },
        { name: "Nest.js", icon: <img src={NestJsIcon} alt="Nest.js Icon" className="skill-logo" /> },
        { name: "Spring Boot", icon: <img src={SpringBootIcon} alt="Spring Boot Icon" className="skill-logo" /> },
        { name: ".NET Core", icon: <img src={NetIcon} alt=".NET Core Icon" className="skill-logo" /> }, // Usei .NET Core para diferenciar, se for só .NET, use ".NET"
        { name: "Docker", icon: <img src={DockerIcon} alt="Docker Icon" className="skill-logo" /> },
        { name: "GitHub", icon: <img src={GitHubIcon} alt="GitHub Icon" className="skill-logo" /> },
        { name: "Nginx", icon: <img src={NginxIcon} alt="Nginx Icon" className="skill-logo" /> },
        { name: "MariaDB", icon: <img src={MariaDbIcon} alt="MariaDB Icon" className="skill-logo" /> },
        { name: "MySQL", icon: <img src={MySqlIcon} alt="MySQL Icon" className="skill-logo" /> },
        { name: "AWS", icon: <img src={AwsIcon} alt="AWS Icon" className="skill-logo" /> },
        {name: "Azure", icon: <img src={AzureIcon} alt="Azure Icon" className="skill-logo" /> },

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
<Projects developerNameFilter="Patrick Siqueira" /> {/* USANDO Projects E FILTRANDO POR 'Patrick Siqueira' */}
<Pro
    professionals={primeirosProfissionais}
    title="Outros membros da Agile Projects"
  />
      {/* <Pro />  */}
   </div>
  );
};

export default PatrickPage;