/*import React from 'react';
import '../assets/styles/ProjectCard.css'; // Asegúrate de tener el archivo de estilos

const ProjectCard = ({ title, description, status, imageSrc }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={`${title}`} className="project-image" />
      <div className="project-content">
        <h3>{title} <span className={`status ${status.toLowerCase()}`}>{status}</span></h3>
        <p>{description}</p>
        <button className="details-button">Ver Detalles</button>
      </div>
    </div>
  );
};

export default ProjectCard;*/

import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import '../assets/styles/ProjectCard.css'; // Asegúrate de tener el archivo de estilos

const ProjectCard = ({ title, description, status, imageSrc }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={`${title}`} className="project-image" />
      <div className="project-content">
        <h3>{title} <span className={`status ${status.toLowerCase()}`}>{status}</span></h3>
        <p>{description}</p>
        {/* Usamos Link para navegar a la página de postulación 
        <Link to={`/postulation/${title.replace(/\s+/g, '-').toLowerCase()}`}>*/}
        <Link to={`/postulation}`}>
          <button className="details-button">Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
