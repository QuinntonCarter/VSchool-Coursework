import React from 'react';
import './styles.css';


function Pad(props){

    return (
        <div>
            <button name='black' className={props.className} onClick={props.handleClick} />
            {/* <button className={props.colors} onClick={props.handleClick} /> */}
        </div>
    )
}

export default Pad;