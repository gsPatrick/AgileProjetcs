// AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import Professionals from "../pages/Professionals"; // Importante: ajustar o caminho aqui!
import Projects from "../pages/Projects/Projects";

import Maria from "../pages/Maria/Maria"; // Caminhos ajustados
import Patrick from "../pages/Patrick/Patrick"; // Caminhos ajustados
import Giovani from "../pages/Giovani/Giovani"; // Caminhos ajustados
import Ranathan from "../pages/Ranathan/Ranathan"; // Caminhos ajustados
import Renan from "../pages/Renan/Renan"; // Caminhos ajustados
import Mateus from "../pages/Mateus/Mateus"; // Caminhos ajustados
import Joao from "../pages/Joao/Joao"; // Caminhos ajustados
import Agile from "../pages/Sobre/Agile";
import TestePage from "../pages/testepage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/professionals" element={<Professionals />} /> {/* Ajustar o caminho se necessário */}
          <Route path="/projects" element={<Projects />} />

          <Route path="/maria" element={<Maria />} /> {/* Rotas ajustadas */}
          <Route path="/patrick" element={<Patrick />} /> {/* Rotas ajustadas */}
          <Route path="/giovani" element={<Giovani />} /> {/* Rotas ajustadas */}
          <Route path="/ranathan" element={<Ranathan />} /> {/* Rotas ajustadas */}
          <Route path="/renan" element={<Renan />} /> {/* Rotas ajustadas */}
          <Route path="/mateus" element={<Mateus />} /> {/* Rotas ajustadas */}
          <Route path="/joao" element={<Joao />} /> {/* Rotas ajustadas */}
          <Route path="/testepage" element={<TestePage />} />
          <Route path="/sobre" element={<Agile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;