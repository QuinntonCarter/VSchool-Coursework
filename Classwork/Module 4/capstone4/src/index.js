import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { ForecastContextProvider } from './ForecastContext'


import App from './App';

ReactDOM.render(
    <ForecastContextProvider>
        <Router>
            <App />
        </Router>
    </ForecastContextProvider>, 
    document.getElementById('root')
);