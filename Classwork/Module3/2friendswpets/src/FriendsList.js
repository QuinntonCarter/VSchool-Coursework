import React, {useState} from 'react';
import FriendDisplay from './FriendDisplay';

const FriendsList = () => {
    const [ friends, setFriends ] = useState ([
        {
        name: "Ben",
        age: 29,
        pets: ['Spot', 'Bear', 'Moo']
        },
        {
        name: "Bob",
        age: 31,
        pets: ["Sally"]
        },
        {
        name: "Marcus",
        age: 25,
        pets: ['Indy', 'Anna']
        },
        {
        name: "Jacob",
        age: 20,
        pets: ['Bob', 'Eric', 'Nate']
        }
    ]);
    return (
        <div>
            {friends.map(friend => (
                <FriendDisplay name={friend.name} age={friend.age} pets={friend.pets}/>  
                ))}
        </div>
    );
};


export default FriendsList;