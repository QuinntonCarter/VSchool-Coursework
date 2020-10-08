import React, { useState } from 'react';
import './index.css'

const Dice = () => {
    const [roll, setRoll] = useState(['1','2','3','4','5','6'])


    function randomRoll(){
         let sum = setRoll(Math.random(Math.floor() * 6))

    }

    return(
        <button value={sum} onClick={randomRoll()} className='diceDisplay'/>
    )
}

export default Dice; 