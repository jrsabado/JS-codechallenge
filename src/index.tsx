import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Ensure the container is not null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
