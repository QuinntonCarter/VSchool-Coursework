import React from 'react'


function PetsDisplay(props){
    return(
        <div>
            <p>{props.namer}</p>
            <h6>{props.breed}</h6> 
        </div>
    )
}

export default PetsDisplay;