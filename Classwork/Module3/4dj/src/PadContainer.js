import React , { Component } from 'react';
import Button from './Button';
import './styles.css'

class PadContainer extends Component {
    constructor(){
        super()
        this.state = {
            colors: ['black', 'white','purple', 'blue'],
        }
    }
    
    bwClick = () => {
        // if condition is met..
        if(this.state.colors[0] === 'white' || this.state.colors[0] === 'gray'){
        // sets colors state to..
            this.setState({
        // following array (black)
                colors: ['black', 'black', 'black', 'black']
            })
        // but if condition is met
        } if(this.state.colors[0] === 'black' || this.state.colors[0] === 'purple'){
        // sets state to following array (white)
            this.setState({
                colors: ['white', 'white', 'white', 'white']
            })
        }
    }

    purpClick = () => {
        this.setState({
        //sets colors the included array
            colors: ['purple', 'purple', 'gray', 'gray']
            })
        // but if this.state.colors[0] matches purple then..
        if (this.state.colors[0] === 'purple'){
            this.setState({
        //resets colors the included array
                colors: ['gray', 'gray', 'gray', 'gray']
            })
        }
    }

    blueClickOne = () => {
        // if one of the conditions is met below..
        if (this.state.colors[2] === 'purple' || this.state.colors[2] === 'gray' || this.state.colors[2] === 'black' || this.state.colors[2] === 'white'){
        // sets state by..
            this.setState(prevState => {
                return {
        // pulling previous colors w/ prevState and keeps them the same while setting color @ colors[2] to blue
                colors: [prevState.colors[0], prevState.colors[1], 'blue', prevState.colors[3] ]
                }
            })
        }
        // if condition is met
        if (this.state.colors[2] === 'blue'){
        // sets state by..
            this.setState(prevState => {
                return{
        // pulling previous colors w/ prevState and keeps them the same while setting color @ colors[2] to gray
                colors: [prevState.colors[0], prevState.colors[1], 'gray', [prevState.colors[3]]]
                }
            })
        }
    }

    blueClickTwo = () => {
        this.setState({

        })
    }
        
    render(){
        return(
            <div className='padcontainer'>
                <div className='djpad' style={{backgroundColor:this.state.colors[0]}} />
                <div className='djpad' style={{backgroundColor:this.state.colors[1]}} />
                <div className='djpad' style={{backgroundColor:this.state.colors[2]}} />
                <div className='djpad' style={{backgroundColor:this.state.colors[3]}} />
                <Button blueClickTwo={this.blueClickTwo} blueClickOne={this.blueClickOne} purpClick={this.purpClick} onClick={this.bwClick} />
            </div>
        )
    }
}

export default PadContainer;

// bwhandleClick = () => {
//     if (this.state.color === '' || this.state.color === this.state.colors[1] || this.state.color === this.state.colors[2]){
//         this.setState({
//             color: this.state.colors[0]
//         })
//     } 
//     if (this.state.color === this.state.colors[0] || this.state.color === this.state.colors[2]){
//         this.setState({
//             color: this.state.colors[1]
//         })
//     }
// }


// purpClick = () => {
//     if(this.state.color[0] === 'b' || this.state.color[0] === 'w' || this.state.color === ''){
//         this.setState({
//                 color: 'gray',
//                 colors: this.state.colors[2]
//             })
//         console.log(this.state.color)
//         }
//         if (this.state.color === 'purple'){
//             this.setState({
//                 color: ''
//             })
//         }
//     }
