import React, { Component } from 'react'
import { FormContextConsumer } from './formContext'

class Form extends Component {
    state = {
        uglyThing: '',
        uglyURL: '',
        uglyDesc: ''
    }
    
    render(){
        return(
            <div>
                <center>
                    <FormContextConsumer>
                    {context =>(
                        <form onSubmit={context.handleSubmit}>
                        <div className='formdiv'>
                            <input placeholder='Ugly thing' type='text' name='uglyThing' value={this.state.uglyThing} onChange={context.handleChange}/>
                            <input placeholder='Img URL' type='img' name='uglyURL' value={this.state.uglyURL} onChange={context.handleChange}/>
                            <br/>
                            <textarea placeholder='Brief description' name='uglyDesc' value={this.state.uglyDesc} onChange={context.handleChange}/>
                            <br/>
                            <button> Add to Collection </button>
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