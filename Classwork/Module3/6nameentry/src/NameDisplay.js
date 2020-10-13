import React from 'react';

function NameDisplay(props){
    return(
        <div>
                <li>
                    {props.name}
                </li>
        </div>

    )
}

export default NameDisplay;