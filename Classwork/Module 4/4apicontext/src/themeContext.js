import React, {Component} from 'react'
const {Consumer, Provider} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
    // hardcode for debugging
        theme: 'light'
    }

    // method for theme change, or think about exploring a randomize method
    toggleTheme = () => {
    this.setState(prevState => {
        return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }
    })
}

    render(){
        return(
            <Provider value={{theme: this.state.theme}} > 
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }  