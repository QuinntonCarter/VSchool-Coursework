import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { ForecastContext } from './forecastContext.js'


import App from './App';

ReactDOM.render(
    <ForecastContext>
        <Router>
            <App />
        </Router>
    </ForecastContext>,
    document.getElementById('root')
);