import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'; 

const Header = () => (
  <header>
    <h2>Voluntariado</h2>
    <nav>
      
      <ul>
        <li><Link to="/projects">Ver Proyectos Disponibles</Link></li>
        <li><Link to="/profile">Mi Perfil</Link></li>
        <li><Link to="/logout" style={{ color: 'red' }}>Cerrar Sesión</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
