import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GastosProvider } from './context/GastosContext';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GastosProvider>
        <App />
      </GastosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);