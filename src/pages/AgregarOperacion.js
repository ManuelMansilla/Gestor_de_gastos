import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GastosContext } from '../context/GastosContext';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowLeft } from 'react-icons/fa';
import './AgregarOperacion.css';

const AgregarOperacion = () => {
  const navigate = useNavigate();
  const { agregarGasto } = useContext(GastosContext);

  const [monto, setMonto] = useState('0.00');
  const [cuenta, setCuenta] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nota, setNota] = useState('');
  const [fecha, setFecha] = useState(new Date());

  const handleSave = () => {
    agregarGasto({ id: uuidv4(), monto, cuenta, categoria, nota, fecha });
    navigate('/principal');
  };

  const handleMontoChange = e => {
    const val = e.target.value.replace(/[^0-9.,]/g, '');
    const regex = /^\d*(?:[.,]\d{0,2})?$/;
    if (regex.test(val)) setMonto(val);
  };

  return (
    <div className="agregar-container">
      <header>
        <FaArrowLeft onClick={() => navigate('/principal')} className="icon-back" />
        <h2>Agregar Operación</h2>
      </header>
      <div className="form-grid">
        <div className="left-col">
          <label>Monto</label>
          <input value={monto} onChange={handleMontoChange} />
          <button onClick={handleSave}>Guardar</button>
        </div>
        <div className="right-col">
          <label>Cuenta</label>
          <select value={cuenta} onChange={e => setCuenta(e.target.value)}>
            <option value="" disabled>Seleccione tipo de cuenta</option>
            <option>Contado</option>
            <option>Crédito</option>
            <option>Débito</option>
          </select>
          <label>Categoría</label>
          <select value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="" disabled>Seleccione categoría</option>
            <option>Compras</option>
            <option>Vivienda</option>
            <option>Vehículos</option>
            <option>Entretenimiento y recreación</option>
            <option>Comunicaciones/PC</option>
            <option>Gastos financieros</option>
            <option>Inversiones</option>
            <option>Otros</option>
          </select>
          <label>Nota</label>
          <textarea value={nota} onChange={e => setNota(e.target.value)} />
          <label>Fecha</label>
          <DatePicker selected={fecha} onChange={date => setFecha(date)} />
        </div>
      </div>
    </div>
  );
};

export default AgregarOperacion;