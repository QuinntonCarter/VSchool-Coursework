import React, { Component } from 'react';
import Buttons from './Buttons';
import Pad from './Pad';

class PadContainer extends Component {
    constructor(){
        super()
        this.state = {
            colors:[ 'black', 'white', 'purple', 'blue']
        }
    }

    //on button click be able to render/display specific set/color of pads
    

    render(){

        return(
            <div className='padcontainer'>

                <Buttons />
            </div>
        )
    }
}

export default PadContainer;