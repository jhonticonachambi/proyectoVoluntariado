import React from 'react';
import '../assets/styles/index.css'; // Asegúrate de tener este archivo CSS correctamente vinculado

export default function Home() {
  return (
    <div id="root">
      {/* Barra de Navegación */}
      <nav className="navbar-home">
        <div className="navbar-brand-home">Voluntariado</div>
        <ul className="navbar-links-home">
          <li><a href="/" className="active-home">Inicio</a></li>
          <li><a href="/register">Registro</a></li>
          <li><a href="/login">Iniciar Sesión</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-home">
        <h1>Únete a Nuestro Proyecto de Voluntariado</h1>
        <p>Haz la diferencia y contribuye al bienestar de la comunidad con tu tiempo y esfuerzo.</p>
        <a href="/register" className="cta-button-home">¡Regístrate Ahora!</a>
      </header>

      {/* Sección: Qué es la plataforma */}
      <section className="about-home">
        <h2>¿Qué es la Plataforma de Voluntariado?</h2>
        <p>
          La Plataforma de Voluntariado es un espacio diseñado para conectar personas como tú, que desean hacer una diferencia en el mundo, con organizaciones y proyectos que necesitan tu ayuda. Ya sea en áreas de educación, salud, medio ambiente o asistencia social, siempre hay una oportunidad para que contribuyas.
        </p>
      </section>

      {/* Sección: Beneficios de ser voluntario */}
      <section className="benefits-home">
        <h2>Beneficios de ser Voluntario</h2>
        <div className="benefits-grid-home">
          <div className="benefits-card-home">
            <h3>Impacto Positivo</h3>
            <p>Contribuirás directamente a mejorar la vida de personas en tu comunidad y más allá.</p>
          </div>
          <div className="benefits-card-home">
            <h3>Desarrollo Personal</h3>
            <p>Aprenderás nuevas habilidades, harás nuevos amigos y fortalecerás tu capacidad de trabajo en equipo.</p>
          </div>
          <div className="benefits-card-home">
            <h3>Reconocimiento</h3>
            <p>Tu esfuerzo será reconocido por la comunidad y las organizaciones con las que trabajes.</p>
          </div>
        </div>
      </section>

      {/* Sección: Galería de Proyectos */}
      <section className="gallery-home">
        <h2>Galería de Proyectos</h2>
        <div className="gallery-grid-home">
          <div className="gallery-item-home">350 x 200</div>
          <div className="gallery-item-home">350 x 200</div>
          <div className="gallery-item-home">350 x 200</div>
        </div>
      </section>

     

      {/* Pie de página */}
      <footer className="footer-home">
        <p>© 2024 Plataforma de Voluntarios | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
