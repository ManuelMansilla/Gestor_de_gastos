import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GastosContext } from '../context/GastosContext';
import './Principal.css';

const Principal = () => {
  const navigate = useNavigate();
  const { totalSemana } = useContext(GastosContext);

  return (
    <div className="principal-container">
      <header>
        <h2>Gestor de Gastos</h2>
        <button onClick={() => navigate('/')}>Cerrar sesión</button>
      </header>
      <div className="main-content">
        <div className="total-semana">
          <p>Total de la semana</p>
          <p>${totalSemana.toFixed(2)}</p>
        </div>
        <div className="acciones">
          <button onClick={() => navigate('/agregar')}>Agregar Operación</button>
          <button onClick={() => navigate('/lista')}>Ver Operaciones</button>
          <button disabled>Estadísticas</button>
        </div>
      </div>
    </div>
  );
};

export default Principal;