import React, {Component} from 'react';
import NameDisplay from './NameDisplay';

class NameEntry extends Component {
    constructor(){
        super()
        this.state={
            name: ['']
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const { name, value } = e.target
            this.setState({
                [name]: value
            })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState(prevState => {
        prevState.appendChild(name =>
            <ul>
                <NameDisplay name={name}/>
            </ul>
        )
        })
    }

    render(){
        return(
            <div className='namedisplaystyle'>
                <form>
                    <input  name='name' type='text' onChange={this.handleChange}/>
                    <button name='button' onClick={this.handleSubmit} > Submit </button>
                    <h3> {this.state.name} </h3>
                    
                </form>
            </div>
        )
    }

}

export default NameEntry;