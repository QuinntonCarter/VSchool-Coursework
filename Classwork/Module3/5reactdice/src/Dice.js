import React from 'react';
import './index.css';
import Roll from './Roll';

class Dice extends React.Component{
    constructor(){
        super()
        this.state = {
            roll: [1,2,3,4,5,6]
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const { value, name } = e.target
        let sum = Math.random(Math.floor() * 6)
        sum = value
        this.setState({
            [name]: value
        })

    }

    render(){
        return(
            <Roll handleClick={this.handleClick} {...this.state}/>
        )
    }
}
export default Dice; 