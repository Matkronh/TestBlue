import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Remove direct Memberstack initialization here
// We'll handle it in components as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);