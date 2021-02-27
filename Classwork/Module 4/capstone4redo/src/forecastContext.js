import React, {useState} from 'react'

const ForecastContext = React.createContext()

function ForecastContextProvider(props){
    const [location, setLocation] = useState()
    
    return(
        <ForecastContext.Provider value={'test'}>
            {props.children}
        </ForecastContext.Provider>
    )
}

export {ForecastContextProvider, ForecastContext}