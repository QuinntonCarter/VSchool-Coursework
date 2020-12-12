import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: 'sunny'
    }

    render(){
        return(
            <Provider value={{theme: this.state.theme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }