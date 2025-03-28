
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"; // Importando o Layout
import App from "../App";
import Professionals from "../pages/Professional/Professionals";
import Projects from "../pages/Projects/Projects";

import Maria from "../pages/Professional/Maria/Maria";
import PatrickPage from "../pages/Professional/Patrick/Patrick";
import Giovani from "../pages/Professional/Giovani/Giovani";
import Ranathan from "../pages/Professional/Ranathan/Ranathan";
import Renan from "../pages/Professional/Renan/Renan";
import Mateus from "../pages/Professional/Mateus/Mateus";
import Joao from "../pages/Professional/Joao/Joao";
import Agile from "../pages/Sobre/Agile";
import TestePage from "../pages/testepage"; // Corrigi o nome para TestePage

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* O Layout envolve todas as páginas e renderiza o Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/professionals/maria" element={<Maria />} />
          <Route path="/Professional/Patrick" element={<PatrickPage />} />
          <Route path="/professionals/giovani" element={<Giovani />} />
          <Route path="/professionals/ranathan" element={<Ranathan />} />
          <Route path="/professionals/renan" element={<Renan />} />
          <Route path="/professionals/mateus" element={<Mateus />} />
          <Route path="/professionals/joao" element={<Joao />} />
          <Route path="/testepage" element={<TestePage />} />
          <Route path="/sobre" element={<Agile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
