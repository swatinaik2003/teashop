
// Correct import for React 18
import ReactDOM from 'react-dom/client'; // This is the correct import
import React from 'react';
import App from './App';

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
