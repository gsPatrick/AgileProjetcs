    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../professionals-components/Projects/Projects";
    import Pro from "../../professionals-components/AnotherProfessionals/Pro";
    import '../../App.css';

    import { faReact as faReactBrandIcon, faCss3Alt as faCss3AltBrandIcon, faHtml5 as faHtml5BrandIcon } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faRocket, faCode, faLaptopCode, faBrush, faPalette, faMobileScreenButton, faBaby, faUserGraduate, faMedal, faBullhorn, faChartBar, faPencilAlt, faGlobe, faEnvelope, faShareAlt, faRobot, faServer, faDatabase, faCogs, faCloud, faNetworkWired, faLightbulb, faUserTie, faSitemap, faInfoCircle, faBookOpen, faBuilding } from '@fortawesome/free-solid-svg-icons'; // Adicionando faBuilding para simbolo de empresa
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
        faBookOpen as faBookOpenSolid // Importando novamente, mas não é necessário, já temos faBookOpen acima
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


    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const Agile = () => {

      const professional = {
            name: 'Ana Marcia',
            primaryTag: 'CEO',
            primaryTagIcon: faUserTie, // Mudando para faUserTie para representar CEO
            description: 'Sou Ana Marcia Gomes, idealizadora e CEO da AGileProjects. Minha trajetória profissional é marcada por mais de duas décadas de liderança e gestão de equipes de alto desempenho. Coordenei grandes projetos e liderei times multidisciplinares, sempre com um olhar estratégico para otimização de processos e entrega de resultados. Como especialista em copywriting e marketing digital, agrego valor a cada projeto, criando estratégias que convertem e fortalecem marcas no ambiente digital. Aqui, não vendemos apenas serviços, entregamos soluções inteligentes que fazem a diferença. Se você precisa de um time altamente qualificado para transformar ideias em realidade, a AGileProjects está pronta para levar o seu projeto para o próximo nível.',
            imageSrc: 'https://i.imgur.com/2rxhmh7.png',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://i.imgur.com/2rxhmh7.png',
            tags: [
                { name: 'CEO DA AGILE PROJECTS', icon: faCogs }, // Título: Especialista DevOps
                { name: 'Especialista em Copywriting ', icon: faLaptopCode }, // Título: Desenvolvedor Full-Stack
                { name: 'Especialista em Marketing Digital', icon: faServer }, // Título: Arquiteto de Sistemas
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
            name: 'Michel Lombardi',
            image: 'https://i.imgur.com/gqGHDF8.jpeg',
            tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
            link: '/michel'
          },
      ];

        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre a AGileProjects',
            title: 'Nos conheça melhor',
            description: `
A AGileProjects nasceu com um propósito claro: reunir os melhores profissionais da área de tecnologia para oferecer soluções completas e inovadoras. Somos uma agência especializada no desenvolvimento de aplicativos delivery, aplicativos de jogos, inteligência artificial, design web, UI/UX, backend, frontend e animação 3D. Além disso, contamos com especialistas em SEO, otimização de sites, acertos de tags, criação de plugins e produção de conteúdos como e-books e copy persuasiva.
            `, // Ajustei a descrição para refletir os títulos nas tags e mencionar algumas skills
            buttonText: 'Entre em Contato',
            buttonLink: 'https://wa.me/5518998184907',
            imageSrc: 'https://i.imgur.com/2RZA8sv.png',
            icon: faBuilding, // Mudando para faBuilding para representar "Empresa"
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR


      return (
        <div className="app-container">
          <Header />
          <AboutMe
            tag={aboutMeData.tag}
            title={aboutMeData.title}
            description={aboutMeData.description}
            buttonText={aboutMeData.buttonText}
            buttonLink={aboutMeData.buttonLink}
            imageSrc={aboutMeData.imageSrc}
            icon={aboutMeData.icon} // Passando o ícone para o componente AboutMe
          />
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

<Pro
        professionals={primeirosProfissionais}
        title="Conheça nossos profissionais"
      />

          {/* <Projects />  */}
          {/* <Pro />  */}
       </div>
      );
    };

    export default Agile;