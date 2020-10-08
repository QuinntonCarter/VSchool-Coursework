import React from 'react';

function Letter(props){
    return(
        <div>
            <input name='sender' value={props.sender} onChange={props.handleClick}/>
            <input name='letterContents' value={props.letterContents} onChange={props.handleClick}/>
            <input name='returnAddress' value={props.returnAddress} onChange={props.handleClick}/>
            <h3>{props.sender} </h3>
            <p>{props.letterContents} </p>
            <h6> {props.returnAddress}</h6>
        </div>
    )
}

export default Letter;