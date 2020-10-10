import React from 'react';
import './styles.css';


function Pad(props){
    return (
        <div>
            <button className={props.color} onClick={props.handleClick} />
            {/* <button className={props.color} onClick={props.handleClick} />
            <button className={props.color} onClick={props.handleClick} />
            <button className={props.color} onClick={props.handleClick} /> */}
        </div>
    )
}

export default Pad;

// style={{backgroundColor:[props.color]}}