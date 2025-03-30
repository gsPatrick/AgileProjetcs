    // Patrick.jsx
    import React from "react";
    import ShowPro from "../../professionals-components/HeroSection/ShowPro";
    import Skills from "../../professionals-components/Skills/Skills";
    import Header from "../../components/Header/Header";
    import AboutMe from "../../professionals-components/AboutMe/AboutMe";
    import Pro from "../../professionals-components/AnotherProfessionals/Pro";
    import '../../App.css';

    import { faReact as faReactBrandIcon, faCss3Alt as faCss3AltBrandIcon, faHtml5 as faHtml5BrandIcon } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faRocket, faCode, faLaptopCode, faBrush, faPalette, faMobileScreenButton, faBaby, faUserGraduate, faMedal, faBullhorn, faChartBar, faPencilAlt, faGlobe, faEnvelope, faShareAlt, faRobot } from '@fortawesome/free-solid-svg-icons'; // Certifique-se que faUserGraduate está aqui
    import {
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
        faBookOpen as faBookOpenSolid
    } from '@fortawesome/free-solid-svg-icons';


    const faReactIcon = faReactBrandIcon ? faReactBrandIcon : faLaptopCode;
    const faCss3AltIcon = faCss3AltBrandIcon ? faCss3AltBrandIcon : faPalette;
    const faHtml5Icon = faHtml5BrandIcon ? faHtml5BrandIcon : faCode;
    const globeIcon = faGlobe ? faGlobe : faRocket; // Usando um nome mais descritivo
    const faReactSkillIcon = faReactBrandSkillIcon ? faReactBrandSkillIcon : faCube;
    const faMobileScreenButtonSkillIcon = faMobileScreenButtonSolid ? faMobileScreenButtonSolid : faMobileScreenButton;


    const MariaPage = () => {

      const professional = {
            name: 'Maria G. Silva',
            primaryTag: 'Marketing Digital', // Voltou a ser string simples
            primaryTagIcon: faUserGraduate, // ✅  Propriedade primaryTagIcon ADICIONADA e configurada com faUserGraduate
            description: 'Com uma sólida formação acadêmica e experiência prática em diversos segmentos, meu objetivo é ajudá-lo a criar estratégias digitais eficazes que gerem resultados reais e escaláveis, seja através de campanhas de marketing, otimização de tráfego pago ou criação de conteúdo persuasivo.',
            imageSrc: 'https://placehold.co/300x300/999/fff?text=Pleno', // Mantendo imageSrc como "Pleno" (ou o que você preferir como base)
            imageSrcJunior: 'https://placehold.co/300x300/777/fff?text=Junior',
            imageSrcPleno: 'https://placehold.co/300x300/999/fff?text=Pleno', // Pode ser redundante, mas deixe para clareza
            imageSrcSenior: 'https://placehold.co/300x300/555/fff?text=Senior',
            defaultImageSrc: 'https://i.imgur.com/q7rfYQ5.jpeg', // ✅ Nova prop defaultImageSrc com um placeholder diferente
            tags: [
                { name: 'Marketing Digital', icon: faChartBar },
                { name: 'Marketing de Afiliados', icon: faBullhorn },
                { name: 'Tráfego Pago', icon: faMobileScreenButton },
                { name: 'Copywriting', icon: faPencilAlt },
                { name: 'Estratégia Digital', icon: faRocket },
                { name: 'Google Ads', icon: faGlobe },
                { name: 'Facebook Ads', icon: faGlobe },
                { name: 'Instagram Ads', icon: faGlobe },
                { name: 'Multilinguismo', icon: globeIcon },
            ],
            portfolioButtonText: 'Entre em Contato', // ✅ Nome do botão
              portfolioButtonLink: 'https://wa.me/5518998184907' // ✅ Link do botão
          };
          
        const professionalSkills = [
            { name: 'Marketing de Conteúdo', icon: faBookOpenSolid },
            { name: 'SEO/SEM', icon: faGlobe },
            { name: 'Email Marketing', icon: faEnvelope },
            { name: 'Social Media Marketing', icon: faShareAlt },
            { name: 'Análise de Dados', icon: faChartBar },
            { name: 'Otimização de Conversão', icon: faCheckSquare },
            { name: 'Ferramentas de IA', icon: faRobot },
            { name: 'Copywriting Estratégico', icon: faPencilAlt },
            { name: 'Gestão de Tráfego Pago', icon: faMobileScreenButton },
            { name: 'Marketing de Afiliados', icon: faBullhorn },
            { name: 'Mentoria Digital', icon: faUserGraduate },
            { name: 'Estratégia Digital', icon: faRocket },
        ];

        // Dados para o componente AboutMe
        const aboutMeData = {
            tag: 'Sobre Mim',
            title: 'Minha Expertise Técnica', // 🟦 TITULO ALTERADO AQUI
            description: `
                Olá! Meu nome é Maria G. Silva e sou uma mentora digital apaixonada por criar soluções digitais eficazes e escaláveis.
                Especializada em Marketing de Afiliados, Gestão de Tráfego Pago e Copywriting Estratégico, busco constantemente desafios que me permitam crescer e contribuir
                para projetos de alto impacto. Minha jornada no marketing digital começou com a paixão por ajudar negócios a prosperarem online.
                <br/><br/>
                Com formação em Marketing e pós-graduação em áreas ambientais e auditoria, trago uma perspectiva única e responsável para o mundo do marketing digital.
            `, // Descrição adaptada do portfólio
            buttonText: 'Entre em Contato',
            buttonLink: 'https://wa.me/5518998184907',
            imageSrc: 'https://i.imgur.com/q7rfYQ5.jpeg', // Placeholder - Substitua por imagem real
            icon: faChartBar, // 🟦 ICONE ADICIONADO AQUI e setado para faChartBar (icone de marketing digital)
        };

        const primeirosProfissionais = [
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
          { // Adicione a Wildilene aqui
            name: 'Wildilene Pereira Moreira',
            image: 'https://i.imgur.com/YCsTL5c.jpeg', // Substitua pela URL da imagem dela
            tags: ['Revisão de Textos', 'Tradução (Inglês)', 'Criação de Conteúdo'],
            link: '/wildilene'
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
            primaryTagIcon={professional.primaryTagIcon} // ✅  Propriedade primaryTagIcon SENDO PASSADA para ShowPro
            description={professional.description}
            imageSrc={professional.imageSrc}
            imageSrcJunior={professional.imageSrcJunior}
            imageSrcPleno={professional.imageSrcPleno}
            imageSrcSenior={professional.imageSrcSenior}
            defaultImageSrc={professional.defaultImageSrc} // ✅ Passando a nova prop defaultImageSrc
            tags={professional.tags}
            portfolioButtonText={professional.portfolioButtonText} // ✅ Passando o texto do botão para ShowPro
            portfolioButtonLink={professional.portfolioButtonLink} // ✅ Passando o link do botão para ShowPro
          />
          <Skills skills={professionalSkills} />
          {/* Passando as propriedades do objeto aboutMeData como props para AboutMe */}
          <AboutMe
            tag={aboutMeData.tag}
            title={aboutMeData.title}
            description={aboutMeData.description}
            buttonText={aboutMeData.buttonText}
            buttonLink={aboutMeData.buttonLink}
            imageSrc={aboutMeData.imageSrc}
            icon={aboutMeData.icon} // ✅ Passando o icone para o AboutMe component
          />

          {/* <Projects />  */}
          <Pro
    professionals={primeirosProfissionais}
    title="Outros membros da Agile Projects"
  />
       </div>
      );
    };

    export default MariaPage;