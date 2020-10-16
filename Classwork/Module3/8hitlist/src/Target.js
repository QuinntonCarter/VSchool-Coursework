import React from 'react';

function Target(props){
    return(
        <div>
            <ul>
                <li>
                    <h4>
                        Name: {props.target}
                    </h4>
                </li>
            </ul>
        </div>
    )
}

export default Target;