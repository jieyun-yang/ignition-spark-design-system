import React from 'react';
import ReactDOM from 'react-dom/client';
import '../design-system/tokens/tokens.css';
import MainApp from './MainApp';
import PrototypeApp from './PrototypeApp';

// Simple routing: /demo shows DS demo, / is for prototypes
const isDemoRoute = window.location.pathname.startsWith('/demo');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isDemoRoute ? <MainApp /> : <PrototypeApp />}
  </React.StrictMode>
);
