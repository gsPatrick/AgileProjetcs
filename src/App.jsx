// App.jsx ou sua página principal
import React from 'react';
import Header from './components/Header/Header'; // Ajuste o caminho se necessário
import HeroSection from './components/HeroSection/HeroSection';
import Service from './components/Service/Service'; // Importe o componente Service
import Benefits from './components/Benefits/Benefits';
import Pro from './components/Professionals/Pro'; // Importe o componente Pro

import Classification from './components/Classification/Classification'; // Import Classification component


import './App.css'; // Importante: Importe o App.css para aplicar os estilos globais


function App() {
  return (
    <div className="app-container"> {/* Adicione a div com a classe app-container */}
      <Header />
      <HeroSection />
      <Service /> 
      <Benefits />
      <Pro />
      <Classification />
      {/* Adicione o componente Service */}
      {/* Aqui você adicionaria outros componentes para o resto da sua página */}
      {/* Por exemplo: */}
      {/* <ContentSection1 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;