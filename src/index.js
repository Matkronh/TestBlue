import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import memberstackDOM from '@memberstack/dom';

// Initialize Memberstack once
const memberstack = memberstackDOM.init({
  publicKey: process.env.REACT_APP_MEMBERSTACK_PUBLIC_KEY,
  appId: process.env.REACT_APP_MEMBERSTACK_APP_ID
});

// Make memberstack available globally for debugging
window.memberstack = memberstack;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);