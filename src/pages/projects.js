import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import '../assets/styles/Projects.css'; // Archivo para los estilos globales de la página

const Projects = () => {
  const projects = [
    {
      title: 'Capacitación en Habilidades Digitales',
      description: 'Ofrecer talleres de capacitación en habilidades digitales básicas a adultos mayores para fomentar la inclusión digital.',
      status: 'Activo',
      imageSrc: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/10/13/000626810W.jpg', // Aquí puedes cambiar la URL de la imagen
    },
    {
      title: 'Voluntariado en Educación',
      description: 'Apoya en la enseñanza de niños en áreas rurales para mejorar la calidad educativa.',
      status: 'Activo',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzT8Dzt1psq5j-4TI68T6Uq4X0V7p3RJY4cw&s', // Aquí puedes cambiar la URL de la imagen
    },
    {
      title: 'Capacitación en Habilidades Digitales',
      description: 'Ofrecer talleres de capacitación en habilidades digitales básicas a adultos mayores para fomentar la inclusión digital.',
      status: 'Activo',
      imageSrc: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/10/13/000626810W.jpg', // Aquí puedes cambiar la URL de la imagen
    },
    {
      title: 'Voluntariado en Educación',
      description: 'Apoya en la enseñanza de niños en áreas rurales para mejorar la calidad educativa.',
      status: 'Activo',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzT8Dzt1psq5j-4TI68T6Uq4X0V7p3RJY4cw&s', // Aquí puedes cambiar la URL de la imagen
    },
    // Agrega más proyectos aquí...
  ];

  return (
    <div className="projects-container">
        <Header />
      <h1>Proyectos Disponibles</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            status={project.status}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
