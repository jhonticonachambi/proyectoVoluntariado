import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';  
import Register from './pages/register';  
import Login from './pages/login';  
import Platform from './pages/platform';  
import Projects from './pages/projects';  
import Postulation from './pages/postulation';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/platform" element={<Platform />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/postulation" element={<Postulation />} />
        <Route path="/postulation/:projectTitle" component={Postulation} />
      </Routes>
    </Router>
  );
}

export default App;
