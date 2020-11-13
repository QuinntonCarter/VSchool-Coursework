import React, { Component } from 'react'
const { Consumer, Provider } = React.createContext()

class FormContextProvider extends Component {
    state = {
        uglyThings: [ ]
    }

    handleSubmit = (e, thing) => {
        e.preventDefault()
        this.setState({
            uglyThings: thing
        })
        
        console.log(this.state.uglyThings)
        console.log('suh dude')
    }

    render(){
        return(
            <Provider value={{
                uglything: this.state.uglyThings, 
                handleSubmit: this.handleSubmit, 
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { FormContextProvider, Consumer as FormContextConsumer }