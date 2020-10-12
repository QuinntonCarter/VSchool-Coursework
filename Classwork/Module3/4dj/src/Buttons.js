import React from 'react';
import './styles.css';


function Buttons(props){

    return(
        <div>
            <button name='one' onClick={props.handleClick} > 1 </button>
            <button name='two' onClick={props.purpleClick} > 2 </button>
            <button name='three' onClick={props.handleClick} > 3 </button>
            <button name='four' onClick={props.handleClick} > 4 </button>
        </div>
    )
}

export default Buttons;