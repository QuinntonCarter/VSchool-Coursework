import React from 'react';

function PetContainer(props){
    const mappedPets = props.pets.map(pets =>
        <div>
            <li>
                {pets}
            </li>
        </div>)
    return(
        <div>
            {mappedPets}
        </div>
    )
}

export default PetContainer;