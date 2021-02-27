import React from 'react'
import ReactDOM from 'react-dom'

import {TrackContextProvider} from './trackContext.js'
import App from './App'
import './styles.css'


ReactDOM.render(
    <TrackContextProvider>
        <App/>
    </TrackContextProvider>,
    document.getElementById('root'))