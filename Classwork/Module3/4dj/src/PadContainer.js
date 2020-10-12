import React from 'react';
import Pad from './Pad';
import './styles.css';

class PadContainer extends React.Component{
    // create map that sends props/values to indv pad w assigned color/style
    constructor(){
        super()
        this.state = {
            colors: [
                {
                    name: 'black',
                    id: 1
                },
                {
                    name: 'white',
                    id: 2
                }, 
                {
                    name: 'blue',
                    id: 3
                }, 
                {
                    name: 'purple',
                    id: 4
                }
            ]
        }

    }

    render(){
        return (
            <div className='padcontainer'>
                <div>
                    <Pad handleClick={this.handleClick} color={this.state.colors} />
                </div>
            </div>
        )
    }
}


export default PadContainer;