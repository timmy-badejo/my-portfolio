import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root element
const container = document.getElementById('root');

// Create a root using the new API
const root = createRoot(container);

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

