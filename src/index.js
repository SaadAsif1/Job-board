import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>,
  document.getElementById('root')
);
