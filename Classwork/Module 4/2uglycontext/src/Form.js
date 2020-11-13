import React, { Component } from 'react'
import { FormContextConsumer } from './formContext'

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
                    {context =>(
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
                        )}
                    </FormContextConsumer>
                </center>
            </div>
        )
    }
}

export default Form