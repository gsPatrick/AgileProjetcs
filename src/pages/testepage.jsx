// ProjectsPage.jsx
import React from "react";
import Skills from '../professionals-components/Skills/Skills'
import '../App.css';

const ProjectsPage = ({ initialClassificationFilter, initialSeniorityFilter }) => { // Recebe props de filtro iniciais

  return (
    <div className="app-container">
      <Skills />
    </div>
  );
};

export default ProjectsPage;