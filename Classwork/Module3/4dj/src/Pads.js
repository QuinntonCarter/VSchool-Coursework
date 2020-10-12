import React from 'react';
import './styles.css';


function Pads(props){
    return (
        <div className='pads'>
            <div style={{backgroundColor:[props.color]}} />
            <div style={{backgroundColor:[props.color]}} />
            <div style={{backgroundColor:[props.color]}} />
            <div style={{backgroundColor:[props.color]}} /> 
        </div>
    )
}

export default Pads;