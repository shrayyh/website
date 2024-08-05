import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// Create the root element
const rootElement = document.getElementById('root');

// Ensure rootElement exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Render the application
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Report web vitals (performance metrics)
reportWebVitals();

