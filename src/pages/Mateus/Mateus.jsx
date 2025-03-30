    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Projects from "../../professionals-components/Projects/Projects";
    import Pro from "../../professionals-components/AnotherProfessionals/Pro";

    // import Pro from "../../../professionals-components/AnotherProfessionals/Pro"; // Comente ou remova se não for usar
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

    import ClickUpIcon from '../../assets/ClickUpIcon.svg';
    import HtmlIcon from '../../assets/HtmlIcon.svg';
    import CssIcon from '../../assets/CssIcon.svg';
    import WordPressIcon from '../../assets/WordPressIcon.svg';
    import ShopifyIcon from '../../assets/ShopifyIcon.svg';
    import WixIcon from '../../assets/WixIcon.svg';
    import taiwindCssIcon from '../../assets/TailwindCss.svg';
    import FigmaIcon from '../../assets/FigmaIcon.svg'
    import JavascriptIcon from '../../assets/JavascriptIcon.svg'

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;

    const MateusPage = () => {

      const professional = {
            name: 'Mateus Texeira',
            primaryTag: 'UI/UX Designer', 
            primaryTagIcon: faCode,
            description: 'Atuando como Product Designer há 2 anos, focado em uma ótima UX consegui desenvolver produtos intuitivos e bonitos, visando persona, utilizando pesquisas, testes, boas práticas e resultados positivos. Minha trajetória foi marcada por uma abordagem centrada no usuário, resultando em melhoras significativas de KPIs relacionados à satisfação e growth.',
            imageSrc: 'https://mateustr.com/Elements/Perfil.jpg',
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno',
            imageSrcSenior: 'https://i.imgur.com/hsQLqCL.jpeg',
            defaultImageSrc: 'https://mateustr.com/Elements/Perfil.jpg',
            tags: [
                { name: 'UX Designer', icon: faLaptopCode }, 
                { name: 'UI Designer', icon: faServer }, 
                { name: 'Dev Experience', icon: faCogs }, 
            ],
            portfolioButtonText: 'Entre em Contato', 
            portfolioButtonLink: 'https://wa.me/5518998184907'
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
              {
                name: 'João Vitor',
                image: ' https://i.imgur.com/Z0uI1bB.jpeg',
                tags: ['Desenvolvedor Full-Stack'],
                link: '/joao'
              },
              { // Adicione a Wildilene aqui
                name: 'Wildilene Pereira Moreira',
                image: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua pela URL da imagem dela
                tags: ['Revisão de Textos', 'Tradução (Inglês)', 'Criação de Conteúdo'],
                link: '/wildilene'
              },
              { // Alteração aqui
                name: 'Ana Caroline Gomes',
                image: 'https://i.imgur.com/w4W9Lbf.jpeg', // Mantenha a imagem
                tags: ['Telemarketing', 'Prospecção de Leads', 'Administração', 'Secretaria'], // Atualize as tags
                link: '/carol' // Mantenha o link
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
            imageSrc: 'https://mateustr.com/Elements/Perfil.jpg',
        };

        // Lista de habilidades para Patrick - DEFINA AQUI AS HABILIDADES QUE VOCÊ QUER MOSTRAR
        const patrickSkillsList = [
            {name: 'Figma', icon: <img src={FigmaIcon} alt="Figma Icon" className="skill-logo" />},
            {name:'ClickUp', icon: <img src={ClickUpIcon} alt="ClickUp Icon" className="skill-logo" />},
            {name: 'HTML', icon: <img src={HtmlIcon} alt="HTML Icon" className="skill-logo" />},
            {name: 'CSS', icon: <img src={CssIcon} alt="CSS Icon" className="skill-logo" />},
            {name: 'WordPress', icon: <img src={WordPressIcon} alt="WordPress Icon" className="skill-logo" />},
            {name: 'Shopify', icon: <img src={ShopifyIcon} alt="Shopify Icon" className="skill-logo" />},
            {name: 'Wix', icon: <img src={WixIcon} alt="Wix Icon" className="skill-logo" />},
            {name: 'Tailwind CSSS', icon: <img src={taiwindCssIcon} alt="Tailwind CSS Icon" className="skill-logo" />},
            // {name: 'Bootstrap', icon: <img src={BootstrapIcon} alt="Bootstrap Icon" className="skill-logo" />},
            {name: 'Javascript', icon: <img src={JavascriptIcon} alt="Javascript Icon" className="skill-logo" />},
            { name: 'FigJam' },
            { name: 'UX Research' },
            { name: 'Design Thinking' },
            { name: 'Emotional Design' },
            { name: 'User Flow' },
            { name: 'Teste de usabilidade' },
            { name: 'Pesquisa de usuário' },
            { name: 'Análise de dados UX' },
            { name: 'StoryBoard' },
            { name: 'Accessibility Design' },
            { name: 'Information Architecture' },
            { name: 'Dev Experience' },
            { name: 'Princípios do Design' },
            { name: 'Design system' },
            { name: 'Wireframe' },
            { name: 'Responsive Design' },
            { name: 'Material Design' },
            { name: 'Human Interface Guidelines' },
            { name: 'Metodologia Scrum' },
        

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

    export default MateusPage;