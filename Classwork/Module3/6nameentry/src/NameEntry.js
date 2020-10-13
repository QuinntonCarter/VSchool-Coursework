import React, { Component } from 'react';
import NameDisplay from './NameDisplay'
import './index.css'

class NameEntry extends Component {
    constructor(){
        super()
        this.state= {
            name: ''
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        // const mappedNames = this.state.name.map(name =>
        // <div>
        //     <ol>
        //         <li>
        //             {name}
        //         </li>
        //     </ol>
        // </div>)

        return(
            <div>
                <NameDisplay handleClick={this.handleClick} {...this.state} />
            </div>
        )
    }
}

export default NameEntry;