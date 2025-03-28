import React from "react";
import Pro from "../../professionals-components/AnotherProfessionals/Pro";
import Header from "../../components/Header/Header";
import '../../App.css';

const Professionals = () => {

  const primeirosProfissionais = [
    {
        name: 'Maria G. Silva',
        image: 'https://i.imgur.com/q7rfYQ5.jpeg',
        tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
        link: '/professionals/maria'
      },
      {
        name: 'Patrick Siqueira',
        image: 'https://i.imgur.com/hsQLqCL.jpeg',
        tags: ['Desenvolvedor Full-Stack', 'Dev-Ops', 'Web-Design'],
        link: '/professionals/patrick'
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
  ];

  // Dados dos segundos profissionais (exemplo diferente)
  const segundosProfissionais = [
    {
      name: 'Patrick Siqueira',
      image: 'https://i.imgur.com/hsQLqCL.jpeg',
      tags: ['Desenvolvedor Full-Stack', 'Dev-Ops', 'Web-Design'],
      link: '/professionals/patrick'
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

  ];

  const terceiroProfissionais = [
  
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
    // ... mais profissionais para esta seção
  ];

  const quartoProfissionais = [
  
    {
      name: 'Maria G. Silva',
      image: 'https://i.imgur.com/q7rfYQ5.jpeg',
      tags: ['Marketing Digital', 'Marketing de Afiliados', 'Trafego Pago', 'Copywritring Estratétgico'],
      link: '/professionals/maria'
    },
  // ... mais profissionais para esta seção
];

  return (
    <div className="app-container">
      <Header />

      {/* Primeiro componente Pro com dados e título específicos */}
      <Pro
        professionals={primeirosProfissionais}
        title="Nossa equipe de profissionais"
      />

      {/* Segundo componente Pro com dados e título diferentes */}
      <Pro
        professionals={segundosProfissionais}
        title="Nossos Desenvolvedores"
      />

<Pro
        professionals={terceiroProfissionais}
        title="Nossos Designers"
      />
      <Pro
        professionals={quartoProfissionais}
        title="Nosso time de Marketing"
      />
      {/* Você pode adicionar mais componentes Pro aqui com diferentes dados e títulos */}

    </div>
  );
};

export default Professionals;