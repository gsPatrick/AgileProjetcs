import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App"; // Ajuste o caminho conforme necessário
import Professionals from "../pages/Professionals/Professionals"; // Ajuste o caminho conforme necessário
import Projects from '../pages/Projects/Projects'; // Importe a página Projects

import Maria from "../pages/Professionals/Maria/Maria"; // Ajuste o caminho conforme necessário
import Patrick from '../pages/Professionals/Patrick/Patrick'; // Importe a página Patrick
import Giovani from '../pages/Professionals/Giovani/Giovani'; // Importe a página Giovani
import Ranathan from '../pages/Professionals/Ranathan/Ranathan'; // Importe a página Ranathan
import Renan from '../pages/Professionals/Renan/Renan'; // Importe a página Renan
import Mateus from '../pages/Professionals/Mateus/Mateus'; // Importe a página Mateus
import Joao from '../pages/Professionals/Joao/Joao'; // Importe a página Mateus
import Agile from '../pages/Sobre/Agile'; // Importe a página Mateus
import testepage from '../pages/testepage'; // Importe a página Mateus

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/professional/maria" element={<Maria />} />
        <Route path="/professional/patrick" element={<Patrick />} />
        <Route path="/professional/giovani" element={<Giovani />} />
        <Route path="/professional/ranathan" element={<Ranathan />} />
        <Route path="/professional/renan" element={<Renan />} />
        <Route path="/professional/mateus" element={<Mateus />} />
        <Route path="/professional/joao" element={<Joao />} />
        <Route path="/testepage" element={<testepage />} />
        <Route path="/sobre" element={<Agile />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"; // Importando o Layout
import App from "../App";
import Professionals from "../pages/Professionals/Professionals";
import Projects from "../pages/Projects/Projects";

import Maria from "../pages/Professionals/Maria/Maria";
import Patrick from "../pages/Professionals/Patrick/Patrick";
import Giovani from "../pages/Professionals/Giovani/Giovani";
import Ranathan from "../pages/Professionals/Ranathan/Ranathan";
import Renan from "../pages/Professionals/Renan/Renan";
import Mateus from "../pages/Professionals/Mateus/Mateus";
import Joao from "../pages/Professionals/Joao/Joao";
import Agile from "../pages/Sobre/Agile";
import TestePage from "../pages/testepage"; // Corrigi o nome para TestePage

