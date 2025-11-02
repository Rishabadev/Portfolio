// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 1. Import 'HashRouter' instead of 'BrowserRouter'
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Use 'HashRouter' here. No 'basename' is needed. */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);