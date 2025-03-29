    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../professionals-components/Projects/Projects";
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

    import NodeJsIcon from '../../assets/NodeJsIcon.svg';
    import ReactIcon from '../../assets/ReactIcon.svg'; // Usando Reacticon.svg conforme imagem destacada
    import JavascriptIcon from '../../assets/JavascriptIcon.svg';
    import TypeScriptIcon from '../../assets/TypeScript.svg';
    import MySqlIcon from '../../assets/MySqlIcon.svg'
    

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const RanathanPage = () => {

      const professional = {
            name: 'Ranathan Henrique',
            primaryTag: 'Desenvolvedor de Sotware', 
            primaryTagIcon: faCode,
            description: 'Sou um desenvolvedor Full Stack especializado em aplicações mobile e web, apaixonado por construir soluções inovadoras e acessíveis. Com anos de experiência, trago um profundo conhecimento em tecnologias front-end e back-end, combinado com uma abordagem criativa e orientada para resultados. Ao longo da minha carreira, tenho entregue projetos de alta qualidade, desde a concepção até a implementação, focando na experiência do usuário e na performance. Meu portfólio reflete minha dedicação em criar produtos que não só atendem às necessidades do cliente, mas também elevam os padrões da indústria.',
            imageSrc: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
            tags: [
                { name: 'Desenvolvedor Full Stack', icon: faLaptopCode }, // Título: Desenvolvedor Full-Stack
                { name: 'Web Developer', icon: faServer }, // Título: Arquiteto de Sistemas
                { name: 'Mobile App', icon: faCogs }, // Título: Especialista DevOps
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
              {
                name: 'Patrick Siqueira',
                image: 'https://i.imgur.com/hsQLqCL.jpeg',
                tags: ['Desenvolvedor Full-Stack', 'Dev-Ops', 'Web-Design'],
                link: '/patrick'
              },
              {
                name: 'João Vitor',
                image: ' https://i.imgur.com/Z0uI1bB.jpeg',
                tags: ['Desenvolvedor Full-Stack'],
                link: '/joao'
              },
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
                name: 'Michel Lombardi',
                image: 'https://i.imgur.com/gqGHDF8.jpeg',
                tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
                link: '/michel'
              },
          ];


        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre Mim',
            title: 'Minha Expertise Técnica',
            description: `
Estou aberto a colaborações, projetos emocionantes e oportunidades de trabalho que me permitam crescer profissionalmente e contribuir de forma significativa para projetos inovadores. Se você está procurando um desenvolvedor comprometido, apaixonado e habilidoso, estou pronto para ajudar!

Ao longo da minha carreira, tive o privilégio de trabalhar em uma variedade de projetos desafiadores, onde pude demonstrar minha capacidade de análise, resolução de problemas e colaboração eficaz em equipe. Meu foco principal é criar produtos de alta qualidade que não apenas atendam, mas também excedam as expectativas dos clientes.
            `, // Ajustei a descrição para refletir os títulos nas tags e mencionar algumas skills
            buttonText: 'Entre em Contato',
            buttonLink: 'https://wa.me/5518998184907',
            imageSrc: 'https://ranathan-portifolio.vercel.app/assets/img/main.jpg',
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
        const patrickSkillsList = [
            { name: 'Javascript', icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" /> },
            { name: 'Typescript', icon: <img src={TypeScriptIcon} alt="Typescript Icon" className="skill-logo" /> },
            { name: 'React', icon: <img src={ReactIcon} alt="React Icon" className="skill-logo" /> },
            { name: 'React Native', icon: <img src={ReactIcon} alt="React Icon" className="skill-logo" /> },
            { name: 'Node.js', icon: <img src={NodeJsIcon} alt="Node.js Icon" className="skill-logo" /> },
            { name: 'MySQL', icon: <img src={MySqlIcon} alt="MySQL Icon" className="skill-logo" /> },

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

    export default RanathanPage;