import React from 'react';
import friendList from './friendList';
import PetContainer from './PetContainer';

function FriendDisplay(){
    const mappedFriendList = friendList.map(friend =>
        <div>
            <h2> Name: {friend.name} </h2>
            <h5> Age: {friend.age} </h5>
            <PetContainer pets={friend.pets} />
        </div>)
    return(
        <div>
            {mappedFriendList}
        </div>
    )
}

export default FriendDisplay;