import React from 'react';

function NameDisplay(props){
    return(
        <div>
                <li>
                    {props.names}
                </li>
        </div>

    )
}

export default NameDisplay;