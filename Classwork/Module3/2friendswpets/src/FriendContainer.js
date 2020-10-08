import React from 'react';


    // receives ea/friend from mappedFriendList as prop(s)
function FriendContainer(props){
    // applies props(ea/friend) to mappedPetList and extracts ea/pet from the friend to be listed in a <li>
    const mappedPetList = props.pets.map(pet => <div><li>{pet}</li></div>);
    //places {mappedPetList} to be rendered
    return (
        <div>
            Pets: {mappedPetList}
        </div>
    );
}


export default FriendContainer;