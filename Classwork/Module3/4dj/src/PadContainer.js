import { render } from '@testing-library/react';
import React from 'react';
import Pad from './Pad';

class PadContainer extends React.Component{
    // create map that sends props/values to pad to assign color/style
    constructor(){
        super()
        this.state = {
                toggle: false
            }
            this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.target.onClick = true

    }

    render(){
        return (
            <div className='padcontainer'>
                <Pad {...this.state} handleClick={this.handleClick}/>
                <Pad {...this.state} handleClick={this.handleClick}/>
                {/* <Pad name='three' onClick={this.handleClick}/>
                <Pad name='four' onClick={this.handleClick}/> */}
            </div>
        )
    }
}


export default PadContainer;