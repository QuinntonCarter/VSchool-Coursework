import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import { ForecastContextProvider } from './forecastContext'

ReactDOM.render(
    <ForecastContextProvider>
        <App/>
    </ForecastContextProvider>,
    document.getElementById('root'))