import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Router should only be here */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
