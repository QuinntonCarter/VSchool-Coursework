import React, { Component } from 'react'
import { FormContextConsumer } from './formContext'
import NewListItem from './newListItem'

class Form extends Component {
    state = {
        uglyThing: '',
        uglyURL: '',
        uglyDesc: ''
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    render(){
            return(
                <div>
                    <center>
                        <FormContextConsumer>
                            <form>
                                <div className='formdiv'>
                                    <input placeholder='Ugly thing' type='text' name='uglyThing' value={this.state.uglyThing} onChange={this.handleChange}/>
                                    <input placeholder='Img URL' type='img' name='uglyURL' value={this.state.uglyURL} onChange={this.handleChange}/>
                                    <br/>
                                    <textarea placeholder='Brief description' name='uglyDesc' value={this.state.uglyDesc} onChange={this.handleChange}/>
                                    <br/>
                                    <button onClick={context.handleSubmit}> Add to Collection </button>
                                </div>
                            </form>
                        </FormContextConsumer>
                    </center>
                </div>
            )
    }
}

export default Form

// i want to send all the entered information to the newlistitem and map through it to create
// said component on the submit of the information