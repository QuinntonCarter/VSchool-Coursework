import React from 'react';
import FriendList from './FriendList';
import FriendContainer from './FriendContainer';

function FriendDisplay(){

    const mappedFriendList = FriendList.map(friend => <div><p>{friend.name}</p><h3> <FriendContainer  age={friend.age} pets={friend.pets}/> </h3></div>)

    return(
        <div>
        <h1> {mappedFriendList} </h1>
        </div>
    )
};

export default FriendDisplay;