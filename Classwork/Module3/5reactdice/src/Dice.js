import React from 'react';
import './index.css';
import Roll from './Roll';

class Dice extends React.Component{
    constructor(){
        super()
        this.state = {
            roll: function(){
                Math.random(Math.floor * 6)
            }
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })

    }
        // let sum = Math.random(Math.floor() * 6)
        // sum = value


    render(){
        return(
            <div className='square'>
            <Roll handleClick= {this.handleClick} {...this.state}/>
            </div>
        )
    }
}
export default Dice; 