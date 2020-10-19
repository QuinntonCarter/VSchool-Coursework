import React, { Component } from 'react';

class ColorChange extends Component {
    constructor(){
        super()
        this.state = {
            color: ''
        }
    }

    componentDidMount = () => {
        fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                color: data
            })
        })
    }
    

    render(){
        return(
            <div>
                {/* figure out how to render state as background color */}
                <div style={{height:['400px'], width: ['550px'], border:['solid gray 3px'], backgroundColor:[JSON.stringify(this.state.color.new_color)]}}/>
            </div>
            )
        }
}

export default ColorChange;