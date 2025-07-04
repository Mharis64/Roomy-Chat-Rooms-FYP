import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import createRoot from "react-dom/client"
import { createRoot } from 'react-dom/client';

import { AuthProvider } from './Components/Contexts/AuthContext';

import { BrowserRouter } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
