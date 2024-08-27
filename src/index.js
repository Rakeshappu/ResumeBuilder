//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="453773849620-ielhub36alcrocta0av375e4e98j2900.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;
    
  </React.StrictMode>,
  document.getElementById('root')
);