import React, { Component } from 'react'
const { Consumer, Provider } = React.createContext()

class FormContextProvider extends Component {
    state = {
        uglyThings: [ ]
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState=> ({
            uglyThing: [
                prevState, ...this.state.uglyThings
            ]
        })
        )
        console.log(this.state.uglyThings)
    }
    

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <Provider value={{
                uglything: this.state.uglyThings, 
                handleSubmit: this.handleSubmit, 
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { FormContextProvider, Consumer as FormContextConsumer }