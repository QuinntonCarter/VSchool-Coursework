import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class FormContextProvider extends Component {
    state = {
        uglyThing: '',
        uglyURL: '',
        uglyDesc: '',
        collected:[ ]
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                ...prevState,
            [name]: value
            }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
            collected: [prevState, ...this.state.collected],
            uglyThing: '',
            uglyURL: '',
            uglyDesc: ''
            }
        })
    }


        render(){
            return(
                <Provider value={{
                    item: this.state.uglyThing, 
                    URL: this.state.uglyURL, 
                    desc: this.state.uglyDesc, 
                    collected: this.state.collected,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit
                    }}>
                    {this.props.children}
                </Provider>
            )
        }
    }

export {FormContextProvider, Consumer as FormContextConsumer}