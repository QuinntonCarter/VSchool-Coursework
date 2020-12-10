import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

// ** final for debugging ** //
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import { MediaContextProvider } from './MediaContext'
import { PhotoContextProvider } from './PhotoContext'

ReactDOM.render(
  <Router>
    <PhotoContextProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </PhotoContextProvider>
  </Router>
  ,
  document.getElementById('root')
  );