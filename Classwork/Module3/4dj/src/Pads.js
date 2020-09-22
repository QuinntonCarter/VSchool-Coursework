import React from 'react';
import Pad from './Pad'

class Pads extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: [ 'white','black', 'purple', 'blue']
        }
    }  
    render(){
        return(
            <div>
                <Pad color={this.state.colors[0]}/>
                <Pad color={this.state.colors[1]} />
                <Pad color={this.state.colors[2]}/>
                <Pad color={this.state.colors[3]}/>
            </div>
        )
    }
}

export default Pads;