// AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import Professionals from "../pages/Professionals"; // Importante: ajustar o caminho aqui!
import Projects from "../pages/Projects/Projects";

import MariaPage from "../pages/Maria/Maria"; // Caminhos ajustados
import PatrickPage from "../pages/Patrick/Patrick"; // Caminhos ajustados
import GiovaniPage from "../pages/Giovani/Giovani"; // Caminhos ajustados
import RanathanPage from "../pages/Ranathan/Ranathan"; // Caminhos ajustados
import RenanPage from "../pages/Renan/Renan"; // Caminhos ajustados
import MateusPage from "../pages/Mateus/Mateus"; // Caminhos ajustados
import JoaoPage from "../pages/Joao/Joao"; // Caminhos ajustados
import Agile from "../pages/Sobre/Agile";
import MichelPage from '../pages/Michel/Michel'
import CarolPage from '../pages/Carol/Carol'
import TestePage from "../pages/testepage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/professionals" element={<Professionals />} /> {/* Ajustar o caminho se necessário */}
          <Route path="/projects" element={<Projects />} />

          <Route path="/maria" element={<MariaPage />} /> {/* Rotas ajustadas */}
          <Route path="/patrick" element={<PatrickPage />} /> {/* Rotas ajustadas */}
          <Route path="/giovani" element={<GiovaniPage />} /> {/* Rotas ajustadas */}
          <Route path="/ranathan" element={<RanathanPage />} /> {/* Rotas ajustadas */}
          <Route path="/renan" element={<RenanPage />} /> {/* Rotas ajustadas */}
          <Route path="/mateus" element={<MateusPage />} /> {/* Rotas ajustadas */}
          <Route path="/joao" element={<JoaoPage />} /> {/* Rotas ajustadas */}
          <Route path="/testepage" element={<TestePage />} />
          <Route path="/michel" element={<MichelPage />} /> {/* Rotas ajustadas */}
          <Route path="/carol" element={<CarolPage />} /> {/* Rotas ajustadas */}

          <Route path="/sobre" element={<Agile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;