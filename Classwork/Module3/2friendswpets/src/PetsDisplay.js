import React from 'react';


function PetsDisplay(props){
    return(
        <div>
            <p>{props.pet.name}</p>
            <h6>{props.breed}</h6> 
        </div>
    )
}

export default PetsDisplay;