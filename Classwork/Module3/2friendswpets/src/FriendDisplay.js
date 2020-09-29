import React from 'react';

function FriendDisplay(props){

    return(
        <div>
        <h1>
            {props.name}
        </h1>
        <h3>
            {props.age}
        </h3>
        <h6>
            {props.petname}
        </h6>
        <h6>
            {props.petbreed}
        </h6>
        </div>
    )
}

export default FriendDisplay;