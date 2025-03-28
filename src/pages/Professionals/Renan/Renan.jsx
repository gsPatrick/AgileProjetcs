    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../../professionals-components/Skills/Skills";
    import Header from "../../../components/Header/Header";
    import AboutMe from "../../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../../professionals-components/Projects/Projects";
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
      import VueIcon from '../../../assets/VueIcon.svg'; // Importando o ícone do Vue.js - ASSUMINDO QUE VOCÊ TEM
      import IonicIcon from '../../../assets/IonicIcon.svg'; // Importando o ícone do Ionic - ASSUMINDO QUE VOCÊ TEM
      import PhpIcon from '../../../assets/PhpIcon.svg'; // Importando o ícone do PHP - ASSUMINDO QUE VOCÊ TEM
      import LaravelIcon from '../../../assets/LaravelIcon.svg'; // Importando o í
      import RedisIcon from '../../../assets/RedisIcon.svg'; // Importando o ícone do Redis - ASSUMINDO QUE VOCÊ TEM
      import ClickUpIcon from '../../../assets/ClickUpIcon.svg';
      import HtmlIcon from '../../../assets/HtmlIcon.svg';
      import CssIcon from '../../../assets/CssIcon.svg';
      import WordPressIcon from '../../../assets/WordPressIcon.svg';
      import ShopifyIcon from '../../../assets/ShopifyIcon.svg';
      import WixIcon from '../../../assets/WixIcon.svg';
      import taiwindCssIcon from '../../../assets/TailwindCss.svg';
      import BootstrapIcon from '../../../assets/BootstrapIcon.svg';

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const Patrick = () => {

      const professional = {
            name: 'Renan Bueno',
            primaryTag: 'Designer', 
            primaryTagIcon: faCode,
            description: 'Farto de designs genéricos e sem impacto? De identidades visuais que não se destacam em meio à multidão? Se você busca algo único, me chamo Renan, designer gráfico especializado em criar soluções que fazem sua marca brilhar. Com mais de 5 anos de experiência, trabalho com logotipos, identidade visual, branding, ilustração, animações, edição de vídeos, design digital e entre outros, sempre buscando transformar cada projeto em algo memorável e autêntico. Já passei por diversos tipos de projetos, desde consultorias de marca até criação de conteúdo visual para mídias sociais. Meu compromisso é superar as expectativas dos meus clientes, respeitando prazos e mantendo uma comunicação clara e eficiente, pois acredito que entender as necessidades de cada cliente é a chave para criar algo verdadeiramente impactante. Vamos juntos criar algo incrível para sua marca! Resumo da experiência profissional:',
            imageSrc: 'https://i.imgur.com/FQDlTGh.jpeg',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://i.imgur.com/FQDlTGh.jpeg',
            tags: [
                { name: 'UI Desginer', icon: faLightbulb }, // Título/Área: Inovação (ícone de lâmpada para ideia/inovação)
                { name: 'Dev Experience', icon: faCogs }, // Título: Especialista DevOps
            ],
            portfolioButtonText: 'Entre em Contato', // ✅ Nome do botão
            portfolioButtonLink: 'https://aistudio.google.com/prompts/1IFd1A6R6Qi8Lkj0bG6Xurh8K8h0XOIVA' // ✅ Link do botão
        };


        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre Mim',
            title: 'Minha Expertise Técnica',
            description: `
Ao longo de mais de 5 anos, tive a oportunidade de trabalhar em diversos projetos de design gráfico, criação de logotipos, identidade visual, branding e edição de vídeos.

Tive a oportunidade de colaborar com grandes marcas internacionais por exemplo eBay, Kyndryl, Vertex e nacionais como Mercado Livre, Gerdau, Sesc, SBT, FGV, SENAI e em diferentes outras.

Meu foco é entender suas necessidades e criar soluções criativas que verdadeiramente se destaquem. Se você quer resultados que realmente impressionam, aqui é o lugar certo! Pronto para dar o próximo passo e fazer sua ideia brilhar?
            `, // Ajustei a descrição para refletir os títulos nas tags e mencionar algumas skills
            buttonText: 'Entre em Contato',
            buttonLink: '#contact',
            imageSrc: 'https://i.imgur.com/FQDlTGh.jpeg',
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
        const patrickSkillsList = [
            {name: 'Figma', icon: <img src={FigmaIcon} alt="Figma Icon" className="skill-logo" />},
            {name: 'HTML', icon: <img src={HtmlIcon} alt="HTML Icon" className="skill-logo" />},
            {name: 'CSS', icon: <img src={CssIcon} alt="CSS Icon" className="skill-logo" />},
            {name: 'Javascript', icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" />},
            { name: 'Design Thinking' },
            { name: 'Emotional Design' },
            { name: 'User Flow' },
            { name: 'Teste de usabilidade' },
            { name: 'Pesquisa de usuário' },
            { name: 'Accessibility Design' },
            { name: 'Dev Experience' },
            { name: 'Princípios do Design' },
            { name: 'Design system' },
            { name: 'Wireframe' },
            { name: 'Responsive Design' },
            { name: 'Material Design' },


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

          {/* <Projects />  */}
          {/* <Pro />  */} 
       </div>
      );
    };

    export default Patrick;