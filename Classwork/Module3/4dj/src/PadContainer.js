import React from 'react';
import Pad from './Pad';

class PadContainer extends React.Component{
    // create map that sends props/values to pad to assign color/style
    constructor(){
        super()
        this.state = {
                colors: ['white', 'black', 'purple', 'blue']
            }
            this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.target.onClick = true
    }

    render(){
        const mappedPads = this.state.colors.map(color => 
            <Pad />,
            <Pad />,
            <Pad />,
            <Pad />
        </div>
        );
        return (
            <div className='padcontainer'>
                {/* <Pad /> */}
                {mappedPads}
            </div>
        )
    }
}


export default PadContainer;