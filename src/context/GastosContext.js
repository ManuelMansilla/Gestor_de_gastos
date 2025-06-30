import React, { createContext, useState, useMemo } from 'react';

export const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => {
    setGastos(prev => [...prev, gasto]);
  };

  const eliminarGasto = (id) => {
    setGastos(prev => prev.filter(g => g.id !== id));
  };

  const totalSemana = useMemo(() => {
    const hoy = new Date();
    const hace7 = new Date();
    hace7.setDate(hoy.getDate() - 7);
    return gastos
      .filter(g => new Date(g.fecha) >= hace7)
      .reduce((sum, g) => sum + parseFloat(g.monto), 0);
  }, [gastos]);

  return (
    <GastosContext.Provider value={{ gastos, agregarGasto, eliminarGasto, totalSemana }}>
      {children}
    </GastosContext.Provider>
  );
};