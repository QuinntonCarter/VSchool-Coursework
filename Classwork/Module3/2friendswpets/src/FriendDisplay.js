import React from 'react'

function FriendDisplay(props){

    return(
        <div>
        <h1>
            {props.name}
        </h1>
        <h3>
            {props.age}
        </h3>
        </div>
    )
}

export default FriendDisplay