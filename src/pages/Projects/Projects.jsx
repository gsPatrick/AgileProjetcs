// ProjectsPage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Project from "../../professionals-components/Projects/Projects";
import '../../App.css';


const ProjectsPage = ({ initialClassificationFilter, initialSeniorityFilter }) => { // Recebe props de filtro iniciais

  return (
    <div className="app-container">
      <Header />
        <Project
          initialClassificationFilter={initialClassificationFilter} // Passa prop para Projects
          initialSeniorityFilter={initialSeniorityFilter} // Passa prop para Projects
        />
    </div>
  );
};

export default ProjectsPage;