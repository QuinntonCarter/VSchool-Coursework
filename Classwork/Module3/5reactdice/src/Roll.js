import React from 'react';

function Roll(props){

    return(
        <div>
        <button className='diceDisplay' onClick={props.roll}/> Click to roll 
        </div>
    )
}

export default Roll;