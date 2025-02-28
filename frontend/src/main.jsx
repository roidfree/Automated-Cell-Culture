import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import './App.css'; // App-specific styles
import App from './App'; // Main App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
