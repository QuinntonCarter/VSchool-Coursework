import React, {useContext} from 'react'

import Main from './components/main'
import Weekly from './components/weekly'
import About from './components/about'

import {ForecastContext} from './forecastContext'

export default function App(){
    const context = useContext(ForecastContext)
    
    return(
        <div>
            <input/>
            <Main
            />
            <Weekly
            />
            <About
            />
        </div>
    )
}