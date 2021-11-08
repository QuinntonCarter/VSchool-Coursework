import React from 'react';

export default function UserMemes(props){
    const { imgSrc, key } = props

    return(
        <div className='meme'>
            {/* <h2> {topText} </h2> */}
            <img src={imgSrc} alt={key}/>
            {/* <h2> {bottomText} </h2> */}
        </div>
    )
}