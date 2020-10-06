import React from 'react';
import FriendsList from './FriendsList';

const FriendDisplay = ({name , age , pets}) => {

    return(
        <div>
        <h1>
            Name: {name}
        </h1>
        <h3>
            Age: {age}
        </h3>
        <p>
            Pets: {pets}
        </p>
        </div>
    );
};

export default FriendDisplay;