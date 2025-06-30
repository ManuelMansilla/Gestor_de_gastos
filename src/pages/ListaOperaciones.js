import React, { useContext, useState } from 'react';
import { GastosContext } from '../context/GastosContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import './ListaOperaciones.css';

const ListaOperaciones = () => {
  const { gastos, eliminarGasto } = useContext(GastosContext);
  const navigate = useNavigate();
  const [detalle, setDetalle] = useState(null);

  const grupos = gastos.reduce((acc, g) => {
    const key = new Date(g.fecha).toLocaleString('default', { month: 'long', year: 'numeric' });
    acc[key] = acc[key] || [];
    acc[key].push(g);
    return acc;
  }, {});

  return (
    <div className="lista-container">
      <header>
        <FaArrowLeft onClick={() => navigate('/principal')} className="icon-back" />
        <h2>Lista de Operaciones</h2>
      </header>
      <div className="meses">
        {Object.entries(grupos).map(([mes, items]) => (
          <div key={mes} className="mes-group">
            <h3>{mes.charAt(0).toUpperCase() + mes.slice(1)}</h3>
            {items.map(item => (
              <div key={item.id} className="gasto-item">
                <button onClick={() => window.confirm('¿Desea eliminar este gasto?') && eliminarGasto(item.id)} className="btn-delete">
                  <FaTrash />
                </button>
                <div className="info" onClick={() => setDetalle(item)}>
                  <span>{new Date(item.fecha).toLocaleDateString('es-AR', { day: 'numeric', month: 'numeric' })}</span>
                  <span>{item.categoria}</span>
                  <span>${parseFloat(item.monto).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {detalle && (
        <div className="modal-overlay" onClick={() => setDetalle(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h4>{detalle.categoria} {new Date(detalle.fecha).toLocaleDateString('es-AR')}</h4>
            <p><strong>Monto:</strong> ${parseFloat(detalle.monto).toFixed(2)}</p>
            <p><strong>Cuenta:</strong> {detalle.cuenta}</p>
            <p><strong>Nota:</strong> {detalle.nota || '-'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaOperaciones;