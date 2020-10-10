import React from 'react';
import Pad from './Pad';
import './styles.css';

class PadContainer extends React.Component{
    // create map that sends props/values to indv pad w assigned color/style
    constructor(){
        super()
        this.state = {
            colors: ['black', 'white', 'blue', 'purple']
        }
            this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

    }
    render(){
        const mappedPads = this.state.colors.map(color =>
    <div>
        <Pad handleClick={this.handleClick} color={color} />
    </div>
    );
        return (
            <div className='padcontainer'>
                {mappedPads}
            </div>
        )
    }
}


export default PadContainer;