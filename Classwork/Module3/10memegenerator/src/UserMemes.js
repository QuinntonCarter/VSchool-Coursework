import React from 'react';

export default function UserMemes(props){
    const { imgSrc, key } = props


    return imgSrc ? 
        <div className='meme'>
            <img src={imgSrc} alt={key}/>
            <button> edit </button>
        </div>
        :
        null
}