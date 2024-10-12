import React, { useState } from 'react';
import '../assets/styles/Login.css'; // Asegúrate de tener los estilos en Login.css

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log('Formulario de inicio de sesión enviado', form);
  };

  return (
    <div className="login-form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            placeholder="Ingresa tu usuario"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="login-button">Entrar</button>

        <div className="password-recovery">
          <a href="/recuperar-contrasena">¿Olvidaste tu contraseña? Recupérala aquí</a>
        </div>

        <button type="button" className="back-button" onClick={() => window.location.href = '/platform'}>
          Volver al Inicio
        </button>
      </form>
    </div>
  );
};

export default Login;
