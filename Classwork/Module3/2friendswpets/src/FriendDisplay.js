import React from 'react';
import friendList from './friendList';
import FriendContainer from './FriendContainer';

function FriendDisplay(){
    const mappedFriendList = friendList.map(friend =>
        <div>
            <h2> Name: {friend.name} </h2>
            <h5> Age: {friend.age} </h5>
            <FriendContainer pets={friend.pets} />
        </div>)
    return(
        <div>
            {mappedFriendList}
        </div>
    )
}

export default FriendDisplay;