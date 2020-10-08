import React from 'react';
import './index.css'

class Dice extends React.Component{
    constructor(){
        super()
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
         let sum = Math.random(Math.floor() * 6)
        
    }

    render(){
        return(
            <button value={sum} onClick={randomRoll} className='diceDisplay'/>
        )
    }
}
export default Dice; 