import React, {Component} from 'react';
import NameDisplay from './NameDisplay';

class NameEntry extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            names: []
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        }
    )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            names: [...prevState.names, prevState.name],
            name: ''
            })
    )

}

    render(){
        const allNames = this.state.names.map((name) => {
                return  <ul>
                            <NameDisplay names={name}/>
                        </ul>
        })
        return(
            <div className='namedisplaystyle'>
                <form>
                    <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                    <button name='button' onClick={this.handleSubmit} > Submit </button>
                    <h1> {this.state.name} </h1>
                    <h3> {allNames} </h3>
                </form>
            </div>
        )
    }

}

export default NameEntry;