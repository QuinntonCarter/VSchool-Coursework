import React, { Component } from 'react';

class ColorChange extends Component {
    constructor(){
        super()
        this.state = {
            color:[]
        }
    }

    componentDidMount = () => {
        fetch(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.json)
        .then((data) => {
            this.setState({
                color:data
            })
        })
    }

    render(){
    return(
        <div>
            {this.state.color.map(randomColor =>
            <div className='setBackground' style={{backgroundColor:[randomColor]}}/>
            )}
        </div>
        )
    }
}

export default ColorChange;