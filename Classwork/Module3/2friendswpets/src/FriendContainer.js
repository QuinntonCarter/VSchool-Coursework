import React from 'react';


//try using state to render friendlist and pet list
function FriendContainer(props){
    const mappedPetList = props.pets.map(pet => <div><p>{pet}</p></div>);

    return (
        <div>
            {mappedPetList}
        </div>
    );
}


export default FriendContainer;