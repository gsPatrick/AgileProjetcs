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

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/professionals/maria" element={<Maria />} />
        <Route path="/professionals/patrick" element={<Patrick />} />
        <Route path="/professionals/giovani" element={<Giovani />} />
        <Route path="/professionals/ranathan" element={<Ranathan />} />
        <Route path="/professionals/renan" element={<Renan />} />
        <Route path="/professionals/mateus" element={<Mateus />} />
        <Route path="/professionals/joao" element={<Joao />} />
        <Route path="/testepage" element={<testepage />} />
        <Route path="/sobre" element={<Agile />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
