import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: {}
    }

    // how to change theme if keyword is detected..?


    // reads current forecast from API
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=5ae7b3c76c2e696e51c9f8585a68c324")
        .then(response => response.json())
        .then(data => {
            this.setState({
                theme: data?.weather?.[0]?.description
            })
        })
    }

    render(){
        return(
        <div>
            <Provider value={{theme: this.state.theme}}>
                {this.props.children}
            </Provider>
        </div>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }