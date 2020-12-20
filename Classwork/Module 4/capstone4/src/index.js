import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from './ThemeContext'

import { Main } from './Main'

import App from './App';

ReactDOM.render(
    <Main>
        <ThemeContextProvider>
            <Router> 
                <App />
            </Router>
        </ThemeContextProvider>
    </Main>, 
    document.getElementById('root')
);