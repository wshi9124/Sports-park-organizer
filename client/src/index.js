import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './AuthProvider';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

