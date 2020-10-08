import React from 'react';
import friendList from './friendList';
import FriendContainer from './FriendContainer';

function FriendDisplay(){
    // maps through all friends individually and maps their name and age to FriendContainer component to receive styling properties
    const mappedFriendList = friendList.map(friend => 
    <div>
        {/* displays friend's name via accessing array with dot notation */}
        <h1> Name: {friend.name} </h1>
        <h2> Age: {friend.age} </h2>
        {/* sends ea/friend down to FriendContainer component to be received as props by FriendContainer function */}
        <p> <FriendContainer pets={friend.pets}/> </p>
    </div>
    );

    return(
        <div>
        <h6> {mappedFriendList} </h6>
        </div>
    );
};

export default FriendDisplay;