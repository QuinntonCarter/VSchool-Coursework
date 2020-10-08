import React from 'react';
import Letter from './Letter'

class Envelope extends React.Component{
    constructor(){
        super()
        this.state = {
            sender:'',
            letterContents: '',
            returnAddress: ''
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <Letter handleClick={this.handleClick} {...this.state}/>
            </div>
        )
    }
}

export default Envelope;