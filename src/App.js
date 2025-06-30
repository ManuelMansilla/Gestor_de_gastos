import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Principal from './pages/Principal';
import AgregarOperacion from './pages/AgregarOperacion';
import ListaOperaciones from './pages/ListaOperaciones';

const App = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/principal" element={<Principal />} />
    <Route path="/agregar" element={<AgregarOperacion />} />
    <Route path="/lista" element={<ListaOperaciones />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;