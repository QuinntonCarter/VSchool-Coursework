import React from 'react'


function SpotCard(spot){
    return (
        <div className='spotCard'>
        <ul>
        <li>
        <h2> Location: {spot.place} </h2>
        <h4> Price: ${spot.price}</h4>
        <h4> When to go: {spot.timeToGo}</h4>
        </li>
        </ul>
        </div>
    );
}

export default SpotCard;