import React from 'react';
import '../assets/styles/Postulation.css'; // Asegúrate de tener el archivo CSS
import Header from '../components/Header';

const Postulation = () => {
  return (
    
    <div className="postulation-container">
      <Header />
      <div className="banner">
        <h1>Postularse a Proyectos</h1>
        <button className="apply-button">Postularse a este Proyecto</button>
      </div>

      <div className="postulation-content">
        <section>
          <h2>Descripción del Proyecto</h2>
          <p>Este proyecto está enfocado en ayudar a comunidades vulnerables mediante la recolección, clasificación y distribución de alimentos. Se requiere la participación de voluntarios comprometidos.</p>
        </section>

        <section>
          <h2>Requisitos del Proyecto</h2>
          <ul>
            <li>Capacidad para realizar tareas físicas.</li>
            <li>Disponibilidad de al menos 2 horas semanales.</li>
            <li>Experiencia en manejo de inventarios es un plus.</li>
          </ul>
        </section>

        <section>
          <h2>Fechas de Postulación</h2>
          <p>Del 5 de septiembre de 2024 al 30 de noviembre de 2024.</p>
        </section>

        <section>
          <h2>Proceso de Postulación</h2>
          <ol>
            <li>Selecciona el proyecto de tu interés desde la lista de proyectos disponibles.</li>
            <li>Revisa los detalles del proyecto y asegúrate de cumplir con los requisitos.</li>
            <li>Haz clic en "Postularse a este Proyecto".</li>
            <li>Completa tu postulación y verifica que tu perfil esté completo.</li>
            <li>Recibirás una confirmación de que tu postulación ha sido enviada exitosamente.</li>
          </ol>
        </section>

        <section className="project-status">
          <h2>Estado del Proyecto</h2>
          <p>Actualmente hay <span className="badge">5 postulantes</span> para este proyecto.</p>
        </section>
      </div>
    </div>
  );
};

export default Postulation;
