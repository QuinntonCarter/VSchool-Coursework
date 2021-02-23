import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BountyForm from './components/BountyForm.js'
import Target from './components/Target.js'


function AppContextProvider(){
    const [targets, setTargets] = useState([])

    // pulls targets for display on page load w useEffect
    function getTargets(){
        axios.get('/targets')
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getTargets()
    },[])


    return(
        <>
            <div>
                <BountyForm
    
                />
                {targets.map(target => 
                    <Target 
                        {...target}
                        key={target.lastName+target.firstName}
                    />
                )}
            </div>
        </>
    )
}

export {AppContextProvider, Consumer as AppContextConsumer}