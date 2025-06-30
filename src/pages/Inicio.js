import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/principal');
  };

  return (
    <div className="inicio-container">
      <h1 className="app-title-left">Gestor de Gastos</h1>
      <div className="login-box">
        <input
          type="email"
          placeholder="correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn-login" onClick={handleLogin}>Iniciar sesión</button>
        <button className="btn-create">Crear una cuenta</button>
      </div>
    </div>
  );
};

export default Inicio;