import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <AuthProvider>
           <App />
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


