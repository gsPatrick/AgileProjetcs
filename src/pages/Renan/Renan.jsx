    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    // import Pro from "../../../professionals-components/AnotherProfessionals/Pro"; // Comente ou remova se não for usar
    import '../../App.css';
import Pro from "../../professionals-components/AnotherProfessionals/Pro";

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
      import FigmaIcon from '../../assets/FigmaIcon.svg';
      import HtmlIcon from '../../assets/HtmlIcon.svg';
      import CssIcon from '../../assets/CssIcon.svg';
      import JavascriptIcon from '../../assets/JavascriptIcon.svg';

      // import BootstrapIcon from '../../../assets/BootstrapIcon.svg';

    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket;
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const RenanPage = () => {

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
            portfolioButtonLink: 'https://wa.me/5518998184907' // ✅ Link do botão
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
            buttonLink: 'https://wa.me/5518998184907',
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

          const primeirosProfissionais = [
            {
              name: 'Maria G. Silva',
              image: 'https://i.imgur.com/q7rfYQ5.jpeg',
              tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
              link: '/maria'
            },
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
              name: 'Michel Lombardi',
              image: 'https://i.imgur.com/gqGHDF8.jpeg',
              tags: ['Matemático', 'Fisico', 'Analista de Probabilidades', ],
              link: '/michel'
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

    export default RenanPage;