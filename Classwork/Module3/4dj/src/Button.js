import React from 'react';

function Button(props){

    return(
        <div>
            <button onClick={props.onClick}> 1 </button>
            <button onClick={props.purpClick}> 2 </button>
            <button onClick={props.blueClickOne}> 3 </button>
            <button onClick={props.blueClickTwo}> 4 </button>
        </div>
    )
}

export default Button;