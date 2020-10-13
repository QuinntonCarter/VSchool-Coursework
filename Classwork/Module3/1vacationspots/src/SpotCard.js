import React from 'react';
import SpotData from './SpotData'


function SpotCard(props){
    let season = props.timeToGo
    let price = props.price

    if(price < 100){
        price = '$'
    } else if (price > 100 && price < 500){
        price = '$$'
    } else {
        price = '$$$'
    }

    if(season === 'Winter'){
        season = 'blue'
    } else if (season === 'Summer') {
        season = 'gold'
    } else {
        season = 'orangered'
    }

    return (
    <div style={{backgroundColor:[season]}}>
        <ul>
            <li>
                <h2> Location: {props.place} </h2>
                <h4> Price: {price} </h4>
                <h4> When to go: {props.timeToGo} </h4>
            </li>
        </ul>
    </div>
    )
}



export default SpotCard;