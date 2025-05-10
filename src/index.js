import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MovieProvider } from './context/MovieContext'; // ✅ Import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieProvider> {/* ✅ Wrap your entire app here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>
);
