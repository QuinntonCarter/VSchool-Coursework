import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './ThemeContext'

import App from './App';

ReactDOM.render( 
    <ThemeContextProvider>
        <Router> 
            <App />
        </Router>
    </ThemeContextProvider>, 
    document.getElementById('root')
);