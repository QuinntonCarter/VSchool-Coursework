import React from 'react';
import './index.css'

function Roll(props){
    // let sum = Math.floor(Math.random * 6)
    return (
        <div className='dicedisplay'>
            <h1 className='dice'>
                {props.display}
            </h1>
            <p>Click2Roll</p>
            <button onClick={props.handleClick}/> 
        </div>
    )
}

export default Roll;