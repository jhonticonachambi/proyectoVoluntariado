import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PostulationsTable from '../components/PostulationsTable';
import '../assets/styles/Platform.css'; // Import the CSS file here

const Platform = () => (
  <div className="container">
    <Header />
    <h2>Bienvenido, Jhon Thomas</h2>
    <p>Utiliza el menú para navegar por las diferentes secciones.</p>
    
    <SearchBar />
    
    <PostulationsTable />
    
    <footer>© 2024 Plataforma de Voluntarios | Todos los derechos reservados</footer>
  </div>
);

export default Platform;
