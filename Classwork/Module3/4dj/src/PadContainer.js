import React from 'react';
import Pads from './Pads';
import './styles.css';
import Buttons from './Buttons'

class PadContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            // try array of colors or separate states of each color
            color: ['black', 'white', 'purple', 'blue']
        }
            this.handleClick = this.handleClick.bind(this)
            // this.purpleClick = this.purpleClick.bind(this)
    }

    // sets state to black or white depending on current state
    handleClick(){
        if (this.state.color === this.state.color[1] || this.state.color['']){
            this.setState({
                color: this.state.color[0]
            })
            console.log('one')
        } else {
            this.setState({
                color: this.state.color[1]
            })
            console.log('two')

        }
    }

    // handleClick(){
        // if (this.state.color === 'black' || 'white' || ''){
        // this.setState({
        //     color: 'purple'
        // })   
    // } else {
    //     this.setState({
    //         color: ''
    //     })
    // }
// }

    render(){
        return (
            <div className='padcontainer'>
                    <Pads color={this.state.color} />
                    <Buttons purpleClick={this.purple} handleClick={this.handleClick} />
            </div>
        )
    }
}


export default PadContainer;