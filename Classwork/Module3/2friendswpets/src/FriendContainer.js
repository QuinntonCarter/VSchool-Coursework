import React from 'react';

function FriendContainer(props){
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

export default FriendContainer;