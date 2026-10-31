import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Remove static SEO fallback shell class so React views span 100% full width
if (typeof document !== 'undefined') {
  document.body.classList.remove('atpl-sh');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
